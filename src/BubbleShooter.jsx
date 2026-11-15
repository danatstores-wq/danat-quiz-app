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
  }, [endless, showAd, paused, score, moves]);

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
    const remaining = endless ? Infinity : moves - 1;
    if (!endless) setMoves(remaining);

    const targetReached = !endless && nextScore >= level.target;
    const movesFinished = !endless && remaining <= 0;
    if (targetReached || movesFinished) {
      setAdReason('level');
      setShowAd(true);
      setPaused(true);
    } else if (false) {
      setAdReason('gameover');
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

      <div className="rounded-[28px] border border-sky-300/40 bg-gradient-to-br from-[#123d68] via-[#21133f] to-[#101a36] p-3 shadow-[0_18px_45px_rgba(0,0,0,.45)] sm:p-5">
        <div className="mb-4 grid grid-cols-4 gap-2">
          {levelIds.map((id, index) => {
            const unlocked = index <= currentIndex;
            return <div key={id} className={`rounded-xl border px-1.5 py-2 text-center ${levelId === id ? 'border-amber-300 bg-amber-300/20 text-amber-100' : unlocked ? 'border-white/15 bg-black/20 text-sky-100' : 'border-white/10 bg-black/10 text-sky-300/40'}`}>
              <span className="block text-xs font-black">{levelName(id)}</span>
              <span className="mt-0.5 block text-[9px] font-semibold opacity-80">{levelId === id ? tr('Current', 'Actuel', 'الحالي') : unlocked ? tr('Unlocked', 'Débloqué', 'مفتوح') : tr('Locked', 'Verrouillé', 'مغلق')}</span>
            </div>;
          })}
        </div>

        <div className="mb-4 flex items-center justify-between gap-2">
          <div className="rounded-xl border border-white/15 bg-black/25 px-3 py-2 text-center">
            <div className="text-[10px] font-bold uppercase tracking-wider text-sky-200">{tr('Score', 'Score', 'النقاط')}</div>
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
          className="relative mx-auto grid w-full max-w-[360px] grid-cols-8 gap-1 rounded-2xl border border-white/20 bg-[#071329]/90 p-2 shadow-inner touch-pan-y"
        >
          {board.flatMap((line, row) => line.map((bubble, col) => (
            <div key={row + '-' + col} className="relative aspect-square rounded-full">
              {bubble !== null && <div className="absolute inset-[2px] rounded-full border-2 border-white/60 shadow-[inset_-4px_-5px_8px_rgba(0,0,0,.28),0_3px_7px_rgba(0,0,0,.4)]" style={{ background: `radial-gradient(circle at 30% 25%, white 0%, ${COLORS[bubble]} 35%, ${COLORS[bubble]} 70%, #172033 130%)` }} />}
            </div>
          )))}
          <div className="pointer-events-none absolute bottom-[-44px] left-1/2 flex -translate-x-1/2 items-center gap-3">
            <span className="text-[10px] font-bold text-sky-200">{tr('NEXT', 'SUIVANT', 'التالي')}</span>
            <span className="h-7 w-7 rounded-full border-2 border-white/70 shadow-lg" style={{ background: COLORS[nextColor] }} />
            <span className="h-10 w-10 rounded-full border-2 border-white shadow-xl" style={{ background: COLORS[shotColor] }} />
          </div>
          <div className="pointer-events-none absolute bottom-[-22px] left-1/2 h-5 w-1 -translate-x-1/2 bg-white/70" style={{ transform: `translateX(${(aimCol - 3.5) * 18}px) rotate(${(aimCol - 3.5) * 4}deg)` }} />
        </div>

        <div className="mt-14 text-center text-xs text-sky-100">{tr('Tap or aim at a column to shoot. Match 3 or more connected bubbles of the same color.', 'Touchez une colonne ou visez-la pour tirer. Associez au moins 3 bulles connectées de la même couleur.', 'اضغط على عمود أو وجّه التصويب نحوه لإطلاق الفقاعة. طابق 3 فقاعات متصلة أو أكثر من اللون نفسه.')}</div>
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
