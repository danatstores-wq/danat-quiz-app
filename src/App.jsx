import React, { useState } from 'react';
import { 
  Trophy, 
  Gift, 
  User, 
  Play, 
  Globe, 
  Wallet, 
  HelpCircle, 
  Sparkles, 
  Clock, 
  BarChart3, 
  Home, 
  Check, 
  ShieldCheck, 
  Tv,
  X
} from 'lucide-react';

// Custom Danat Coin Gold Badge Logo Component
const DanatLogo = ({ className = "w-12 h-12" }) => (
  <div className={`relative flex items-center justify-center rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-200 p-1 shadow-lg shadow-yellow-500/30 ${className}`}>
    <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center border-2 border-yellow-400/80">
      <span className="font-extrabold text-yellow-400 tracking-tighter text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">D</span>
    </div>
  </div>
);

export default function App() {
  // Navigation State: 'home', 'quiz', 'rewards', 'leaderboard', 'profile', 'admin'
  const [activeTab, setActiveTab] = useState('home');

  // User State
  const [user, setUser] = useState({
    name: 'أحمد',
    level: 12,
    spirits: 2350,
    dncBalance: 120.0,
    totalGames: 245,
    totalEarnedSpirits: 8750,
    walletConnected: false,
    walletAddress: '',
  });

  // Wallet Modal
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [customWallet, setCustomWallet] = useState('');

  // Ad Simulation State
  const [isWatchingAd, setIsWatchingAd] = useState(false);
  const [adTimer, setAdTimer] = useState(5);

  // Quiz Game State
  const [selectedOption, setSelectedOption] = useState('B'); // Option B selected (Yaris)
  const [lifeline50Used, setLifeline50Used] = useState(false);
  const [lifelineExtraUsed, setLifelineExtraUsed] = useState(false);

  // Admin Redemption Requests State
  const [redemptions, setRedemptions] = useState([
    { id: '1', user: 'أحمد', spirits: 1000, dnc: 1, wallet: '0x71C...39A', status: 'PENDING', date: '2026-11-02' },
    { id: '2', user: 'محمد علي', spirits: 5000, dnc: 5, wallet: '0x38B...12F', status: 'APPROVED', date: '2026-11-01' },
  ]);

  // Connect Wallet Handler
  const handleConnectWallet = (address) => {
    setUser(prev => ({
      ...prev,
      walletConnected: true,
      walletAddress: address || '0x71C7656EC7ab88b098defB751B7401B5f6d8939A'
    }));
    setShowWalletModal(false);
  };

  // Rewarded Ad Handler
  const handleWatchAd = () => {
    setIsWatchingAd(true);
    let count = 5;
    setAdTimer(count);
    const interval = setInterval(() => {
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
        alert('🎉 تهانينا! حصلت على 100 روح إضافية.');
      }
    }, 1000);
  };

  // Submit DNC Redemption Request
  const handleRedeemDnc = () => {
    if (!user.walletConnected) {
      alert('يرجى ربط محفظتك أولاً من صفحة الملف الشخصي!');
      setActiveTab('profile');
      return;
    }
    if (user.spirits < 1000) {
      alert('رصيدك غير كافٍ. الحد الأدنى للتحويل هو 1,000 روح.');
      return;
    }

    setUser(prev => ({
      ...prev,
      spirits: prev.spirits - 1000,
      dncBalance: prev.dncBalance + 1
    }));

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

  // Admin Approve Action
  const handleAdminApprove = (id) => {
    setRedemptions(redemptions.map(r => r.id === id ? { ...r, status: 'APPROVED' } : r));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans flex justify-center items-center p-0 md:p-4" dir="rtl">
      {/* Mobile Shell Wrapper */}
      <div className="w-full max-w-md bg-slate-900 border-0 md:border-4 md:border-slate-800 rounded-none md:rounded-[40px] shadow-2xl overflow-hidden min-h-screen md:min-h-[844px] flex flex-col justify-between relative">
        
        {/* TOP STATUS BAR */}
        <div className="bg-slate-950 px-6 py-2 flex justify-between items-center text-xs text-slate-400 border-b border-slate-800/60">
          <span>9:41</span>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setActiveTab('admin')} 
              className="text-[10px] bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded border border-yellow-500/30 font-bold"
            >
              لوحة الإدارة
            </button>
            <span>📶 🔋</span>
          </div>
        </div>

        {/* MAIN DISPLAY AREA */}
        <div className="flex-1 overflow-y-auto pb-20 relative">

          {/* SCREEN 1: HOME (الرئيسية) */}
          {activeTab === 'home' && (
            <div className="p-5 flex flex-col items-center gap-6">
              {/* Header Title Banner */}
              <div className="text-center mt-2">
                <DanatLogo className="w-24 h-24 mx-auto mb-2" />
                <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500">
                  دانات كويز
                </h1>
                <p className="text-xs text-slate-400 mt-1 font-medium">اختبر معلوماتك .. واربح المكافآت</p>
              </div>

              {/* User Info Bar */}
              <div className="w-full bg-slate-800/80 rounded-2xl p-4 border border-yellow-500/30 flex justify-between items-center shadow-lg backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-amber-500/20 border-2 border-yellow-400 flex items-center justify-center text-2xl">
                      👦🏻
                    </div>
                    <span className="absolute -bottom-1 -right-1 bg-yellow-500 text-slate-950 text-[10px] font-black px-1.5 py-0.2 rounded-full">
                      ★ {user.level}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-white text-base">{user.name}</div>
                    <div className="text-xs text-yellow-400 font-semibold">المستوى {user.level}</div>
                  </div>
                </div>

                <div className="text-left bg-slate-900/90 px-3 py-1.5 rounded-xl border border-slate-700">
                  <div className="text-[10px] text-slate-400">رصيد DNC</div>
                  <div className="text-sm font-black text-yellow-400 flex items-center gap-1">
                    {user.dncBalance.toLocaleString()} <span className="text-xs">D</span>
                  </div>
                </div>
              </div>

              {/* START GAME BUTTON (ابدأ اللعب) */}
              <button 
                onClick={() => setActiveTab('quiz')} 
                className="w-full py-4 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 hover:from-yellow-400 hover:to-amber-300 text-slate-950 font-black text-xl rounded-2xl shadow-lg shadow-yellow-500/20 border-b-4 border-amber-700 active:translate-y-1 transition flex items-center justify-center gap-3"
              >
                <Play className="w-6 h-6 fill-slate-950" />
                ابدأ اللعب
              </button>

              {/* 2x2 Quick Grid Features */}
              <div className="w-full grid grid-cols-2 gap-3">
                <button 
                  onClick={() => setActiveTab('leaderboard')}
                  className="bg-slate-800/60 hover:bg-slate-800 p-4 rounded-2xl border border-slate-700 flex flex-col items-center gap-2 transition"
                >
                  <Trophy className="w-7 h-7 text-yellow-400" />
                  <span className="text-sm font-bold text-slate-200">لوحة المتصدرين</span>
                </button>

                <button 
                  onClick={() => setActiveTab('rewards')}
                  className="bg-slate-800/60 hover:bg-slate-800 p-4 rounded-2xl border border-slate-700 flex flex-col items-center gap-2 transition"
                >
                  <Gift className="w-7 h-7 text-purple-400" />
                  <span className="text-sm font-bold text-slate-200">المكافآت</span>
                </button>

                <button 
                  onClick={() => setActiveTab('profile')}
                  className="bg-slate-800/60 hover:bg-slate-800 p-4 rounded-2xl border border-slate-700 flex flex-col items-center gap-2 transition"
                >
                  <BarChart3 className="w-7 h-7 text-blue-400" />
                  <span className="text-sm font-bold text-slate-200">إحصائيات</span>
                </button>

                <button 
                  onClick={() => setActiveTab('profile')}
                  className="bg-slate-800/60 hover:bg-slate-800 p-4 rounded-2xl border border-slate-700 flex flex-col items-center gap-2 transition"
                >
                  <User className="w-7 h-7 text-emerald-400" />
                  <span className="text-sm font-bold text-slate-200">ملفي الشخصي</span>
                </button>
              </div>
            </div>
          )}

          {/* SCREEN 2: QUIZ GAME (اللعب) */}
          {activeTab === 'quiz' && (
            <div className="p-5 flex flex-col items-center gap-4">
              {/* Top Progress Bar & Timer */}
              <div className="w-full flex items-center justify-between gap-3">
                <button onClick={() => setActiveTab('home')} className="p-2 bg-slate-800 rounded-xl text-slate-300">
                  ⏸
                </button>
                <div className="flex-1 bg-slate-800 h-3 rounded-full overflow-hidden p-0.5 border border-slate-700">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full w-[53%] transition-all"></div>
                </div>
                <span className="text-xs font-bold text-emerald-400">8 / 15</span>
                <div className="flex items-center gap-1 bg-slate-800 px-3 py-1 rounded-xl text-yellow-400 text-xs font-bold border border-slate-700">
                  <Clock className="w-3.5 h-3.5" /> 25
                </div>
              </div>

              {/* Category Badge */}
              <div className="bg-blue-600/30 border border-blue-500/50 text-blue-300 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5">
                <Globe className="w-4 h-4" /> الجغرافيا
              </div>

              {/* Question Card */}
              <div className="w-full bg-slate-800/90 rounded-2xl p-6 border border-slate-700 text-center shadow-xl my-2">
                <h3 className="text-lg font-bold text-white leading-relaxed">
                  ما هي عاصمة فرنسا؟
                </h3>
              </div>

              {/* Answer Options */}
              <div className="w-full space-y-3">
                {[
                  { id: 'A', text: 'برلين' },
                  { id: 'B', text: 'باريس' },
                  { id: 'C', text: 'مدريد' },
                  { id: 'D', text: 'روما' }
                ].map(opt => {
                  const isSelected = selectedOption === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedOption(opt.id)}
                      className={`w-full py-3.5 px-5 rounded-2xl font-bold text-sm flex items-center justify-between transition border ${
                        isSelected
                          ? 'bg-emerald-600/30 border-emerald-500 text-emerald-300 shadow-lg shadow-emerald-900/20'
                          : 'bg-slate-800/60 border-slate-700 text-slate-200 hover:bg-slate-800'
                      }`}
                    >
                      <span>{opt.text}</span>
                      {isSelected && <Check className="w-5 h-5 text-emerald-400" />}
                    </button>
                  );
                })}
              </div>

              {/* Lifeline Boosters */}
              <div className="w-full grid grid-cols-2 gap-3 mt-4">
                <button 
                  onClick={() => setLifelineExtraUsed(true)}
                  disabled={lifelineExtraUsed}
                  className={`py-3 px-3 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1 transition ${
                    lifelineExtraUsed ? 'bg-slate-900 border-slate-800 text-slate-600' : 'bg-slate-800/80 border-slate-700 text-yellow-400 hover:border-yellow-500/50'
                  }`}
                >
                  <Sparkles className="w-5 h-5" />
                  <span>50 مكافأة إضافية</span>
                </button>

                <button 
                  onClick={() => setLifeline50Used(true)}
                  disabled={lifeline50Used}
                  className={`py-3 px-3 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1 transition ${
                    lifeline50Used ? 'bg-slate-900 border-slate-800 text-slate-600' : 'bg-slate-800/80 border-slate-700 text-blue-400 hover:border-blue-500/50'
                  }`}
                >
                  <HelpCircle className="w-5 h-5" />
                  <span>50:50 مساعدة</span>
                </button>
              </div>
            </div>
          )}

          {/* SCREEN 3: REWARDS & REWARDED ADS (المكافآت) */}
          {activeTab === 'rewards' && (
            <div className="p-5 flex flex-col items-center gap-5">
              <div className="text-center my-2">
                <DanatLogo className="w-20 h-20 mx-auto mb-2" />
                <h2 className="text-2xl font-black text-yellow-400">مكافآتي</h2>
              </div>

              {/* Current Spirits Card */}
              <div className="w-full bg-slate-800/90 rounded-2xl p-5 border border-slate-700 flex justify-between items-center shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-2xl">
                    🔥
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">أرواح حالية</div>
                    <div className="text-2xl font-black text-blue-400">{user.spirits.toLocaleString()}</div>
                  </div>
                </div>
                <button onClick={handleWatchAd} className="bg-blue-600 hover:bg-blue-500 text-white w-8 h-8 rounded-full font-bold text-xl flex items-center justify-center">
                  +
                </button>
              </div>

              {/* DNC Balance & Request Card */}
              <div className="w-full bg-slate-800/90 rounded-2xl p-5 border border-yellow-500/30 flex justify-between items-center shadow-lg">
                <div className="flex items-center gap-3">
                  <DanatLogo className="w-10 h-10" />
                  <div>
                    <div className="text-xs text-slate-400">رصيد DNC</div>
                    <div className="text-2xl font-black text-yellow-400">{user.dncBalance.toLocaleString()}</div>
                  </div>
                </div>
                <button 
                  onClick={handleRedeemDnc}
                  className="bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition"
                >
                  طلب استبدال
                </button>
              </div>

              {/* Conversion Rate Box */}
              <div className="w-full bg-slate-900/80 rounded-xl p-3 border border-slate-800 text-center text-xs text-slate-400">
                <span className="font-bold text-slate-300">معادلة التحويل:</span> 1,000 روح = 1 DNC
              </div>

              {/* Large Gold Redeem Button */}
              <button 
                onClick={handleRedeemDnc}
                className="w-full py-3.5 bg-gradient-to-r from-yellow-500 to-amber-400 text-slate-950 font-black text-base rounded-2xl shadow-lg border-b-4 border-amber-700 active:translate-y-0.5"
              >
                طلب استبدال دانات
              </button>

              {/* GOOGLE REWARDED AD WATCH CARD */}
              <div className="w-full bg-gradient-to-br from-purple-900/40 to-slate-800/90 rounded-2xl p-4 border border-purple-500/30 flex items-center justify-between gap-3">
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
                  className="bg-purple-600 hover:bg-purple-500 disabled:bg-purple-950 text-white font-bold px-3.5 py-2 rounded-xl text-xs transition flex items-center gap-1.5"
                >
                  {isWatchingAd ? `${adTimer}s...` : 'مشاهدة'}
                </button>
              </div>
            </div>
          )}

          {/* SCREEN 4: LEADERBOARD (المتصدرين) */}
          {activeTab === 'leaderboard' && (
            <div className="p-5 flex flex-col items-center gap-4">
              <div className="text-center my-2">
                <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-1" />
                <h2 className="text-2xl font-black text-yellow-400">لوحة المتصدرين</h2>
              </div>

              {/* Tab Selector */}
              <div className="w-full bg-slate-800 p-1 rounded-xl flex gap-1 border border-slate-700 text-xs font-bold">
                <button className="flex-1 py-2 bg-yellow-500 text-slate-950 rounded-lg shadow">
                  أفضل اللاعبين
                </button>
                <button className="flex-1 py-2 text-slate-400 hover:text-white">
                  أعلى النقاط
                </button>
              </div>

              {/* Leaderboard Table Header */}
              <div className="w-full bg-slate-900 px-4 py-2 rounded-lg flex text-[11px] text-slate-400 font-bold border border-slate-800">
                <span className="w-12">المركز</span>
                <span className="flex-1 text-right">اللاعب</span>
                <span className="w-20 text-left">النقاط</span>
              </div>

              {/* Players List */}
              <div className="w-full space-y-2">
                {[
                  { rank: 1, name: 'محمد علي', points: '450,250' },
                  { rank: 2, name: 'سارة أحمد', points: '420,750' },
                  { rank: 3, name: 'أحمد خالد', points: '380,600' },
                  { rank: 4, name: 'ليلى منصور', points: '350,400' },
                  { rank: 5, name: 'عمر يوسف', points: '320,100' }
                ].map(player => (
                  <div key={player.rank} className="w-full bg-slate-800/70 p-3 rounded-xl border border-slate-700/80 flex items-center justify-between text-xs">
                    <div className="w-8 h-8 rounded-full bg-slate-900 border border-yellow-500/40 flex items-center justify-center font-bold text-yellow-400">
                      {player.rank}
                    </div>
                    <div className="flex-1 px-3 font-bold text-slate-200">{player.name}</div>
                    <div className="w-20 text-left font-black text-yellow-400">{player.points}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SCREEN 5: PROFILE & WEB3 WALLET (الملف الشخصي) */}
          {activeTab === 'profile' && (
            <div className="p-5 flex flex-col items-center gap-5">
              <div className="text-center my-2">
                <h2 className="text-2xl font-black text-white">ملفي الشخصي</h2>
              </div>

              {/* User Avatar Card */}
              <div className="flex flex-col items-center gap-2">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-amber-500/20 border-2 border-yellow-400 flex items-center justify-center text-4xl shadow-xl">
                    👦🏻
                  </div>
                  <span className="absolute bottom-0 right-0 bg-yellow-500 text-slate-950 text-xs font-black px-2 py-0.5 rounded-full border border-slate-900">
                    ★ {user.level}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mt-1">{user.name}</h3>
                <span className="text-xs text-yellow-400 font-medium">المستوى {user.level}</span>
              </div>

              {/* 3 Stats Counters Grid */}
              <div className="w-full grid grid-cols-3 gap-2">
                <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700 text-center">
                  <div className="text-[10px] text-slate-400 mb-1">عدد الألعاب</div>
                  <div className="text-base font-black text-white">{user.totalGames}</div>
                </div>

                <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700 text-center">
                  <div className="text-[10px] text-slate-400 mb-1">أرواح مكتسبة</div>
                  <div className="text-base font-black text-blue-400">{user.totalEarnedSpirits.toLocaleString()}</div>
                </div>

                <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700 text-center">
                  <div className="text-[10px] text-slate-400 mb-1">DNC</div>
                  <div className="text-base font-black text-yellow-400">{user.dncBalance}</div>
                </div>
              </div>

              {/* Settings Action Buttons */}
              <div className="w-full space-y-3 mt-2">
                {/* WALLETCONNECT LINK BUTTON */}
                <button 
                  onClick={() => setShowWalletModal(true)}
                  className={`w-full py-3.5 px-4 rounded-2xl border font-bold text-sm flex items-center justify-between transition ${
                    user.walletConnected 
                      ? 'bg-emerald-950/40 border-emerald-500/60 text-emerald-300' 
                      : 'bg-purple-900/30 border-purple-500/50 text-purple-200 hover:bg-purple-900/50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Wallet className="w-5 h-5 text-purple-400" />
                    <span>{user.walletConnected ? 'المحفظة متصلة' : 'ربط المحفظة (WalletConnect)'}</span>
                  </div>
                  <span className="text-xs bg-purple-500/20 px-2 py-1 rounded-lg">
                    {user.walletConnected ? `${user.walletAddress.substring(0,6)}...` : 'ربط'}
                  </span>
                </button>

                {/* Language Toggle */}
                <button className="w-full py-3.5 px-4 bg-slate-800/80 border border-slate-700 rounded-2xl font-bold text-sm text-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-400" />
                    <span>تغيير اللغة</span>
                  </div>
                  <span className="text-xs text-slate-400">العربية</span>
                </button>
              </div>
            </div>
          )}

          {/* ADMIN APPROVAL PANEL (إدارة طلبات التحويل) */}
          {activeTab === 'admin' && (
            <div className="p-5 flex flex-col gap-4">
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <h2 className="text-lg font-bold text-yellow-400 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" /> لوحة موافقة الأدمن
                </h2>
                <button onClick={() => setActiveTab('home')} className="text-xs text-slate-400">إغلاق</button>
              </div>

              <p className="text-xs text-slate-400">مراجعة طلبات استبدال دانات كوين قبل إرسال التوكنز للمحفظة:</p>

              <div className="space-y-3">
                {redemptions.map(req => (
                  <div key={req.id} className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-xs space-y-2">
                    <div className="flex justify-between font-bold">
                      <span className="text-white">{req.user}</span>
                      <span className={req.status === 'APPROVED' ? 'text-emerald-400' : 'text-amber-400'}>
                        {req.status === 'APPROVED' ? 'تم الاعتماد' : 'قيد الانتظار'}
                      </span>
                    </div>

                    <div className="text-slate-400 flex justify-between">
                      <span>الأرواح: {req.spirits}</span>
                      <span className="text-yellow-400 font-bold">{req.dnc} DNC</span>
                    </div>

                    <div className="text-[10px] text-slate-500 font-mono break-all">
                      المحفظة: {req.wallet}
                    </div>

                    {req.status === 'PENDING' && (
                      <button 
                        onClick={() => handleAdminApprove(req.id)}
                        className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold mt-1 transition"
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

        {/* BOTTOM NAVIGATION BAR (5 Main Navigation Tabs) */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-950/95 border-t border-slate-800/80 px-2 py-2 flex justify-around items-center backdrop-blur-md">
          {[
            { id: 'home', label: 'الرئيسية', icon: Home },
            { id: 'quiz', label: 'اللعب', icon: Play },
            { id: 'rewards', label: 'المكافآت', icon: Gift },
            { id: 'leaderboard', label: 'المتصدرين', icon: Trophy },
            { id: 'profile', label: 'الملف', icon: User }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition ${
                  isActive ? 'text-yellow-400' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
                <span className="text-[10px] font-bold">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* WALLETCONNECT SIMULATION MODAL */}
        {showWalletModal && (
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="w-full bg-slate-900 border border-slate-700 rounded-3xl p-5 text-right space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-white text-base">ربط محفظة Web3</h3>
                <button onClick={() => setShowWalletModal(false)} className="text-slate-400">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs text-slate-400">
                أدخل عنوان محفظة إيثريوم (MetaMask / Trust Wallet) لاستلام توكن دانات كوين (DNC):
              </p>

              <input 
                type="text" 
                placeholder="0x71C7656EC7ab88b098defB751B7401B5f6d8939A"
                value={customWallet}
                onChange={(e) => setCustomWallet(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white font-mono dir-ltr focus:border-yellow-500 outline-none"
              />

              <button 
                onClick={() => handleConnectWallet(customWallet)}
                className="w-full py-3 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold text-xs rounded-xl"
              >
                تأكيد وتوصيل المحفظة
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
