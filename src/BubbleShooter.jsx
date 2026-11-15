import { useEffect, useRef, useState } from 'react';

const COLORS = ['#ff5b75', '#38bdf8', '#facc15', '#a78bfa', '#34d399', '#fb923c', '#f472b6'];
const LEVELS = [
  { id: 'easy', moves: 40, target: 700, colors: 5, rows: 4 },
  { id: 'medium', moves: 32, target: 1200, colors: 6, rows: 5 },
  { id: 'hard', moves: 25, target: 1800, colors: 7, rows: 6 },
];

const trText = (language, en, fr, ar) =>
  language === 'العربية' ? ar : language === 'Français' ? fr : en;

const randomBubble = (count) => Math.floor(Math.random() * count);

function createBoard(colorCount, rowCount) {
  return Array.from({ length: 9 }, (_, row) =>
    Array.from({ length: 8 }, () => row < rowCount ? randomBubble(colorCount) : null)
  );
}

function connectedGroup(board, startRow, startCol, color) {
  const found = new Set();
  const stack = [[startRow, startCol]];
  while (stack.length) {
    const [row, col] = stack.pop();
    const key = row + ':' + col;
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || found.has(key)) continue;
    if (board[row][col] !== color) continue;
    found.add(key);
    stack.push([row - 1, col], [row + 1, col], [row, col - 1], [row, col + 1]);
  }
  return [...found].map(key => key.split(':').map(Number));
}

export default function BubbleShooter({ onBack, onAdComplete, language = 'English' }) {
  const [levelId, setLevelId] = useState('easy');
  const level = LEVELS.find(item => item.id === levelId);
  const endless = levelId === 'endless';
  const colorCount = endless ? 7 : level.colors;
  const [board, setBoard] = useState(() => createBoard(5, 4));
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(40);
  const [shotColor, setShotColor] = useState(() => randomBubble(5));
  const [nextColor, setNextColor] = useState(() => randomBubble(5));
  const [canSwap, setCanSwap] = useState(true);
  const [aimCol, setAimCol] = useState(4);
  const [showAd, setShowAd] = useState(false);
  const [adReason, setAdReason] = useState('level');
  const [adCountdown, setAdCountdown] = useState(5);
  const [paused, setPaused] = useState(false);
  const gridRef = useRef(null);

  const tr = (en, fr, ar) => trText(language, en, fr, ar);
  const levelName = (id) => tr(
    id === 'easy' ? 'Easy' : id === 'medium' ? 'Medium' : id === 'hard' ? 'Hard' : 'Endless',
    id === 'easy' ? 'Facile' : id === 'medium' ? 'Moyen' : id === 'hard' ? 'Difficile' : 'Sans fin',
    id === 'easy' ? 'سهل' : id === 'medium' ? 'متوسط' : id === 'hard' ? 'صعب' : 'لا نهائي'
  );

  const resetBoard = (id) => {
    const config = LEVELS.find(item => item.id === id);
    const count = config?.colors || 7;
    setBoard(createBoard(count, config?.rows || 6));
    setScore(0);
    setMoves(config?.moves ?? Infinity);
    setShotColor(randomBubble(count));
    setNextColor(randomBubble(count));
    setCanSwap(true);
    setLevelId(id);
    setShowAd(false);
    setPaused(false);
  };

  useEffect(() => {
    if (!endless || showAd || paused) return undefined;
    const timer = window.setTimeout(() => {
      setAdReason('endless');
      setShowAd(true);
      setPaused(true);
    }, 120000);
    return () => window.clearTimeout(timer);
  }, [endless, showAd, paused]);

  useEffect(() => {
    if (!showAd) return undefined;
    let remaining = 5;
    setAdCountdown(remaining);
    const timer = window.setInterval(() => {
      remaining -= 1;
      setAdCountdown(remaining);
      if (remaining <= 0) {
        window.clearInterval(timer);
        onAdComplete?.();
        setShowAd(false);
        if (adReason === 'endless') {
          setPaused(false);
        } else if (adReason === 'gameover') {
          resetBoard(levelId);
        } else {
          const next = levelId === 'easy' ? 'medium' : levelId === 'medium' ? 'hard' : 'endless';
          resetBoard(next);
        }
      }
    }, 1000);
    return () => window.clearInterval(timer);
  }, [showAd, adReason, levelId, onAdComplete]);

  const swapBubbles = () => {
    if (!canSwap || showAd || paused) return;
    setShotColor(nextColor);
    setNextColor(shotColor);
    setCanSwap(false);
  };

  const shootAt = (column) => {
    if (showAd || paused) return;
    const col = Math.max(0, Math.min(7, column));
    const row = [...board].map((line, index) => ({ line, index })).find(item => item.line[col] === null)?.index;
    if (row === undefined) {
      setAdReason('gameover');
      setShowAd(true);
      setPaused(true);
      return;
    }

    const nextBoard = board.map(line => [...line]);
    nextBoard[row][col] = shotColor;
    const group = connectedGroup(nextBoard, row, col, shotColor);
    let gained = 0;
    if (group.length >= 3) {
      group.forEach(([r, c]) => { nextBoard[r][c] = null; });
      gained = group.length * 20;
    }
    const nextScore = score + gained;
    setBoard(nextBoard);
    setScore(nextScore);
    setShotColor(nextColor);
    setNextColor(randomBubble(colorCount));
    setCanSwap(true);
    const remaining = endless ? Infinity : moves - 1;
    if (!endless) setMoves(remaining);

    const targetReached = !endless && nextScore >= level.target;
    const movesFinished = !endless && remaining <= 0;
    if (targetReached || movesFinished) {
      setAdReason('level');
      setShowAd(true);
      setPaused(true);
    }
  };

  const handleGridPointer = (event) => {
    const rect = gridRef.current?.getBoundingClientRect();
    if (!rect) return;
    const col = Math.max(0, Math.min(7, Math.floor(((event.clientX - rect.left) / rect.width) * 8)));
    setAimCol(col);
  };

  const aimAndShoot = (event) => {
    handleGridPointer(event);
    const rect = gridRef.current?.getBoundingClientRect();
    if (!rect) return;
    const col = Math.max(0, Math.min(7, Math.floor(((event.clientX - rect.left) / rect.width) * 8)));
    shootAt(col);
  };

  const levelIds = ['easy', 'medium', 'hard', 'endless'];
  const currentIndex = levelIds.indexOf(levelId);

  return (
    <div className="mx-auto flex w-full max-w-[520px] flex-col gap-4 pb-5">
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="rounded-xl border border-amber-300/40 bg-[#211735] px-4 py-2 text-sm font-bold text-amber-200">← {tr('Back', 'Retour', 'رجوع')}</button>
        <div className="text-right">
          <div className="text-xs font-bold uppercase tracking-[.28em] text-amber-300">Danat Arcade</div>
          <h2 className="text-3xl font-black tracking-tight text-white">Bubble Shooter</h2>
        </div>
      </div>

      <div className="rounded-[28px] border border-sky-300/40 bg-[radial-gradient(ellipse_at_top,rgba(74,222,128,.2),transparent_38%),linear-gradient(155deg,#123e39_0%,#123047_45%,#081b2c_100%)] p-3 shadow-[0_24px_70px_rgba(0,0,0,.58),inset_0_1px_0_rgba(255,255,255,.18)] sm:p-5">
        <div className="mb-4 grid grid-cols-4 gap-2">
          {levelIds.map((id, index) => {
            const unlocked = index <= currentIndex;
            return <div key={id} className={`rounded-xl border px-1.5 py-2 text-center ${levelId === id ? 'border-amber-300 bg-amber-300/20 text-amber-100' : unlocked ? 'border-white/15 bg-black/20 text-emerald-50' : 'border-white/10 bg-black/10 text-sky-300/40'}`}>
              <span className="block text-xs font-black">{levelName(id)}</span>
              <span className="mt-0.5 block text-[9px] font-semibold opacity-80">{levelId === id ? tr('Current', 'Actuel', 'الحالي') : unlocked ? tr('Unlocked', 'Débloqué', 'مفتوح') : tr('Locked', 'Verrouillé', 'مغلق')}</span>
            </div>;
          })}
        </div>

        <div className="mb-4 flex items-center justify-between gap-2">
          <div className="rounded-xl border border-white/15 bg-black/25 px-3 py-2 text-center">
            <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-100">{tr('Score', 'Score', 'النقاط')}</div>
            <div className="text-xl font-black text-white">{score.toLocaleString()}</div>
          </div>
          <div className="text-center">
            <div className="text-xs font-black uppercase tracking-[.18em] text-sky-200">{tr('Pop the bubbles', 'Éclatez les bulles', 'فقّع الفقاعات')}</div>
            <div className="text-sm font-bold text-white">{endless ? tr('No score limit', 'Sans limite de score', 'بدون حد للنقاط') : `${tr('Target', 'Objectif', 'الهدف')}: ${level.target.toLocaleString()}`}</div>
          </div>
          <div className="rounded-xl border border-amber-300/30 bg-amber-400/10 px-3 py-2 text-center">
            <div className="text-[10px] font-bold uppercase tracking-wider text-amber-200">{tr('Shots', 'Tirs', 'الطلقات')}</div>
            <div className="text-xl font-black text-amber-300">{endless ? '∞' : moves}</div>
          </div>
        </div>

        <div
          ref={gridRef}
          onPointerMove={handleGridPointer}
          onPointerUp={aimAndShoot}
          className="relative mx-auto grid w-full max-w-[360px] grid-cols-8 gap-1 rounded-[24px] border-[3px] border-emerald-200/40 bg-[linear-gradient(180deg,#83d9d1_0%,#49a9b2_48%,#173d45_100%)] p-2 pb-5 shadow-[inset_0_5px_18px_rgba(255,255,255,.25),0_10px_28px_rgba(0,0,0,.4)] touch-pan-y"
        >
          <svg aria-hidden="true" viewBox="0 0 360 420" preserveAspectRatio="xMidYMid slice" className="pointer-events-none absolute inset-0 h-full w-full">
            <defs>
              <linearGradient id="jungleSky" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#8ce7e1"/><stop offset="1" stopColor="#278b9b"/></linearGradient>
              <linearGradient id="jungleWater" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#b8fff4"/><stop offset=".45" stopColor="#42d5e7"/><stop offset="1" stopColor="#d7fff5"/></linearGradient>
              <linearGradient id="templeStone" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#e5c88a"/><stop offset="1" stopColor="#8c7047"/></linearGradient>
            </defs>
            <rect width="360" height="420" fill="url(#jungleSky)"/>
            <circle cx="282" cy="105" r="42" fill="#fff5b2" opacity=".45"/>
            <path d="M0 230 Q60 185 115 225 T230 215 T360 220 V420 H0Z" fill="#2f936c"/>
            <path d="M0 270 Q55 230 110 270 T225 255 T360 265 V420 H0Z" fill="#17634e"/>
            <path d="M130 175 L130 235 L157 235 L157 175Z M203 168 L203 236 L226 236 L226 168Z" fill="url(#jungleWater)" opacity=".9"/>
            <path d="M126 232 Q145 260 157 232 M198 232 Q214 260 229 232" fill="none" stroke="#d7fff5" strokeWidth="7" opacity=".8"/>
            <path d="M22 238 L22 174 L40 150 L58 174 L58 238Z M10 176 L40 132 L70 176Z M280 245 L280 180 L300 153 L320 180 L320 245Z M268 182 L300 137 L332 182Z" fill="url(#templeStone)" stroke="#715a3c" strokeWidth="3"/>
            <path d="M28 191 H52 M286 198 H314 M31 213 H49 M289 220 H311" stroke="#6b563b" strokeWidth="5"/>
            <path d="M0 0 Q38 30 12 85 Q44 70 57 22 Q55 80 82 103 Q18 110 0 150Z M360 0 Q322 28 347 86 Q313 70 302 20 Q303 80 278 105 Q340 111 360 150Z" fill="#145b3d"/>
            <path d="M0 300 Q34 252 63 294 Q30 285 14 333 Q51 308 76 330 Q38 355 0 348Z M360 295 Q325 248 296 291 Q330 284 347 332 Q309 306 284 330 Q323 355 360 348Z" fill="#0d5538"/>
            <path d="M0 390 Q45 340 80 385 Q43 370 22 420 H0Z M360 390 Q315 340 280 385 Q317 370 338 420 H360Z" fill="#0a432f"/>
          </svg>
          {board.flatMap((line, row) => line.map((bubble, col) => (
            <div key={row + '-' + col} className="relative z-[1] aspect-square rounded-full">
              {bubble !== null && <div className="absolute inset-[1px] overflow-hidden rounded-full border border-white/90 shadow-[inset_-5px_-7px_10px_rgba(0,0,0,.32),inset_2px_3px_5px_rgba(255,255,255,.65),0_4px_8px_rgba(0,0,0,.45)]" style={{ background: `radial-gradient(circle at 28% 20%, #fff 0%, ${COLORS[bubble]} 28%, ${COLORS[bubble]} 68%, #10182c 125%)`, boxShadow: `inset -5px -7px 10px rgba(0,0,0,.32), 0 0 10px ${COLORS[bubble]}77` }}><span className="absolute left-[18%] top-[13%] h-[24%] w-[38%] rounded-full bg-white/75 blur-[1px]" /></div>}
            </div>
          )))}
        </div>

        <div className="relative mx-auto -mt-1 flex w-full max-w-[360px] items-end justify-between rounded-b-[22px] border-x border-b border-emerald-100/20 bg-gradient-to-b from-[#1b7658]/80 to-[#123b37]/95 px-4 pb-3 pt-1 shadow-[0_12px_22px_rgba(0,0,0,.35)]">
          <svg viewBox="0 0 112 94" role="img" aria-label="Toucan game mascot" className="h-[88px] w-[104px] drop-shadow-lg">
            <path d="M29 75 Q13 58 20 38 Q27 15 51 21 Q73 26 70 49 Q67 71 48 78Z" fill="#111827" stroke="#07111d" strokeWidth="3"/>
            <path d="M27 43 Q42 30 59 43 Q64 58 48 69 Q30 65 27 43Z" fill="#f8fafc"/>
            <path d="M53 29 Q82 15 104 33 Q91 51 61 50Z" fill="#f6b91b" stroke="#a85c16" strokeWidth="3"/>
            <path d="M72 31 Q92 24 103 34 Q89 43 69 43Z" fill="#f97316"/>
            <path d="M37 28 Q41 13 54 19" fill="none" stroke="#facc15" strokeWidth="6" strokeLinecap="round"/>
            <circle cx="54" cy="34" r="4" fill="white"/><circle cx="55" cy="34" r="2" fill="#111827"/>
            <path d="M31 74 L25 89 M48 76 L52 90" stroke="#e7a62e" strokeWidth="4" strokeLinecap="round"/>
            <path d="M20 49 Q6 42 7 28 Q22 34 27 45" fill="#0ea5e9"/>
          </svg>
          <div className="relative mb-1 flex h-[76px] w-[132px] items-end justify-center">
            <div className="absolute bottom-0 h-7 w-full rounded-xl border-2 border-[#8a572b] bg-gradient-to-b from-[#c78a48] to-[#75401f] shadow-[inset_0_3px_5px_rgba(255,255,255,.3),0_5px_8px_rgba(0,0,0,.4)]"/>
            <div className="absolute bottom-5 h-12 w-16 rounded-t-[28px] border-[5px] border-[#9b612d] bg-gradient-to-b from-[#e2b46a] to-[#895025] shadow-lg"/>
            <div className="absolute bottom-[42px] h-9 w-9 rounded-full border-[3px] border-white/90 shadow-[0_0_18px_rgba(255,255,255,.5)]" style={{ background: `radial-gradient(circle at 28% 20%,#fff 0%,${COLORS[shotColor]} 34%,${COLORS[shotColor]} 72%,#162238 125%)` }}/>
            <div className="absolute bottom-0 left-2 rounded-full bg-black/30 px-2 py-1 text-[9px] font-black tracking-widest text-amber-100">{tr('AIM', 'VISER', 'صوّب')}</div>
          </div>
        </div>
        <div className="mt-14 flex items-center justify-center gap-3 rounded-2xl border border-emerald-100/25 bg-[#092d2d]/90 px-3 py-3 shadow-inner"><div className="flex flex-col items-center gap-1"><span className="text-[9px] font-black tracking-[.18em] text-sky-200">{tr('NEXT', 'SUIVANT', 'التالي')}</span><button type="button" onClick={swapBubbles} disabled={!canSwap || showAd || paused} aria-label={tr('Swap bubbles', 'Échanger les bulles', 'تبديل الفقاعتين')} className="relative h-10 w-10 rounded-full border-2 border-white/70 shadow-[0_0_14px_rgba(255,255,255,.18)] transition hover:scale-110 disabled:opacity-45" style={{ background: COLORS[nextColor] }}><span className="absolute -bottom-1 -right-2 rounded-full border border-sky-100/60 bg-slate-950 px-1 text-[10px] font-black text-white">↔</span></button></div><div className="text-center"><div className="text-[10px] font-black uppercase tracking-[.2em] text-amber-200">{tr('READY TO FIRE', 'PRÊT À TIRER', 'جاهزة للإطلاق')}</div><div className="text-xs font-semibold text-sky-100">{tr('Tap next bubble to swap once per shot', 'Touchez la bulle suivante pour échanger une fois par tir', 'اضغط على الفقاعة التالية للتبديل مرة واحدة قبل كل طلقة')}</div></div><div className="flex flex-col items-center gap-1"><span className="text-[9px] font-black tracking-[.18em] text-amber-200">{tr('SHOOT', 'TIRER', 'إطلاق')}</span><span className="h-12 w-12 rounded-full border-2 border-white shadow-[0_0_18px_rgba(255,255,255,.28)]" style={{ background: COLORS[shotColor] }} /></div></div><div className="mt-3 text-center text-xs text-sky-100">{tr('Aim at a column and release to shoot. Match 3 or more connected bubbles of the same color.', 'Visez une colonne puis relâchez pour tirer. Associez au moins 3 bulles connectées de la même couleur.', 'وجّه نحو العمود ثم ارفع إصبعك للإطلاق. طابق 3 فقاعات متصلة أو أكثر من اللون نفسه.')}</div>
        <div className="mt-3 flex gap-2">
          <button onClick={() => resetBoard(levelId)} className="flex-1 rounded-xl bg-gradient-to-b from-sky-300 to-blue-600 py-3 font-black text-white shadow-lg">↻ {tr('New Game', 'Nouvelle partie', 'لعبة جديدة')}</button>
          <button onClick={onBack} className="flex-1 rounded-xl border border-sky-300/40 bg-white/5 py-3 font-bold text-sky-100">{tr('Back to Games', 'Retour aux jeux', 'العودة إلى الألعاب')}</button>
        </div>
        <p className="mt-3 text-center text-xs text-sky-100">{endless ? tr('Endless mode: unlimited shots. A five-second ad break appears every 2 minutes.', 'Mode sans fin : tirs illimités. Une pause publicitaire de cinq secondes apparaît toutes les 2 minutes.', 'الوضع اللانهائي: طلقات بلا حدود. تظهر استراحة إعلانية لمدة خمس ثوانٍ كل دقيقتين.') : `${levelName(levelId)}: ${level.moves} ${tr('shots', 'tirs', 'طلقة')} · ${tr('reach', 'atteignez', 'للوصول إلى')} ${level.target.toLocaleString()} ${tr('points', 'points', 'نقطة')}.`}</p>
      </div>

      {showAd && <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-6 backdrop-blur-md">
        <div className="w-full max-w-sm rounded-3xl border-2 border-sky-400 bg-[#102746] p-7 text-center shadow-[0_0_50px_rgba(56,189,248,0.35)]">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-sky-300 bg-sky-400/15 text-4xl">🫧</div>
          <div className="mb-2 text-xs font-black uppercase tracking-[.3em] text-sky-300">{tr('Advertisement', 'Publicité', 'إعلان')}</div>
          <h3 className="text-xl font-black text-white">{adReason === 'endless' ? tr('Take a short break!', 'Petite pause !', 'استراحة قصيرة!') : adReason === 'gameover' ? tr('Game over!', 'Partie terminée !', 'انتهت اللعبة!') : tr('Level completed!', 'Niveau terminé !', 'اكتمل المستوى!')}</h3>
          <p className="mt-2 text-sm text-sky-100">{adReason === 'endless' ? tr('Your game will resume after the ad break.', 'Votre partie reprendra après la publicité.', 'ستُستأنف لعبتك بعد الاستراحة الإعلانية.') : `${tr('Score', 'Score', 'النقاط')}: ${score.toLocaleString()}`}</p>
          <div className="mt-5 rounded-2xl border border-sky-300/30 bg-[#071329] py-4 text-lg font-black text-yellow-300">{tr('Ad break ends in', 'La pause publicitaire se termine dans', 'تنتهي الاستراحة الإعلانية خلال')} {adCountdown} {tr('seconds', 'secondes', 'ثوانٍ')}</div>
        </div>
      </div>}
    </div>
  );
}
