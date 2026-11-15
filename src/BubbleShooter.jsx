import { useEffect, useRef, useState } from 'react';

const BUBBLE_ASSET = `${import.meta.env.BASE_URL}images/bubble/`;
const BUBBLE_FILES = ['red', 'blue', 'yellow', 'purpple', 'green', 'orange', 'pink', 'cyan', 'deep'];
const COLORS = ['#ff334f', '#2498ef', '#ffd52e', '#8b55d9', '#21bd65', '#ff8a24', '#f35aa8', '#20cbd3', '#3949ab'];
const LEVELS = [
  { id: 'easy', moves: 40, target: 700, colors: 5, rows: 4 },
  { id: 'medium', moves: 32, target: 1200, colors: 7, rows: 5 },
  { id: 'hard', moves: 25, target: 1800, colors: 9, rows: 6 },
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

      <div className="rounded-[28px] border border-sky-300/50 bg-[#0b3445] bg-cover bg-center p-3 shadow-[0_24px_70px_rgba(0,0,0,.58),inset_0_1px_0_rgba(255,255,255,.18)] sm:p-5" style={{ backgroundImage: `linear-gradient(180deg,rgba(5,30,48,.18),rgba(4,28,42,.58)),url("${BUBBLE_ASSET}background.png")` }}>
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
          dir="ltr"
          onPointerMove={handleGridPointer}
          onPointerUp={aimAndShoot}
          className="relative mx-auto grid w-full max-w-[360px] grid-cols-8 gap-1 rounded-[24px] border-[3px] border-white/45 bg-sky-900/25 p-2 pb-5 shadow-[inset_0_5px_18px_rgba(255,255,255,.25),0_10px_28px_rgba(0,0,0,.4)] touch-pan-y"
        >
          {board.flatMap((line, row) => line.map((bubble, col) => (
            <div key={row + '-' + col} className="relative z-[1] aspect-square rounded-full">
              {bubble !== null && <img src={`${BUBBLE_ASSET}${BUBBLE_FILES[bubble]}.png`} alt="" draggable="false" className="absolute inset-0 h-full w-full select-none object-contain drop-shadow-[0_3px_5px_rgba(0,0,0,.38)]" />}
            </div>
          )))}
        </div>

        <div dir="ltr" className="relative mx-auto -mt-1 flex w-full max-w-[360px] items-end justify-between overflow-hidden rounded-b-[24px] border-x border-b border-amber-200/30 bg-[radial-gradient(ellipse_at_50%_0%,rgba(100,190,130,.45),transparent_65%),linear-gradient(180deg,#174f42,#092d2b)] px-3 pb-3 pt-2 shadow-[0_16px_30px_rgba(0,0,0,.5),inset_0_1px_0_rgba(255,255,255,.18)]">
          <img src={`${BUBBLE_ASSET}parrot.png`} alt="Tropical parrot" draggable="false" className="h-[116px] w-[132px] shrink-0 object-contain drop-shadow-[0_8px_8px_rgba(0,0,0,.55)]" />
          <div className="relative flex h-[112px] w-[190px] shrink-0 items-end justify-center">
            <img src={`${BUBBLE_ASSET}cannon.png`} alt="Aiming cannon" draggable="false" className="h-full w-full object-contain transition-transform duration-100 ease-out" style={{ transform: `rotate(${(aimCol - 3.5) * 6}deg)`, transformOrigin: "50% 88%" }} />
            <div className="absolute right-1 top-0 rounded-full border border-amber-200/60 bg-[#102d2b]/90 px-2 py-1 text-[9px] font-black tracking-widest text-amber-100 shadow-lg">{tr('AIM', 'VISER', 'صوّب')}</div>
            <div className="absolute left-[78px] top-[5px] h-8 w-8 rounded-full border-[3px] border-white/90 shadow-[0_0_18px_rgba(255,255,255,.7)]" style={{ background: COLORS[shotColor] }}/>
          </div>
        </div>
        <div className="mt-14 flex items-center justify-center gap-3 rounded-2xl border border-emerald-100/25 bg-[#092d2d]/90 px-3 py-3 shadow-inner"><div className="flex flex-col items-center gap-1"><span className="text-[9px] font-black tracking-[.18em] text-sky-200">{tr('NEXT', 'SUIVANT', 'التالي')}</span><button type="button" onClick={swapBubbles} disabled={!canSwap || showAd || paused} aria-label={tr('Swap bubbles', 'Échanger les bulles', 'تبديل الفقاعتين')} className="relative h-10 w-10 rounded-full border-2 border-white/70 bg-white/10 shadow-[0_0_14px_rgba(255,255,255,.18)] transition hover:scale-110 disabled:opacity-45"><img src={`${BUBBLE_ASSET}${BUBBLE_FILES[nextColor]}.png`} alt="" className="h-full w-full object-contain" /><span className="absolute -bottom-1 -right-2 rounded-full border border-sky-100/60 bg-slate-950 px-1 text-[10px] font-black text-white">↔</span></button></div><div className="text-center"><div className="text-[10px] font-black uppercase tracking-[.2em] text-amber-200">{tr('READY TO FIRE', 'PRÊT À TIRER', 'جاهزة للإطلاق')}</div><div className="text-xs font-semibold text-sky-100">{tr('Tap next bubble to swap once per shot', 'Touchez la bulle suivante pour échanger une fois par tir', 'اضغط على الفقاعة التالية للتبديل مرة واحدة قبل كل طلقة')}</div></div><div className="flex flex-col items-center gap-1"><span className="text-[9px] font-black tracking-[.18em] text-amber-200">{tr('SHOOT', 'TIRER', 'إطلاق')}</span><span className="h-12 w-12"><img src={`${BUBBLE_ASSET}${BUBBLE_FILES[shotColor]}.png`} alt="" className="h-full w-full object-contain drop-shadow-lg" /></span></div></div><div className="mt-3 text-center text-xs text-sky-100">{tr('Aim at a column and release to shoot. Match 3 or more connected bubbles of the same color.', 'Visez une colonne puis relâchez pour tirer. Associez au moins 3 bulles connectées de la même couleur.', 'وجّه نحو العمود ثم ارفع إصبعك للإطلاق. طابق 3 فقاعات متصلة أو أكثر من اللون نفسه.')}</div>
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
