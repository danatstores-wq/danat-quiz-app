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
              <linearGradient id="oceanSky" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#48a9e8"/><stop offset=".58" stopColor="#a8e4f5"/><stop offset="1" stopColor="#f8e6b4"/></linearGradient>
              <linearGradient id="oceanSea" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#24b8c7"/><stop offset=".45" stopColor="#087d9c"/><stop offset="1" stopColor="#064b70"/></linearGradient>
              <linearGradient id="treeLeaf" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#7bd45c"/><stop offset=".48" stopColor="#27884b"/><stop offset="1" stopColor="#0b493d"/></linearGradient>
              <linearGradient id="treeTrunk" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#59351e"/><stop offset=".5" stopColor="#a56a35"/><stop offset="1" stopColor="#422619"/></linearGradient>
              <radialGradient id="coastSun"><stop stopColor="#fff9d5" stopOpacity=".95"/><stop offset="1" stopColor="#fff9d5" stopOpacity="0"/></radialGradient>
            </defs>
            <rect width="360" height="420" fill="url(#oceanSky)"/>
            <circle cx="278" cy="74" r="75" fill="url(#coastSun)"/>
            <circle cx="278" cy="74" r="24" fill="#fff5c4" opacity=".9"/>
            <g fill="#fff" opacity=".68"><path d="M75 83 Q87 65 106 77 Q119 55 141 70 Q159 69 164 87Z"/><path d="M198 126 Q210 109 226 120 Q239 102 258 117 Q276 116 282 132Z"/><path d="M36 155 Q46 143 59 151 Q71 137 84 151 Q98 150 102 162Z"/></g>
            <path d="M0 215 Q42 189 84 210 T166 207 T250 211 T360 198 V420 H0Z" fill="#d5c18c" opacity=".55"/>
            <path d="M0 250 Q64 222 122 244 T245 237 T360 230 V420 H0Z" fill="url(#oceanSea)"/>
            <path d="M0 271 Q48 256 94 270 T188 269 T282 264 T360 258" stroke="#b9f5ee" strokeWidth="4" opacity=".65" fill="none"/>
            <path d="M0 304 Q55 290 110 303 T220 300 T360 292" stroke="#73dce0" strokeWidth="3" opacity=".65" fill="none"/>
            <path d="M0 345 Q48 332 96 344 T192 340 T288 335 T360 329" stroke="#b6f2ed" strokeWidth="2" opacity=".5" fill="none"/>
            <path d="M0 385 Q52 373 104 385 T208 381 T312 375 T360 370 V420 H0Z" fill="#053d62" opacity=".45"/>
            <g>
              <path d="M19 0 Q35 76 25 180 Q21 222 7 260 L0 260 V0Z" fill="url(#treeTrunk)"/>
              <path d="M8 118 Q50 89 79 122 M19 83 Q48 48 73 57" stroke="#59351e" strokeWidth="9" fill="none" strokeLinecap="round"/>
              <g fill="url(#treeLeaf)" stroke="#145b3c" strokeWidth="2">
                <ellipse cx="12" cy="34" rx="45" ry="35"/><ellipse cx="51" cy="48" rx="43" ry="34"/><ellipse cx="2" cy="83" rx="42" ry="38"/><ellipse cx="53" cy="105" rx="42" ry="36"/><ellipse cx="5" cy="145" rx="42" ry="38"/>
                <path d="M0 28 Q49 -2 64 45 Q26 40 0 68Z"/><path d="M0 90 Q53 53 83 99 Q38 91 0 126Z"/>
              </g>
              <path d="M341 0 Q325 80 337 180 Q341 222 354 260 L360 260 V0Z" fill="url(#treeTrunk)"/>
              <path d="M350 118 Q310 89 281 122 M341 83 Q312 48 287 57" stroke="#59351e" strokeWidth="9" fill="none" strokeLinecap="round"/>
              <g fill="url(#treeLeaf)" stroke="#145b3c" strokeWidth="2">
                <ellipse cx="348" cy="34" rx="45" ry="35"/><ellipse cx="309" cy="48" rx="43" ry="34"/><ellipse cx="358" cy="83" rx="42" ry="38"/><ellipse cx="307" cy="105" rx="42" ry="36"/><ellipse cx="355" cy="145" rx="42" ry="38"/>
                <path d="M360 28 Q311 -2 296 45 Q334 40 360 68Z"/><path d="M360 90 Q307 53 277 99 Q322 91 360 126Z"/>
              </g>
            </g>
            <g fill="#f8d46d" opacity=".9"><circle cx="55" cy="210" r="3"/><circle cx="305" cy="204" r="3"/><circle cx="280" cy="222" r="2"/></g>
          </svg>
          {board.flatMap((line, row) => line.map((bubble, col) => (
            <div key={row + '-' + col} className="relative z-[1] aspect-square rounded-full">
              {bubble !== null && <div className="absolute inset-[1px] overflow-hidden rounded-full border border-white/90 shadow-[inset_-5px_-7px_10px_rgba(0,0,0,.32),inset_2px_3px_5px_rgba(255,255,255,.65),0_4px_8px_rgba(0,0,0,.45)]" style={{ background: `radial-gradient(circle at 28% 20%, #fff 0%, ${COLORS[bubble]} 28%, ${COLORS[bubble]} 68%, #10182c 125%)`, boxShadow: `inset -5px -7px 10px rgba(0,0,0,.32), 0 0 10px ${COLORS[bubble]}77` }}><span className="absolute left-[18%] top-[13%] h-[24%] w-[38%] rounded-full bg-white/75 blur-[1px]" /></div>}
            </div>
          )))}
        </div>

        <div className="relative mx-auto -mt-1 flex w-full max-w-[360px] items-end justify-between overflow-hidden rounded-b-[24px] border-x border-b border-amber-200/30 bg-[radial-gradient(ellipse_at_50%_0%,rgba(100,190,130,.45),transparent_65%),linear-gradient(180deg,#174f42,#092d2b)] px-3 pb-3 pt-2 shadow-[0_16px_30px_rgba(0,0,0,.5),inset_0_1px_0_rgba(255,255,255,.18)]">
          <svg viewBox="0 0 150 126" role="img" aria-label="Colourful tropical macaw parrot" className="h-[116px] w-[132px] shrink-0 drop-shadow-[0_8px_8px_rgba(0,0,0,.55)]">
            <defs>
              <linearGradient id="macawBody" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#21c5d5"/><stop offset=".42" stopColor="#0875b9"/><stop offset="1" stopColor="#082c69"/></linearGradient>
              <linearGradient id="macawWing" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ffdc35"/><stop offset=".35" stopColor="#ef7c24"/><stop offset=".7" stopColor="#d52d36"/><stop offset="1" stopColor="#6d1c57"/></linearGradient>
              <linearGradient id="macawHead" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ff4a36"/><stop offset=".6" stopColor="#d51e48"/><stop offset="1" stopColor="#7c174e"/></linearGradient>
              <linearGradient id="macawBeak" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#343b45"/><stop offset=".55" stopColor="#101923"/><stop offset="1" stopColor="#050b12"/></linearGradient>
            </defs>
            <ellipse cx="70" cy="116" rx="42" ry="6" fill="#031a18" opacity=".5"/>
            <path d="M46 80 Q13 94 10 117 Q37 108 65 92Z" fill="#0875ad" stroke="#062c5b" strokeWidth="2"/>
            <path d="M57 83 Q34 100 34 116 Q58 108 76 91Z" fill="#f1c52c" stroke="#9e6a17" strokeWidth="2"/>
            <path d="M65 86 Q56 105 60 119 Q81 107 87 91Z" fill="#e74335" stroke="#8d1e34" strokeWidth="2"/>
            <path d="M42 88 Q29 65 40 43 Q50 21 77 27 Q105 32 107 63 Q107 94 81 102 Q56 104 42 88Z" fill="url(#macawBody)" stroke="#062d59" strokeWidth="3"/>
            <path d="M47 60 Q65 42 91 56 Q105 73 85 94 Q61 99 47 80Z" fill="url(#macawWing)" stroke="#8c2b38" strokeWidth="2"/>
            <path d="M52 67 Q68 52 91 65 M49 77 Q68 63 89 76 M54 87 Q69 77 83 86" stroke="#ffd64a" strokeWidth="3" fill="none" opacity=".9"/>
            <path d="M43 48 Q34 23 57 12 Q83 -1 103 19 Q113 31 103 48 Q85 63 59 56Z" fill="url(#macawHead)" stroke="#761b43" strokeWidth="2"/>
            <path d="M54 23 Q72 8 93 20" stroke="#ffb2a0" strokeWidth="4" fill="none" opacity=".65"/>
            <path d="M94 43 Q119 35 135 53 Q128 78 105 81 Q91 72 94 43Z" fill="url(#macawBeak)" stroke="#050b12" strokeWidth="3"/>
            <path d="M102 53 Q119 47 132 55" stroke="#7d8992" strokeWidth="2" fill="none" opacity=".8"/>
            <path d="M98 66 Q113 69 127 59" stroke="#050b12" strokeWidth="3" fill="none"/>
            <path d="M52 38 Q63 28 80 35" stroke="#fff" strokeWidth="5" strokeLinecap="round" fill="none"/>
            <circle cx="79" cy="37" r="8" fill="#fff"/><circle cx="81" cy="37" r="4.5" fill="#111827"/><circle cx="82" cy="35" r="1.6" fill="#fff"/>
            <path d="M72 101 L68 116 M88 99 L91 115" stroke="#d89a25" strokeWidth="4" strokeLinecap="round"/>
            <path d="M61 116 Q68 110 75 116 M84 115 Q92 109 99 115" stroke="#f4bd35" strokeWidth="4" fill="none" strokeLinecap="round"/>
            <path d="M39 46 Q23 36 24 20 Q41 25 49 39" fill="#ffcf32" stroke="#9d6c19" strokeWidth="2"/>
          </svg>
          <div className="relative flex h-[112px] w-[190px] shrink-0 items-end justify-center">
            <svg viewBox="0 0 190 120" role="img" aria-label="Realistic iron bubble cannon on wooden carriage" className="h-full w-full overflow-visible drop-shadow-[0_8px_8px_rgba(0,0,0,.6)]">
              <defs>
                <linearGradient id="ironBarrel" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#dce5e9"/><stop offset=".18" stopColor="#667783"/><stop offset=".42" stopColor="#263744"/><stop offset=".7" stopColor="#101c28"/><stop offset="1" stopColor="#050d16"/></linearGradient>
                <linearGradient id="ironRim" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f5fbff"/><stop offset=".3" stopColor="#879ba5"/><stop offset=".7" stopColor="#394b57"/><stop offset="1" stopColor="#17232d"/></linearGradient>
                <linearGradient id="carriageWood" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#c98a4c"/><stop offset=".35" stopColor="#85502e"/><stop offset="1" stopColor="#3c241c"/></linearGradient>
                <radialGradient id="wheelMetal"><stop stopColor="#8b9aa1"/><stop offset=".65" stopColor="#35444e"/><stop offset="1" stopColor="#111c25"/></radialGradient>
              </defs>
              <ellipse cx="96" cy="111" rx="84" ry="7" fill="#031a18" opacity=".55"/>
              <g>
                <circle cx="48" cy="91" r="20" fill="url(#wheelMetal)" stroke="#111b23" strokeWidth="4"/>
                <circle cx="48" cy="91" r="12" fill="none" stroke="#b4c0c5" strokeWidth="3"/>
                <circle cx="48" cy="91" r="5" fill="#d8e0e3" stroke="#273640" strokeWidth="2"/>
                <circle cx="145" cy="91" r="20" fill="url(#wheelMetal)" stroke="#111b23" strokeWidth="4"/>
                <circle cx="145" cy="91" r="12" fill="none" stroke="#b4c0c5" strokeWidth="3"/>
                <circle cx="145" cy="91" r="5" fill="#d8e0e3" stroke="#273640" strokeWidth="2"/>
                <path d="M24 72 Q93 57 169 72 L166 94 Q95 108 28 94Z" fill="url(#carriageWood)" stroke="#402619" strokeWidth="4"/>
                <path d="M31 77 Q96 65 161 77 M33 88 Q96 101 159 88" stroke="#e0a66a" strokeWidth="2" fill="none" opacity=".7"/>
                <path d="M61 75 L67 58 Q96 48 126 58 L132 75Z" fill="url(#carriageWood)" stroke="#42291e" strokeWidth="3"/>
                <g transform="rotate(-13 98 56)">
                  <path d="M67 64 L70 27 Q96 15 122 27 L126 64 Q97 76 67 64Z" fill="url(#ironBarrel)" stroke="#101a23" strokeWidth="4"/>
                  <path d="M71 38 Q97 28 122 38 L122 47 Q97 38 71 47Z" fill="url(#ironRim)" stroke="#263743" strokeWidth="2"/>
                  <path d="M68 24 Q96 10 124 24 L130 38 Q97 28 63 38Z" fill="url(#ironRim)" stroke="#17232d" strokeWidth="3"/>
                  <ellipse cx="96" cy="25" rx="29" ry="12" fill="#050b12" stroke="#d5e0e5" strokeWidth="5"/>
                  <ellipse cx="96" cy="25" rx="20" ry="7" fill="#02070d"/>
                  <path d="M76 54 Q97 47 119 54" stroke="#d6e0e4" strokeWidth="2" fill="none" opacity=".7"/>
                  <circle cx="77" cy="31" r="2.5" fill="#dce5e9"/><circle cx="115" cy="31" r="2.5" fill="#dce5e9"/>
                </g>
                <path d="M79 72 Q96 64 115 72" stroke="#e0a66a" strokeWidth="3" fill="none"/>
                <circle cx="96" cy="72" r="4" fill="#d9e1e5" stroke="#263743" strokeWidth="2"/>
              </g>
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
