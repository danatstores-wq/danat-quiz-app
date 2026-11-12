import React, { useState, useEffect } from 'react';
import MiniGames from './MiniGames';
import {
  ShieldCheck, Check, Tv, X, Settings, Clock, Lock,
  Play, BarChart2, Download, LogIn, UserPlus, LogOut, Coins, Volume2, VolumeX, Eye
} from 'lucide-react';

// Firebase Imports
import { auth, db } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged
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
  orderBy,
  limit
} from 'firebase/firestore';

// --- LocalStorage Storage Keys ---
const QUIZ_INDEX_KEY = 'danat_quiz_current_index';
const QUESTIONS_CACHE_KEY = 'danat_quiz_questions_cache_v1';
const QUESTIONS_CACHE_TTL = 24 * 60 * 60 * 1000;
const LEADERBOARD_CACHE_KEY = 'danat_quiz_leaderboard_cache_v1';
const LEADERBOARD_CACHE_TTL = 5 * 60 * 1000;

// --- Google AdMob Unit Configuration (Prepared for Native Mobile Builds) ---
const ADMOB_UNITS = {
  BOTTOM_BANNER: 'ca-app-pub-1622329571366129/722852979',
  REWARDED_POINTS: 'ca-app-pub-1622329571366129/4581162153',
  REWARDED_LIFE: 'ca-app-pub-1622329571366129/5894243820'
};

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
    startPlay: 'ابدأ الاختبار',
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
    autoRewardNotice: 'ستحصل على المكافأة تلقائياً عند انتهاء الإعلان.',
    forcedAdTitle: 'إعلان جوجل الإجباري',
    forcedAdDesc: 'لقد أنهيت 4 مستويات بنجاح! يلزم الاتصال بالإنترنت ومشاهدة هذا الإعلان القصير للمتابعة:',
    forcedAdRewardNotice: 'ستحصل على 50 نقطة إضافية تلقائياً عند انتهاء الفيديو.',
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
    autoRewardNotice: 'You will automatically receive your reward when the ad finishes.',
    forcedAdTitle: 'Forced Google Ad',
    forcedAdDesc: 'You successfully finished 4 levels! Internet connection and watching this short ad are required to continue:',
    forcedAdRewardNotice: 'You will automatically receive 50 bonus points when the video ends.',
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
    autoRewardNotice: "Vous recevrez automatiquement votre récompense à la fin de la publicité.",
    forcedAdTitle: "Publicité Google obligatoire",
    forcedAdDesc: "Vous avez terminé 4 niveaux avec succès ! Une connexion Internet et le visionnage de cette courte publicité sont requis pour continuer :",
    forcedAdRewardNotice: "Vous recevrez automatiquement 50 points bonus à la fin de la vidéo.",
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

class MiniGamesErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error, info) {
    console.error('Mini-games screen failed to render:', error, info);
  }
  render() {
    if (this.state.error) {
      return (
        <div className="rounded-2xl border border-yellow-500/40 bg-[#160b28] p-6 text-center text-white">
          <h2 className="text-lg font-black text-yellow-300">The game could not load</h2>
          <p className="mt-2 text-sm text-purple-100">The game screen encountered an error. Your quiz account and quiz points are unchanged.</p>
          <p className="mt-2 break-words text-xs text-rose-300">{this.state.error.message}</p>
          <button onClick={this.props.onBack} className="mt-4 rounded-xl bg-yellow-400 px-5 py-3 font-black text-black">Back to Home</button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authMode, setAuthMode] = useState('login');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [authError, setAuthError] = useState('');
  const [authMessage, setAuthMessage] = useState('');

  const [activeTab, setActiveTab] = useState('home');

  const [user, setUser] = useState({
    name: 'أحمد',
    email: 'ahmad.dnc@danatstores.com',
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
    walletConnected: false,
    walletAddress: '',
    avatar: 'avatar-man-ghutra.png',
  });

  const langKey = user.language === 'العربية' ? 'ar' : user.language === 'Français' ? 'fr' : 'en';
  const t = TRANSLATIONS[user.language] || TRANSLATIONS['English'];

  const [lives, setLives] = useState(3);
  const [videosWatched, setVideosWatched] = useState(() => {
    return parseInt(localStorage.getItem('videosWatched') || '0', 10);
  });

  const [levelsPlayed, setLevelsPlayed] = useState(0);
  const [showForcedAd, setShowForcedAd] = useState(false);
  const [forcedAdTimer, setForcedAdTimer] = useState(5);

  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [customWallet, setCustomWallet] = useState('');
  const [isWatchingAd, setIsWatchingAd] = useState(false);
  const [adTimer, setAdTimer] = useState(5);

  // 10-Questions Milestone Ad State
  const [showMilestoneAd, setShowMilestoneAd] = useState(false);
  const [milestoneAdTimer, setMilestoneAdTimer] = useState(5);

  // Leaderboard State
  const [leaderboardUsers, setLeaderboardUsers] = useState([]);
  const [loadingLeaderboard, setLoadingLeaderboard] = useState(false);

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
  const [score, setScore] = useState(0);
  const [loadingQuestions, setLoadingQuestions] = useState(true);

  // Save current question index automatically on change
  useEffect(() => {
    localStorage.setItem(QUIZ_INDEX_KEY, currentQIndex.toString());
  }, [currentQIndex]);

  // Fetch only the top 20 players and reuse a short-lived local cache.
  useEffect(() => {
    if (activeTab === 'leaderboard') {
      async function fetchLeaderboard() {
        setLoadingLeaderboard(true);
        try {
          const cached = localStorage.getItem(LEADERBOARD_CACHE_KEY);
          if (cached) {
            const parsed = JSON.parse(cached);
            if (Date.now() - parsed.timestamp < LEADERBOARD_CACHE_TTL && Array.isArray(parsed.users)) {
              setLeaderboardUsers(parsed.users);
              setLoadingLeaderboard(false);
              return;
            }
          }

          const topPlayersQuery = query(
            collection(db, "users"),
            orderBy("points", "desc"),
            limit(20)
          );
          const querySnapshot = await getDocs(topPlayersQuery);
          const usersList = querySnapshot.docs.map((docSnap) => ({
            id: docSnap.id,
            name: docSnap.data().name || 'لاعب',
            avatar: docSnap.data().avatar || 'avatar-man-ghutra.png',
            points: docSnap.data().points ?? docSnap.data().spirits ?? 0
          }));
          setLeaderboardUsers(usersList);
          localStorage.setItem(LEADERBOARD_CACHE_KEY, JSON.stringify({
            timestamp: Date.now(),
            users: usersList
          }));
        } catch (err) {
          console.error("Failed to fetch leaderboard:", err);
        } finally {
          setLoadingLeaderboard(false);
        }
      }
      fetchLeaderboard();
    }
  }, [activeTab]);

  const [redemptions, setRedemptions] = useState([
    { id: '1', user: 'أحمد', points: 1000, dnc: 1, wallet: '0x71C...39A', status: 'PENDING', date: '2026-11-02' },
    { id: '2', user: 'محمد علي', points: 5000, dnc: 5, wallet: '0x38B...12F', status: 'APPROVED', date: '2026-11-01' },
  ]);

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
          const answeredCount = data.totalQuestionsAnswered || 0;
          const calculatedLevel = Math.floor(answeredCount / 50) + 1;

          setUser(prev => ({
            ...prev,
            name: data.name || authUser.email.split('@')[0],
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
            walletConnected: data.walletConnected ?? prev.walletConnected,
            walletAddress: data.walletAddress ?? prev.walletAddress,
            avatar: data.avatar ?? prev.avatar,
            language: data.language ?? prev.language,
          }));
        }
      } else {
        setCurrentUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setAuthError('');
    setAuthMessage('');
    try {
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
        walletConnected: false,
        walletAddress: '',
        avatar: 'avatar-man-ghutra.png',
        language: 'English',
        createdAt: new Date().toISOString()
      };

      await setDoc(doc(db, "users", uid), initialProfile);
      setEmailInput('');
      setPasswordInput('');
      setNameInput('');
    } catch (err) {
      setAuthError("فشل إنشاء الحساب: " + err.message);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setAuthError('');
    setAuthMessage('');
    try {
      await signInWithEmailAndPassword(auth, emailInput, passwordInput);
      setEmailInput('');
      setPasswordInput('');
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

  const handleSignOut = () => {
    signOut(auth);
  };

  const handleLanguageChange = async (newLang) => {
    setUser(prev => ({ ...prev, language: newLang }));
    if (currentUser) {
      await updateDoc(doc(db, "users", currentUser.uid), {
        language: newLang
      });
    }
  };

  const fetchAllPlayersAndExportCSV = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      let csvContent = "data:text/csv;charset=utf-8,";
      csvContent += "Name,Email,Points,DNC Balance,Total Games,Wallet Address\n";

      querySnapshot.forEach((docSnap) => {
        const p = docSnap.data();
        const row = [
          '"' + (p.name || '') + '"',
          '"' + (p.email || '') + '"',
          p.points || p.spirits || 0,
          p.dncBalance || 0,
          p.totalGames || 0,
          '"' + (p.walletAddress || 'Not Connected') + '"'
        ].join(",");
        csvContent += row + "\n";
      });

      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", `danat_quiz_players_${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      alert("خطأ أثناء تصدير البيانات: " + err.message);
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

  const triggerMilestoneVideoAd = () => {
    setShowMilestoneAd(true);
    let count = 5;
    setMilestoneAdTimer(count);
    const interval = setInterval(async () => {
      count -= 1;
      setMilestoneAdTimer(count);
      if (count <= 0) {
        clearInterval(interval);
        setShowMilestoneAd(false);
        incrementVideoCount();

        // Reward: +10 Points
        setUser(prev => ({
          ...prev,
          points: prev.points + 10,
          totalEarnedPoints: prev.totalEarnedPoints + 10
        }));

        if (currentUser) {
          await updateDoc(doc(db, "users", currentUser.uid), {
            points: increment(10),
            totalEarnedPoints: increment(10),
            rewardedAdsWatched: increment(1)
          });
        }

        alert(user.language === 'العربية' 
          ? '🎉 أتممت 10 أسئلة! شاهدت إعلان المكافأة وحصلت على 10 نقاط (+10 🪙)!' 
          : user.language === 'Français'
          ? '🎉 10 questions terminées ! Vous avez regardé la publicité et gagné 10 points (+10 🪙) !'
          : '🎉 Completed 10 questions! Watched rewarded ad and earned 10 points (+10 🪙)!');
      }
    }, 1000);
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
      setLives(prev => Math.max(0, prev - 1));
      setUser(prev => ({
        ...prev,
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

    // Trigger video ad after every 10 questions answered
    if (newSessionCount % 10 === 0) {
      triggerMilestoneVideoAd();
    }
  };

  const handleNextQuestion = async () => {
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
        triggerForcedGoogleAd();
      } else {
        setActiveTab('home');
      }
    }
  };

  const triggerForcedGoogleAd = () => {
    setShowForcedAd(true);
    let count = 5;
    setForcedAdTimer(count);
    const interval = setInterval(async () => {
      count -= 1;
      setForcedAdTimer(count);
      if (count <= 0) {
        clearInterval(interval);
        setShowForcedAd(false);
        setUser(prev => ({
          ...prev,
          points: prev.points + 50,
          totalEarnedPoints: prev.totalEarnedPoints + 50
        }));

        if (currentUser) {
          await updateDoc(doc(db, "users", currentUser.uid), {
            points: increment(50),
            totalEarnedPoints: increment(50),
            forcedAdsWatched: increment(1)
          });
        }

        alert(user.language === 'العربية' ? '🌐 تم الاتصال بالإنترنت: شاهدت إعلان جوجل الإجباري وحصلت على 50 نقطة!' : user.language === 'Français' ? '🌐 Connecté : Vous avez regardé la publicité Google et gagné 50 points !' : '🌐 Connected: Watched forced ad and earned 50 points!');
        setActiveTab('home');
      }
    }, 1000);
  };

  const incrementVideoCount = () => {
    const newCount = videosWatched + 1;
    setVideosWatched(newCount);
    localStorage.setItem('videosWatched', newCount.toString());
  };

  // Rewarded Video: Extra Life (AdMob Unit: REWARDED_LIFE)
  const handleWatchForLife = async () => {
    incrementVideoCount();
    setLives(prev => prev + 1);

    if (currentUser) {
      await updateDoc(doc(db, "users", currentUser.uid), {
        rewardedAdsWatched: increment(1)
      });
    }

    alert(user.language === 'العربية' ? 'حصلت على حياة إضافية! ❤️' : user.language === 'Français' ? 'Vous avez gagné 1 vie supplémentaire ! ❤️' : 'You earned 1 Extra Life! ❤️');
  };

  // Rewarded Video: Bonus Points (AdMob Unit: REWARDED_POINTS)
  const handleWatchForPoints = async () => {
    incrementVideoCount();
    setScore(prev => prev + 10);
    setUser(prev => ({
      ...prev,
      points: prev.points + 10,
      totalEarnedPoints: prev.totalEarnedPoints + 10
    }));

    if (currentUser) {
      await updateDoc(doc(db, "users", currentUser.uid), {
        points: increment(10),
        totalEarnedPoints: increment(10),
        rewardedAdsWatched: increment(1)
      });
    }

    alert(user.language === 'العربية' ? 'حصلت على 10 نقاط إضافية! 🪙' : user.language === 'Français' ? 'Vous avez gagné 10 points bonus ! 🪙' : 'You earned 10 Bonus Points! 🪙');
  };

  // 3-Hour Timed Lives Bonus (+5 Lives every 3 hrs, max 10 lives per 24 hours)
  const handleClaimTimedSpirits = async () => {
    const now = Date.now();
    const lastClaim = user.lastSpiritClaimTime || 0;
    const hoursElapsed = (now - lastClaim) / (1000 * 60 * 60);

    if (hoursElapsed < 3) {
      const hoursLeft = (3 - hoursElapsed).toFixed(1);
      alert(user.language === 'العربية' 
        ? `يرجى الانتظار ${hoursLeft} ساعة لقطف الأرواح المجانية القادمة!` 
        : user.language === 'Français'
        ? `Veuillez patienter ${hoursLeft} heures pour réclamer vos prochaines vies gratuites !`
        : `Please wait ${hoursLeft} hours to claim your next free lives!`);
      return;
    }

    // Check 24-hour window reset
    const lastReset = user.lastDailyResetTime || 0;
    const resetElapsedHours = (now - lastReset) / (1000 * 60 * 60);
    
    let currentDailyClaimed = user.dailyClaimedLives || 0;
    let newResetTime = lastReset;

    if (resetElapsedHours >= 24) {
      currentDailyClaimed = 0;
      newResetTime = now;
    }

    if (currentDailyClaimed >= 10) {
      alert(user.language === 'العربية' 
        ? '⚠️ وصلت إلى الحد الأقصى للأرواح المجانية (10 أرواح في 24 ساعة).' 
        : user.language === 'Français'
        ? '⚠️ Vous avez atteint la limite maximale de vies gratuites (10 vies par 24 heures).'
        : '⚠️ You reached the max limit for free lives (10 lives per 24 hours).');
      return;
    }

    const livesToAdd = 5;
    const updatedDailyClaimed = currentDailyClaimed + livesToAdd;

    setLives(prev => prev + livesToAdd);

    setUser(prev => ({
      ...prev,
      lastSpiritClaimTime: now,
      dailyClaimedLives: updatedDailyClaimed,
      lastDailyResetTime: newResetTime
    }));

    if (currentUser) {
      await updateDoc(doc(db, "users", currentUser.uid), {
        lastSpiritClaimTime: now,
        dailyClaimedLives: updatedDailyClaimed,
        lastDailyResetTime: newResetTime
      });
    }

    alert(user.language === 'العربية' 
      ? '🎉 تهانينا! حصلت على 5 أرواح مجانية (+5 ❤️).' 
      : user.language === 'Français'
      ? '🎉 Félicitations ! Vous avez réclamé 5 vies gratuites (+5 ❤️).'
      : '🎉 Congrats! You claimed 5 free lives (+5 ❤️).');
  };

  const handleConnectWallet = async (address) => {
    const finalAddress = address || '0x71C7656EC7ab88b098defB751B7401B5f6d8939A';
    setUser(prev => ({
      ...prev,
      walletConnected: true,
      walletAddress: finalAddress
    }));
    setShowWalletModal(false);

    if (currentUser) {
      await updateDoc(doc(db, "users", currentUser.uid), {
        walletConnected: true,
        walletAddress: finalAddress
      });
    }
  };

  const handleWatchAd = async () => {
    setIsWatchingAd(true);
    let count = 5;
    setAdTimer(count);
    const interval = setInterval(async () => {
      count -= 1;
      setAdTimer(count);
      if (count <= 0) {
        clearInterval(interval);
        setIsWatchingAd(false);
        incrementVideoCount();
        setUser(prev => ({
          ...prev,
          points: prev.points + 10,
          totalEarnedPoints: prev.totalEarnedPoints + 10
        }));

        if (currentUser) {
          await updateDoc(doc(db, "users", currentUser.uid), {
            points: increment(10),
            totalEarnedPoints: increment(10),
            rewardedAdsWatched: increment(1)
          });
        }

        alert(user.language === 'العربية' ? '🎉 تهانينا! حصلت على 10 نقاط إضافية.' : user.language === 'Français' ? '🎉 Félicitations ! Vous avez gagné 10 points bonus.' : '🎉 Congrats! Earned 10 bonus points.');
      }
    }, 1000);
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

  const handleRedeemDnc = async () => {
    if (!user.walletConnected) {
      alert(user.language === 'العربية' ? 'يرجى ربط محفظتك أولاً من صفحة الملف الشخصي!' : user.language === 'Français' ? "Veuillez d'abord connecter votre portefeuille dans le profil !" : 'Please connect your wallet first from the profile page!');
      setActiveTab('profile');
      return;
    }
    if (user.points < 1000) {
      alert(user.language === 'العربية' ? 'رصيدك غير كافٍ. الحد الأدنى للتحويل هو 1,000 نقطة.' : user.language === 'Français' ? 'Solde insuffisant. Le transfert minimum est de 1 000 points.' : 'Insufficient balance. Minimum transfer is 1,000 points.');
      return;
    }

    const updatedPoints = user.points - 1000;
    const updatedDnc = user.dncBalance + 1;

    setUser(prev => ({
      ...prev,
      points: updatedPoints,
      dncBalance: updatedDnc
    }));

    if (currentUser) {
      await updateDoc(doc(db, "users", currentUser.uid), {
        points: increment(-1000),
        dncBalance: increment(1)
      });
    }

    const newReq = {
      id: Date.now().toString(),
      user: user.name,
      points: 1000,
      dnc: 1,
      wallet: user.walletAddress,
      status: 'PENDING',
      date: new Date().toISOString().split('T')[0]
    };

    setRedemptions([newReq, ...redemptions]);
    alert(user.language === 'العربية' ? 'تم تقديم طلب الاستبدال بنجاح! بانتظار موافقة المسؤول.' : user.language === 'Français' ? "Demande d'échange soumise avec succès ! En attente d'approbation." : 'Redemption request submitted successfully! Awaiting admin approval.');
  };

  const handleAdminApprove = (id) => {
    setRedemptions(redemptions.map(r => r.id === id ? { ...r, status: 'APPROVED' } : r));
  };

  if (!currentUser) {
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
                  type="password" 
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full bg-[#0d031f] border border-purple-400/40 rounded-xl px-4 py-3 text-xs text-white focus:border-yellow-400 outline-none"
                />
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
    <div className="min-h-screen bg-[#1a0833] text-white font-sans flex justify-center items-center p-0 md:p-4" dir={user.language === 'العربية' ? 'rtl' : 'ltr'}>
      <div
        style={{
          backgroundImage: `url(${assetPath("main_background.jpg")})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="w-full max-w-md bg-[#1a0833] border-0 md:border-4 md:border-yellow-500/40 rounded-none md:rounded-[40px] shadow-[0_0_50px_rgba(147,51,234,0.3)] overflow-hidden min-h-screen md:min-h-[844px] flex flex-col justify-between relative"
      >

        {/* TOP STATUS BAR */}
        <div className="bg-[#120524]/90 px-6 py-2.5 flex justify-between items-center text-xs text-slate-200 border-b border-purple-500/30 z-10">
          <span className="font-bold text-white">9:41</span>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setActiveTab('admin')} 
              className="text-[10px] bg-yellow-500/20 text-yellow-400 px-2.5 py-1 rounded-lg border border-yellow-500/40 font-bold flex items-center gap-1 shadow"
            >
              <ShieldCheck className="w-3.5 h-3.5" /> {t.adminPanel}
            </button>
            <span className="text-purple-400/50">|</span>
            
            <button 
              onClick={handleSignOut}
              className="text-[10px] bg-red-500/20 text-red-300 px-2 py-1 rounded-lg border border-red-500/40 font-bold flex items-center gap-1 shadow"
              title={t.logout}
            >
              <LogOut className="w-3 h-3" /> {t.logout}
            </button>
            <span>📶 🔋</span>
          </div>
        </div>

        {/* MAIN DISPLAY AREA */}
        <div className="flex-1 overflow-y-auto pb-36 px-4 pt-4 relative z-10">

          {/* GLOBAL REAL-TIME PLAYER STATS BAR */}
          <div className="w-full bg-[#240a47]/95 rounded-2xl p-3 border border-yellow-500/40 flex justify-between items-center shadow-lg backdrop-blur-md mb-4">
            <div className="flex items-center gap-2">
              {/* Lives Counter */}
              <div className="bg-rose-950/80 border border-rose-500/50 px-2.5 py-1 rounded-xl flex items-center gap-1 text-xs font-bold text-rose-300">
                ❤️ <span>{lives}</span>
              </div>

              {/* Points Counter */}
              <div className="bg-purple-950/80 border border-purple-400/50 px-2.5 py-1 rounded-xl flex items-center gap-1 text-xs font-bold text-purple-200">
                🪙 <span>{user.points.toLocaleString()}</span>
              </div>
            </div>

            {/* DNC Token Balance */}
            <div className="bg-[#0f041d]/90 px-3 py-1 rounded-xl border border-yellow-500/40 text-xs font-black text-yellow-400 flex items-center gap-1">
              <span>{user.dncBalance}</span> <span className="text-[10px] text-slate-300">DNC</span>
            </div>
          </div>

          {/* SCREEN 1: HOME */}
          {activeTab === 'home' && (
            <div className="flex flex-col gap-4">
              
              <div className="relative w-full h-60 rounded-3xl p-4 border-2 border-yellow-500/50 text-center shadow-[0_0_30px_rgba(234,179,8,0.25)] overflow-hidden flex flex-col justify-between">
                <img 
                  src={assetPath('dnc_coin.png')} 
                  alt="Danat Coin Background" 
                  className="absolute inset-0 w-full h-full object-fill z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0833]/90 via-[#1a0833]/40 to-transparent z-0" />

                <div className="w-full flex justify-start items-center relative z-10">
                  <button 
                    onClick={() => setShowSettingsModal(true)}
                    className="p-2.5 bg-[#2a0c52]/90 hover:bg-[#3b1275] rounded-full text-yellow-400 border border-yellow-500/50 shadow-lg backdrop-blur-md"
                    title={t.settings}
                  >
                    <Settings className="w-4 h-4" />
                  </button>
                </div>

                <div className="relative z-10 flex flex-col items-center pb-1">
                  <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                    {t.appName}
                  </h1>
                  <p className="text-xs text-yellow-100 mt-0.5 font-bold drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]">
                    {t.subtitle}
                  </p>
                </div>
              </div>

              {/* User Info Bar */}
              <div className="w-full bg-[#240a47]/90 rounded-2xl p-4 border border-yellow-500/40 flex justify-between items-center shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="relative cursor-pointer group" onClick={() => setShowAvatarModal(true)}>
                    <img 
                      src={assetPath(user.avatar)} 
                      alt="Player Portrait" 
                      className="w-12 h-12 rounded-full border-2 border-yellow-400 object-cover shadow-xl group-hover:scale-105 transition"
                    />
                    <span className="absolute -bottom-1 -right-1 bg-yellow-500 text-slate-950 text-[10px] font-black px-1.5 py-0.2 rounded-full shadow">
                      ★ {user.level}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-white text-base">{user.name}</div>
                    <div className="text-xs text-yellow-400 font-bold">{t.levelLabel} {user.level}</div>
                  </div>
                </div>

                <div className="text-left bg-[#0f041d]/90 px-3.5 py-2 rounded-xl border border-yellow-500/40 shadow-inner">
                  <div className="text-[10px] text-slate-300">{t.dncBalance}</div>
                  <div className="text-sm font-black text-yellow-400 flex items-center gap-1">
                    {user.dncBalance.toLocaleString()} <span className="text-xs">D</span>
                  </div>
                </div>
              </div>

              {/* REWARDED AD ACTION BAR */}
              <div className="w-full bg-[#240a47]/90 rounded-2xl p-3.5 border border-purple-400/40 text-center shadow-lg">
                <div className="text-xs font-bold text-yellow-300 mb-2">📺 {t.watchForLife.split('(')[0]}</div>
                <div className="flex gap-2 justify-center">
                  <button 
                    onClick={handleWatchForLife}
                    className="flex-1 py-2 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs rounded-xl shadow border border-rose-400/40"
                  >
                    +1 ❤️
                  </button>
                  <button 
                    onClick={handleWatchForPoints}
                    className="flex-1 py-2 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow border border-sky-400/40"
                  >
                    +10 🪙
                  </button>
                </div>
              </div>

              {/* START GAME BUTTON */}
              <button 
                onClick={() => setActiveTab('quiz')} 
                className="w-full py-4 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-black text-xl rounded-2xl shadow-xl shadow-yellow-500/30 border-b-4 border-amber-700 active:translate-y-1 transition flex items-center justify-center gap-3"
              >
                {t.startPlay}
              </button>

              {/* SIX MINI-GAME CARDS */}
              <div className="w-full grid grid-cols-2 gap-3 mt-1">
                {[
                  { game: 'block', label: langKey === 'ar' ? 'تركيب المكعبات' : langKey === 'fr' ? 'Block Blast' : 'Block Blast', icon: '🧱' },
                  { game: 'word', label: langKey === 'ar' ? 'لعبة الكلمات' : langKey === 'fr' ? 'Jeu de mots' : 'Word Puzzle', icon: '🔤' },
                  { game: 'sudoku', label: 'Sudoku', icon: '🔢' },
                  { game: 'jigsaw', label: langKey === 'ar' ? 'أحجية الصور' : langKey === 'fr' ? 'Puzzle' : 'Jigsaw Puzzle', icon: '🧩' },
                  { game: 'dama', label: langKey === 'ar' ? 'داما' : langKey === 'fr' ? 'Dames' : 'Dama', icon: '🔴' },
                  { game: 'chess', label: langKey === 'ar' ? 'الشطرنج' : langKey === 'fr' ? 'Échecs' : 'Chess', icon: '♟️' },
                ].map((item) => (
                  <button
                    key={item.game}
                    onClick={() => setActiveTab(`minigame-${item.game}`)}
                    className="w-full h-36 bg-gradient-to-br from-[#32105c] to-[#170629] border border-yellow-500/40 rounded-2xl overflow-hidden shadow-lg active:scale-95 transition-transform flex flex-col items-center justify-center gap-3"
                  >
                    <span className="text-5xl">{item.icon}</span>
                    <span className="text-sm font-black text-yellow-300 drop-shadow-md px-2 text-center">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* MINI GAMES - scores stay separate from quiz points */}
          {activeTab.startsWith('minigame-') && (
            <MiniGamesErrorBoundary key={activeTab} onBack={() => setActiveTab('home')}>
              <MiniGames language={user.language} initialGame={activeTab.replace('minigame-', '')} onBack={() => setActiveTab('home')} />
            </MiniGamesErrorBoundary>
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

                  <div className="w-full bg-[#240a47]/90 rounded-2xl p-6 border border-purple-400/40 text-center shadow-xl my-2">
                    <h3 className="text-lg font-bold text-white leading-relaxed">
                      {getQuestionText(questions[currentQIndex])}
                    </h3>
                  </div>

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
                <img src={assetPath('dnc_coin.png')} alt="Logo" className="w-24 h-24 object-contain mb-2 drop-shadow-lg" />
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
                <button onClick={handleWatchAd} className="bg-purple-600 hover:bg-purple-500 text-white w-9 h-9 rounded-full font-bold text-xl flex items-center justify-center shadow">
                  +
                </button>
              </div>

              <div className="w-full bg-[#240a47]/90 rounded-2xl p-5 border border-yellow-500/40 flex justify-between items-center shadow-lg">
                <div className="flex items-center gap-3">
                  <img src={assetPath('dnc_coin.png')} alt="Logo" className="w-10 h-10 object-contain" />
                  <div>
                    <div className="text-xs text-slate-300">{t.dncBalance}</div>
                    <div className="text-2xl font-black text-yellow-400">{user.dncBalance.toLocaleString()}</div>
                  </div>
                </div>
                <button 
                  onClick={handleRedeemDnc}
                  className="bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs transition shadow"
                >
                  {t.redeemReq}
                </button>
              </div>

              <div className="w-full bg-[#0d031f]/80 rounded-xl p-3.5 border border-purple-400/30 text-center text-xs text-slate-200 shadow">
                <span className="font-bold text-yellow-400">{t.conversionRate}</span> 1,000 {t.points} = 1 DNC
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
                  onClick={handleWatchAd}
                  disabled={isWatchingAd}
                  className="bg-purple-600 hover:bg-purple-500 disabled:bg-purple-950 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition flex items-center gap-1.5 shadow"
                >
                  {isWatchingAd ? `${adTimer}s...` : t.watchBtn}
                </button>
              </div>
            </div>
          )}

          {/* SCREEN 4: LEADERBOARD */}
          {activeTab === 'leaderboard' && (
            <div className="flex flex-col gap-4">
              <div className="text-center my-2">
                <img src={assetPath('trophy_large.png')} alt="Trophy" className="w-14 h-14 mx-auto mb-1 object-contain" />
                <h2 className="text-2xl font-black text-yellow-400">{t.leaderboard}</h2>
              </div>

              <div className="w-full bg-[#240a47] p-1 rounded-xl flex gap-1 border border-purple-400/40 text-xs font-bold shadow">
                <button className="flex-1 py-2.5 bg-yellow-500 text-slate-950 rounded-lg shadow">
                  {t.topPlayers}
                </button>
              </div>

              <div className="w-full bg-[#0d031f] px-4 py-2.5 rounded-lg flex text-[11px] text-slate-300 font-bold border border-purple-400/30 shadow">
                <span className="w-12">{t.rank}</span>
                <span className="flex-1 text-right">{t.player}</span>
                <span className="w-20 text-left">{t.pts}</span>
              </div>

              <div className="w-full space-y-2.5">
                {loadingLeaderboard ? (
                  <div className="w-full bg-[#240a47]/80 p-6 rounded-xl border border-purple-400/30 text-center text-xs text-slate-300 shadow">
                    {t.loading}
                  </div>
                ) : leaderboardUsers.length === 0 ? (
                  <div className="w-full bg-[#240a47]/80 p-6 rounded-xl border border-purple-400/30 text-center text-xs text-slate-300 shadow">
                    {t.emptyLeaderboard}
                  </div>
                ) : (
                  leaderboardUsers.map((player, index) => (
                    <div key={player.id} className="w-full bg-[#240a47]/90 px-4 py-3 rounded-xl border border-purple-400/40 flex items-center justify-between text-xs shadow">
                      <div className="w-12 font-black text-yellow-400 flex items-center gap-1">
                        {index === 0 ? '👑 1' : index === 1 ? '🥈 2' : index === 2 ? '🥉 3' : `#${index + 1}`}
                      </div>
                      <div className="flex-1 flex items-center gap-2.5 text-right">
                        <img src={assetPath(player.avatar || 'avatar-man-ghutra.png')} alt="Avatar" className="w-8 h-8 rounded-full border border-yellow-400 object-cover" />
                        <span className="font-bold text-white truncate max-w-[120px]">{player.name || 'لاعب'}</span>
                      </div>
                      <div className="w-20 text-left font-black text-purple-300">
                        {(player.points || player.spirits || 0).toLocaleString()} 🪙
                      </div>
                    </div>
                  ))
                )}
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
                    {currentUser?.email} <Lock className="w-3 h-3 text-slate-400" />
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

              <div className="w-full grid grid-cols-3 gap-2">
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

              <div className="w-full space-y-3 mt-1">
                <button 
                  onClick={() => setShowWalletModal(true)}
                  className={`w-full py-4 px-4 rounded-2xl border font-bold text-sm flex items-center justify-between transition shadow ${
                    user.walletConnected 
                      ? 'bg-emerald-950/50 border-emerald-500/60 text-emerald-300' 
                      : 'bg-[#240a47] border-purple-400/40 text-purple-200 hover:bg-[#320d63]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <img src={assetPath('dnc_coin.png')} alt="Wallet" className="w-6 h-6 object-contain" />
                    <span>{user.walletConnected ? t.walletConnected : t.connectWallet}</span>
                  </div>
                  <span className="text-xs bg-purple-500/20 px-3 py-1 rounded-lg">
                    {user.walletConnected ? `${user.walletAddress.substring(0,6)}...` : t.connectBtn}
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* ADMIN PANEL */}
          {activeTab === 'admin' && (
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center border-b border-purple-400/40 pb-3">
                <h2 className="text-base font-bold text-yellow-400 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" /> {t.adminPanel}
                </h2>
                <button onClick={() => setActiveTab('home')} className="text-xs bg-[#240a47] px-3 py-1 rounded-lg text-slate-200 border border-purple-400/40">{t.close}</button>
              </div>

              <button 
                onClick={fetchAllPlayersAndExportCSV}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg transition text-xs"
              >
                <Download className="w-4 h-4" /> {t.downloadCsvReport}
              </button>

              <p className="text-xs text-slate-300 mt-2">{t.adminRedeemNotice}</p>

              <div className="space-y-3">
                {redemptions.map(req => (
                  <div key={req.id} className="bg-[#240a47]/90 p-4 rounded-xl border border-purple-400/40 text-xs space-y-2.5 shadow">
                    <div className="flex justify-between font-bold">
                      <span className="text-white">{req.user}</span>
                      <span className={req.status === 'APPROVED' ? 'text-emerald-400' : 'text-amber-400'}>
                        {req.status === 'APPROVED' ? t.approved : t.pending}
                      </span>
                    </div>

                    <div className="text-slate-300 flex justify-between">
                      <span>{t.pts}: {req.points}</span>
                      <span className="text-yellow-400 font-bold">{req.dnc} DNC</span>
                    </div>

                    <div className="text-[10px] text-slate-300 font-mono break-all bg-[#0d031f] p-2 rounded border border-purple-400/30">
                      {t.walletLabel} {req.wallet}
                    </div>

                    {req.status === 'PENDING' && (
                      <button 
                        onClick={() => handleAdminApprove(req.id)}
                        className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold mt-1 transition shadow"
                      >
                        {t.approveAndSend}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* 10-QUESTIONS MILESTONE VIDEO AD MODAL */}
        {showMilestoneAd && (
          <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-md z-50 flex items-center justify-center p-6">
            <div className="w-full bg-[#240a47] border-2 border-yellow-500 rounded-3xl p-6 text-center space-y-4 shadow-[0_0_50px_rgba(234,179,8,0.5)]">
              <div className="w-14 h-14 bg-yellow-500/20 border border-yellow-400 rounded-full flex items-center justify-center mx-auto text-yellow-400">
                <Tv className="w-7 h-7 animate-pulse" />
              </div>
              <h3 className="text-lg font-black text-yellow-400">
                {t.milestoneAdTitle}
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed">
                {t.milestoneAdDesc}
              </p>
              
              <div className="bg-[#0d031f] py-4 rounded-2xl border border-purple-400/40 text-sm font-black text-yellow-300">
                ⏳ {t.pleaseWait} {milestoneAdTimer} {t.seconds}
              </div>
              
              <div className="text-[10px] text-purple-300">
                {t.autoRewardNotice}
              </div>
            </div>
          </div>
        )}

        {/* FORCED GOOGLE REWARDED VIDEO AD MODAL */}
        {showForcedAd && (
          <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-md z-50 flex items-center justify-center p-6">
            <div className="w-full bg-[#240a47] border-2 border-yellow-500 rounded-3xl p-6 text-center space-y-4 shadow-[0_0_50px_rgba(234,179,8,0.5)]">
              <div className="w-14 h-14 bg-yellow-500/20 border border-yellow-400 rounded-full flex items-center justify-center mx-auto text-yellow-400">
                <Tv className="w-7 h-7 animate-pulse" />
              </div>
              <h3 className="text-lg font-black text-yellow-400">{t.forcedAdTitle}</h3>
              <p className="text-xs text-slate-200 leading-relaxed">
                {t.forcedAdDesc}
              </p>
              
              <div className="bg-[#0d031f] py-4 rounded-2xl border border-purple-400/40 text-sm font-black text-yellow-300">
                ⏳ {t.pleaseWait} {forcedAdTimer} {t.seconds}
              </div>
              
              <div className="text-[10px] text-purple-300">
                {t.forcedAdRewardNotice}
              </div>
            </div>
          </div>
        )}

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
        <div className="absolute bottom-0 left-0 right-0 bg-[#0d031f]/95 border-t border-purple-400/30 px-4 py-2 flex justify-between items-center backdrop-blur-md z-20 shadow-2xl">
          {[
            { id: 'home', label: t.appName, icon: 'dnc_coin.png', type: 'image' },
            { id: 'quiz', label: t.startPlay, icon: 'dnc_coin.png', type: 'image' },
            { id: 'rewards', label: t.rewards, icon: 'nav_rewards.png', type: 'image' },
            { id: 'leaderboard', label: t.leaderboard, icon: 'nav_leaderboard.png', type: 'image' },
            { id: 'profile', label: t.profile, icon: user.avatar, type: 'dynamic_avatar' }
          ].map(tab => {
            const isActive = activeTab === tab.id;
            const isAvatar = tab.type === 'dynamic_avatar';
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition ${
                  isActive ? 'scale-110 opacity-100' : 'opacity-60 hover:opacity-100'
                }`}
              >
                {isAvatar ? (
                  <img src={assetPath(tab.icon)} alt="Profile" className="w-7 h-7 rounded-full object-cover border border-purple-400" />
                ) : (
                  <img src={assetPath(tab.icon)} alt={tab.label} className="w-7 h-7 object-contain" />
                )}
                <span className={`text-[10px] font-bold ${isActive ? 'text-yellow-400' : 'text-slate-300'}`}>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* WALLETCONNECT MODAL */}
        {showWalletModal && (
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="w-full bg-[#240a47] border border-yellow-500/50 rounded-3xl p-5 text-right space-y-4 shadow-2xl" dir={user.language === 'العربية' ? 'rtl' : 'ltr'}>
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-white text-base">{t.connectWeb3Title}</h3>
                <button onClick={() => setShowWalletModal(false)} className="text-slate-300 p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {t.connectWeb3Desc}
              </p>

              <input 
                type="text" 
                placeholder="0x71C7656EC7ab88b098defB751B7401B5f6d8939A"
                value={customWallet}
                onChange={(e) => setCustomWallet(e.target.value)}
                className="w-full bg-[#0d031f] border border-purple-400/40 rounded-xl p-3 text-xs text-white font-mono dir-ltr focus:border-yellow-500 outline-none shadow-inner"
              />

              <button 
                onClick={() => handleConnectWallet(customWallet)}
                className="w-full py-3.5 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-black text-xs rounded-xl shadow-lg"
              >
                {t.confirmConnectBtn}
              </button>
            </div>
          </div>
        )}

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
