import React, { useState } from 'react';
import { ShieldCheck, Check, Tv, X, Settings, Clock, Pencil, UserCircle } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const [user, setUser] = useState({
    name: 'أحمد',
    level: 12,
    spirits: 2350,
    dncBalance: 120.0,
    totalGames: 245,
    totalEarnedSpirits: 8750,
    walletConnected: false,
    walletAddress: '',
    // --- 1. SET THE INITIAL DYNAMIC AVATAR TO ONE OF YOUR PNGS ---
    avatar: 'avatar_kuwaiti.png', 
  });

  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [customWallet, setCustomWallet] = useState('');
  const [isWatchingAd, setIsWatchingAd] = useState(false);
  const [adTimer, setAdTimer] = useState(5);
  const [selectedOption, setSelectedOption] = useState('B');
  const [lifeline50Used, setLifeline50Used] = useState(false);
  const [lifelineExtraUsed, setLifelineExtraUsed] = useState(false);

  const [redemptions, setRedemptions] = useState([
    { id: '1', user: 'أحمد', spirits: 1000, dnc: 1, wallet: '0x71C...39A', status: 'PENDING', date: '2026-11-02' },
    { id: '2', user: 'محمد علي', spirits: 5000, dnc: 5, wallet: '0x38B...12F', status: 'APPROVED', date: '2026-11-01' },
  ]);

  // --- 2. LIST OF THE 5 SELECTABLE AVATARS (Upload to public/assets/) ---
  const availableAvatars = [
    { id: 'avatar_kuwaiti.png', name: 'كويتي' },
    { id: 'avatar_boy.png', name: 'شاب 18' },
    { id: 'avatar_hijab.png', name: 'بالحجاب' },
    { id: 'avatar_brunette.png', name: 'بدون حجاب' },
    { id: 'avatar_blonde.png', name: 'شقراء' },
  ];

  const assetPath = (filename) => `${import.meta.env.BASE_URL}assets/${filename}`;

  const handleConnectWallet = (address) => {
    setUser(prev => ({
      ...prev,
      walletConnected: true,
      walletAddress: address || '0x71C7656EC7ab88b098defB751B7401B5f6d8939A'
    }));
    setShowWalletModal(false);
  };

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

  const handleAdminApprove = (id) => {
    setRedemptions(redemptions.map(r => r.id === id ? { ...r, status: 'APPROVED' } : r));
  };

  return (
    <div className="min-h-screen bg-[#1a0833] text-white font-sans flex justify-center items-center p-0 md:p-4" dir="rtl">
      {/* Mobile Shell Wrapper with Deep Purple & Neon Gold Design */}
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
            <span className="flex items-center gap-1 text-slate-200 font-semibold">
              <img src={assetPath('globe_icon.png')} alt="Globe" className="w-3.5 h-3.5 object-contain" /> العربية
            </span>
            <span>📶 🔋</span>
          </div>
        </div>

        {/* MAIN DISPLAY AREA */}
        <div className="flex-1 overflow-y-auto pb-36 px-4 pt-4 relative z-10">

          {/* SCREEN 1: HOME */}
          {activeTab === 'home' && (
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-full bg-[#1a0833]/70 rounded-3xl p-5 border-2 border-yellow-500/50 text-center shadow-[0_0_30px_rgba(234,179,8,0.25)] overflow-hidden">
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-yellow-500/15 rounded-full blur-3xl"></div>
                
                <div className="flex justify-between items-center mb-1 relative z-10">
                  <button className="p-2 bg-[#2a0c52] rounded-full text-yellow-400 border border-yellow-500/40 shadow">
                    <Settings className="w-4 h-4" />
                  </button>
                  <div className="flex gap-2">
                    <img src={assetPath('dnc_coin.png')} alt="Coin" className="w-7 h-7 object-contain drop-shadow" />
                    <img src={assetPath('dnc_coin.png')} alt="Coin" className="w-7 h-7 object-contain drop-shadow" />
                  </div>
                </div>

                <div className="relative z-10 flex justify-center my-2">
                  <img 
                    src={assetPath('logo.png')} 
                    alt="Danat Coin Logo" 
                    className="w-32 h-32 object-contain drop-shadow-[0_5px_20px_rgba(234,179,8,0.6)]"
                  />
                </div>
                
                <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 drop-shadow-lg relative z-10">
              دانات كويز
                </h1>
                <p className="text-xs text-yellow-100/90 mt-1 font-bold relative z-10">اختبر معلوماتك .. واربح المكافآت</p>
              </div>

              {/* User Info Bar with Clicking to Select Avatar */}
              <div className="w-full bg-[#240a47]/90 rounded-2xl p-4 border border-yellow-500/40 flex justify-between items-center shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-3">
                  {/* --- 3. MAKE AVATAR CLICKABLE IN HOME SCREEN --- */}
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

              {/* 4 Stretched Feature Cards */}
              <div className="w-full grid grid-cols-2 gap-3 mt-1">
                {[
                  { label: "المكافآت", icon: "gift_large.png", tab: "rewards" },
                  { label: "لوحة المتصدرين", icon: "trophy_large.png", tab: "leaderboard" },
                  { label: "ملفي الشخصي", icon: "nav_profile.png", tab: "profile" },
                  { label: "إحصائيات", icon: "stats_icon.png", tab: "profile" },
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

          {/* SCREEN 2: QUIZ */}
          {activeTab === 'quiz' && (
            <div className="flex flex-col gap-4">
              <div className="w-full flex items-center justify-between gap-3">
                <button onClick={() => setActiveTab('home')} className="p-2.5 bg-[#240a47] rounded-xl text-slate-200 font-bold text-xs border border-purple-400/40">
                  ⏸
                </button>
                <div className="flex-1 bg-slate-950 h-3 rounded-full overflow-hidden p-0.5 border border-purple-400/40">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full w-[53%]"></div>
                </div>
                <div className="flex items-center gap-1 bg-[#240a47] px-3 py-1.5 rounded-xl text-yellow-400 text-xs font-bold border border-purple-400/40">
                  <Clock className="w-3.5 h-3.5" /> 25
                </div>
              </div>

              <div className="flex justify-center">
                <div className="bg-purple-600/40 border border-purple-400 text-purple-200 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow">
                  <img src={assetPath('globe_icon.png')} alt="Globe" className="w-4 h-4 object-contain" /> الجغرافيا
                </div>
              </div>

              <div className="w-full bg-[#240a47]/90 rounded-2xl p-6 border border-purple-400/40 text-center shadow-xl my-2">
                <h3 className="text-lg font-bold text-white leading-relaxed">
              ما هي عاصمة فرنسا؟
                </h3>
              </div>

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
                      className={`w-full py-3.5 px-5 rounded-2xl font-bold text-sm flex items-center justify-between transition border shadow ${
                        isSelected
                          ? 'bg-emerald-600/40 border-emerald-400 text-emerald-200 shadow-emerald-900/40'
                          : 'bg-[#240a47]/80 border-purple-400/30 text-slate-100 hover:bg-[#320d63]'
                      }`}
                    >
                      <span>{opt.text}</span>
                      {isSelected && <Check className="w-5 h-5 text-emerald-400" />}
                    </button>
                  );
                })}
              </div>

              <div className="w-full grid grid-cols-2 gap-3 mt-4">
                <button 
                  onClick={() => setLifelineExtraUsed(true)}
                  disabled={lifelineExtraUsed}
                  className={`py-3 px-3 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1 transition shadow ${
                    lifelineExtraUsed ? 'bg-slate-900 border-slate-800 text-slate-600' : 'bg-[#240a47]/80 border-purple-400/30 text-yellow-400'
                  }`}
                >
                  <img src={assetPath('help.png')} alt="Help Star" className="w-6 h-6 object-contain" />
                  <span>50 مكافأة إضافية</span>
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
                <img src={assetPath('logo.png')} alt="Logo" className="w-24 h-24 object-contain mb-2 drop-shadow-lg" />
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
                  <img src={assetPath('logo.png')} alt="Logo" className="w-10 h-10 object-contain" />
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
                <span className="font-bold text-yellow-400">معادلة التحويل:</span> طلب استبدال 1,000 روح = DNC
              </div>

              {/* GOOGLE REWARDED AD */}
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

              {/* 4. MAKE PROFILE AVATAR CLICKABLE & ADD CHANGE BUTTON */}
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
                  {/* Small edit icon badge on top corner */}
                  <div className="absolute -top-1 -right-1 bg-purple-600 p-2 rounded-full border-2 border-slate-900 shadow">
                    <Pencil className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
                
                <button 
                  onClick={() => setShowAvatarModal(true)}
                  className="text-xs text-yellow-400 font-bold bg-yellow-500/10 px-3 py-1.5 rounded-lg border border-yellow-500/40 shadow hover:bg-yellow-500/20"
                >
                  ✏️ تغيير الصورة الشخصية
                </button>

                <h3 className="text-lg font-bold text-white mt-1">{user.name}</h3>
                <span className="text-xs text-yellow-400 font-bold">المستوى {user.level}</span>
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

              <div className="w-full space-y-3 mt-2">
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

                <button className="w-full py-4 px-4 bg-[#240a47] border border-purple-400/40 rounded-2xl font-bold text-sm text-slate-200 flex items-center justify-between shadow">
                  <div className="flex items-center gap-2">
                    <img src={assetPath('globe_icon.png')} alt="Globe" className="w-6 h-6 object-contain" />
                    <span>تغيير اللغة</span>
                  </div>
                  <span className="text-xs text-slate-300">العربية</span>
                </button>
              </div>
            </div>
          )}

          {/* ADMIN PANEL */}
          {activeTab === 'admin' && (
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center border-b border-purple-400/40 pb-3">
                <h2 className="text-base font-bold text-yellow-400 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" /> لوحة موافقة الأدمن
                </h2>
                <button onClick={() => setActiveTab('home')} className="text-xs bg-[#240a47] px-3 py-1 rounded-lg text-slate-200 border border-purple-400/40">إغلاق</button>
              </div>

              <p className="text-xs text-slate-300">مراجعة طلبات استبدال دانات كوين قبل إرسال التوكنز للمحفظة:</p>

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

        {/* FIXED BOTTOM NAVIGATION BAR WITH DYNAMIC ICONS */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#0d031f]/95 border-t border-purple-400/30 px-4 py-2 flex justify-between items-center backdrop-blur-md z-20 shadow-2xl">
          {[
            { id: 'home', label: 'الرئيسية', icon: 'logo.png', type: 'image' },
            { id: 'quiz', label: 'اللعب', icon: 'dnc_coin.png', type: 'image' },
            { id: 'rewards', label: 'المكافآت', icon: 'nav_rewards.png', type: 'image' },
            { id: 'leaderboard', label: 'المتصدرين', icon: 'nav_leaderboard.png', type: 'image' },
            // --- 5. MAKE PROFILE NAV ICON DYNAMIC TO SELECTED AVATAR ---
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
                  // Small dynamic avatar icon
                  <img src={assetPath(tab.icon)} alt="Profile" className="w-7 h-7 rounded-full object-cover border border-purple-400" />
                ) : (
                  // Standard icon
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

        {/* --- 6. ADD THE AVATAR SELECTOR MODAL --- */}
        {showAvatarModal && (
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="w-full bg-[#240a47] border-2 border-yellow-500/50 rounded-3xl p-6 text-right space-y-5 shadow-[0_0_60px_rgba(234,179,8,0.3)]">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-white text-lg">اختر صورتك الشخصية</h3>
                <button onClick={() => setShowAvatarModal(false)} className="text-slate-300 p-1 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Grid of 5 Avatars */}
              <div className="grid grid-cols-2 gap-4 my-2">
                {availableAvatars.map((item) => {
                  const isSelected = user.avatar === item.id;
                  return (
                    <div 
                      key={item.id}
                      onClick={() => {
                        // Update player portrait globally
                        setUser(prev => ({ ...prev, avatar: item.id }));
                        // Close modal
                        setShowAvatarModal(false);
                      }}
                      className={`relative p-3 rounded-3xl border-2 cursor-pointer flex flex-col items-center gap-2 transition duration-200 group ${
                        isSelected 
                          ? 'border-yellow-400 bg-yellow-500/15 shadow-[0_0_30px_rgba(234,179,8,0.25)] scale-105' 
                          : 'border-purple-400/30 bg-[#0d031f] hover:border-purple-300'
                      }`}
                    >
                      {/* Character image */}
                      <img 
                        src={assetPath(item.id)} 
                        alt={item.name} 
                        className="w-16 h-16 rounded-full object-cover group-hover:scale-105 transition" 
                      />
                      
                      {/* Character label */}
                      <span className={`text-[11px] font-bold ${isSelected ? 'text-yellow-300' : 'text-slate-100'}`}>
                        {item.name}
                      </span>
                      
                      {/* Selection Checkmark Overlay */}
                      {isSelected && (
                        <div className="absolute -top-2 -right-2 bg-emerald-500 p-1.5 rounded-full border-2 border-slate-900 shadow">
                          <Check className="w-3.5 h-3.5 text-white" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button 
                  onClick={() => setShowAvatarModal(false)}
                  className="flex-1 py-3 bg-[#0d031f] border border-purple-500/40 text-slate-100 font-bold text-xs rounded-xl shadow-lg hover:bg-[#1a0833]"
                >
                  إلغاء
                </button>
                <button 
                  onClick={() => setShowAvatarModal(false)}
                  className="flex-1 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl shadow-lg"
                >
                  تأكيد الاختيار
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
