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
              <linearGradient id="canopySky" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#123d55"/><stop offset=".48" stopColor="#36a6a0"/><stop offset="1" stopColor="#b6d78a"/></linearGradient>
              <linearGradient id="falls" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#9af7ed"/><stop offset=".45" stopColor="#e4fff2"/><stop offset="1" stopColor="#42c9d5"/></linearGradient>
              <linearGradient id="ruin" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#e9d19a"/><stop offset=".55" stopColor="#b48a55"/><stop offset="1" stopColor="#6b563c"/></linearGradient>
              <linearGradient id="leaf" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#56b86b"/><stop offset="1" stopColor="#073f35"/></linearGradient>
              <radialGradient id="sunGlow"><stop stopColor="#fff6bd" stopOpacity=".8"/><stop offset="1" stopColor="#fff6bd" stopOpacity="0"/></radialGradient>
            </defs>
            <rect width="360" height="420" fill="url(#canopySky)"/>
            <circle cx="275" cy="95" r="88" fill="url(#sunGlow)"/>
            <path d="M0 180 Q45 125 92 170 T190 158 T360 165 V420 H0Z" fill="#1d755a"/>
            <path d="M0 220 Q58 168 112 218 T226 205 T360 214 V420 H0Z" fill="#145640"/>
            <g opacity=".9">
              <path d="M105 110 H255 V145 H105Z" fill="url(#ruin)" stroke="#705638" strokeWidth="4"/>
              <path d="M119 145 V245 H145 V145 M215 145 V245 H241 V145" fill="url(#ruin)" stroke="#765b3b" strokeWidth="4"/>
              <path d="M96 108 L180 63 L264 108Z" fill="#d4b77e" stroke="#705638" strokeWidth="5"/>
              <path d="M158 80 L180 54 L202 80Z" fill="#f0d8a1"/>
              <path d="M148 160 V230 M180 160 V230 M212 160 V230" stroke="#765b3b" strokeWidth="5" opacity=".65"/>
              <path d="M88 245 H272 L288 265 H72Z" fill="#8c7049"/>
            </g>
            <path d="M142 145 Q145 205 129 270 Q126 300 151 316 Q169 298 166 270 L165 145Z" fill="url(#falls)" opacity=".92"/>
            <path d="M192 145 Q193 207 180 272 Q178 300 201 317 Q220 296 215 268 L214 145Z" fill="url(#falls)" opacity=".82"/>
            <path d="M151 155 Q155 235 145 290 M202 155 Q205 235 194 290" stroke="#fff" strokeWidth="5" opacity=".75" fill="none"/>
            <path d="M0 290 Q52 250 100 290 T205 285 T360 278 V420 H0Z" fill="#0e5143"/>
            <path d="M0 330 Q60 285 116 328 T238 322 T360 315 V420 H0Z" fill="#0a4038"/>
            <path d="M0 370 Q72 320 125 367 T250 360 T360 352 V420 H0Z" fill="#082f30"/>
            <g fill="url(#leaf)" stroke="#073d32" strokeWidth="2">
              <path d="M0 0 Q65 24 43 105 Q25 74 0 82Z"/><path d="M0 70 Q66 53 78 137 Q39 119 0 151Z"/>
              <path d="M360 0 Q295 20 318 105 Q337 72 360 83Z"/><path d="M360 68 Q294 54 282 139 Q322 119 360 153Z"/>
              <path d="M12 270 Q63 229 89 295 Q47 275 18 322Z"/><path d="M348 266 Q298 229 270 296 Q313 276 343 324Z"/>
            </g>
            <g fill="#f3c65e" opacity=".9"><circle cx="44" cy="185" r="5"/><circle cx="62" cy="202" r="3"/><circle cx="300" cy="180" r="4"/><circle cx="285" cy="199" r="3"/></g>
            <path d="M0 405 Q50 365 95 405 M265 405 Q310 365 360 405" stroke="#7acb75" strokeWidth="9" fill="none" opacity=".65"/>
          </svg>
          {board.flatMap((line, row) => line.map((bubble, col) => (
            <div key={row + '-' + col} className="relative z-[1] aspect-square rounded-full">
              {bubble !== null && <div className="absolute inset-[1px] overflow-hidden rounded-full border border-white/90 shadow-[inset_-5px_-7px_10px_rgba(0,0,0,.32),inset_2px_3px_5px_rgba(255,255,255,.65),0_4px_8px_rgba(0,0,0,.45)]" style={{ background: `radial-gradient(circle at 28% 20%, #fff 0%, ${COLORS[bubble]} 28%, ${COLORS[bubble]} 68%, #10182c 125%)`, boxShadow: `inset -5px -7px 10px rgba(0,0,0,.32), 0 0 10px ${COLORS[bubble]}77` }}><span className="absolute left-[18%] top-[13%] h-[24%] w-[38%] rounded-full bg-white/75 blur-[1px]" /></div>}
            </div>
          )))}
        </div>

        <div className="relative mx-auto -mt-1 flex w-full max-w-[360px] items-end justify-between overflow-hidden rounded-b-[24px] border-x border-b border-amber-200/30 bg-[radial-gradient(ellipse_at_50%_0%,rgba(100,190,130,.45),transparent_65%),linear-gradient(180deg,#174f42,#092d2b)] px-3 pb-3 pt-2 shadow-[0_16px_30px_rgba(0,0,0,.5),inset_0_1px_0_rgba(255,255,255,.18)]">
          <svg viewBox="0 0 132 118" role="img" aria-label="Colourful toucan mascot" className="h-[112px] w-[124px] shrink-0 drop-shadow-[0_8px_8px_rgba(0,0,0,.55)]">
            <defs>
              <linearGradient id="toucanBeak" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff27a"/><stop offset=".38" stopColor="#ffb52e"/><stop offset=".72" stopColor="#f36a22"/><stop offset="1" stopColor="#b82f27"/></linearGradient>
              <linearGradient id="toucanWing" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#243f70"/><stop offset="1" stopColor="#071b36"/></linearGradient>
              <linearGradient id="toucanChest" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#fffef0"/><stop offset="1" stopColor="#c8d9d0"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="104" rx="34" ry="7" fill="#031d1b" opacity=".45"/>
            <path d="M38 91 Q19 75 27 47 Q34 18 63 22 Q91 27 89 61 Q86 91 62 98 Q46 99 38 91Z" fill="#07121f" stroke="#020b12" strokeWidth="3"/>
            <path d="M39 57 Q53 40 74 52 Q83 68 67 88 Q48 90 39 75Z" fill="url(#toucanChest)"/>
            <path d="M34 59 Q22 58 16 77 Q32 74 43 67Z" fill="#1b78a6" stroke="#0b4268" strokeWidth="2"/>
            <path d="M44 78 Q55 63 77 71 Q70 91 51 94Z" fill="url(#toucanWing)" stroke="#020b12" strokeWidth="2"/>
            <path d="M52 80 Q63 72 73 76" stroke="#4c83ad" strokeWidth="3" fill="none" opacity=".8"/>
            <path d="M59 31 Q83 5 122 26 Q111 57 75 59 Q60 52 59 31Z" fill="url(#toucanBeak)" stroke="#9b3f20" strokeWidth="3"/>
            <path d="M74 26 Q101 16 119 28 Q104 37 77 42Z" fill="#fff0a0" opacity=".65"/>
            <path d="M71 49 Q97 50 116 31" stroke="#9b3f20" strokeWidth="2" fill="none"/>
            <path d="M48 30 Q54 13 69 19" stroke="#f5c63c" strokeWidth="7" strokeLinecap="round" fill="none"/>
            <circle cx="67" cy="39" r="7" fill="#fff"/><circle cx="69" cy="39" r="3.5" fill="#101827"/><circle cx="70" cy="38" r="1.2" fill="#fff"/>
            <path d="M45 96 L40 111 M63 97 L67 111" stroke="#e5a52e" strokeWidth="4" strokeLinecap="round"/>
            <path d="M33 111 H45 M60 111 H73" stroke="#f6c24a" strokeWidth="4" strokeLinecap="round"/>
            <path d="M31 45 Q21 34 24 22 Q39 26 45 39" fill="#0d5c8d" stroke="#062b4b" strokeWidth="2"/>
          </svg>
          <div className="relative flex h-[112px] w-[190px] shrink-0 items-end justify-center">
            <svg viewBox="0 0 190 120" role="img" aria-label="Ornate wooden bubble cannon" className="h-full w-full overflow-visible drop-shadow-[0_8px_8px_rgba(0,0,0,.55)]">
              <defs>
                <linearGradient id="cannonWood" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#e4b66c"/><stop offset=".45" stopColor="#a76532"/><stop offset="1" stopColor="#542b20"/></linearGradient>
                <linearGradient id="cannonGold" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff1a8"/><stop offset=".45" stopColor="#d99a32"/><stop offset="1" stopColor="#80501c"/></linearGradient>
                <linearGradient id="cannonBarrel" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#f2d08b"/><stop offset=".35" stopColor="#a96b35"/><stop offset="1" stopColor="#4b2b22"/></linearGradient>
              </defs>
              <ellipse cx="99" cy="109" rx="82" ry="8" fill="#031a18" opacity=".5"/>
              <path d="M27 88 Q94 66 162 88 L171 105 Q94 119 19 105Z" fill="url(#cannonWood)" stroke="#4d291b" strokeWidth="4"/>
              <path d="M38 90 Q95 76 151 90" stroke="#f1c477" strokeWidth="3" fill="none" opacity=".8"/>
              <circle cx="42" cy="99" r="5" fill="url(#cannonGold)" stroke="#70451d" strokeWidth="2"/><circle cx="148" cy="99" r="5" fill="url(#cannonGold)" stroke="#70451d" strokeWidth="2"/>
              <path d="M70 87 Q69 68 82 57 L112 57 Q126 69 124 88Z" fill="url(#cannonWood)" stroke="#542b20" strokeWidth="4"/>
              <g transform="rotate(-12 96 62)">
                <path d="M72 70 L76 30 Q96 20 116 30 L120 70Z" fill="url(#cannonBarrel)" stroke="#5b321f" strokeWidth="4"/>
                <path d="M75 39 Q96 32 117 39 L117 48 Q96 41 75 48Z" fill="url(#cannonGold)" stroke="#80501c" strokeWidth="2"/>
                <path d="M73 27 Q96 15 119 27 L123 38 Q96 28 69 38Z" fill="url(#cannonGold)" stroke="#70451d" strokeWidth="3"/>
                <ellipse cx="96" cy="27" rx="22" ry="9" fill="#241b24" stroke="#ffe6a0" strokeWidth="4"/>
                <ellipse cx="96" cy="27" rx="13" ry="5" fill="#091b25"/>
                <path d="M82 55 Q96 50 112 55" stroke="#f7d18b" strokeWidth="3" fill="none" opacity=".8"/>
              </g>
              <path d="M83 78 Q96 72 109 78" stroke="#f7d18b" strokeWidth="3" fill="none"/>
              <circle cx="96" cy="78" r="5" fill="url(#cannonGold)" stroke="#70451d" strokeWidth="2"/>
            </svg>
            <div className="absolute right-1 top-0 rounded-full border border-amber-200/60 bg-[#102d2b]/90 px-2 py-1 text-[9px] font-black tracking-widest text-amber-100 shadow-lg">{tr('AIM', 'VISER', 'صوّب')}</div>
            <div className="absolute left-[78px] top-[5px] h-8 w-8 rounded-full border-[3px] border-white/90 shadow-[0_0_18px_rgba(255,255,255,.7)]" style={{ background: `radial-gradient(circle at 28% 20%,#fff 0%,${COLORS[shotColor]} 34%,${COLORS[shotColor]} 72%,#162238 125%)` }}/>
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
