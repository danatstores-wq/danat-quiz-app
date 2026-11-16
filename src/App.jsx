import React, { useState, useEffect, useRef } from 'react';
import { startNativeBanner, showRewardedAd } from './services/admob';
import BubbleShooter from './BubbleShooter';
import Backgammon from './Backgammon';
import {
  ShieldCheck, Check, Tv, X, Settings, Clock, Lock,
  Play, BarChart2, Download, LogIn, UserPlus, LogOut, Coins, Volume2, VolumeX, Eye, EyeOff, Home, Gift, User
} from 'lucide-react';

// Firebase Imports
import { auth, db } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signInAnonymously
} from 'firebase/auth';
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  increment,
  collection,
  getDocs,
  query,
  where,
  onSnapshot,
  runTransaction,
  serverTimestamp,
} from 'firebase/firestore';

// --- LocalStorage Storage Keys ---
const QUIZ_INDEX_KEY = 'danat_quiz_current_index';
const QUESTIONS_CACHE_KEY = 'danat_quiz_questions_cache_v1';
const QUESTIONS_CACHE_TTL = 7 * 24 * 60 * 60 * 1000; // Questions rarely change; cache for 7 days per device.
const REWARD_API_URL = 'https://danat-quiz-api.danatcoin.workers.dev';

async function callTrustedApi(user, path, body = {}) {
  if (!user?.uid) throw new Error('AUTH_REQUIRED');
  const token = await user.getIdToken();
  const response = await fetch(`${REWARD_API_URL}${path}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(data.error || 'TRUSTED_API_FAILED');
    error.status = response.status;
    error.data = data;
    throw error;
  }
  return data;
}

// --- Sample Initial Questions (Fallback) ---
const INITIAL_QUESTIONS = [
  {
    id: "q1",
    question: {
      en: "What is the capital of Saudi Arabia?",
      ar: "ما هي عاصمة المملكة العربية السعودية؟",
      fr: "Quelle est la capitale de l'Arabie Saoudite ?"
    },
    options: {
      en: ["Jeddah", "Riyadh", "Dammam", "Mecca"],
      ar: ["جدة", "الرياض", "الدمام", "مكة المكرمة"],
      fr: ["Djeddah", "Riyad", "Dammam", "La Mecque"]
    },
    correctAnswer: {
      en: "Riyadh",
      ar: "الرياض",
      fr: "Riyad"
    },
    points: 10,
    category: { en: "Geography", ar: "جغرافيا", fr: "Géographie" }
  },
  {
    id: "q2",
    question: {
      en: "What is the main token of Danat network?",
      ar: "ما هي العملة الأساسية لشَبكة Danat Coin؟",
      fr: "Quel est le jeton principal du réseau Danat ?"
    },
    options: {
      en: ["ETH", "USDT", "DNC", "BTC"],
      ar: ["ETH", "USDT", "DNC", "BTC"],
      fr: ["ETH", "USDT", "DNC", "BTC"]
    },
    correctAnswer: {
      en: "DNC",
      ar: "DNC",
      fr: "DNC"
    },
    points: 10,
    category: { en: "Crypto", ar: "كريبتو", fr: "Crypto" }
  },
  {
    id: "q3",
    question: {
      en: "How many pillars of Islam are there?",
      ar: "كم عدد أركان الإسلام؟",
      fr: "Combien y a-t-il de piliers de l'Islam ?"
    },
    options: {
      en: ["4", "5", "6", "7"],
      ar: ["4", "5", "6", "7"],
      fr: ["4", "5", "6", "7"]
    },
    correctAnswer: {
      en: "5",
      ar: "5",
      fr: "5"
    },
    points: 10,
    category: { en: "General Culture", ar: "ثقافة عامة", fr: "Culture Générale" }
  }
];

// --- Localization Dictionary ---
const TRANSLATIONS = {
  'العربية': {
    appName: 'دانات كويز',
    subtitle: 'اختبر معلوماتك .. واربح المكافآت',
    startPlay: 'إبدأ اللعب',
    rewards: 'المكافآت',
    leaderboard: 'لوحة المتصدرين',
    profile: 'ملفي الشخصي',
    statistics: 'إحصائيات',
    dncBalance: 'رصيد DNC',
    points: 'النقاط الحالية',
    lives: 'الأرواح',
    settings: 'الإعدادات',
    logout: 'خروج',
    adminPanel: 'لوحة الإدارة',
    close: 'إغلاق',
    nextQuestion: 'السؤال التالي ➡️',
    confirmAnswer: 'تأكيد الإجابة',
    connectWallet: 'ربط المحفظة (WalletConnect)',
    walletConnected: 'المحفظة متصلة',
    gamesPlayed: 'عدد الألعاب',
    pointsEarned: 'النقاط المكتسبة',
    levelLabel: 'المستوى',
    emptyLeaderboard: 'لا يوجد لاعبون بعد',
    watchForLife: '📺 شاهد فيديو لحياة إضافية (+1 ❤️)',
    watchForPoints: '📺 شاهد فيديو لـ 10 نقاط (+10 🪙)',
    rewardPanelTitle: 'شاهد فيديو للحصول على مكافأة إضافية',
    lifeRewardLabel: 'حياة إضافية',
    pointsRewardLabel: 'متوقف مؤقتاً (سياسة DNC)',
    outOfLivesTitle: 'انتهت الأرواح! 💔',
    outOfLivesDesc: 'شاهد فيديو إعلاني للحصول على حياة إضافية ومتابعة اللعب.',
    adsWatched: 'الإعلانات المشاهدة',
    timedBonusTitle: 'مكافأة كل 3 ساعات ⏳',
    timedBonusDesc: 'احصل على 5 أرواح مجانية كل 3 ساعات (حد أقصى 10 أرواح في 24 ساعة).',
    claimBonus: 'استلام المكافأة',
    appLanguage: 'لغة التطبيق',
    changeProfilePic: 'تغيير الصورة الشخصية',
    emailLabel: 'البريد الإلكتروني:',
    appLanguageLabel: 'لغة التطبيق:',
    conversionRate: 'معادلة التحويل:',
    watchAdVideoTitle: 'شاهد فيديو إعلاني',
    watchAdVideoDesc: 'واحصل على 10 نقاط إضافية',
    watchBtn: 'مشاهدة',
    topPlayers: 'أفضل اللاعبين',
    rank: 'المركز',
    player: 'اللاعب',
    pts: 'النقاط',
    loading: 'جاري التحميل...',
    redeemReq: 'طلب استبدال',
    connectBtn: 'ربط',
    downloadCsvReport: 'تحميل تقرير اللاعبين الكامل (CSV)',
    adminRedeemNotice: 'مراجعة طلبات استبدال دانات كوين قبل إرسال التوكنز للمحفظة:',
    approved: 'تم الاعتماد',
    pending: 'قيد الانتظار',
    walletLabel: 'المحفظة:',
    approveAndSend: 'اعتماد وإرسال التوكنز',
    milestoneAdTitle: 'إعلان مكافأة كل 10 أسئلة',
    milestoneAdDesc: 'لقد أجبت على 10 أسئلة! شاهد هذا الفيديو القصير للحصول على 10 نقاط (+10 🪙):',
    pleaseWait: 'يرجى الانتظار...',
    seconds: 'ثوانٍ',
    autoRewardNotice: 'اضغط على مشاهدة لبدء الإعلان. تُمنح المكافأة بعد تأكيد اكتمال الإعلان.',
    forcedAdTitle: 'إعلان جوجل الإجباري',
    forcedAdDesc: 'أنهيت 4 مستويات! شاهد إعلاناً اختيارياً للحصول على 50 نقطة إضافية، أو تابع دون مشاهدة إعلان:',
    forcedAdRewardNotice: 'تُمنح النقاط فقط بعد تأكيد AdMob للمكافأة.',
    connectWeb3Title: 'ربط محفظة Web3',
    connectWeb3Desc: 'أدخل عنوان محفظة إيثريوم (MetaMask / Trust Wallet) لاستلام توكن دانات كوين (DNC):',
    confirmConnectBtn: 'تأكيد وتوصيل المحفظة',
    selectAvatarTitle: 'اختر صورتك الشخصية',
    backToHome: 'العودة للرئيسية',
    questionNav: 'السؤال',
    ofNav: 'من',
    loginTitle: 'دانات كويز | Danat Quiz',
    loginSubtitle: 'سجل دخولك أو أنشئ حساباً لحفظ بياناتك في السحابة',
    forgotPasswordLabel: 'البريد الإلكتروني لاستعادة كلمة المرور',
    sendResetLink: 'إرسال رابط الاستعادة',
    backToLogin: 'العودة لتسجيل الدخول',
    fullName: 'الاسم الكامل',
    enterName: 'أدخل اسمك',
    email: 'البريد الإلكتروني',
    password: 'كلمة المرور',
    forgotPasswordQuestion: 'هل نسيت كلمة المرور؟',
    loginBtn: 'تسجيل الدخول',
    signupBtn: 'إنشاء حساب جديد',
    noAccountPrompt: 'ليس لديك حساب؟ أنشئ حساباً الآن',
    hasAccountPrompt: 'لديك حساب بالفعل؟ سجل الدخول'
  },
  'English': {
    appName: 'Danat Quiz',
    subtitle: 'Test your knowledge & win rewards',
    startPlay: 'Start Quiz',
    rewards: 'Rewards',
    leaderboard: 'Leaderboard',
    profile: 'My Profile',
    statistics: 'Statistics',
    dncBalance: 'DNC Balance',
    points: 'Current Points',
    lives: 'Lives',
    settings: 'Settings',
    logout: 'Logout',
    adminPanel: 'Admin Panel',
    close: 'Close',
    nextQuestion: 'Next Question ➡️',
    confirmAnswer: 'Confirm Answer',
    connectWallet: 'Connect Wallet (WalletConnect)',
    walletConnected: 'Wallet Connected',
    gamesPlayed: 'Games Played',
    pointsEarned: 'Points Earned',
    levelLabel: 'Level',
    emptyLeaderboard: 'Empty',
    watchForLife: '📺 Watch Ad for +1 Life (+1 ❤️)',
    watchForPoints: '📺 Watch Ad for +10 Points (+10 🪙)',
    rewardPanelTitle: 'Watch a video for an extra reward',
    lifeRewardLabel: 'Extra life',
    pointsRewardLabel: 'Paused (DNC policy)',
    outOfLivesTitle: 'Out of Lives! 💔',
    outOfLivesDesc: 'Watch a video ad to get an extra life and continue playing.',
    adsWatched: 'Ads Watched',
    timedBonusTitle: '3-Hour Life Bonus ⏳',
    timedBonusDesc: 'Claim 5 free lives every 3 hours (Max cap 10 lives per 24 hours).',
    claimBonus: 'Claim Bonus',
    appLanguage: 'App Language',
    changeProfilePic: 'Change Profile Picture',
    emailLabel: 'Email:',
    appLanguageLabel: 'App Language:',
    conversionRate: 'Conversion Rate:',
    watchAdVideoTitle: 'Watch Ad Video',
    watchAdVideoDesc: 'And get 10 bonus points',
    watchBtn: 'Watch',
    topPlayers: 'Top Players',
    rank: 'Rank',
    player: 'Player',
    pts: 'Points',
    loading: 'Loading...',
    redeemReq: 'Redeem Request',
    connectBtn: 'Connect',
    downloadCsvReport: 'Download Full Players Report (CSV)',
    adminRedeemNotice: 'Review Danat Coin redemption requests before sending tokens:',
    approved: 'Approved',
    pending: 'Pending',
    walletLabel: 'Wallet:',
    approveAndSend: 'Approve & Send Tokens',
    milestoneAdTitle: '10-Questions Milestone Ad',
    milestoneAdDesc: 'You answered 10 questions! Watch this short video to earn 10 points (+10 🪙):',
    pleaseWait: 'Please wait...',
    seconds: 'seconds',
    autoRewardNotice: 'Tap Watch to start the ad. The reward is granted only after the ad confirms completion.',
    forcedAdTitle: 'Forced Google Ad',
    forcedAdDesc: 'You finished 4 levels! Watch an optional ad to earn 50 bonus points, or continue without watching:',
    forcedAdRewardNotice: 'Points are granted only after AdMob confirms the reward.',
    connectWeb3Title: 'Connect Web3 Wallet',
    connectWeb3Desc: 'Enter Ethereum wallet address (MetaMask / Trust Wallet) to receive Danat Coin (DNC):',
    confirmConnectBtn: 'Confirm & Connect Wallet',
    selectAvatarTitle: 'Select Your Avatar',
    backToHome: 'Back to Home',
    questionNav: 'Question',
    ofNav: 'of',
    loginTitle: 'Danat Quiz',
    loginSubtitle: 'Log in or create an account to save your data in the cloud',
    forgotPasswordLabel: 'Email to reset password',
    sendResetLink: 'Send Reset Link',
    backToLogin: 'Back to Login',
    fullName: 'Full Name',
    enterName: 'Enter your name',
    email: 'Email',
    password: 'Password',
    forgotPasswordQuestion: 'Forgot password?',
    loginBtn: 'Login',
    signupBtn: 'Create New Account',
    noAccountPrompt: "Don't have an account? Create one now",
    hasAccountPrompt: 'Already have an account? Login'
  },
  'Français': {
    appName: "Danat Quiz",
    subtitle: "Testez vos connaissances et gagnez des récompenses",
    startPlay: "Commencer le quiz",
    rewards: "Récompenses",
    leaderboard: "Classement",
    profile: "Mon Profil",
    statistics: "Statistiques",
    dncBalance: "Solde DNC",
    points: "Points Actuels",
    lives: "Vies",
    settings: "Paramètres",
    logout: "Déconnexion",
    adminPanel: "Panneau d'administration",
    close: "Fermer",
    nextQuestion: "Question Suivante ➡️",
    confirmAnswer: "Confirmer la réponse",
    connectWallet: "Connecter le portefeuille (WalletConnect)",
    walletConnected: "Portefeuille connecté",
    gamesPlayed: "Parties jouées",
    pointsEarned: "Points gagnés",
    levelLabel: "Niveau",
    emptyLeaderboard: "Aucun joueur pour le moment",
    watchForLife: "📺 Regarder une pub pour +1 Vie (+1 ❤️)",
    watchForPoints: "📺 Regarder une pub pour +10 Points (+10 🪙)",
    rewardPanelTitle: "Regardez une vidéo pour une récompense",
    lifeRewardLabel: "Vie supplémentaire",
    pointsRewardLabel: "Suspendu (règle DNC)",
    outOfLivesTitle: "Plus de vies ! 💔",
    outOfLivesDesc: "Regardez une vidéo publicitaire pour obtenir une vie supplémentaire et continuer à jouer.",
    adsWatched: "Publicités regardées",
    timedBonusTitle: "Bonus de vie toutes les 3 heures ⏳",
    timedBonusDesc: "Réclamez 5 vies gratuites toutes les 3 heures (Limite max 10 vies par 24h).",
    claimBonus: "Réclamer le bonus",
    appLanguage: "Langue de l'application",
    changeProfilePic: "Changer la photo de profil",
    emailLabel: "E-mail :",
    appLanguageLabel: "Langue de l'application :",
    conversionRate: "Taux de conversion :",
    watchAdVideoTitle: "Regarder une vidéo publicitaire",
    watchAdVideoDesc: "Et obtenez 10 points bonus",
    watchBtn: "Regarder",
    topPlayers: "Meilleurs Joueurs",
    rank: "Rang",
    player: "Joueur",
    pts: "Points",
    loading: "Chargement...",
    redeemReq: "Demande d'échange",
    connectBtn: "Connecter",
    downloadCsvReport: "Télécharger le rapport complet des joueurs (CSV)",
    adminRedeemNotice: "Examinez les demandes d'échange de Danat Coin avant d'envoyer des jetons :",
    approved: "Approuvé",
    pending: "En attente",
    walletLabel: "Portefeuille :",
    approveAndSend: "Approuver et envoyer les jetons",
    milestoneAdTitle: "Publicité d'étape tous les 10 questions",
    milestoneAdDesc: "Vous avez répondu à 10 questions ! Regardez cette courte vidéo pour gagner 10 points (+10 🪙) :",
    pleaseWait: "Veuillez patienter...",
    seconds: "secondes",
    autoRewardNotice: "Appuyez sur Regarder pour lancer la publicité. La récompense est accordée uniquement après confirmation de sa fin.",
    forcedAdTitle: "Publicité Google obligatoire",
    forcedAdDesc: "Vous avez terminé 4 niveaux ! Regardez une publicité facultative pour gagner 50 points bonus, ou continuez sans publicité :",
    forcedAdRewardNotice: "Les points sont accordés uniquement après confirmation de la récompense par AdMob.",
    connectWeb3Title: "Connecter le portefeuille Web3",
    connectWeb3Desc: "Entrez l'adresse de votre portefeuille Ethereum (MetaMask / Trust Wallet) pour recevoir Danat Coin (DNC) :",
    confirmConnectBtn: "Confirmer et connecter le portefeuille",
    selectAvatarTitle: "Choisissez votre avatar",
    backToHome: "Retour à l'accueil",
    questionNav: "Question",
    ofNav: "sur",
    loginTitle: "Danat Quiz",
    loginSubtitle: "Connectez-vous ou créez un compte pour enregistrer vos données dans le cloud",
    forgotPasswordLabel: "E-mail pour réinitialiser le mot de passe",
    sendResetLink: "Envoyer le lien de réinitialisation",
    backToLogin: "Retour à la connexion",
    fullName: "Nom complet",
    enterName: "Entrez votre nom",
    email: "E-mail",
    password: "Mot de passe",
    forgotPasswordQuestion: "Mot de passe oublié ?",
    loginBtn: "Se connecter",
    signupBtn: "Créer un nouveau compte",
    noAccountPrompt: "Vous n'avez pas de compte ? Créez-en un maintenant",
    hasAccountPrompt: "Vous avez déjà un compte ? Connectez-vous"
  }
};



const create2048Board = () => {
  const board = Array(16).fill(0);
  const addTile = (cells) => {
    const empty = cells.map((v, i) => v === 0 ? i : -1).filter(i => i >= 0);
    if (!empty.length) return cells;
    const next = [...cells];
    next[empty[Math.floor(Math.random() * empty.length)]] = Math.random() < 0.9 ? 2 : 4;
    return next;
  };
  return addTile(addTile(board));
};

const slide2048 = (board, direction) => {
  const next = [...board];
  const lines = [];
  for (let n = 0; n < 4; n++) {
    const ids = direction === 'left' ? [0,1,2,3].map(c => n*4+c)
      : direction === 'right' ? [3,2,1,0].map(c => n*4+c)
      : direction === 'up' ? [0,1,2,3].map(r => r*4+n)
      : [3,2,1,0].map(r => r*4+n);
    lines.push(ids);
  }
  let gained = 0;
  lines.forEach(ids => {
    const values = ids.map(i => board[i]).filter(Boolean);
    const merged = [];
    for (let i = 0; i < values.length; i++) {
      if (values[i] === values[i+1]) {
        merged.push(values[i] * 2); gained += values[i] * 2; i++;
      } else merged.push(values[i]);
    }
    ids.forEach((id, i) => { next[id] = merged[i] || 0; });
  });
  return { board: next, gained, changed: next.some((v, i) => v !== board[i]) };
};

function Game2048({ onBack, onAdComplete, language = 'English' }) {
  const tr = (en, fr, ar) => language === 'العربية' ? ar : language === 'Français' ? fr : en;
  const [board, setBoard] = useState(create2048Board);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(() => Number(localStorage.getItem('danat_2048_best') || 0));
  const [previous, setPrevious] = useState(null);
  const [won, setWon] = useState(false);
  const [over, setOver] = useState(false);
  const [adCountdown, setAdCountdown] = useState(5);
  const touchStart = useRef(null);

  const handleBoardTouchStart = (event) => {
    const touch = event.touches[0];
    if (touch) touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleBoardTouchEnd = (event) => {
    if (!touchStart.current || !event.changedTouches[0]) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - touchStart.current.x;
    const dy = touch.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 24) return;
    if (Math.abs(dx) > Math.abs(dy)) move(dx > 0 ? 'right' : 'left');
    else move(dy > 0 ? 'down' : 'up');
  };

  const move = (direction) => {
    if (over) return;
    const result = slide2048(board, direction);
    if (!result.changed) return;
    playGameMoveSound(result.gained > 0 ? 'merge' : 'move');
    const withTile = [...result.board];
    const empty = withTile.map((v, i) => v === 0 ? i : -1).filter(i => i >= 0);
    if (empty.length) withTile[empty[Math.floor(Math.random() * empty.length)]] = Math.random() < 0.9 ? 2 : 4;
    setPrevious({ board, score });
    setBoard(withTile);
    const nextScore = score + result.gained;
    setScore(nextScore);
    if (nextScore > best) {
      setBest(nextScore);
      localStorage.setItem('danat_2048_best', String(nextScore));
    }
    if (!won && withTile.includes(2048)) setWon(true);
    const canMove = withTile.some(v => v === 0) || ['left','right','up','down'].some(d => slide2048(withTile, d).changed);
    setOver(!canMove);
  };

  useEffect(() => {
    if (!over) return undefined;

    let remaining = 5;
    setAdCountdown(remaining);
    const interval = setInterval(() => {
      remaining -= 1;
      setAdCountdown(remaining);
      if (remaining <= 0) {
        clearInterval(interval);
        onAdComplete?.();
        onBack();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [over, onAdComplete, onBack]);

  useEffect(() => {
    const onKey = (event) => {
      const map = { ArrowLeft: 'left', ArrowRight: 'right', ArrowUp: 'up', ArrowDown: 'down' };
      if (map[event.key]) { event.preventDefault(); move(map[event.key]); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const restart = () => { setBoard(create2048Board()); setScore(0); setPrevious(null); setWon(false); setOver(false); };
  const tileStyle = (value) => {
    const styles = {
      0: 'bg-[#211a38] border border-white/5 text-transparent',
      2: 'bg-[#eee7dc] text-[#443b52]', 4: 'bg-[#ead7b6] text-[#443b52]',
      8: 'bg-[#f3b46b] text-[#fffaf2]', 16: 'bg-[#f29a55] text-white',
      32: 'bg-[#ed784f] text-white', 64: 'bg-[#e85c42] text-white',
      128: 'bg-[#e8c85d] text-white', 256: 'bg-[#e5bd43] text-white',
      512: 'bg-[#dcae2e] text-white', 1024: 'bg-[#c99520] text-white',
      2048: 'bg-gradient-to-br from-yellow-200 via-amber-400 to-yellow-600 text-[#39250b] shadow-[0_0_22px_rgba(251,191,36,.65)]'
    };
    return styles[value] || 'bg-[#8f6ac4] text-white';
  };

  return (
    <div className="mx-auto flex w-full max-w-[520px] flex-col gap-4 pb-5">
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="rounded-xl border border-amber-300/40 bg-[#211735] px-4 py-2 text-sm font-bold text-amber-200">{`← ${tr('Back', 'Retour', 'رجوع')}`}</button>
        <div className="text-right">
          <div className="text-xs font-bold uppercase tracking-[.28em] text-amber-300">Danat Arcade</div>
          <h2 className="text-3xl font-black tracking-tight text-white">2048</h2>
        </div>
      </div>
      <div className="rounded-[28px] border border-amber-300/35 bg-gradient-to-br from-[#2b1b49] via-[#1b1630] to-[#11182f] p-4 shadow-[0_18px_45px_rgba(0,0,0,.4)] sm:p-6">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <div className="text-xs font-semibold text-purple-200">{tr('Join the tiles. Reach', 'Fusionnez les tuiles. Atteignez', 'ادمج المربعات للوصول إلى')}</div>
            <div className="text-2xl font-black text-amber-300">2048 <span className="text-white">✦</span></div>
          </div>
          <div className="flex gap-2 text-center">
            <div className="min-w-[72px] rounded-xl border border-white/10 bg-black/25 px-3 py-2">
              <div className="text-[10px] font-bold uppercase tracking-wider text-purple-200">Score</div>
              <div className="text-xl font-black text-white">{score}</div>
            </div>
            <div className="min-w-[72px] rounded-xl border border-amber-300/30 bg-amber-400/10 px-3 py-2">
              <div className="text-[10px] font-bold uppercase tracking-wider text-amber-200">Best</div>
              <div className="text-xl font-black text-amber-300">{best}</div>
            </div>
          </div>
        </div>
        <div
          className="rounded-2xl border border-white/10 bg-[#100d20] p-2.5 shadow-inner sm:p-3 touch-none select-none"
          onTouchStart={handleBoardTouchStart}
          onTouchEnd={handleBoardTouchEnd}
          onTouchCancel={() => { touchStart.current = null; }}
          aria-label={tr('2048 game board. Swipe in any direction to move the tiles.', 'Plateau 2048. Faites glisser dans n’importe quelle direction pour déplacer les tuiles.', 'لوحة لعبة 2048. اسحب في أي اتجاه لتحريك المربعات.')}
        >
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {board.map((value, index) => (
              <div key={index} className={`flex aspect-square items-center justify-center rounded-xl text-2xl font-black shadow-sm transition-all duration-100 sm:rounded-2xl sm:text-3xl ${tileStyle(value)} `}>
                {value || ''}
              </div>
            ))}
          </div>
        </div>
        {won && <div className="mt-4 rounded-xl border border-amber-300/50 bg-amber-300/10 p-3 text-center font-black text-amber-200">✨ You reached 2048! Keep playing or start a new game.</div>}
        {over && <div className="mt-4 rounded-xl border border-rose-300/40 bg-rose-500/10 p-3 text-center font-black text-rose-200">No more moves — game over.</div>}
        <div className="mt-4 flex gap-2">
          <button onClick={restart} className="flex-1 rounded-xl bg-gradient-to-b from-yellow-200 to-amber-500 py-3 font-black text-[#211735] shadow-lg">↻ New Game</button>
          <button onClick={() => { if (previous) { setBoard(previous.board); setScore(previous.score); setPrevious(null); setOver(false); } }} disabled={!previous} className="flex-1 rounded-xl border border-amber-300/40 bg-white/5 py-3 font-bold text-amber-100 disabled:opacity-35">↶ Undo</button>
        </div>
      </div>
      <p className="text-center text-xs text-purple-200">{tr('Swipe the board up, down, left, or right to move the tiles. On desktop, use your keyboard arrow keys. Combine matching numbers to reach 2048.', 'Faites glisser le plateau vers le haut, le bas, la gauche ou la droite pour déplacer les tuiles. Sur ordinateur, utilisez les touches fléchées du clavier. Fusionnez les mêmes nombres pour atteindre 2048.', 'اسحب اللوحة إلى الأعلى أو الأسفل أو اليمين أو اليسار لتحريك المربعات. على الكمبيوتر، استخدم مفاتيح الأسهم في لوحة المفاتيح. ادمج الأرقام المتطابقة للوصول إلى 2048.')}</p>
      {over && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-6 backdrop-blur-md">
          <div className="w-full max-w-sm rounded-3xl border-2 border-amber-400 bg-[#240a47] p-7 text-center shadow-[0_0_50px_rgba(234,179,8,0.35)]">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-amber-300 bg-amber-400/15 text-amber-300">
              <Tv className="h-8 w-8 animate-pulse" />
            </div>
            <div className="mb-2 text-xs font-black uppercase tracking-[.3em] text-amber-300">Advertisement</div>
            <h3 className="text-xl font-black text-white">Thanks for playing!</h3>
            <p className="mt-2 text-sm text-purple-200">Your next game will be ready in a moment.</p>
            <div className="mt-5 rounded-2xl border border-purple-300/30 bg-[#0d031f] py-4 text-lg font-black text-yellow-300">
              Ad break ends in {adCountdown}s
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


const MATCH3_CANDIES = [
  { file: 'banana.png', name: 'Banana', glow: 'shadow-yellow-300/35' },
  { file: 'watermelon.png', name: 'Watermelon', glow: 'shadow-rose-300/35' },
  { file: 'strawberry.png', name: 'Strawberry', glow: 'shadow-red-300/35' },
  { file: 'apple.png', name: 'Apple', glow: 'shadow-red-300/35' },
  { file: 'mango.png', name: 'Mango', glow: 'shadow-orange-300/35' }
];

const MATCH3_LEVELS = [
  { id: 'easy', name: 'Easy', subtitle: 'Warm up', colors: 5, moves: 40, target: 3000, stars: '⭐' },
  { id: 'medium', name: 'Medium', subtitle: 'More fruit, fewer moves', colors: 5, moves: 32, target: 6000, stars: '⭐⭐' },
  { id: 'hard', name: 'Hard', subtitle: 'For fruit masters', colors: 5, moves: 25, target: 10000, stars: '⭐⭐⭐' }
];

function Match3Gem({ gem, selected }) {
  const item = MATCH3_CANDIES[gem];
  if (!item) return null;
  return (
    <span
      role="img"
      aria-label={item.name}
      className={`flex h-full w-full select-none items-center justify-center transition-transform duration-150 ${selected ? 'scale-90' : 'hover:scale-110'}`}
    >
      <img
        src={`${import.meta.env.BASE_URL}images/match3/${item.file}`}
        alt={item.name}
        draggable="false"
        className="h-[88%] w-[88%] select-none object-contain drop-shadow-[0_5px_4px_rgba(0,0,0,.5)]"
        style={{ filter: 'saturate(1.08) drop-shadow(0 0 5px rgba(255,255,255,.12))' }}
      />
    </span>
  );
}

const hasPossibleMatch3Move = (board, colorCount = MATCH3_CANDIES.length) => {
  for (let index = 0; index < 64; index++) {
    const neighbors = [];
    if (index % 8 < 7) neighbors.push(index + 1);
    if (index < 56) neighbors.push(index + 8);
    for (const neighbor of neighbors) {
      const swapped = [...board];
      [swapped[index], swapped[neighbor]] = [swapped[neighbor], swapped[index]];
      if (findMatch3Matches(swapped).size) return true;
    }
  }
  return false;
};

// Start with a clean board (no automatic matches) and guarantee at least one valid move.
const createMatch3Board = (colorCount = 5) => {
  for (let attempt = 0; attempt < 100; attempt++) {
    const board = Array(64).fill(null);
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const choices = MATCH3_CANDIES.slice(0, colorCount).map((_, index) => index).filter((candy) =>
          !(col >= 2 && board[row * 8 + col - 1] === candy && board[row * 8 + col - 2] === candy) &&
          !(row >= 2 && board[(row - 1) * 8 + col] === candy && board[(row - 2) * 8 + col] === candy)
        );
        board[row * 8 + col] = choices[Math.floor(Math.random() * choices.length)];
      }
    }
    if (hasPossibleMatch3Move(board, colorCount)) return board;
  }
  // Extremely unlikely fallback: a simple board with an obvious horizontal match after one swap.
  return [
    0,1,0,2,3,4,1,2,
    1,0,2,3,4,1,2,3,
    2,3,4,1,2,3,4,0,
    3,4,1,2,3,4,0,1,
    4,1,2,3,4,0,1,2,
    0,2,3,4,1,2,3,4,
    1,3,4,0,2,3,4,1,
    2,4,0,1,3,4,1,2
  ];
};

const playQuizCelebrationSound = () => {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const context = new AudioContextClass();
    const now = context.currentTime;
    const master = context.createGain();
    master.gain.setValueAtTime(0.0001, now);
    master.gain.exponentialRampToValueAtTime(0.32, now + 0.04);
    master.gain.setValueAtTime(0.26, now + 1.05);
    master.gain.exponentialRampToValueAtTime(0.0001, now + 1.45);
    master.connect(context.destination);

    // Short, layered noise bursts create a local applause effect.
    const length = Math.floor(context.sampleRate * 1.5);
    const noiseBuffer = context.createBuffer(1, length, context.sampleRate);
    const samples = noiseBuffer.getChannelData(0);
    for (let i = 0; i < length; i++) samples[i] = (Math.random() * 2 - 1) * (Math.random() > 0.52 ? 1 : 0.25);
    for (let clap = 0; clap < 18; clap++) {
      const source = context.createBufferSource();
      const filter = context.createBiquadFilter();
      const volume = context.createGain();
      source.buffer = noiseBuffer;
      source.playbackRate.value = 0.85 + Math.random() * 0.5;
      filter.type = 'highpass';
      filter.frequency.value = 850 + Math.random() * 1700;
      const start = now + Math.random() * 0.9;
      volume.gain.setValueAtTime(0.0001, start);
      volume.gain.exponentialRampToValueAtTime(0.16 + Math.random() * 0.12, start + 0.006);
      volume.gain.exponentialRampToValueAtTime(0.0001, start + 0.075);
      source.connect(filter);
      filter.connect(volume);
      volume.connect(master);
      source.start(start);
      source.stop(start + 0.08);
    }

    // Rising, soft harmonic tones add a cheerful crowd "woo" accent.
    [523.25, 659.25, 783.99].forEach((frequency, index) => {
      const oscillator = context.createOscillator();
      const toneGain = context.createGain();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(frequency * 0.82, now + 0.08);
      oscillator.frequency.exponentialRampToValueAtTime(frequency * 1.18, now + 0.55);
      toneGain.gain.setValueAtTime(0.0001, now + 0.08);
      toneGain.gain.exponentialRampToValueAtTime(0.045, now + 0.2);
      toneGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);
      oscillator.connect(toneGain);
      toneGain.connect(master);
      oscillator.start(now + 0.08 + index * 0.025);
      oscillator.stop(now + 1.22);
    });
    window.setTimeout(() => context.close().catch(() => {}), 1700);
    if (context.state === 'suspended') context.resume().catch(() => {});
  } catch (error) {
    // Audio is optional; never interrupt quiz answering if the browser blocks it.
  }
};

// Start loading the bomb sound as soon as Match 3 opens, not on the first detonation.
let sharedBombAudio = null;
const preloadBombSound = () => {
  if (typeof window === 'undefined') return null;
  if (!sharedBombAudio) {
    sharedBombAudio = new Audio(`${import.meta.env.BASE_URL}sounds/bomb-explosion.mp3`);
    sharedBombAudio.preload = 'auto';
    sharedBombAudio.volume = 0.85;
  }
  if (sharedBombAudio.readyState === 0) sharedBombAudio.load();
  return sharedBombAudio;
};

// Reuse one audio context for arcade sounds. Mobile browsers (especially iOS
// Safari) may suspend newly-created contexts unless they are resumed directly
// from a real touch/pointer interaction.
let sharedGameAudioContext = null;

const unlockGameAudio = () => {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    if (!sharedGameAudioContext || sharedGameAudioContext.state === 'closed') {
      sharedGameAudioContext = new AudioContextClass();
    }
    if (sharedGameAudioContext.state === 'suspended') {
      sharedGameAudioContext.resume().catch(() => {});
    }
    return sharedGameAudioContext;
  } catch (error) {
    return null;
  }
};

const playGameMoveSound = (kind = 'match') => {
  try {
    if (kind === 'bomb') {
      const audio = preloadBombSound();
      if (!audio) return;
      // Play immediately from the already-preloaded file; don't wait for a fetch here.
      try { audio.currentTime = 0; } catch (error) {}
      const playback = audio.play();
      if (playback && typeof playback.catch === 'function') playback.catch(() => {});
      return;
    }
    const context = unlockGameAudio();
    if (!context) return;

    const playTone = () => {
      if (context.state !== 'running') return;
      const now = context.currentTime;
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(kind === 'merge' ? 660 : 880, now);
      oscillator.frequency.exponentialRampToValueAtTime(kind === 'merge' ? 990 : 1175, now + 0.09);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.16, now + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start(now);
      oscillator.stop(now + 0.19);
      oscillator.onended = () => {
        try { oscillator.disconnect(); gain.disconnect(); } catch (error) {}
      };
    };

    if (context.state === 'running') {
      playTone();
    } else {
      // resume() is invoked synchronously by unlockGameAudio during the tap;
      // schedule the tone as soon as the browser confirms the context is active.
      context.resume().then(playTone).catch(() => {});
    }
  } catch (error) {
    // Sound is optional; never interrupt gameplay if the browser blocks audio.
  }
};

const findMatch3Matches = (board) => {
  const matched = new Set();
  for (let row = 0; row < 8; row++) {
    let run = 1;
    for (let col = 1; col <= 8; col++) {
      const same = col < 8 && board[row * 8 + col] !== null && board[row * 8 + col] === board[row * 8 + col - 1];
      if (same) run++;
      else {
        if (run >= 3) for (let k = col - run; k < col; k++) matched.add(row * 8 + k);
        run = 1;
      }
    }
  }
  for (let col = 0; col < 8; col++) {
    let run = 1;
    for (let row = 1; row <= 8; row++) {
      const same = row < 8 && board[row * 8 + col] !== null && board[row * 8 + col] === board[(row - 1) * 8 + col];
      if (same) run++;
      else {
        if (run >= 3) for (let k = row - run; k < row; k++) matched.add(k * 8 + col);
        run = 1;
      }
    }
  }
  return matched;
};

const getMatch3BombReward = (board) => {
  let reward = null;
  const considerRun = (cells) => {
    if (cells.length >= 5 && (!reward || reward.size < 5)) {
      reward = { size: 5, index: cells[Math.floor(cells.length / 2)] };
    } else if (cells.length === 4 && !reward) {
      reward = { size: 3, index: cells[1] };
    }
  };
  for (let row = 0; row < 8; row++) {
    let run = [];
    for (let col = 0; col <= 8; col++) {
      const value = col < 8 ? board[row * 8 + col] : null;
      if (typeof value === 'number' && (run.length === 0 || value === board[run[0]])) run.push(row * 8 + col);
      else {
        if (run.length >= 4) considerRun(run);
        run = typeof value === 'number' ? [row * 8 + col] : [];
      }
    }
  }
  for (let col = 0; col < 8; col++) {
    let run = [];
    for (let row = 0; row <= 8; row++) {
      const value = row < 8 ? board[row * 8 + col] : null;
      if (typeof value === 'number' && (run.length === 0 || value === board[run[0]])) run.push(row * 8 + col);
      else {
        if (run.length >= 4) considerRun(run);
        run = typeof value === 'number' ? [row * 8 + col] : [];
      }
    }
  }
  return reward;
};

const dropMatch3Board = (cleared, colorCount) => {
  const dropped = Array(64).fill(null);
  for (let col = 0; col < 8; col++) {
    const remaining = [];
    for (let row = 7; row >= 0; row--) {
      const value = cleared[row * 8 + col];
      if (value !== null) remaining.push(value);
    }
    for (let row = 7, k = 0; row >= 0; row--, k++) {
      dropped[row * 8 + col] = k < remaining.length ? remaining[k] : Math.floor(Math.random() * colorCount);
    }
  }
  return dropped;
};

function GameMatch3({ onBack, onAdComplete, language = 'English' }) {
  const tr = (en, fr, ar) => language === 'العربية' ? ar : language === 'Français' ? fr : en;
  useEffect(() => {
    preloadBombSound();
  }, []);
  const [levelId, setLevelId] = useState('easy');
  const isEndless = levelId === 'endless';
  const level = MATCH3_LEVELS.find(item => item.id === levelId) || { id: 'endless', name: 'Endless', subtitle: 'Play without limits', colors: 5, moves: Infinity, target: Infinity, stars: '∞' };
  const [board, setBoard] = useState(() => createMatch3Board(5));
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(40);
  const [busy, setBusy] = useState(false);
  const [over, setOver] = useState(false);
  const [showAd, setShowAd] = useState(false);
  const [adCountdown, setAdCountdown] = useState(5);
  const [adReason, setAdReason] = useState('level');

  useEffect(() => {
    if (!over || isEndless) return undefined;
    setAdReason('level');
    setShowAd(true);
    return undefined;
  }, [over, isEndless]);

  useEffect(() => {
    if (!isEndless || showAd) return undefined;
    const timer = setTimeout(() => { setAdReason('endless'); setShowAd(true); }, 120000);
    return () => clearTimeout(timer);
  }, [isEndless, showAd]);

  useEffect(() => {
    if (!showAd) return undefined;
    let remaining = 5;
    setAdCountdown(remaining);
    const timer = setInterval(() => {
      remaining -= 1;
      setAdCountdown(remaining);
      if (remaining <= 0) {
        clearInterval(timer);
        onAdComplete?.();
        setShowAd(false);
        if (adReason === 'endless') return;
        const nextLevel = levelId === 'easy' ? 'medium' : levelId === 'medium' ? 'hard' : 'endless';
        setLevelId(nextLevel);
        const nextConfig = MATCH3_LEVELS.find(item => item.id === nextLevel);
        setBoard(createMatch3Board(nextConfig?.colors || 7));
        setSelected(null);
        setScore(0);
        setMoves(nextConfig?.moves ?? Infinity);
        setBusy(false);
        setOver(false);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [showAd, adReason, levelId, onAdComplete]);

  const restart = () => {
    setBoard(createMatch3Board(level.colors));
    setSelected(null);
    setScore(0);
    setMoves(level.moves);
    setBusy(false);
    setOver(false);
  };
  const detonateBomb = async (index) => {
    if (busy || over) return;
    const bomb = board[index];
    if (!bomb || bomb.type !== 'bomb') return;
    playGameMoveSound('bomb');
    setBusy(true);
    setSelected(null);
    const targetCount = bomb.size === 'big' ? 5 : 3;
    const row = Math.floor(index / 8);
    const col = index % 8;
    const targets = board
      .map((value, cell) => ({ value, cell, distance: Math.abs(Math.floor(cell / 8) - row) + Math.abs((cell % 8) - col) }))
      .filter(item => item.cell !== index && typeof item.value === 'number')
      .sort((a, b) => a.distance - b.distance || a.cell - b.cell)
      .slice(0, targetCount)
      .map(item => item.cell);
    let cleared = [...board];
    cleared[index] = null;
    targets.forEach(cell => { cleared[cell] = null; });
    setScore(prev => prev + targets.length * 10);
    setBoard(cleared);
    await new Promise(resolve => setTimeout(resolve, 70));
    let working = dropMatch3Board(cleared, level.colors);
    setBoard(working);
    await new Promise(resolve => setTimeout(resolve, 70));

    // Resolve any new matches caused by the blast and award another bomb when appropriate.
    while (true) {
      const matches = findMatch3Matches(working);
      if (!matches.size) break;
      const reward = getMatch3BombReward(working);
      const nextBoard = [...working];
      matches.forEach(cell => { nextBoard[cell] = null; });
      if (reward && matches.has(reward.index)) {
        nextBoard[reward.index] = { type: 'bomb', size: reward.size === 5 ? 'big' : 'small' };
      }
      setScore(prev => prev + matches.size * 10);
      setBoard(nextBoard);
      await new Promise(resolve => setTimeout(resolve, 60));
      working = dropMatch3Board(nextBoard, level.colors);
      setBoard(working);
      await new Promise(resolve => setTimeout(resolve, 60));
    }
    if (!hasPossibleMatch3Move(working, level.colors)) working = createMatch3Board(level.colors);
    setBoard(working);
    setBusy(false);
  };

  const tapCandy = async (index) => {
    if (busy || over) return;
    if (board[index]?.type === 'bomb') {
      await detonateBomb(index);
      return;
    }
    if (selected === null) {
      setSelected(index);
      return;
    }
    if (selected === index) {
      setSelected(null);
      return;
    }
    const distance = Math.abs(selected - index);
    if (!((distance === 1 && Math.floor(selected / 8) === Math.floor(index / 8)) || distance === 8)) {
      setSelected(index);
      return;
    }

    const swapped = [...board];
    [swapped[selected], swapped[index]] = [swapped[index], swapped[selected]];
    const firstMatches = findMatch3Matches(swapped);
    if (!firstMatches.size) {
      // An adjacent swap that makes no match is rejected; return the gems to
      // their original positions and clear the selection.
      setSelected(null);
      return;
    }

    playGameMoveSound('match');
    setBusy(true);
    setSelected(null);
    const nextMoves = isEndless ? moves : moves - 1;
    if (!isEndless) setMoves(nextMoves);
    let working = swapped;
    let gained = 0;

    while (true) {
      const matches = findMatch3Matches(working);
      if (!matches.size) break;
      gained += matches.size * 10;
      const reward = getMatch3BombReward(working);
      const cleared = [...working];
      matches.forEach(cell => { cleared[cell] = null; });
      if (reward && matches.has(reward.index)) {
        cleared[reward.index] = { type: 'bomb', size: reward.size === 5 ? 'big' : 'small' };
      }
      setBoard(cleared);
      setScore(prev => prev + matches.size * 10);
      await new Promise(resolve => setTimeout(resolve, 65));

      working = dropMatch3Board(cleared, level.colors);
      setBoard(working);
      await new Promise(resolve => setTimeout(resolve, 65));
    }

    // A cascade can leave the board with no legal swaps. Refresh it
    // automatically so the player is never trapped on an unplayable board.
    if (!hasPossibleMatch3Move(working, level.colors)) {
      working = createMatch3Board(level.colors);
    }
    setBoard(working);
    setBusy(false);
    if (!isEndless && (nextMoves <= 0 || score + gained >= level.target)) setOver(true);
  };

  return (
    <div className="mx-auto flex w-full max-w-[520px] flex-col gap-4 pb-5">
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="rounded-xl border border-amber-300/40 bg-[#211735] px-4 py-2 text-sm font-bold text-amber-200">{`← ${tr('Back', 'Retour', 'رجوع')}`}</button>
        <div className="text-right">
          <div className="text-xs font-bold uppercase tracking-[.28em] text-amber-300">Danat Arcade</div>
          <h2 className="text-3xl font-black tracking-tight text-white">Match 3</h2>
        </div>
      </div>

      <div className="rounded-[28px] border border-fuchsia-300/40 bg-gradient-to-br from-[#3a145c] via-[#21133f] to-[#101a36] p-3 shadow-[0_18px_45px_rgba(0,0,0,.45)] sm:p-5">
        <div className="mb-4 grid grid-cols-4 gap-2">
          {['easy', 'medium', 'hard', 'endless'].map((id, index) => {
            const option = MATCH3_LEVELS.find(item => item.id === id) || { name: 'Endless' };
            const levelLabel = tr(option.name, id === 'easy' ? 'Facile' : id === 'medium' ? 'Moyen' : id === 'hard' ? 'Difficile' : 'Sans fin', id === 'easy' ? 'سهل' : id === 'medium' ? 'متوسط' : id === 'hard' ? 'صعب' : 'لا نهائي');
            const currentIndex = ['easy', 'medium', 'hard', 'endless'].indexOf(levelId);
            const unlocked = index <= currentIndex;
            const statusLabel = levelId === id ? tr('Current', 'Actuel', 'الحالي') : unlocked ? tr('Unlocked', 'Débloqué', 'مفتوح') : tr('Locked', 'Verrouillé', 'مغلق');
            return <div key={id} className={`rounded-xl border px-1.5 py-2 text-center ${levelId === id ? 'border-amber-300 bg-amber-300/20 text-amber-100' : unlocked ? 'border-white/15 bg-black/20 text-purple-100' : 'border-white/10 bg-black/10 text-purple-300/40'}`}><span className="block text-xs font-black">{levelLabel}</span><span className="mt-0.5 block text-[9px] font-semibold opacity-80">{statusLabel}</span></div>;
          })}
        </div>
        <div className="mb-4 flex items-center justify-between gap-2">
          <div className="rounded-xl border border-white/15 bg-black/25 px-3 py-2 text-center">
            <div className="text-[10px] font-bold uppercase tracking-wider text-fuchsia-200">{tr('Score', 'Score', 'النقاط')}</div>
            <div className="text-xl font-black text-white">{score.toLocaleString()}</div>
          </div>
          <div className="text-center">
            <div className="text-xs font-black uppercase tracking-[.18em] text-fuchsia-200">{tr('Match the fruits', 'Associez les fruits', 'طابق الفواكه')}</div>
            <div className="text-sm font-bold text-white">{isEndless ? tr('No score limit', 'Sans limite de score', 'بدون حد للنقاط') : `${tr('Target', 'Objectif', 'الهدف')}: ${level.target.toLocaleString()}`}</div>
          </div>
          <div className="rounded-xl border border-amber-300/30 bg-amber-400/10 px-3 py-2 text-center">
            <div className="text-[10px] font-bold uppercase tracking-wider text-amber-200">{tr('Moves', 'Coups', 'الحركات')}</div>
            <div className="text-xl font-black text-amber-300">{isEndless ? "∞" : moves}</div>
          </div>
        </div>

        <div onPointerDown={unlockGameAudio} className="grid grid-cols-8 gap-1 rounded-2xl border border-white/15 bg-[#100d20]/90 p-1.5 shadow-inner sm:gap-1.5 sm:p-2">
          {board.map((candy, index) => {
            const item = MATCH3_CANDIES[candy];
            return (
              <button
                key={index}
                type="button"
                onClick={() => tapCandy(index)}
                disabled={busy || over}
                aria-label={`Candy at row ${Math.floor(index / 8) + 1}, column ${(index % 8) + 1}`}
                className={`flex aspect-square min-w-0 items-center justify-center rounded-xl border bg-gradient-to-br from-white/15 to-black/20 transition-[transform,box-shadow,border-color] duration-100 sm:rounded-2xl ${item ? `border-white/35 shadow-lg ${item.glow}` : 'bg-slate-700'} ${selected === index ? 'scale-90 border-4 border-white ring-2 ring-yellow-300 shadow-[0_0_18px_rgba(250,204,21,0.95)]' : 'border-white/20'} ${busy ? 'cursor-wait' : 'active:scale-90'}`}
              >
                {candy?.type === 'bomb' ? (
                  <span className={`relative flex items-center justify-center rounded-full border-2 border-slate-300/80 bg-gradient-to-br from-slate-100 via-slate-700 to-black shadow-[0_0_16px_rgba(251,191,36,.55)] ${candy.size === 'big' ? 'h-[88%] w-[88%]' : 'h-[72%] w-[72%]'} animate-pulse`}>
                    <span className={`font-black leading-none text-amber-300 drop-shadow-[0_0_5px_rgba(251,191,36,.9)] ${candy.size === 'big' ? 'text-2xl' : 'text-lg'}`}>✹</span>
                    <span className="absolute -top-1 right-0 h-2 w-2 rounded-full bg-orange-300 shadow-[0_0_9px_3px_rgba(251,146,60,.9)]" />
                  </span>
                ) : <Match3Gem gem={candy} selected={selected === index} />}
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex gap-2">
          <button onClick={restart} className="flex-1 rounded-xl bg-gradient-to-b from-fuchsia-300 to-purple-500 py-3 font-black text-white shadow-lg">↻ {tr('New Game', 'Nouvelle partie', 'لعبة جديدة')}</button>
          <button onClick={() => setSelected(null)} disabled={selected === null || busy} className="flex-1 rounded-xl border border-fuchsia-300/40 bg-white/5 py-3 font-bold text-fuchsia-100 disabled:opacity-40">{tr('Deselect', 'Désélectionner', 'إلغاء التحديد')}</button>
        </div>
        <p className="mt-3 text-center text-xs text-purple-100">{isEndless ? tr('Endless mode: unlimited moves and no score target. A five-second ad break appears every 2 minutes.', 'Mode sans fin : mouvements illimités et aucun objectif de score. Une pause publicitaire de cinq secondes apparaît toutes les 2 minutes.', 'الوضع اللانهائي: حركات بلا حدود وبدون هدف للنقاط. تظهر استراحة إعلانية لمدة خمس ثوانٍ كل دقيقتين.') : `${tr(level.name, level.id === 'easy' ? 'Facile' : level.id === 'medium' ? 'Moyen' : 'Difficile', level.id === 'easy' ? 'سهل' : level.id === 'medium' ? 'متوسط' : 'صعب')}: ${level.colors} ${tr('fruit types', 'types de fruits', 'أنواع من الفاكهة')} · ${level.moves} ${tr('moves', 'coups', 'حركة')} · ${tr('reach', 'atteignez', 'للوصول إلى')} ${level.target.toLocaleString()} ${tr('points', 'points', 'نقطة')}.`} {tr('Match 4 fruits to create a small bomb (tap it to blast 3 gems), or match 5 to create a big bomb (tap it to blast 5 gems).', 'Alignez 4 fruits pour créer une petite bombe (touchez-la pour faire exploser 3 gemmes), ou alignez-en 5 pour créer une grande bombe (touchez-la pour faire exploser 5 gemmes).', 'طابق 4 حبات فاكهة لإنشاء قنبلة صغيرة (اضغط عليها لتفجير 3 جواهر)، أو طابق 5 لإنشاء قنبلة كبيرة (اضغط عليها لتفجير 5 جواهر).')}</p>
      </div>

      {showAd && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-6 backdrop-blur-md">
          <div className="w-full max-w-sm rounded-3xl border-2 border-fuchsia-400 bg-[#240a47] p-7 text-center shadow-[0_0_50px_rgba(217,70,239,0.35)]">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-fuchsia-300 bg-fuchsia-400/15 text-4xl">💎</div>
            <div className="mb-2 text-xs font-black uppercase tracking-[.3em] text-fuchsia-300">{tr('Advertisement', 'Publicité', 'إعلان')}</div>
            <h3 className="text-xl font-black text-white">{adReason === 'endless' ? tr('Take a short break!', 'Petite pause !', 'استراحة قصيرة!') : tr('Level completed!', 'Niveau terminé !', 'اكتمل المستوى!')}</h3>
            <p className="mt-2 text-sm text-purple-200">{adReason === 'endless' ? `${tr('Endless score', 'Score sans fin', 'نقاط الوضع اللانهائي')}: ${score.toLocaleString()} · ${tr('Your game will resume.', 'Votre partie va reprendre.', 'ستُستأنف لعبتك.')}` : `${tr('Completed', 'Terminé', 'اكتمل')} ${tr(level.name, levelId === 'easy' ? 'Facile' : levelId === 'medium' ? 'Moyen' : 'Difficile', levelId === 'easy' ? 'سهل' : levelId === 'medium' ? 'متوسط' : 'صعب')}! ${tr('Score', 'Score', 'النقاط')}: ${score.toLocaleString()}`}</p>
            <div className="mt-5 rounded-2xl border border-purple-300/30 bg-[#0d031f] py-4 text-lg font-black text-yellow-300">{tr('Ad break ends in', 'La pause publicitaire se termine dans', 'تنتهي الاستراحة الإعلانية خلال')} {adCountdown} {tr('seconds', 'secondes', 'ثوانٍ')}</div>
          </div>
        </div>
      )}
    </div>
  );
}


export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [dncHistory, setDncHistory] = useState([]);
  const [adminPlayers, setAdminPlayers] = useState([]);
  const [adminSearch, setAdminSearch] = useState('');
  const [adminSelectedUid, setAdminSelectedUid] = useState('');
  const [adminAmount, setAdminAmount] = useState('');
  const [adminNote, setAdminNote] = useState('');
  const [adminStatus, setAdminStatus] = useState('');
  const [adminLoading, setAdminLoading] = useState(false);
  const [admobTestDate, setAdmobTestDate] = useState(() => new Date(Date.now() - 86400000).toISOString().slice(0, 10));
  const [admobTestLoading, setAdmobTestLoading] = useState(false);
  const [admobTestResult, setAdmobTestResult] = useState(null);
  const [authMode, setAuthMode] = useState('login');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [authError, setAuthError] = useState('');
  const [authMessage, setAuthMessage] = useState('');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isRewardAdLoading, setIsRewardAdLoading] = useState(false);

  const [activeTab, setActiveTab] = useState('home');

  const [user, setUser] = useState({
    name: 'Guest',
    email: '',
    language: 'English',
    level: 1,
    points: 0,
    dncBalance: 0.0,
    totalGames: 0,
    totalEarnedPoints: 0,
    totalQuestionsAnswered: 0,
    lastSpiritClaimTime: 0,
    dailyClaimedLives: 0,
    lastDailyResetTime: 0,
    livesBalance: 3,
    avatar: 'avatar-man-ghutra.png',
  });


  const isDncAdmin = currentUser?.uid === '4ZOJfbUjq8MYKb0fgOcoQAbEUOl';

  const testAdMobConnection = async () => {
    if (!currentUser) return;
    setAdmobTestLoading(true);
    setAdmobTestResult(null);
    try {
      const token = await currentUser.getIdToken();
      const params = new URLSearchParams({ startDate: admobTestDate, endDate: admobTestDate });
      const response = await fetch(`${REWARD_API_URL}/v1/admin/admob/reconciliation-preview?${params.toString()}`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        const error = new Error(data.error || `HTTP_${response.status}`);
        error.status = response.status;
        error.diagnosticStage = data.diagnosticStage || '';
        throw error;
      }
      setAdmobTestResult({ ok: true, data });
    } catch (error) {
      const message = error.status === 403
        ? 'This account is not authorized in ADMOB_ADMIN_UIDS.'
        : error.status === 401
          ? 'Your login session could not be verified. Please sign out and sign in again.'
          : error.diagnosticStage
            ? `${error.message} (step: ${error.diagnosticStage})`
            : error.message || 'AdMob connection test failed.';
      setAdmobTestResult({ ok: false, message });
    } finally {
      setAdmobTestLoading(false);
    }
  };

  const loadAdminPlayers = async () => {
    if (!isDncAdmin) return;
    setAdminLoading(true);
    setAdminStatus('');
    try {
      const snapshot = await getDocs(collection(db, 'users'));
      const players = snapshot.docs.map((item) => ({
        uid: item.id,
        name: item.data().name || 'Unnamed player',
        email: item.data().email || '',
        dncBalance: Number(item.data().dncBalance || 0)
      })).sort((a, b) => a.name.localeCompare(b.name));
      setAdminPlayers(players);
      setAdminStatus(`Loaded ${players.length} registered accounts.`);
    } catch (error) {
      console.error('Could not load admin player list:', error);
      setAdminStatus('Could not load players. Check administrator Firestore permissions.');
    } finally {
      setAdminLoading(false);
    }
  };

  const submitDncAdjustment = async () => {
    if (!isDncAdmin || !adminSelectedUid) {
      setAdminStatus('Select a player first.');
      return;
    }
    const amount = Number(adminAmount);
    if (!Number.isFinite(amount) || amount === 0) {
      setAdminStatus('Enter a valid non-zero DNC amount. Use a negative value for a correction.');
      return;
    }
    setAdminLoading(true);
    setAdminStatus('');
    try {
      if (Math.abs(amount) > 1000000 || !Number.isSafeInteger(Math.round(amount * 100000000))) {
        throw new Error('Amount must be within 1,000,000 DNC and have at most 8 decimal places.');
      }
      const playerRef = doc(db, 'users', adminSelectedUid);
      const ledgerRef = doc(collection(db, 'dncLedger'));
      const result = await runTransaction(db, async (transaction) => {
        const playerSnapshot = await transaction.get(playerRef);
        if (!playerSnapshot.exists()) {
          throw new Error('The selected player account no longer exists.');
        }
        const currentBalance = Number(playerSnapshot.data().dncBalance ?? 0);
        if (!Number.isFinite(currentBalance) || currentBalance < 0) {
          throw new Error('The stored DNC balance is invalid.');
        }
        const normalizedAmount = Math.round(amount * 100000000) / 100000000;
        const newBalance = Math.round((currentBalance + normalizedAmount) * 100000000) / 100000000;
        if (newBalance < 0) {
          throw new Error('This correction would make the DNC balance negative.');
        }
        transaction.update(playerRef, { dncBalance: newBalance });
        transaction.set(ledgerRef, {
          playerUid: adminSelectedUid,
          amount: normalizedAmount,
          type: normalizedAmount > 0 ? 'manual_credit' : 'manual_adjustment',
          createdAt: serverTimestamp(),
          adminUid: currentUser.uid,
          note: adminNote.trim()
        });
        return newBalance;
      });
      setAdminPlayers((items) => items.map((player) => player.uid === adminSelectedUid
        ? { ...player, dncBalance: result }
        : player));
      setAdminAmount('');
      setAdminNote('');
      setAdminStatus(`Saved successfully. New balance: ${result} DNC.`);
    } catch (error) {
      console.error('DNC adjustment failed:', error);
      setAdminStatus(error?.message || 'The adjustment failed. No balance change was confirmed.');
    } finally {
      setAdminLoading(false);
    }
  };

  const langKey = user.language === 'العربية' ? 'ar' : user.language === 'Français' ? 'fr' : 'en';
  const t = TRANSLATIONS[user.language] || TRANSLATIONS['English'];

  // Native banner runs only inside Capacitor Android/iOS builds; the website remains ad-free.
  useEffect(() => startNativeBanner(), []);

  const [lives, setLives] = useState(3);
  const [videosWatched, setVideosWatched] = useState(() => {
    return parseInt(localStorage.getItem('videosWatched') || '0', 10);
  });

  const [levelsPlayed, setLevelsPlayed] = useState(0);

  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  // 10-Questions Milestone Ad State

  // Load cached questions immediately; refresh from Firestore only when cache expires.
  const [questions, setQuestions] = useState(() => {
    try {
      const cached = localStorage.getItem(QUESTIONS_CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed.questions) && parsed.questions.length > 0) {
          return parsed.questions;
        }
      }
    } catch (err) {
      console.warn("Question cache could not be read:", err);
    }
    return INITIAL_QUESTIONS;
  });
  
  const [currentQIndex, setCurrentQIndex] = useState(() => {
    const saved = localStorage.getItem(QUIZ_INDEX_KEY);
    const parsed = saved !== null ? parseInt(saved, 10) : 0;
    return !isNaN(parsed) && parsed >= 0 ? parsed : 0;
  });

  // Track total answered questions to fire video ad every 10 answers
  const [questionsAnsweredCounter, setQuestionsAnsweredCounter] = useState(0);

  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showCorrectCelebration, setShowCorrectCelebration] = useState(false);
  const [score, setScore] = useState(0);
  const [loadingQuestions, setLoadingQuestions] = useState(true);

  // Save current question index automatically on change
  useEffect(() => {
    localStorage.setItem(QUIZ_INDEX_KEY, currentQIndex.toString());
  }, [currentQIndex]);

  const availableAvatars = [
    { id: 'avatar-man-ghutra.png' },
    { id: 'avatar-woman-afro.png' },
    { id: 'avatar-woman-hijab.png' },
    { id: 'avatar_kuwaiti.png' },
    { id: 'avatar_boy.png' },
    { id: 'avatar_brunette.png' },
    { id: 'avatar_blonde.png' },
  ];

  // Fixed Asset Path Template Literal
  const assetPath = (filename) => `${import.meta.env.BASE_URL}assets/${filename}`;

  // Questions are cached on this device for 24 hours to avoid downloading the full collection on every app launch.
  useEffect(() => {
    async function fetchFirestoreQuestions() {
      try {
        const cached = localStorage.getItem(QUESTIONS_CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          const cacheIsFresh = Date.now() - parsed.timestamp < QUESTIONS_CACHE_TTL;
          if (cacheIsFresh && Array.isArray(parsed.questions) && parsed.questions.length > 0) {
            setQuestions(parsed.questions);
            setCurrentQIndex((prev) => (prev < parsed.questions.length ? prev : 0));
            setLoadingQuestions(false);
            return;
          }
        }

        const querySnapshot = await getDocs(collection(db, "questions"));
        const docsList = querySnapshot.docs.map((docSnap) => ({
          id: docSnap.id,
          ...docSnap.data()
        }));

        if (docsList.length > 0) {
          setQuestions(docsList);
          setCurrentQIndex((prev) => (prev < docsList.length ? prev : 0));
          localStorage.setItem(QUESTIONS_CACHE_KEY, JSON.stringify({
            timestamp: Date.now(),
            questions: docsList
          }));
        }
      } catch (err) {
        console.error("Firestore questions fetch failed, cached/fallback questions used:", err);
      } finally {
        setLoadingQuestions(false);
      }
    }
    fetchFirestoreQuestions();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        setCurrentUser(authUser);
        const userDocRef = doc(db, "users", authUser.uid);
        const userSnap = await getDoc(userDocRef);
        if (userSnap.exists()) {
          const data = userSnap.data();
          const savedLives = Number.isInteger(data.livesBalance) && data.livesBalance >= 0 ? data.livesBalance : 3;
          setLives(savedLives);
          const answeredCount = data.totalQuestionsAnswered || 0;
          const calculatedLevel = Math.floor(answeredCount / 50) + 1;

          setUser(prev => ({
            ...prev,
            name: data.name || authUser.email?.split('@')[0] || 'Guest',
            email: authUser.email,
            points: data.points ?? data.spirits ?? prev.points,
            dncBalance: data.dncBalance ?? prev.dncBalance,
            level: data.level ?? calculatedLevel,
            totalGames: data.totalGames ?? prev.totalGames,
            totalEarnedPoints: data.totalEarnedPoints ?? data.totalEarnedSpirits ?? prev.totalEarnedPoints,
            totalQuestionsAnswered: answeredCount,
            lastSpiritClaimTime: data.lastSpiritClaimTime || 0,
            dailyClaimedLives: data.dailyClaimedLives || 0,
            lastDailyResetTime: data.lastDailyResetTime || 0,
            livesBalance: savedLives,
            avatar: data.avatar ?? prev.avatar,
            language: data.language ?? prev.language,
          }));
        }
      } else {
        setCurrentUser(null);
        setLives(3);
        setUser(prev => ({
          ...prev,
          name: 'Guest',
          email: '',
          points: 0,
          dncBalance: 0,
          level: 1,
          totalGames: 0,
          totalEarnedPoints: 0,
          totalQuestionsAnswered: 0,
          livesBalance: 3,
          avatar: 'avatar-man-ghutra.png'
        }));
      }
    });
    return () => unsubscribe();
  }, []);

  // Load only the signed-in player's own DNC credit history.
  useEffect(() => {
    if (!currentUser) {
      setDncHistory([]);
      return undefined;
    }

    const ledgerQuery = query(
      collection(db, 'dncLedger'),
      where('playerUid', '==', currentUser.uid)
    );

    const unsubscribe = onSnapshot(
      ledgerQuery,
      (snapshot) => {
        const entries = snapshot.docs.map((entryDoc) => ({
          id: entryDoc.id,
          ...entryDoc.data()
        }));
        entries.sort((a, b) => {
          const dateA = a.createdAt?.toMillis ? a.createdAt.toMillis() : 0;
          const dateB = b.createdAt?.toMillis ? b.createdAt.toMillis() : 0;
          return dateB - dateA;
        });
        setDncHistory(entries.slice(0, 10));
      },
      (error) => {
        console.error('DNC credit history could not be loaded:', error);
        setDncHistory([]);
      }
    );

    return () => unsubscribe();
  }, [currentUser]);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setAuthError('');
    setAuthMessage('');
    try {
      await setPersistence(auth, browserLocalPersistence);
      const userCred = await createUserWithEmailAndPassword(auth, emailInput, passwordInput);
      const uid = userCred.user.uid;

      const initialProfile = {
        name: nameInput || 'لاعب دانات',
        email: emailInput,
        points: 0,
        dncBalance: 0.0,
        level: 1,
        totalGames: 0,
        totalEarnedPoints: 0,
        totalQuestionsAnswered: 0,
        lastSpiritClaimTime: 0,
        dailyClaimedLives: 0,
        lastDailyResetTime: 0,
        livesBalance: 3,
        avatar: 'avatar-man-ghutra.png',
        language: 'English',
        createdAt: new Date().toISOString()
      };

      await setDoc(doc(db, "users", uid), initialProfile);
      setUser(prev => ({ ...prev, ...initialProfile }));
      setEmailInput('');
      setPasswordInput('');
      setNameInput('');
      setShowAuthModal(false);
    } catch (err) {
      setAuthError("فشل إنشاء الحساب: " + err.message);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setAuthError('');
    setAuthMessage('');
    try {
      await setPersistence(auth, browserLocalPersistence);
      await signInWithEmailAndPassword(auth, emailInput, passwordInput);
      setEmailInput('');
      setPasswordInput('');
      setShowAuthModal(false);
    } catch (err) {
      setAuthError("فشل تسجيل الدخول: " + err.message);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setAuthError('');
    setAuthMessage('');
    if (!emailInput) {
      setAuthError('يرجى إدخال بريدك الإلكتروني أولاً.');
      return;
    }
    try {
      await sendPasswordResetEmail(auth, emailInput);
      setAuthMessage('تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.');
    } catch (err) {
      setAuthError("فشل الإرسال: " + err.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setActiveTab('home');
    } catch (err) {
      setAuthError('Sign out failed: ' + err.message);
    }
  };

  const handleLanguageChange = async (newLang) => {
    setUser(prev => ({ ...prev, language: newLang }));
    if (currentUser) {
      await updateDoc(doc(db, "users", currentUser.uid), {
        language: newLang
      });
    }
  };

  // Helper for multi-language question properties
  const getQuestionText = (q) => {
    if (!q) return "";
    if (typeof q.question === 'object' && q.question !== null) {
      return q.question[langKey] || q.question['en'] || q.question['ar'] || q.question['fr'] || "";
    }
    return q.question || "";
  };

  const getQuestionOptions = (q) => {
    if (!q) return [];
    if (typeof q.options === 'object' && !Array.isArray(q.options) && q.options !== null) {
      return q.options[langKey] || q.options['en'] || q.options['ar'] || q.options['fr'] || [];
    }
    return Array.isArray(q.options) ? q.options : [];
  };

  const getQuestionCategory = (q) => {
    if (!q || !q.category) return user.language === 'العربية' ? "عام" : user.language === 'Français' ? "Général" : "General";
    if (typeof q.category === 'object') {
      return q.category[langKey] || q.category['en'] || q.category['ar'] || q.category['fr'] || "";
    }
    return q.category;
  };



  const handleAnswerSubmit = async () => {
    if (selectedOption === null || lives <= 0) return;
    const currentQ = questions[currentQIndex];
    const optionsList = getQuestionOptions(currentQ);
    const selectedText = optionsList[selectedOption];

    let isCorrect = false;
    if (typeof currentQ.correctAnswer === 'object' && currentQ.correctAnswer !== null) {
      const correctLangText = currentQ.correctAnswer[langKey] || currentQ.correctAnswer['en'];
      isCorrect = selectedText === correctLangText || selectedOption === currentQ.correctAnswer;
    } else if (typeof currentQ.correctAnswer === 'number') {
      isCorrect = selectedOption === currentQ.correctAnswer;
    } else {
      isCorrect = selectedText === currentQ.correctAnswer;
    }

    const newAnsweredCount = user.totalQuestionsAnswered + 1;
    const newLevel = Math.floor(newAnsweredCount / 50) + 1;

    // Track answered questions for 10-questions interval ad trigger
    const newSessionCount = questionsAnsweredCounter + 1;
    setQuestionsAnsweredCounter(newSessionCount);

    if (isCorrect) {
      setShowCorrectCelebration(true);
      playQuizCelebrationSound();
      const earned = currentQ.points || 10;
      setScore(prev => prev + earned);
      setUser(prev => ({
        ...prev,
        points: prev.points + earned,
        totalEarnedPoints: prev.totalEarnedPoints + earned,
        totalQuestionsAnswered: newAnsweredCount,
        level: newLevel
      }));

      if (currentUser) {
        await updateDoc(doc(db, "users", currentUser.uid), {
          points: increment(earned),
          totalEarnedPoints: increment(earned),
          totalQuestionsAnswered: increment(1),
          level: newLevel
        });
      }
    } else {
      // Incorrect answer: Deduct 1 life and 5 points penalty (floor at 0)
      const pointPenalty = 5;
      let newLivesBalance = Math.max(0, lives - 1);
      if (currentUser) {
        try {
          const lifeResult = await callTrustedApi(currentUser, '/v1/life-loss');
          newLivesBalance = lifeResult.livesBalance;
        } catch (error) {
          console.warn('Server could not record the life deduction:', error);
          alert(user.language === 'العربية'
            ? 'تعذر الاتصال بالخادم. تحقق من اتصال الإنترنت وحاول مرة أخرى.'
            : user.language === 'Français'
            ? 'Impossible de contacter le serveur. Vérifiez votre connexion et réessayez.'
            : 'Could not reach the secure server. Check your internet connection and try again.');
          return;
        }
      }
      setLives(newLivesBalance);
      setUser(prev => ({
        ...prev,
        livesBalance: newLivesBalance,
        points: Math.max(0, prev.points - pointPenalty),
        totalQuestionsAnswered: newAnsweredCount,
        level: newLevel
      }));

      if (currentUser) {
        await updateDoc(doc(db, "users", currentUser.uid), {
          points: increment(-pointPenalty),
          totalQuestionsAnswered: increment(1),
          level: newLevel
        });
      }
    }
    setIsAnswered(true);

  };

  const handleNextQuestion = async () => {
    setShowCorrectCelebration(false);
    setSelectedOption(null);
    setIsAnswered(false);

    if (currentQIndex + 1 < questions.length) {
      setCurrentQIndex(prev => prev + 1);
    } else {
      const nextLevelCount = levelsPlayed + 1;
      setLevelsPlayed(nextLevelCount);

      const newTotalGames = user.totalGames + 1;
      setUser(prev => ({ ...prev, totalGames: newTotalGames }));

      if (currentUser) {
        await updateDoc(doc(db, "users", currentUser.uid), {
          totalGames: increment(1)
        });
      }

      setCurrentQIndex(0);
      if (nextLevelCount >= 4) {
        setLevelsPlayed(0);
        setActiveTab('home');
      } else {
        setActiveTab('home');
      }
    }
  };



  const incrementVideoCount = () => {
    const newCount = videosWatched + 1;
    setVideosWatched(newCount);
    localStorage.setItem('videosWatched', newCount.toString());
  };

  const handleContinueAsGuest = async () => {
    setAuthError('');
    setAuthMessage('');
    try {
      await setPersistence(auth, browserLocalPersistence);
      const guestCredential = await signInAnonymously(auth);
      setCurrentUser(guestCredential.user);
      setShowAuthModal(false);
    } catch (error) {
      console.error('Anonymous guest sign-in failed:', error);
      setAuthError('Guest play is temporarily unavailable. Please try again.');
    }
  };

  const rewardAdMessage = (kind) => {
    const messages = {
      'العربية': {
        mobileOnly: 'الإعلانات بالمكافآت متاحة فقط داخل تطبيق دانات كويز على الهاتف.',
        unavailable: 'لا يتوفر إعلان للمكافأة حالياً. يرجى المحاولة لاحقاً.',
        pending: 'اكتمل الإعلان. ستُضاف المكافأة بعد التحقق من الخادم.',
        saveFailed: 'انتهى الإعلان، لكن تعذر حفظ المكافأة. يرجى التواصل مع الدعم.',
        lifeEarned: 'حصلت على حياة إضافية! ❤️',
        pointsEarned: 'حصلت على 10 نقاط إضافية! 🪙'
      },
      'Français': {
        mobileOnly: 'Les publicités récompensées sont disponibles uniquement dans l’application mobile Danat Quiz.',
        unavailable: 'Aucune publicité récompensée n’est disponible pour le moment. Réessayez plus tard.',
        saveFailed: 'La publicité est terminée, mais la récompense n’a pas pu être enregistrée. Contactez le support.',
        pending: 'Publicité terminée. Votre récompense sera ajoutée après vérification du serveur.',
        lifeEarned: 'Vous avez gagné 1 vie supplémentaire ! ❤️',
        pointsEarned: 'Vous avez gagné 10 points bonus ! 🪙'
      },
      English: {
        mobileOnly: 'Rewarded ads are available only in the Danat Quiz mobile app.',
        unavailable: 'No rewarded ad is available right now. Please try again later.',
        saveFailed: 'The ad finished, but we could not save your reward. Please contact support.',
        pending: 'Ad completed. Your reward will be added after server verification.',
        lifeEarned: 'You earned 1 Extra Life! ❤️',
        pointsEarned: 'You earned 10 Bonus Points! 🪙'
      }
    };
    return (messages[user.language] || messages.English)[kind];
  };

  // The server grants the extra life only after AdMob SSV verification.
  const handleWatchForLife = async () => {
    if (isRewardAdLoading) return;
    setIsRewardAdLoading(true);

    try {
      if (!currentUser?.uid) throw new Error('AUTH_REQUIRED');
      const rewardSession = await callTrustedApi(currentUser, '/v1/ad-session', { placement: 'life' });
      const reward = await showRewardedAd('life', currentUser.uid, rewardSession.customData);
      if (!reward) {
        alert(rewardAdMessage('unavailable'));
        return;
      }

      // The client callback is not proof. Ask the Worker whether Google's
      // signed callback has been verified and the reward has been committed.
      for (let attempt = 0; attempt < 20; attempt += 1) {
        await new Promise(resolve => setTimeout(resolve, 1500));
        try {
          const status = await callTrustedApi(currentUser, '/v1/ad-status', {
            sessionId: rewardSession.sessionId
          });
          if (status.status === 'completed' && Number.isInteger(status.livesBalance)) {
            setLives(status.livesBalance);
            setUser(prev => ({ ...prev, livesBalance: status.livesBalance }));
            alert(rewardAdMessage('lifeEarned'));
            return;
          }
        } catch (statusError) {
          console.warn('Waiting for verified ad reward:', statusError);
        }
      }
      alert(rewardAdMessage('pending'));
    } catch (error) {
      console.warn('Rewarded life ad was not completed:', error);
      alert(error?.code === 'MOBILE_ONLY' ? rewardAdMessage('mobileOnly') : rewardAdMessage('unavailable'));
    } finally {
      setIsRewardAdLoading(false);
    }
  };



  // Timed free lives are awarded by the trusted server, not the client.
  const handleClaimTimedSpirits = async () => {
    try {
      const result = await callTrustedApi(currentUser, '/v1/timed-lives');
      if (!result.claimed) {
        if (result.reason === 'cooldown') {
          const hoursLeft = (result.retryAfterMs / (60 * 60 * 1000)).toFixed(1);
          alert(user.language === 'العربية'
            ? `يرجى الانتظار ${hoursLeft} ساعة للحصول على الأرواح المجانية القادمة.`
            : user.language === 'Français'
            ? `Veuillez patienter ${hoursLeft} heures avant de réclamer vos prochaines vies gratuites.`
            : `Please wait ${hoursLeft} hours before claiming your next free lives.`);
        } else {
          alert(user.language === 'العربية'
            ? 'وصلت إلى الحد الأقصى للأرواح المجانية خلال 24 ساعة.'
            : user.language === 'Français'
            ? 'Vous avez atteint la limite de vies gratuites sur 24 heures.'
            : 'You reached the free-life limit for this 24-hour period.');
        }
        return;
      }

      setLives(result.livesBalance);
      setUser(prev => ({
        ...prev,
        livesBalance: result.livesBalance,
        lastSpiritClaimTime: result.lastSpiritClaimTime,
        dailyClaimedLives: result.dailyClaimedLives,
        lastDailyResetTime: result.lastDailyResetTime
      }));
      alert(user.language === 'العربية'
        ? `تهانينا! حصلت على ${result.livesGranted} أرواح مجانية.`
        : user.language === 'Français'
        ? `Félicitations ! Vous avez reçu ${result.livesGranted} vies gratuites.`
        : `Congrats! You received ${result.livesGranted} free lives.`);
    } catch (error) {
      console.warn('Timed lives claim failed:', error);
      alert(user.language === 'العربية'
        ? 'تعذر الاتصال بالخادم. حاول مرة أخرى عند توفر الإنترنت.'
        : user.language === 'Français'
        ? 'Impossible de contacter le serveur. Réessayez lorsque vous serez en ligne.'
        : 'Could not reach the secure server. Please try again when online.');
    }
  };

  const handleUpdateAvatar = async (newAvatarId) => {
    setUser(prev => ({ ...prev, avatar: newAvatarId }));
    setShowAvatarModal(false);

    if (currentUser) {
      await updateDoc(doc(db, "users", currentUser.uid), {
        avatar: newAvatarId
      });
    }
  };

  if (showAuthModal) {
    return (
      <div className="min-h-screen bg-[#1a0833] text-white flex items-center justify-center p-4" dir={user.language === 'العربية' ? 'rtl' : 'ltr'}>
        <div className="w-full max-w-sm bg-[#240a47]/90 border border-purple-500/40 rounded-3xl p-6 shadow-2xl space-y-4">
          <div className="text-center space-y-1">
            <h1 className="text-xl font-black text-yellow-400">{t.loginTitle}</h1>
            <p className="text-xs text-slate-300">{t.loginSubtitle}</p>
          </div>

          {authError && (
            <div className="bg-red-500/20 border border-red-500/50 text-red-300 p-3 rounded-xl text-xs text-center font-bold">
              {authError}
            </div>
          )}

          {authMessage && (
            <div className="bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 p-3 rounded-xl text-xs text-center font-bold">
              {authMessage}
            </div>
          )}

          {authMode === 'forgot' ? (
            <form onSubmit={handleForgotPassword} className="space-y-4">
              <div>
                <label className="block text-xs text-slate-300 mb-1">{t.forgotPasswordLabel}</label>
                <input 
                  type="email" 
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="name@example.com"
                  required
                  className="w-full bg-[#0d031f] border border-purple-400/40 rounded-xl px-4 py-3 text-xs text-white focus:border-yellow-400 outline-none"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-black py-3.5 rounded-xl shadow-lg transition text-sm"
              >
                {t.sendResetLink}
              </button>
              <div className="text-center pt-2">
                <button 
                  type="button"
                  onClick={() => { setAuthMode('login'); setAuthError(''); setAuthMessage(''); }}
                  className="text-xs text-yellow-400 font-bold hover:underline"
                >
                  {t.backToLogin}
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={authMode === 'login' ? handleSignIn : handleSignUp} className="space-y-4">
              {authMode === 'signup' && (
                <div>
                  <label className="block text-xs text-slate-300 mb-1">{t.fullName}</label>
                  <input 
                    type="text" 
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    placeholder={t.enterName}
                    required
                    className="w-full bg-[#0d031f] border border-purple-400/40 rounded-xl px-4 py-3 text-xs text-white focus:border-yellow-400 outline-none"
                  />
                </div>
              )}
              <div>
                <label className="block text-xs text-slate-300 mb-1">{t.email}</label>
                <input 
                  type="email" 
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="name@example.com"
                  required
                  className="w-full bg-[#0d031f] border border-purple-400/40 rounded-xl px-4 py-3 text-xs text-white focus:border-yellow-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-300 mb-1">{t.password}</label>
                <input 
                  type={showPassword ? 'text' : 'password'}
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full bg-[#0d031f] border border-purple-400/40 rounded-xl px-4 py-3 pr-12 text-xs text-white focus:border-yellow-400 outline-none"
                />
                <button type="button" onClick={() => setShowPassword(v => !v)} className="mt-[-38px] mr-3 relative float-right text-slate-300 hover:text-yellow-300" aria-label={showPassword ? 'Hide password' : 'Show password'}>
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {authMode === 'login' && (
                <div className="text-left">
                  <button 
                    type="button"
                    onClick={() => { setAuthMode('forgot'); setAuthError(''); setAuthMessage(''); }}
                    className="text-[11px] text-purple-300 hover:text-yellow-400 underline"
                  >
                    {t.forgotPasswordQuestion}
                  </button>
                </div>
              )}

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-black py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-sm"
              >
                {authMode === 'login' ? <LogIn className="w-4 h-4" /> : <UserPlus className="w-4 h-4" />}
                {authMode === 'login' ? t.loginBtn : t.signupBtn}
              </button>
            </form>
          )}

          <button type="button" onClick={handleContinueAsGuest} className="w-full mt-3 py-2.5 rounded-xl border border-purple-300/40 text-slate-200 text-xs font-bold hover:bg-purple-500/10">Continue as Guest</button>

          {authMode !== 'forgot' && (
            <div className="text-center pt-2">
              <button 
                onClick={() => { setAuthMode(authMode === 'login' ? 'signup' : 'login'); setAuthError(''); setAuthMessage(''); }}
                className="text-xs text-yellow-400 font-bold hover:underline"
              >
                {authMode === 'login' ? t.noAccountPrompt : t.hasAccountPrompt}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#071329] text-white font-sans flex justify-center items-center p-0 md:p-4" dir={user.language === 'العربية' ? 'rtl' : 'ltr'}>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(3, 10, 27, 0.28), rgba(3, 10, 27, 0.52)), url(${assetPath("main_background.jpg")})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="w-full max-w-md bg-[#08142d] border-0 md:border-4 md:border-amber-400/50 rounded-none md:rounded-[40px] shadow-[0_0_50px_rgba(147,51,234,0.3)] overflow-hidden min-h-screen md:min-h-[844px] flex flex-col justify-between relative"
      >

        {/* TOP STATUS BAR */}
        <div className="bg-[#120524]/90 px-6 py-2.5 flex justify-between items-center text-xs text-slate-200 border-b border-purple-500/30 z-10">
          <span className="font-bold text-white">9:41</span>
          <div className="flex items-center gap-2">
            <span>📶 🔋</span>
          </div>
        </div>

        {/* MAIN DISPLAY AREA */}
        <div className="flex-1 overflow-y-auto pb-36 px-4 pt-4 relative z-10">

          {/* GLOBAL PLAYER STATS — shown on quiz and inner screens */}
          {activeTab !== 'home' && (
            <div className="w-full bg-[#101a36]/95 rounded-2xl p-3 border border-amber-400/40 flex justify-between items-center shadow-lg mb-4">
              <div className="flex items-center gap-2">
                <div className="bg-rose-950/80 border border-rose-500/50 px-2.5 py-1 rounded-xl flex items-center gap-1 text-xs font-bold text-rose-300">❤️ <span>{lives}</span></div>
                <div className="bg-slate-950/80 border border-amber-400/40 px-2.5 py-1 rounded-xl flex items-center gap-1 text-xs font-bold text-amber-200">🪙 <span>{user.points.toLocaleString()}</span></div>
              </div>
              <div className="bg-slate-950/90 px-3 py-1 rounded-xl border border-amber-500/40 text-xs font-black text-yellow-400 flex items-center gap-1">
                <span>{user.dncBalance}</span> <span className="text-[10px] text-slate-300">DNC</span>
              </div>
            </div>
          )}

          {/* HOME — premium navy and gold Danat Quiz design */}
          {activeTab === 'home' && (
            <div className="flex flex-col gap-4 pb-2">
              <div className="w-full flex items-center justify-between gap-2 rounded-2xl border border-amber-300/35 bg-transparent px-2 py-2 shadow-[0_4px_18px_rgba(0,0,0,0.12)]">
                <button onClick={() => setShowAvatarModal(true)} className="flex min-w-0 items-center gap-2 text-left">
                  <img src={assetPath(user.avatar)} alt="Player portrait" className="h-11 w-11 shrink-0 rounded-full border-2 border-amber-300 object-cover shadow-[0_0_14px_rgba(251,191,36,0.4)]" />
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-extrabold text-white drop-shadow">{user.name}</span>
                    <span className="block text-[10px] font-bold text-amber-200 drop-shadow">★ {t.levelLabel} {user.level}</span>
                  </span>
                </button>
                <button onClick={() => setActiveTab('rewards')} className="flex shrink-0 flex-col items-end rounded-xl border border-amber-300/35 bg-transparent px-3 py-1.5 text-right shadow-sm">
                  <span className="text-xs font-black text-yellow-200">🏆 {user.points.toLocaleString()} {t.pts}</span>
                  <span className="text-xs font-black text-amber-300">🪙 {user.dncBalance.toLocaleString()} DNC</span>
                </button>
              </div>
              <section
                aria-label="Danat Coin and Danat Quiz artwork"
                className="relative w-full h-[390px] sm:h-[460px] rounded-2xl overflow-hidden border border-amber-400/40 shadow-[0_12px_34px_rgba(0,0,0,0.45)]"
                style={{
                  backgroundImage: `url(${assetPath('main_background.jpg')})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveTab('quiz')}
                  aria-label={t.startPlay}
                  className="absolute bottom-5 left-1/2 z-10 flex h-24 w-24 -translate-x-1/2 flex-col items-center justify-center gap-1 rounded-full border-[3px] border-amber-300 bg-slate-950/20 text-amber-100 shadow-[0_0_0_4px_rgba(251,191,36,0.16),0_8px_28px_rgba(0,0,0,0.45)] backdrop-blur-[2px] transition hover:scale-105 hover:bg-slate-950/35 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-200/70"
                >
                  <Play className="h-8 w-8 fill-current drop-shadow" />
                  <span className="max-w-[78px] text-center text-[10px] font-black leading-tight drop-shadow">{t.startPlay}</span>
                </button>
              </section>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTab('game2048')}
                  aria-label="Play 2048"
                  className="group relative aspect-square w-full rounded-2xl border-[4px] border-amber-300 bg-gradient-to-br from-yellow-200 via-amber-500 to-yellow-700 p-[3px] shadow-[0_0_0_2px_rgba(120,75,12,0.9),0_0_24px_rgba(251,191,36,0.55)] transition active:scale-[0.97] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-200"
                >
                  <span className="block h-full w-full overflow-hidden rounded-[10px] bg-[#211a38]">
                    <img src={assetPath('2048.jpg')} alt="2048" className="h-full w-full object-cover transition duration-200 group-hover:scale-[1.03]" />
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('gameMatch3')}
                  aria-label="Play Match 3"
                  className="group relative aspect-square w-full rounded-2xl border-[4px] border-amber-300 bg-gradient-to-br from-yellow-200 via-amber-500 to-yellow-700 p-[3px] shadow-[0_0_0_2px_rgba(120,75,12,0.9),0_0_24px_rgba(251,191,36,0.55)] transition active:scale-[0.97] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-200"
                >
                  <span className="block h-full w-full overflow-hidden rounded-[10px] bg-[#211a38]">
                    <img src={assetPath('3match.jpg')} alt="Match 3" className="h-full w-full object-cover transition duration-200 group-hover:scale-[1.03]" />
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('gameBackgammon')}
                  aria-label="Play Backgammon"
                  className="group relative aspect-square w-full rounded-2xl border-[4px] border-amber-300 bg-gradient-to-br from-yellow-200 via-amber-500 to-yellow-700 p-[3px] shadow-[0_0_0_2px_rgba(120,75,12,0.9),0_0_24px_rgba(251,191,36,0.55)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_0_0_2px_rgba(120,75,12,0.95),0_0_30px_rgba(251,191,36,0.75)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-200"
                >
                  <span className="block h-full w-full overflow-hidden rounded-[10px] bg-[#21160f]">
                    <img src={assetPath('backgammon.png')} alt="Backgammon" className="h-full w-full object-cover transition duration-200 group-hover:scale-[1.04]" />
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('gameBubbleShooter')}
                  aria-label="Play Bubble Shooter"
                  className="group relative aspect-square w-full rounded-2xl border-[4px] border-amber-300 bg-gradient-to-br from-yellow-200 via-amber-500 to-yellow-700 p-[3px] shadow-[0_0_0_2px_rgba(120,75,12,0.9),0_0_24px_rgba(251,191,36,0.55)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_0_0_2px_rgba(120,75,12,0.95),0_0_30px_rgba(251,191,36,0.75)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-200"
                >
                  <span className="block h-full w-full overflow-hidden rounded-[10px] bg-[#211a38]">
                    <img src={assetPath('bubble_shooter.png')} alt="Bubble Shooter" className="h-full w-full object-cover transition duration-200 group-hover:scale-[1.06]" />
                  </span>
                </button>
              </div>

              <div className="relative overflow-hidden rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-[#18213a] via-[#111a33] to-[#251b35] p-3.5 text-center shadow-[0_0_0_1px_rgba(120,75,12,0.9),0_0_22px_rgba(251,191,36,0.22)]">
                <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-yellow-200 to-transparent" />
                <div className="mb-3 text-sm font-extrabold tracking-wide text-amber-100 drop-shadow-[0_1px_8px_rgba(251,191,36,0.3)]">
                  {t.rewardPanelTitle}
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    onClick={handleWatchForLife}
                    disabled={isRewardAdLoading}
                    className="flex min-h-[54px] flex-col items-center justify-center gap-1 rounded-xl border-2 border-amber-300 bg-gradient-to-b from-[#713b46] to-[#421f35] px-2 py-2 text-xs font-black text-amber-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_3px_10px_rgba(0,0,0,0.28)] transition hover:border-yellow-200 hover:from-[#854653] hover:to-[#51243b] active:scale-[0.98]"
                  >
                    <span className="text-base leading-none">❤️ +1</span>
                    <span className="text-[10px] font-bold text-amber-100/90">{t.lifeRewardLabel}</span>
                  </button>
                  <button
                    disabled={true}
                    aria-label={t.pointsRewardLabel}
                    className="flex min-h-[54px] flex-col items-center justify-center gap-1 rounded-xl border-2 border-amber-300 bg-gradient-to-b from-[#315b68] to-[#193b4b] px-2 py-2 text-xs font-black text-amber-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_3px_10px_rgba(0,0,0,0.28)] transition hover:border-yellow-200 hover:from-[#3b6e7c] hover:to-[#20495a] active:scale-[0.98]"
                  >
                    <span className="text-base leading-none">+10 🪙</span>
                    <span className="text-[9px] font-bold leading-tight text-amber-100/90">{t.pointsRewardLabel}</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Mini-games removed: the home screen now leads only to the General Knowledge Quiz. */}

          {activeTab === 'game2048' && (
            <Game2048 onBack={() => setActiveTab('home')} onAdComplete={incrementVideoCount} language={user.language} />
          )}

          {activeTab === 'gameMatch3' && (
            <GameMatch3 onBack={() => setActiveTab('home')} onAdComplete={incrementVideoCount} language={user.language} />
          )}

          {activeTab === 'gameBubbleShooter' && (
            <BubbleShooter onBack={() => setActiveTab('home')} onAdComplete={incrementVideoCount} language={user.language} />
          )}

          {activeTab === 'gameBackgammon' && (
            <Backgammon onBack={() => setActiveTab('home')} language={user.language} />
          )}

          {/* SCREEN: STATISTICS */}
          {activeTab === 'statistics' && (
            <div className="flex flex-col gap-4">
              <div className="text-center my-2">
                <span className="text-4xl">📊</span>
                <h2 className="text-2xl font-black text-yellow-400 mt-2">{t.statistics}</h2>
              </div>

              <div className="w-full grid grid-cols-2 gap-3">
                <div className="bg-[#240a47] p-4 rounded-2xl border border-purple-400/40 text-center shadow">
                  <div className="text-xs text-slate-300 mb-1">{t.gamesPlayed}</div>
                  <div className="text-2xl font-black text-white">{user.totalGames}</div>
                </div>

                <div className="bg-[#240a47] p-4 rounded-2xl border border-purple-400/40 text-center shadow">
                  <div className="text-xs text-slate-300 mb-1">{t.levelLabel}</div>
                  <div className="text-2xl font-black text-yellow-400">★ {user.level}</div>
                </div>

                <div className="bg-[#240a47] p-4 rounded-2xl border border-purple-400/40 text-center shadow">
                  <div className="text-xs text-slate-300 mb-1">{t.pointsEarned}</div>
                  <div className="text-xl font-black text-purple-300">{user.totalEarnedPoints.toLocaleString()}</div>
                </div>

                <div className="bg-[#240a47] p-4 rounded-2xl border border-purple-400/40 text-center shadow">
                  <div className="text-xs text-slate-300 mb-1">{t.adsWatched}</div>
                  <div className="text-xl font-black text-yellow-400">{videosWatched}</div>
                </div>
              </div>

              <button 
                onClick={() => setActiveTab('home')}
                className="w-full mt-4 py-3 bg-[#240a47] hover:bg-[#320d63] border border-purple-400/40 text-white font-bold rounded-xl transition text-xs"
              >
                {t.backToHome}
              </button>
            </div>
          )}
          
          {/* SCREEN 2: QUIZ */}
          {activeTab === 'quiz' && (
            <div className="flex flex-col gap-4">
              <div className="w-full flex items-center justify-between gap-3">
                <button onClick={() => setActiveTab('home')} className="p-2.5 bg-[#240a47] rounded-xl text-slate-200 font-bold text-xs border border-purple-400/40">
                  ⏸
                </button>
                <div className="flex-1 bg-slate-950 h-3 rounded-full overflow-hidden p-0.5 border border-purple-400/40">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-300"
                    style={{ width: `${((currentQIndex + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
                <div className="flex items-center gap-1 bg-[#240a47] px-3 py-1.5 rounded-xl text-yellow-400 text-xs font-bold border border-purple-400/40">
                  ❤️ {lives}
                </div>
              </div>

              {lives === 0 ? (
                <div className="w-full bg-rose-950/80 border-2 border-rose-500 rounded-2xl p-6 text-center space-y-4 shadow-xl my-4">
                  <h3 className="text-xl font-black text-rose-300">{t.outOfLivesTitle}</h3>
                  <p className="text-xs text-slate-200 leading-relaxed">{t.outOfLivesDesc}</p>
                  <button 
                    onClick={handleWatchForLife}
                    disabled={isRewardAdLoading}
                    className="w-full py-3.5 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-400 hover:to-pink-500 text-white font-black text-sm rounded-xl shadow-lg transition"
                  >
                    {t.watchForLife}
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex justify-center">
                    <div className="bg-purple-600/40 border border-purple-400 text-purple-200 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow">
                      {getQuestionCategory(questions[currentQIndex])} ({t.questionNav} {currentQIndex + 1} {t.ofNav} {questions.length})
                    </div>
                  </div>

                  <div className="w-full bg-[#17152f]/95 border-2 border-amber-400/70 rounded-2xl px-5 py-5 text-center shadow-[0_8px_28px_rgba(0,0,0,0.55)] my-2">
                    <h3 className="text-lg sm:text-xl font-extrabold text-white leading-relaxed drop-shadow-md">
                      {getQuestionText(questions[currentQIndex])}
                    </h3>
                  </div>

                  {showCorrectCelebration && (
                    <div className="my-2 flex flex-col items-center justify-center rounded-2xl border-2 border-emerald-300/70 bg-gradient-to-r from-emerald-500/20 via-yellow-400/20 to-emerald-500/20 px-4 py-3 text-center shadow-[0_0_28px_rgba(52,211,153,0.28)] animate-in zoom-in duration-300" role="status" aria-live="polite">
                      <div className="flex items-center justify-center gap-3 text-4xl sm:text-5xl">
                        <span className="animate-bounce">👏</span>
                        <span className="animate-pulse">🎉</span>
                        <span className="animate-bounce [animation-delay:150ms]">👏</span>
                      </div>
                      <div className="mt-1 text-lg font-black tracking-wide text-emerald-200">Correct! Great job!</div>
                    </div>
                  )}

                  <div className="w-full space-y-3">
                    {getQuestionOptions(questions[currentQIndex]).map((optText, idx) => {
                      const isSelected = selectedOption === idx;
                      
                      const currentQ = questions[currentQIndex];
                      let isCorrectAnswer = idx === currentQ.correctAnswer;
                      if (typeof currentQ.correctAnswer === 'object' && currentQ.correctAnswer !== null) {
                        const targetText = currentQ.correctAnswer[langKey] || currentQ.correctAnswer['en'];
                        isCorrectAnswer = optText === targetText;
                      } else if (typeof currentQ.correctAnswer === 'string') {
                        isCorrectAnswer = optText === currentQ.correctAnswer;
                      }

                      let btnStyle = "bg-[#240a47]/80 border-purple-400/30 text-slate-100 hover:bg-[#320d63]";
                      if (isAnswered) {
                        if (isCorrectAnswer) {
                          btnStyle = "bg-emerald-600/40 border-emerald-400 text-emerald-200";
                        } else if (isSelected) {
                          btnStyle = "bg-red-600/40 border-red-400 text-red-200";
                        }
                      } else if (isSelected) {
                        btnStyle = "bg-yellow-600/40 border-yellow-400 text-yellow-200";
                      }

                      return (
                        <button
                          key={idx}
                          disabled={isAnswered}
                          onClick={() => setSelectedOption(idx)}
                          className={`w-full py-3.5 px-5 rounded-2xl font-bold text-sm flex items-center justify-between transition border shadow ${btnStyle}`}
                        >
                          <span>{optText}</span>
                          {isAnswered && isCorrectAnswer && <Check className="w-5 h-5 text-emerald-400" />}
                        </button>
                      );
                    })}
                  </div>

                  {!isAnswered ? (
                    <button 
                      onClick={handleAnswerSubmit}
                      disabled={selectedOption === null}
                      className="w-full mt-4 py-3.5 bg-gradient-to-r from-yellow-400 to-amber-500 disabled:opacity-50 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-black text-sm rounded-2xl shadow-xl transition"
                    >
                      {t.confirmAnswer}
                    </button>
                  ) : (
                    <button 
                      onClick={handleNextQuestion}
                      className="w-full mt-4 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-sm rounded-2xl shadow-xl transition"
                    >
                      {t.nextQuestion}
                    </button>
                  )}
                </>
              )}
            </div>
          )}

          {/* SCREEN 3: REWARDS */}
          {activeTab === 'rewards' && (
            <div className="flex flex-col gap-5">
              <div className="text-center my-2 flex flex-col items-center">
                <h2 className="text-2xl font-black text-yellow-400 bg-amber-500/20 px-6 py-1.5 rounded-full border border-amber-400/40 shadow">{t.rewards}</h2>
              </div>

              {/* 3-Hour Timed Lives Bonus Claim Card */}
              <div className="w-full bg-gradient-to-br from-amber-900/40 to-[#240a47] rounded-2xl p-4 border border-amber-500/40 flex items-center justify-between gap-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 text-lg font-bold">
                    ⏳
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{t.timedBonusTitle}</div>
                    <div className="text-[10px] text-amber-300">{t.timedBonusDesc}</div>
                  </div>
                </div>

                <button 
                  onClick={handleClaimTimedSpirits}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-4 py-2.5 rounded-xl text-xs transition shadow"
                >
                  {t.claimBonus}
                </button>
              </div>

              <div className="w-full bg-[#240a47]/90 rounded-2xl p-5 border border-purple-400/40 flex justify-between items-center shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center">
                    <img src={assetPath('dnc_coin.png')} alt="Coin" className="w-8 h-8 object-contain" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-300">{t.points}</div>
                    <div className="text-2xl font-black text-purple-300">{user.points.toLocaleString()}</div>
                  </div>
                </div>
                <button disabled aria-label={t.pointsRewardLabel} className="bg-purple-950 text-slate-400 w-9 h-9 rounded-full font-bold text-xl flex items-center justify-center shadow cursor-not-allowed">
                  +
                </button>
              </div>

              <div className="w-full bg-gradient-to-br from-purple-900/50 to-[#240a47] rounded-2xl p-4 border border-purple-500/40 flex items-center justify-between gap-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300">
                    <Tv className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{t.watchAdVideoTitle}</div>
                    <div className="text-[10px] text-purple-300">{t.watchAdVideoDesc}</div>
                  </div>
                </div>

                <button 
                  disabled
                  title={t.pointsRewardLabel}
                  className="bg-purple-950 text-slate-400 font-bold px-4 py-2.5 rounded-xl text-xs cursor-not-allowed flex items-center gap-1.5 shadow"
                >
                  {user.language === 'العربية' ? 'متوقف مؤقتاً' : user.language === 'Français' ? 'Suspendu' : 'Paused'}
                </button>
              </div>
            </div>
          )}

          {/* SCREEN 5: PROFILE */}
          {activeTab === 'profile' && (
            <div className="flex flex-col gap-5">
              <div className="text-center my-2">
                <h2 className="text-2xl font-black text-white">{t.profile}</h2>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div 
                  className="relative cursor-pointer group"
                  onClick={() => setShowAvatarModal(true)}
                >
                  <img 
                    src={assetPath(user.avatar)} 
                    alt="Current Portrait" 
                    className="w-24 h-24 rounded-full border-4 border-yellow-400 object-cover shadow-2xl group-hover:scale-105 transition"
                  />
                </div>
                
                <button 
                  onClick={() => setShowAvatarModal(true)}
                  className="text-xs text-yellow-400 font-bold bg-yellow-500/10 px-3 py-1.5 rounded-lg border border-yellow-500/40 shadow hover:bg-yellow-500/20"
                >
                  ✏️ {t.changeProfilePic}
                </button>

                <div className="flex items-center gap-2 mt-1 bg-[#240a47] px-4 py-2 rounded-xl border border-purple-400/30">
                  <h3 className="text-base font-bold text-white">{user.name}</h3>
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                </div>

                <span className="text-xs text-yellow-400 font-bold">{t.levelLabel} {user.level}</span>
              </div>

              <div className="w-full bg-[#240a47]/90 rounded-2xl p-4 border border-purple-400/40 space-y-3 text-xs shadow">
                <div className="flex justify-between items-center border-b border-purple-500/30 pb-2.5">
                  <span className="text-slate-300">{t.emailLabel}</span>
                  <span className="font-mono text-yellow-400 flex items-center gap-1">
                    {currentUser?.email || 'Guest'} {currentUser && <Lock className="w-3 h-3 text-slate-400" />}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-300">{t.appLanguageLabel}</span>
                  <select 
                    value={user.language}
                    onChange={(e) => handleLanguageChange(e.target.value)}
                    className="bg-[#0d031f] text-yellow-400 font-bold px-3 py-1.5 rounded-lg border border-purple-400/40 outline-none text-xs cursor-pointer"
                  >
                    <option value="العربية">العربية</option>
                    <option value="English">English</option>
                    <option value="Français">Français</option>
                  </select>
                </div>
              </div>

              <div className="w-full space-y-2">
                {!currentUser ? (
                  <button onClick={() => { setAuthMode('login'); setShowAuthModal(true); setAuthError(''); setAuthMessage(''); }} className="w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg">
                    <LogIn className="w-4 h-4" /> Login
                  </button>
                ) : (
                  <button onClick={handleSignOut} className="w-full py-3 rounded-xl border border-red-400/50 bg-red-500/15 text-red-200 font-bold text-sm flex items-center justify-center gap-2">
                    <LogOut className="w-4 h-4" /> {t.logout}
                  </button>
                )}
              </div>

              <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div className="bg-[#240a47] p-3 rounded-2xl border border-rose-400/40 text-center shadow">
                  <div className="text-[10px] text-slate-300 mb-1">❤️ Lives</div>
                  <div className="text-base font-black text-rose-300">{lives}</div>
                </div>
                <div className="bg-[#240a47] p-3 rounded-2xl border border-purple-400/40 text-center shadow">
                  <div className="text-[10px] text-slate-300 mb-1">{t.gamesPlayed}</div>
                  <div className="text-base font-black text-white">{user.totalGames}</div>
                </div>

                <div className="bg-[#240a47] p-3 rounded-2xl border border-purple-400/40 text-center shadow">
                  <div className="text-[10px] text-slate-300 mb-1">{t.pointsEarned}</div>
                  <div className="text-base font-black text-purple-300">{user.totalEarnedPoints.toLocaleString()}</div>
                </div>

                <div className="bg-[#240a47] p-3 rounded-2xl border border-purple-400/40 text-center shadow">
                  <div className="text-[10px] text-slate-300 mb-1">DNC</div>
                  <div className="text-base font-black text-yellow-400">{user.dncBalance}</div>
                </div>
              </div>
              <div className="w-full bg-[#240a47]/90 rounded-2xl p-4 border border-yellow-500/30 shadow space-y-3">
                <div className="flex items-center justify-between border-b border-purple-400/30 pb-2">
                  <h3 className="text-sm font-black text-yellow-400">
                    {user.language === 'العربية' ? 'سجل رصيد DNC' : user.language === 'Français' ? 'Historique du solde DNC' : 'DNC Credit History'}
                  </h3>
                  <span className="text-[10px] text-slate-400">
                    {user.language === 'العربية' ? 'آخر 10 عمليات' : user.language === 'Français' ? '10 dernières opérations' : 'Last 10 entries'}
                  </span>
                </div>
                {!currentUser ? (
                  <p className="text-xs text-slate-400 text-center py-2">
                    {user.language === 'العربية' ? 'سجل الرصيد متاح بعد تسجيل الدخول.' : user.language === 'Français' ? 'Connectez-vous pour consulter votre historique.' : 'Sign in to view your credit history.'}
                  </p>
                ) : dncHistory.length === 0 ? (
                  <p className="text-xs text-slate-400 text-center py-2">
                    {user.language === 'العربية' ? 'لا توجد إضافات رصيد حتى الآن.' : user.language === 'Français' ? 'Aucun crédit pour le moment.' : 'No DNC credits yet.'}
                  </p>
                ) : dncHistory.map((entry) => {
                  const entryDate = entry.createdAt?.toDate ? entry.createdAt.toDate() : null;
                  return (
                    <div key={entry.id} className="flex items-center justify-between gap-3 bg-[#0d031f]/70 rounded-xl p-3">
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-white">
                          {entry.note || (user.language === 'العربية' ? 'إضافة رصيد يدوية' : user.language === 'Français' ? 'Crédit manuel' : 'Manual credit')}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {entryDate ? entryDate.toLocaleDateString(user.language === 'العربية' ? 'ar' : user.language === 'Français' ? 'fr' : 'en') : '—'}
                        </div>
                      </div>
                      <div className={`text-sm font-black whitespace-nowrap ${Number(entry.amount) >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {Number(entry.amount) > 0 ? '+' : ''}{Number(entry.amount).toLocaleString()} DNC
                      </div>
                    </div>
                  );
                })}
              </div>

              {currentUser && (
                <div className="w-full bg-[#17102b] rounded-2xl p-4 border border-cyan-400/40 shadow space-y-3">
                  <div className="flex items-center justify-between border-b border-cyan-400/30 pb-2">
                    <h3 className="text-sm font-black text-cyan-200">AdMob connection test</h3>
                    <span className="text-[10px] text-slate-400">Read-only · No DNC credits</span>
                  </div>
                  <p className="text-[11px] text-slate-300">Check whether this signed-in account can read the AdMob estimated earnings report.</p>
                  <input
                    type="date"
                    value={admobTestDate}
                    onChange={(event) => setAdmobTestDate(event.target.value)}
                    className="w-full rounded-xl border border-cyan-400/30 bg-[#0d031f] px-3 py-2.5 text-xs text-white"
                  />
                  <button
                    type="button"
                    onClick={testAdMobConnection}
                    disabled={admobTestLoading || !admobTestDate}
                    className="w-full rounded-xl bg-cyan-300 px-4 py-2.5 text-xs font-black text-slate-950 disabled:opacity-50"
                  >
                    {admobTestLoading ? 'Testing AdMob access…' : 'Test AdMob connection'}
                  </button>
                  {admobTestResult?.ok && (
                    <div className="rounded-xl bg-emerald-950/50 border border-emerald-400/30 p-3 text-[11px] text-emerald-100 space-y-1">
                      <div className="font-bold">AdMob report access successful</div>
                      <div>Date: {admobTestResult.data.startDate}</div>
                      <div>Account time zone: {admobTestResult.data.reportingTimeZone}</div>
                      <div>Report rows: {admobTestResult.data.rows?.length ?? 0}</div>
                      <div>Estimated earnings: ${(admobTestResult.data.rows || []).reduce((sum, row) => sum + Number(row.earningsUsd || 0), 0).toFixed(6)} USD</div>
                      <div>Player pool (30%): ${(admobTestResult.data.rows || []).reduce((sum, row) => sum + Number(row.playerPoolUsd || 0), 0).toFixed(6)} USD</div>
                      <div>Danat share (70%): ${(admobTestResult.data.rows || []).reduce((sum, row) => sum + Number(row.danatShareUsd || 0), 0).toFixed(6)} USD</div>
                      <div className="pt-1 text-emerald-200">Preview only. No player balances changed.</div>
                    </div>
                  )}
                  {admobTestResult && !admobTestResult.ok && (
                    <div className="rounded-xl bg-rose-950/50 border border-rose-400/30 p-3 text-[11px] text-rose-100">
                      Test failed: {admobTestResult.message}
                    </div>
                  )}
                </div>
              )}

              {isDncAdmin && (
                <div className="w-full bg-[#17102b] rounded-2xl p-4 border border-amber-400/50 shadow space-y-3">
                  <div className="flex items-center justify-between border-b border-amber-400/30 pb-2">
                    <h3 className="text-sm font-black text-amber-300">Administrator · DNC Credits</h3>
                    <span className="text-[10px] text-slate-400">Private admin tool</span>
                  </div>
                  <p className="text-[11px] text-slate-300">Load registered accounts, select a player, then enter a positive credit or a negative correction. Every successful change is recorded in the player's DNC history.</p>
                  <button type="button" onClick={loadAdminPlayers} disabled={adminLoading} className="w-full rounded-xl bg-amber-400 px-4 py-2.5 text-xs font-black text-slate-950 disabled:opacity-50">
                    {adminLoading ? 'Please wait…' : 'Load registered players'}
                  </button>
                  {adminPlayers.length > 0 && (
                    <>
                      <input value={adminSearch} onChange={(event) => setAdminSearch(event.target.value)} placeholder="Search by player name, email or UID" className="w-full rounded-xl border border-purple-400/40 bg-[#0d031f] px-3 py-2.5 text-xs text-white outline-none" />
                      <select value={adminSelectedUid} onChange={(event) => setAdminSelectedUid(event.target.value)} className="w-full rounded-xl border border-purple-400/40 bg-[#0d031f] px-3 py-2.5 text-xs text-white outline-none">
                        <option value="">Select a player</option>
                        {adminPlayers.filter((player) => `${player.name} ${player.email} ${player.uid}`.toLowerCase().includes(adminSearch.toLowerCase())).map((player) => (
                          <option key={player.uid} value={player.uid}>
                            {player.name}{player.email ? ` · ${player.email}` : ''} · Balance: {player.dncBalance} DNC
                          </option>
                        ))}
                      </select>
                      <input type="number" step="0.00000001" value={adminAmount} onChange={(event) => setAdminAmount(event.target.value)} placeholder="DNC amount (e.g. 25 or -2)" className="w-full rounded-xl border border-purple-400/40 bg-[#0d031f] px-3 py-2.5 text-xs text-white outline-none" />
                      <input value={adminNote} onChange={(event) => setAdminNote(event.target.value)} maxLength={240} placeholder="Reason / note (optional)" className="w-full rounded-xl border border-purple-400/40 bg-[#0d031f] px-3 py-2.5 text-xs text-white outline-none" />
                      <button type="button" onClick={submitDncAdjustment} disabled={adminLoading || !adminSelectedUid || !adminAmount} className="w-full rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-black text-slate-950 disabled:opacity-50">
                        {adminLoading ? 'Saving…' : 'Confirm DNC adjustment'}
                      </button>
                    </>
                  )}
                  {adminStatus && <p className="text-[11px] text-amber-200 break-words">{adminStatus}</p>}
                </div>
              )}

            </div>
          )}

        </div>



        {/* SETTINGS MODAL */}
        {showSettingsModal && (
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="w-full bg-[#240a47] border border-yellow-500/50 rounded-3xl p-5 text-right space-y-4 shadow-2xl" dir={user.language === 'العربية' ? 'rtl' : 'ltr'}>
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-white text-base">{t.settings}</h3>
                <button onClick={() => setShowSettingsModal(false)} className="text-slate-300 p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center bg-[#0d031f] p-3 rounded-xl border border-purple-400/30">
                  <span className="text-slate-300">{t.appLanguage} (Language)</span>
                  <select 
                    value={user.language}
                    onChange={(e) => handleLanguageChange(e.target.value)}
                    className="bg-[#240a47] text-yellow-400 font-bold px-3 py-1.5 rounded-lg border border-purple-400/40 outline-none text-xs cursor-pointer"
                  >
                    <option value="العربية">العربية</option>
                    <option value="English">English</option>
                    <option value="Français">Français</option>
                  </select>
                </div>
              </div>

              <button 
                onClick={() => setShowSettingsModal(false)}
                className="w-full py-3 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-black text-xs rounded-xl shadow-lg"
              >
                {t.close}
              </button>
            </div>
          </div>
        )}

        {/* FIXED BOTTOM NAVIGATION BAR */}
        <div style={{ bottom: 'var(--native-ad-banner-height, 0px)' }} className="absolute left-0 right-0 w-full bg-gradient-to-r from-[#101a36]/[0.99] via-[#0b142c]/[0.99] to-[#101a36]/[0.99] border-t-2 border-amber-400 px-1.5 sm:px-3 py-2.5 flex justify-around items-center backdrop-blur-xl z-30 shadow-2xl">
          {[
            { id: 'home', label: user.language === 'العربية' ? 'الرئيسية' : user.language === 'Français' ? 'Accueil' : 'Home', icon: Home },
            { id: 'statistics', label: t.statistics, icon: BarChart2 },
            { id: 'rewards', label: t.rewards, icon: Gift },
            { id: 'profile', label: t.profile, icon: User },
            { id: 'settings', label: t.settings, icon: Settings }
          ].map(tab => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            return (
              <button key={tab.id} onClick={() => tab.id === 'settings' ? setShowSettingsModal(true) : setActiveTab(tab.id)} className={`flex flex-1 min-w-0 max-w-[110px] flex-col items-center justify-center gap-1 rounded-xl px-1 py-1.5 transition ${isActive || (tab.id === 'settings' && showSettingsModal) ? 'opacity-100' : 'opacity-75 hover:opacity-100'}`}>
                <Icon className={`h-6 w-6 shrink-0 ${isActive || (tab.id === 'settings' && showSettingsModal) ? 'text-amber-300 drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]' : 'text-slate-300'}`} />
                <span className={`text-[9px] sm:text-[10px] font-bold leading-tight text-center whitespace-nowrap ${isActive || (tab.id === 'settings' && showSettingsModal) ? 'text-yellow-300' : 'text-slate-300'}`}>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* AVATAR SELECTOR MODAL */}
        {showAvatarModal && (
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="w-full bg-[#240a47] border-2 border-yellow-500/50 rounded-3xl p-6 text-right space-y-5 shadow-[0_0_60px_rgba(234,179,8,0.3)]" dir={user.language === 'العربية' ? 'rtl' : 'ltr'}>
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-white text-lg">{t.selectAvatarTitle}</h3>
                <button onClick={() => setShowAvatarModal(false)} className="text-slate-300 p-1 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 my-2 max-h-80 overflow-y-auto">
                {availableAvatars.map((item) => {
                  const isSelected = user.avatar === item.id;
                  return (
                    <div 
                      key={item.id}
                      onClick={() => handleUpdateAvatar(item.id)}
                      className={`relative w-full h-28 rounded-2xl border-2 cursor-pointer overflow-hidden transition duration-200 group ${
                        isSelected 
                          ? 'border-yellow-400 shadow-[0_0_25px_rgba(234,179,8,0.4)] scale-105' 
                          : 'border-purple-400/40 hover:border-purple-300'
                      }`}
                    >
                      <img 
                        src={assetPath(item.id)} 
                        alt="Avatar Option" 
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-300" 
                      />
                      
                      {isSelected && (
                        <div className="absolute top-2 right-2 bg-emerald-500 p-1.5 rounded-full border-2 border-slate-900 shadow z-10">
                          <Check className="w-3.5 h-3.5 text-white" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => setShowAvatarModal(false)}
                  className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl shadow-lg"
                >
                  {t.close}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
