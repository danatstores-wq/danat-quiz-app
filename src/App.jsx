import React, { useState, useEffect } from 'react';
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
  getDocs 
} from 'firebase/firestore';

// --- Sample Initial Questions ---
const INITIAL_QUESTIONS = [
  {
    id: 1,
    question: "ما هي عاصمة المملكة العربية السعودية؟",
    options: ["جدة", "الرياض", "الدمام", "مكة المكرمة"],
    correctAnswer: 1,
    points: 50,
    category: "جغرافيا"
  },
  {
    id: 2,
    question: "ما هي العملة الأساسية لشَبكة Danat Coin؟",
    options: ["ETH", "USDT", "DNC", "BTC"],
    correctAnswer: 2,
    points: 100,
    category: "كريبتو"
  },
  {
    id: 3,
    question: "كم عدد أركان الإسلام؟",
    options: ["4", "5", "6", "7"],
    correctAnswer: 1,
    points: 50,
    category: "ثقافة عامة"
  }
];

export default function App() {
  // --- Auth & User State ---
  const [currentUser, setCurrentUser] = useState(null);
  const [authMode, setAuthMode] = useState('login'); // 'login', 'signup', or 'forgot'
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [authError, setAuthError] = useState('');
  const [authMessage, setAuthMessage] = useState('');

  const [activeTab, setActiveTab] = useState('home');

  const [user, setUser] = useState({
    name: 'أحمد',
    email: 'ahmad.dnc@danatstores.com',
    language: 'العربية',
    level: 1,
    spirits: 0,
    dncBalance: 0.0,
    totalGames: 0,
    totalEarnedSpirits: 0,
    walletConnected: false,
    walletAddress: '',
    avatar: 'avatar-man-ghutra.png',
  });

  const [levelsPlayed, setLevelsPlayed] = useState(0);
  const [showForcedAd, setShowForcedAd] = useState(false);
  const [forcedAdTimer, setForcedAdTimer] = useState(5);

  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [customWallet, setCustomWallet] = useState('');
  const [isWatchingAd, setIsWatchingAd] = useState(false);
  const [adTimer, setAdTimer] = useState(5);
  
  // Quiz Loop State
  const [questions, setQuestions] = useState(INITIAL_QUESTIONS);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const [lifeline50Used, setLifeline50Used] = useState(false);
  const [lifelineExtraUsed, setLifelineExtraUsed] = useState(false);

  const [redemptions, setRedemptions] = useState([
    { id: '1', user: 'أحمد', spirits: 1000, dnc: 1, wallet: '0x71C...39A', status: 'PENDING', date: '2026-11-02' },
    { id: '2', user: 'محمد علي', spirits: 5000, dnc: 5, wallet: '0x38B...12F', status: 'APPROVED', date: '2026-11-01' },
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

  const assetPath = (filename) => `${import.meta.env.BASE_URL}assets/${filename}`;

  // Listen to Firebase Auth state changes & sync Firestore profile
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        setCurrentUser(authUser);
        const userDocRef = doc(db, "users", authUser.uid);
        const userSnap = await getDoc(userDocRef);
        if (userSnap.exists()) {
          const data = userSnap.data();
          setUser(prev => ({
            ...prev,
            name: data.name || authUser.email.split('@')[0],
            email: authUser.email,
            spirits: data.spirits ?? prev.spirits,
            dncBalance: data.dncBalance ?? prev.dncBalance,
            level: data.level ?? prev.level,
            totalGames: data.totalGames ?? prev.totalGames,
            totalEarnedSpirits: data.totalEarnedSpirits ?? prev.totalEarnedSpirits,
            walletConnected: data.walletConnected ?? prev.walletConnected,
            walletAddress: data.walletAddress ?? prev.walletAddress,
            avatar: data.avatar ?? prev.avatar,
          }));
        }
      } else {
        setCurrentUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // --- Firebase Auth Handlers ---
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
        spirits: 0,
        dncBalance: 0.0,
        level: 1,
        totalGames: 0,
        totalEarnedSpirits: 0,
        walletConnected: false,
        walletAddress: '',
        avatar: 'avatar-man-ghutra.png',
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

  // --- Admin CSV Export ---
  const fetchAllPlayersAndExportCSV = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      let csvContent = "data:text/csv;charset=utf-8,";
      csvContent += "Name,Email,Spirits,DNC Balance,Total Games,Wallet Address\n";

      querySnapshot.forEach((docSnap) => {
        const p = docSnap.data();
        const row = [
          `"${p.name || ''}"`,
          `"${p.email || ''}"`,
          p.spirits || 0,
          p.dncBalance || 0,
          p.totalGames || 0,
          `"${p.walletAddress || 'Not Connected'}"`
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

  const handleAnswerSubmit = () => {
    if (selectedOption === null) return;
    const currentQ = questions[currentQIndex];
    const isCorrect = selectedOption === currentQ.correctAnswer;

    if (isCorrect) {
      setScore(prev => prev + currentQ.points);
    }
    setIsAnswered(true);
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
          spirits: prev.spirits + 50,
          totalEarnedSpirits: prev.totalEarnedSpirits + 50
        }));

        if (currentUser) {
          await updateDoc(doc(db, "users", currentUser.uid), {
            spirits: increment(50),
            totalEarnedSpirits: increment(50),
            forcedAdsWatched: increment(1)
          });
        }

        alert('🌐 تم الاتصال بالإنترنت: شاهدت إعلان جوجل الإجباري وحصلت على 50 روح!');
        setActiveTab('home');
      }
    }, 1000);
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
        setUser(prev => ({
          ...prev,
          spirits: prev.spirits + 100,
          totalEarnedSpirits: prev.totalEarnedSpirits + 100
        }));

        if (currentUser) {
          await updateDoc(doc(db, "users", currentUser.uid), {
            spirits: increment(100),
            totalEarnedSpirits: increment(100),
            rewardedAdsWatched: increment(1)
          });
        }

        alert('🎉 تهانينا! حصلت على 100 روح إضافية.');
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
      alert('يرجى ربط محفظتك أولاً من صفحة الملف الشخصي!');
      setActiveTab('profile');
      return;
    }
    if (user.spirits < 1000) {
      alert('رصيدك غير كافٍ. الحد الأدنى للتحويل هو 1,000 روح.');
      return;
    }

    const updatedSpirits = user.spirits - 1000;
    const updatedDnc = user.dncBalance + 1;

    setUser(prev => ({
      ...prev,
      spirits: updatedSpirits,
      dncBalance: updatedDnc
    }));

    if (currentUser) {
      await updateDoc(doc(db, "users", currentUser.uid), {
        spirits: increment(-1000),
        dncBalance: increment(1)
      });
    }

    const newReq = {
      id: Date.now().toString(),
      user: user.name,
      spirits: 1000,
      dnc: 1,
      wallet: user.walletAddress,
      status: 'PENDING',
      date: new Date().toISOString().split('T')[0]
    };

    setRedemptions([newReq, ...redemptions]);
    alert('تم تقديم طلب الاستبدال بنجاح! بانتظار موافقة المسؤول.');
  };

  const handleAdminApprove = (id) => {
    setRedemptions(redemptions.map(r => r.id === id ? { ...r, status: 'APPROVED' } : r));
  };

  // Render Authentication View if user is not logged in
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-[#1a0833] text-white flex items-center justify-center p-4" dir="rtl">
        <div className="w-full max-w-md bg-[#240a47] border-2 border-yellow-500/40 rounded-3xl p-6 shadow-2xl space-y-5">
          <div className="flex justify-center mb-2">
            <Coins className="w-12 h-12 text-yellow-400 animate-bounce" />
          </div>
          <h1 className="text-2xl font-black text-center text-yellow-400">دانات كويز | Danat Quiz</h1>
          <p className="text-slate-300 text-center text-xs">سجل دخولك أو أنشئ حساباً لحفظ بياناتك في السحابة</p>

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
                <label className="block text-xs text-slate-300 mb-1">البريد الإلكتروني لاستعادة كلمة المرور</label>
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
                إرسال رابط الاستعادة
              </button>
              <div className="text-center pt-2">
                <button 
                  type="button"
                  onClick={() => { setAuthMode('login'); setAuthError(''); setAuthMessage(''); }}
                  className="text-xs text-yellow-400 font-bold hover:underline"
                >
                  العودة لتسجيل الدخول
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={authMode === 'login' ? handleSignIn : handleSignUp} className="space-y-4">
              {authMode === 'signup' && (
                <div>
                  <label className="block text-xs text-slate-300 mb-1">الاسم الكامل</label>
                  <input 
                    type="text" 
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    placeholder="أدخل اسمك"
                    required
                    className="w-full bg-[#0d031f] border border-purple-400/40 rounded-xl px-4 py-3 text-xs text-white focus:border-yellow-400 outline-none"
                  />
                </div>
              )}
              <div>
                <label className="block text-xs text-slate-300 mb-1">البريد الإلكتروني</label>
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
                <label className="block text-xs text-slate-300 mb-1">كلمة المرور</label>
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
                    هل نسيت كلمة المرور؟
                  </button>
                </div>
              )}

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-black py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-sm"
              >
                {authMode === 'login' ? <LogIn className="w-4 h-4" /> : <UserPlus className="w-4 h-4" />}
                {authMode === 'login' ? 'تسجيل الدخول' : 'إنشاء حساب جديد'}
              </button>
            </form>
          )}

          {authMode !== 'forgot' && (
            <div className="text-center pt-2">
              <button 
                onClick={() => { setAuthMode(authMode === 'login' ? 'signup' : 'login'); setAuthError(''); setAuthMessage(''); }}
                className="text-xs text-yellow-400 font-bold hover:underline"
              >
                {authMode === 'login' ? 'ليس لديك حساب؟ أنشئ حساباً الآن' : 'لديك حساب بالفعل؟ سجل الدخول'}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // --- Main Game App View ---
  return (
    <div className="min-h-screen bg-[#1a0833] text-white font-sans flex justify-center items-center p-0 md:p-4" dir="rtl">
      <div
        style={{
          backgroundImage: `url(${assetPath("main_background.jpg")})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="w-full max-w-md bg-[#1a0833] border-0 md:border-4 md:border-yellow-500/40 rounded-none md:rounded-[40px] shadow-[0_0_50px_rgba(147,51,234,0.3)] overflow-hidden min-h-screen md:min-h-[844px] flex flex-col justify-between relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a0c52]/80 via-[#1a0833]/90 to-[#0d031f]/95 z-0" />

        {/* TOP STATUS BAR */}
        <div className="bg-[#120524]/90 px-6 py-2.5 flex justify-between items-center text-xs text-slate-200 border-b border-purple-500/30 z-10">
          <span className="font-bold text-white">9:41</span>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setActiveTab('admin')} 
              className="text-[10px] bg-yellow-500/20 text-yellow-400 px-2.5 py-1 rounded-lg border border-yellow-500/40 font-bold flex items-center gap-1 shadow"
            >
              <ShieldCheck className="w-3.5 h-3.5" /> لوحة الإدارة
            </button>
            <span className="text-purple-400/50">|</span>
            
            <button 
              onClick={handleSignOut}
              className="text-[10px] bg-red-500/20 text-red-300 px-2 py-1 rounded-lg border border-red-500/40 font-bold flex items-center gap-1 shadow"
              title="تسجيل الخروج"
            >
              <LogOut className="w-3 h-3" /> خروج
            </button>
            <span>📶 🔋</span>
          </div>
        </div>

        {/* MAIN DISPLAY AREA */}
        <div className="flex-1 overflow-y-auto pb-36 px-4 pt-4 relative z-10">

          {/* SCREEN 1: HOME */}
          {activeTab === 'home' && (
            <div className="flex flex-col items-center gap-4">
              
              <div className="relative w-full h-60 rounded-3xl p-4 border-2 border-yellow-500/50 text-center shadow-[0_0_30px_rgba(234,179,8,0.25)] overflow-hidden flex flex-col justify-between">
                <img 
                  src={assetPath('dnc_coin.png')} 
                  alt="Danat Coin Background" 
                  className="absolute inset-0 w-full h-full object-fill z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0833]/90 via-[#1a0833]/40 to-transparent z-0" />

                <div className="w-full flex justify-start items-center relative z-10">
                  <button className="p-2.5 bg-[#2a0c52]/90 hover:bg-[#3b1275] rounded-full text-yellow-400 border border-yellow-500/50 shadow-lg backdrop-blur-md">
                    <Settings className="w-4 h-4" />
                  </button>
                </div>

                <div className="relative z-10 flex flex-col items-center pb-1">
                  <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                    دانات كويز
                  </h1>
                  <p className="text-xs text-yellow-100 mt-0.5 font-bold drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]">
                    اختبر معلوماتك .. واربح المكافآت
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
                    <div className="text-xs text-yellow-400 font-bold">المستوى {user.level}</div>
                  </div>
                </div>

                <div className="text-left bg-[#0f041d]/90 px-3.5 py-2 rounded-xl border border-yellow-500/40 shadow-inner">
                  <div className="text-[10px] text-slate-300">رصيد DNC</div>
                  <div className="text-sm font-black text-yellow-400 flex items-center gap-1">
                    {user.dncBalance.toLocaleString()} <span className="text-xs">D</span>
                  </div>
                </div>
              </div>

              {/* START GAME BUTTON */}
              <button 
                onClick={() => setActiveTab('quiz')} 
                className="w-full py-4 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-black text-xl rounded-2xl shadow-xl shadow-yellow-500/30 border-b-4 border-amber-700 active:translate-y-1 transition flex items-center justify-center gap-3"
              >
                <img src={assetPath('3d_question.png')} alt="Play" className="w-7 h-7 object-contain" />
                ابدأ اللعب
              </button>

              {/* 4 FEATURE CARDS */}
              <div className="w-full grid grid-cols-2 gap-3 mt-1">
                {[
                  { label: "المكافآت", icon: "gift_large.png", tab: "rewards" },
                  { label: "لوحة المتصدرين", icon: "trophy_large.png", tab: "leaderboard" },
                  { label: "ملفي الشخصي", icon: "nav_profile.png", tab: "profile" },
                  { label: "إحصائيات", icon: "stats_icon.png", tab: "statistics" },
                ].map((item) => (
                  <button 
                    key={item.label} 
                    onClick={() => setActiveTab(item.tab)}
                    className="relative w-full h-36 bg-[#240a47]/90 border border-purple-500/40 rounded-2xl overflow-hidden shadow-lg group active:scale-95 transition-transform"
                  >
                    <img 
                      src={assetPath(item.icon)} 
                      alt={item.label} 
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center pb-2">
                      <span className="text-xs font-black text-yellow-300 drop-shadow-md px-2 py-0.5 rounded bg-black/40 border border-yellow-500/30">
                        {item.label}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* SCREEN: STATISTICS */}
          {activeTab === 'statistics' && (
            <div className="flex flex-col gap-4">
              <div className="text-center my-2">
                <span className="text-4xl">📊</span>
                <h2 className="text-2xl font-black text-yellow-400 mt-2">إحصائيات اللاعب</h2>
              </div>

              <div className="w-full grid grid-cols-2 gap-3">
                <div className="bg-[#240a47] p-4 rounded-2xl border border-purple-400/40 text-center shadow">
                  <div className="text-xs text-slate-300 mb-1">إجمالي الألعاب</div>
                  <div className="text-2xl font-black text-white">{user.totalGames}</div>
                </div>

                <div className="bg-[#240a47] p-4 rounded-2xl border border-purple-400/40 text-center shadow">
                  <div className="text-xs text-slate-300 mb-1">المستوى الحالي</div>
                  <div className="text-2xl font-black text-yellow-400">★ {user.level}</div>
                </div>

                <div className="bg-[#240a47] p-4 rounded-2xl border border-purple-400/40 text-center shadow">
                  <div className="text-xs text-slate-300 mb-1">الأرواح المكتسبة</div>
                  <div className="text-xl font-black text-purple-300">{user.totalEarnedSpirits.toLocaleString()}</div>
                </div>

                <div className="bg-[#240a47] p-4 rounded-2xl border border-purple-400/40 text-center shadow">
                  <div className="text-xs text-slate-300 mb-1">رصيد DNC</div>
                  <div className="text-xl font-black text-yellow-400">{user.dncBalance}</div>
                </div>
              </div>

              <button 
                onClick={() => setActiveTab('home')}
                className="w-full mt-4 py-3 bg-[#240a47] hover:bg-[#320d63] border border-purple-400/40 text-white font-bold rounded-xl transition text-xs"
              >
                العودة للرئيسية
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
                  <Clock className="w-3.5 h-3.5" /> 25
                </div>
              </div>

              <div className="flex justify-center">
                <div className="bg-purple-600/40 border border-purple-400 text-purple-200 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow">
                  {questions[currentQIndex].category} (السؤال {currentQIndex + 1} من {questions.length})
                </div>
              </div>

              <div className="w-full bg-[#240a47]/90 rounded-2xl p-6 border border-purple-400/40 text-center shadow-xl my-2">
                <h3 className="text-lg font-bold text-white leading-relaxed">
                  {questions[currentQIndex].question}
                </h3>
              </div>

              <div className="w-full space-y-3">
                {questions[currentQIndex].options.map((optText, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrectAnswer = idx === questions[currentQIndex].correctAnswer;
                  
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
                  تأكيد الإجابة
                </button>
              ) : (
                <button 
                  onClick={handleNextQuestion}
                  className="w-full mt-4 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-sm rounded-2xl shadow-xl transition"
                >
                  السؤال التالي ➡️
                </button>
              )}

              <div className="w-full grid grid-cols-2 gap-3 mt-2">
                <button 
                  onClick={() => setLifelineExtraUsed(true)}
                  disabled={lifelineExtraUsed}
                  className={`py-3 px-3 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1 transition shadow ${
                    lifelineExtraUsed ? 'bg-slate-900 border-slate-800 text-slate-600' : 'bg-[#240a47]/80 border-purple-400/30 text-yellow-400'
                  }`}
                >
                  <img src={assetPath('help.png')} alt="Help Star" className="w-6 h-6 object-contain" />
                  <span>مكافأة إضافية</span>
                </button>

                <button 
                  onClick={() => setLifeline50Used(true)}
                  disabled={lifeline50Used}
                  className={`py-3 px-3 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1 transition shadow ${
                    lifeline50Used ? 'bg-slate-900 border-slate-800 text-slate-600' : 'bg-[#240a47]/80 border-purple-400/30 text-purple-400'
                  }`}
                >
                  <img src={assetPath('help_5050.png')} alt="50:50" className="w-6 h-6 object-contain" />
                  <span>50:50 مساعدة</span>
                </button>
              </div>
            </div>
          )}

          {/* SCREEN 3: REWARDS */}
          {activeTab === 'rewards' && (
            <div className="flex flex-col gap-5">
              <div className="text-center my-2 flex flex-col items-center">
                <img src={assetPath('dnc_coin.png')} alt="Logo" className="w-24 h-24 object-contain mb-2 drop-shadow-lg" />
                <h2 className="text-2xl font-black text-yellow-400 bg-amber-500/20 px-6 py-1.5 rounded-full border border-amber-400/40 shadow">مكافآتي</h2>
              </div>

              <div className="w-full bg-[#240a47]/90 rounded-2xl p-5 border border-purple-400/40 flex justify-between items-center shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center">
                    <img src={assetPath('dnc_coin.png')} alt="Coin" className="w-8 h-8 object-contain" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-300">أرواح حالية</div>
                    <div className="text-2xl font-black text-purple-300">{user.spirits.toLocaleString()}</div>
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
                    <div className="text-xs text-slate-300">رصيد DNC</div>
                    <div className="text-2xl font-black text-yellow-400">{user.dncBalance.toLocaleString()}</div>
                  </div>
                </div>
                <button 
                  onClick={handleRedeemDnc}
                  className="bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs transition shadow"
                >
                  طلب استبدال
                </button>
              </div>

              <div className="w-full bg-[#0d031f]/80 rounded-xl p-3.5 border border-purple-400/30 text-center text-xs text-slate-200 shadow">
                <span className="font-bold text-yellow-400">معادلة التحويل:</span> 1,000 روح = 1 DNC
              </div>

              <div className="w-full bg-gradient-to-br from-purple-900/50 to-[#240a47] rounded-2xl p-4 border border-purple-500/40 flex items-center justify-between gap-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300">
                    <Tv className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">شاهد فيديو إعلاني</div>
                    <div className="text-[10px] text-purple-300">واحصل على 100 روح إضافية</div>
                  </div>
                </div>

                <button 
                  onClick={handleWatchAd}
                  disabled={isWatchingAd}
                  className="bg-purple-600 hover:bg-purple-500 disabled:bg-purple-950 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition flex items-center gap-1.5 shadow"
                >
                  {isWatchingAd ? `${adTimer}s...` : 'مشاهدة'}
                </button>
              </div>
            </div>
          )}

          {/* SCREEN 4: LEADERBOARD */}
          {activeTab === 'leaderboard' && (
            <div className="flex flex-col gap-4">
              <div className="text-center my-2">
                <img src={assetPath('trophy_large.png')} alt="Trophy" className="w-14 h-14 mx-auto mb-1 object-contain" />
                <h2 className="text-2xl font-black text-yellow-400">لوحة المتصدرين</h2>
              </div>

              <div className="w-full bg-[#240a47] p-1 rounded-xl flex gap-1 border border-purple-400/40 text-xs font-bold shadow">
                <button className="flex-1 py-2.5 bg-yellow-500 text-slate-950 rounded-lg shadow">
                  أفضل اللاعبين
                </button>
                <button className="flex-1 py-2.5 text-slate-300 hover:text-white">
                  أعلى النقاط
                </button>
              </div>

              <div className="w-full bg-[#0d031f] px-4 py-2.5 rounded-lg flex text-[11px] text-slate-300 font-bold border border-purple-400/30 shadow">
                <span className="w-12">المركز</span>
                <span className="flex-1 text-right">اللاعب</span>
                <span className="w-20 text-left">النقاط</span>
              </div>

              <div className="w-full space-y-2.5">
                {[
                  { rank: 1, name: 'محمد علي', points: '450,250' },
                  { rank: 2, name: 'سارة أحمد', points: '420,750' },
                  { rank: 3, name: 'أحمد خالد', points: '380,600' },
                  { rank: 4, name: 'ليلى منصور', points: '350,400' },
                  { rank: 5, name: 'عمر يوسف', points: '320,100' }
                ].map(player => (
                  <div key={player.rank} className="w-full bg-[#240a47]/80 p-3.5 rounded-xl border border-purple-400/30 flex items-center justify-between text-xs shadow">
                    <div className="w-8 h-8 rounded-full bg-[#0d031f] border border-yellow-500/40 flex items-center justify-center font-bold text-yellow-400 shadow">
                      {player.rank}
                    </div>
                    <div className="flex-1 px-3 font-bold text-slate-100">{player.name}</div>
                    <div className="w-24 text-left font-black text-yellow-400">{player.points}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SCREEN 5: PROFILE */}
          {activeTab === 'profile' && (
            <div className="flex flex-col gap-5">
              <div className="text-center my-2">
                <h2 className="text-2xl font-black text-white">ملفي الشخصي</h2>
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
                  ✏️ تغيير الصورة الشخصية
                </button>

                <div className="flex items-center gap-2 mt-1 bg-[#240a47] px-4 py-2 rounded-xl border border-purple-400/30">
                  <h3 className="text-base font-bold text-white">{user.name}</h3>
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                </div>

                <span className="text-xs text-yellow-400 font-bold">المستوى {user.level}</span>
              </div>

              <div className="w-full bg-[#240a47]/90 rounded-2xl p-4 border border-purple-400/40 space-y-3 text-xs shadow">
                <div className="flex justify-between items-center border-b border-purple-500/30 pb-2.5">
                  <span className="text-slate-300">البريد الإلكتروني:</span>
                  <span className="font-mono text-yellow-400 flex items-center gap-1">
                    {currentUser.email} <Lock className="w-3 h-3 text-slate-400" />
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-300">لغة التطبيق:</span>
                  <span className="font-bold text-white flex items-center gap-1">
                    {user.language} <Lock className="w-3 h-3 text-slate-400" />
                  </span>
                </div>
              </div>

              <div className="w-full grid grid-cols-3 gap-2">
                <div className="bg-[#240a47] p-3 rounded-2xl border border-purple-400/40 text-center shadow">
                  <div className="text-[10px] text-slate-300 mb-1">عدد الألعاب</div>
                  <div className="text-base font-black text-white">{user.totalGames}</div>
                </div>

                <div className="bg-[#240a47] p-3 rounded-2xl border border-purple-400/40 text-center shadow">
                  <div className="text-[10px] text-slate-300 mb-1">أرواح مكتسبة</div>
                  <div className="text-base font-black text-purple-300">{user.totalEarnedSpirits.toLocaleString()}</div>
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
                    <span>{user.walletConnected ? 'المحفظة متصلة' : 'ربط المحفظة (WalletConnect)'}</span>
                  </div>
                  <span className="text-xs bg-purple-500/20 px-3 py-1 rounded-lg">
                    {user.walletConnected ? `${user.walletAddress.substring(0,6)}...` : 'ربط'}
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
                  <ShieldCheck className="w-5 h-5" /> لوحة موافقة الأدمن والتقارير
                </h2>
                <button onClick={() => setActiveTab('home')} className="text-xs bg-[#240a47] px-3 py-1 rounded-lg text-slate-200 border border-purple-400/40">إغلاق</button>
              </div>

              <button 
                onClick={fetchAllPlayersAndExportCSV}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg transition text-xs"
              >
                <Download className="w-4 h-4" /> تحميل تقرير اللاعبين الكامل (CSV)
              </button>

              <p className="text-xs text-slate-300 mt-2">مراجعة طلبات استبدال دانات كوين قبل إرسال التوكنز للمحفظة:</p>

              <div className="space-y-3">
                {redemptions.map(req => (
                  <div key={req.id} className="bg-[#240a47]/90 p-4 rounded-xl border border-purple-400/40 text-xs space-y-2.5 shadow">
                    <div className="flex justify-between font-bold">
                      <span className="text-white">{req.user}</span>
                      <span className={req.status === 'APPROVED' ? 'text-emerald-400' : 'text-amber-400'}>
                        {req.status === 'APPROVED' ? 'تم الاعتماد' : 'قيد الانتظار'}
                      </span>
                    </div>

                    <div className="text-slate-300 flex justify-between">
                      <span>الأرواح: {req.spirits}</span>
                      <span className="text-yellow-400 font-bold">{req.dnc} DNC</span>
                    </div>

                    <div className="text-[10px] text-slate-300 font-mono break-all bg-[#0d031f] p-2 rounded border border-purple-400/30">
                      المحفظة: {req.wallet}
                    </div>

                    {req.status === 'PENDING' && (
                      <button 
                        onClick={() => handleAdminApprove(req.id)}
                        className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold mt-1 transition shadow"
                      >
                        اعتماد وإرسال التوكنز
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* FORCED GOOGLE REWARDED VIDEO AD MODAL */}
        {showForcedAd && (
          <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-md z-50 flex items-center justify-center p-6">
            <div className="w-full bg-[#240a47] border-2 border-yellow-500 rounded-3xl p-6 text-center space-y-4 shadow-[0_0_50px_rgba(234,179,8,0.5)]">
              <div className="w-14 h-14 bg-yellow-500/20 border border-yellow-400 rounded-full flex items-center justify-center mx-auto text-yellow-400">
                <Tv className="w-7 h-7 animate-pulse" />
              </div>
              <h3 className="text-lg font-black text-yellow-400">إعلان جوجل الإجباري</h3>
              <p className="text-xs text-slate-200 leading-relaxed">
                لقد أنهيت 4 مستويات بنجاح! يلزم الاتصال بالإنترنت ومشاهدة هذا الإعلان القصير للمتابعة:
              </p>
              
              <div className="bg-[#0d031f] py-4 rounded-2xl border border-purple-400/40 text-sm font-black text-yellow-300">
                ⏳ يرجى الانتظار... {forcedAdTimer} ثوانٍ
              </div>
              
              <div className="text-[10px] text-purple-300">
                ستحصل على 50 روح إضافية تلقائياً عند انتهاء الفيديو.
              </div>
            </div>
          </div>
        )}

        {/* FIXED BOTTOM NAVIGATION BAR */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#0d031f]/95 border-t border-purple-400/30 px-4 py-2 flex justify-between items-center backdrop-blur-md z-20 shadow-2xl">
          {[
            { id: 'home', label: 'الرئيسية', icon: 'dnc_coin.png', type: 'image' },
            { id: 'quiz', label: 'اللعب', icon: 'dnc_coin.png', type: 'image' },
            { id: 'rewards', label: 'المكافآت', icon: 'nav_rewards.png', type: 'image' },
            { id: 'leaderboard', label: 'المتصدرين', icon: 'nav_leaderboard.png', type: 'image' },
            { id: 'profile', label: 'الملف', icon: user.avatar, type: 'dynamic_avatar' }
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
            <div className="w-full bg-[#240a47] border border-yellow-500/50 rounded-3xl p-5 text-right space-y-4 shadow-2xl">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-white text-base">ربط محفظة Web3</h3>
                <button onClick={() => setShowWalletModal(false)} className="text-slate-300 p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                أدخل عنوان محفظة إيثريوم (MetaMask / Trust Wallet) لاستلام توكن دانات كوين (DNC):
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
                تأكيد وتوصيل المحفظة
              </button>
            </div>
          </div>
        )}

       {/* AVATAR SELECTOR MODAL */}
        {showAvatarModal && (
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="w-full bg-[#240a47] border-2 border-yellow-500/50 rounded-3xl p-6 text-right space-y-5 shadow-[0_0_60px_rgba(234,179,8,0.3)]">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-white text-lg">اختر صورتك الشخصية</h3>
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
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
