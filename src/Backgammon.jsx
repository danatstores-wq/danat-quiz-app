import React, { useCallback, useEffect, useMemo, useState } from 'react';

const initialBoard = () => {
  const board = Array(24).fill(0);
  board[23] = 2; board[12] = 5; board[7] = 3; board[5] = 5;
  board[0] = -2; board[11] = -5; board[16] = -3; board[18] = -5;
  return board;
};

const TEXT = {
  English: {
    title: 'Backgammon', subtitle: 'Classic strategy. Fair dice. No tricks.',
    you: 'YOU', computer: 'COMPUTER', yourTurn: 'Your turn', cpuTurn: "Computer's turn",
    roll: 'ROLL DICE', rolling: 'Rolling…', move: 'Choose a checker, then a highlighted point.',
    choose: 'Select a checker to move.', bar: 'BAR', borneOff: 'OFF',
    noMoves: 'No legal moves. Your turn is over.', thinking: 'Computer is thinking…',
    newGame: 'New game', back: 'Back', fair: 'Fair dice: secure random rolls',
    diceError: 'Secure dice are unavailable in this browser. Please use an up-to-date browser over HTTPS.',
    win: 'You win!', lose: 'Computer wins!', playAgain: 'Play again',
    hit: 'A blot was hit!', double: 'Double roll — four moves available.',
    rules: 'Move all 15 checkers into your home board, then bear them off. Hit single opposing checkers to send them to the bar. A point with two or more opposing checkers is blocked.',
    selected: 'Selected', remaining: 'Moves left'
  },
  'Français': {
    title: 'Backgammon', subtitle: 'Stratégie classique. Dés équitables. Sans triche.',
    you: 'VOUS', computer: 'ORDINATEUR', yourTurn: 'À votre tour', cpuTurn: "Tour de l'ordinateur",
    roll: 'LANCER LES DÉS', rolling: 'Lancement…', move: 'Choisissez un pion, puis une case en surbrillance.',
    choose: 'Sélectionnez un pion à déplacer.', bar: 'BARRE', borneOff: 'SORTIS',
    noMoves: 'Aucun coup légal. Votre tour est terminé.', thinking: "L'ordinateur réfléchit…",
    newGame: 'Nouvelle partie', back: 'Retour', fair: 'Dés équitables : tirage sécurisé',
    diceError: 'Les dés sécurisés ne sont pas disponibles. Utilisez un navigateur récent en HTTPS.',
    win: 'Vous avez gagné !', lose: "L'ordinateur gagne !", playAgain: 'Rejouer',
    hit: 'Un pion isolé a été frappé !', double: 'Double ! Quatre déplacements disponibles.',
    rules: 'Déplacez vos 15 pions dans votre jan intérieur, puis sortez-les. Frappez les pions isolés adverses pour les envoyer à la barre. Une flèche occupée par deux pions adverses ou plus est bloquée.',
    selected: 'Sélectionné', remaining: 'Coups restants'
  },
  'العربية': {
    title: 'طاولة الزهر', subtitle: 'استراتيجية كلاسيكية ونرد عادل بلا تلاعب.',
    you: 'أنت', computer: 'الكمبيوتر', yourTurn: 'دورك', cpuTurn: 'دور الكمبيوتر',
    roll: 'ارمِ النرد', rolling: 'جارٍ الرمي…', move: 'اختر قطعة ثم اختر خانة مضيئة.',
    choose: 'اختر قطعة لتحريكها.', bar: 'البار', borneOff: 'الخارج',
    noMoves: 'لا توجد حركات قانونية. انتهى دورك.', thinking: 'الكمبيوتر يفكر…',
    newGame: 'لعبة جديدة', back: 'رجوع', fair: 'نرد عادل: عشوائية آمنة',
    diceError: 'النرد الآمن غير متاح في هذا المتصفح. استخدم متصفحاً حديثاً عبر HTTPS.',
    win: 'لقد فزت!', lose: 'الكمبيوتر فاز!', playAgain: 'العب مجدداً',
    hit: 'تم ضرب قطعة منفردة!', double: 'دبل! لديك أربع حركات.',
    rules: 'حرّك قطعك الخمس عشرة إلى منطقتك الداخلية ثم أخرجها. اضرب قطع الخصم المنفردة لإرسالها إلى البار. لا يمكن الوقوف على خانة فيها قطعتان أو أكثر للخصم.',
    selected: 'محدد', remaining: 'الحركات المتبقية'
  }
};

const secureDie = () => {
  if (!globalThis.crypto?.getRandomValues) throw new Error('secure-random-unavailable');
  const range = 0x100000000;
  const limit = Math.floor(range / 6) * 6;
  const sample = new Uint32Array(1);
  let value;
  do {
    globalThis.crypto.getRandomValues(sample);
    value = sample[0];
  } while (value >= limit);
  return (value % 6) + 1;
};

const homeReady = (board, bar, side) => {
  if (bar[side] > 0) return false;
  return board.every((count, point) => side === 1 ? count <= 0 || point <= 5 : count >= 0 || point >= 18);
};

const applyStep = (position, bars, borne, side, step) => {
  const next = [...position];
  const nextBars = { ...bars };
  const nextBorne = { ...borne };
  if (step.from === -1) nextBars[side]--;
  else next[step.from] -= side;
  if (step.to === 24) nextBorne[side]++;
  else {
    if (next[step.to] === -side) {
      next[step.to] = 0;
      nextBars[-side]++;
    }
    next[step.to] += side;
  }
  return { board: next, bars: nextBars, borne: nextBorne };
};

const legalSteps = (board, bars, borne, side, die) => {
  const steps = [];
  const direction = side === 1 ? -1 : 1;
  if (bars[side] > 0) {
    const destination = side === 1 ? 24 - die : die - 1;
    if (destination >= 0 && destination < 24 && board[destination] * side > -2) {
      steps.push({ from: -1, to: destination, die });
    }
    return steps;
  }
  const canBearOff = homeReady(board, bars, side);
  for (let from = 0; from < 24; from++) {
    if (board[from] * side <= 0) continue;
    const to = from + direction * die;
    if (to >= 0 && to < 24) {
      if (board[to] * side > -2) steps.push({ from, to, die });
      continue;
    }
    if (!canBearOff) continue;
    const exact = side === 1 ? from + 1 === die : 24 - from === die;
    const overshootAllowed = side === 1
      ? from <= 5 && !board.some((n, p) => n > 0 && p > from && p <= 5)
      : from >= 18 && !board.some((n, p) => n < 0 && p < from && p >= 18);
    if (exact || (to < 0 && side === 1 && overshootAllowed) || (to > 23 && side === -1 && overshootAllowed)) {
      steps.push({ from, to: 24, die });
    }
  }
  return steps;
};

const allTurnSequences = (board, bars, borne, side, dice) => {
  const results = [];
  const walk = (position, currentBars, currentBorne, remaining, path) => {
    if (!remaining.length) { results.push(path); return; }
    const options = [...new Set(remaining)].flatMap(die =>
      legalSteps(position, currentBars, currentBorne, side, die).map(step => ({ ...step, usedDie: die }))
    );
    if (!options.length) { results.push(path); return; }
    options.forEach(step => {
      const next = applyStep(position, currentBars, currentBorne, side, step);
      const index = remaining.indexOf(step.usedDie);
      const rest = remaining.filter((_, i) => i !== index);
      walk(next.board, next.bars, next.borne, rest, [...path, step]);
    });
  };
  walk(board, bars, borne, dice, []);
  const maxMoves = Math.max(0, ...results.map(path => path.length));
  let filtered = results.filter(path => path.length === maxMoves);
  if (maxMoves === 1 && dice.length === 2 && dice[0] !== dice[1]) {
    const high = Math.max(...dice);
    const canUseHigh = filtered.some(path => path[0]?.die === high);
    if (canUseHigh) filtered = filtered.filter(path => path[0]?.die === high);
  }
  const seen = new Set();
  return filtered.filter(path => {
    const key = path.map(s => `${s.from}:${s.to}:${s.die}`).join('|');
    if (seen.has(key)) return false;
    seen.add(key); return true;
  });
};

const scoreComputerPath = (path, board, bars, borne) => {
  let state = { board, bars, borne };
  let score = 0;
  path.forEach(step => {
    const before = state.board[step.to] === 1 ? 1 : 0;
    state = applyStep(state.board, state.bars, state.borne, -1, step);
    if (before) score += 28;
    if (step.to === 24) score += 18;
    if (step.from === -1) score += 12;
    if (step.to !== 24) {
      const count = Math.abs(state.board[step.to]);
      if (count >= 2) score += 2;
      score += step.to * 0.12;
    }
  });
  return score;
};

function Die({ value, rolling }) {
  const dots = {
    1: [4], 2: [0, 8], 3: [0, 4, 8], 4: [0, 2, 6, 8],
    5: [0, 2, 4, 6, 8], 6: [0, 2, 3, 5, 6, 8]
  }[value] || [];
  return <div className={`grid h-11 w-11 grid-cols-3 grid-rows-3 gap-1 rounded-xl border border-amber-200/70 bg-gradient-to-br from-white to-amber-100 p-1.5 shadow-[0_4px_0_#9a6b2b,0_6px_12px_rgba(0,0,0,.35)] ${rolling ? 'animate-[diceShake_.35s_ease-in-out_infinite]' : ''}`}>
    {Array.from({ length: 9 }, (_, i) => <span key={i} className={`rounded-full ${dots.includes(i) ? 'bg-slate-900 shadow-inner' : 'bg-transparent'}`} />)}
  </div>;
}

export default function Backgammon({ onBack, language = 'English' }) {
  const t = TEXT[language] || TEXT.English;
  const [board, setBoard] = useState(initialBoard);
  const [bars, setBars] = useState({ 1: 0, '-1': 0 });
  const [borne, setBorne] = useState({ 1: 0, '-1': 0 });
  const [turn, setTurn] = useState(1);
  const [dice, setDice] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [selected, setSelected] = useState(null);
  const [rolling, setRolling] = useState(false);
  const [busy, setBusy] = useState(false);
  const [winner, setWinner] = useState(0);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [history, setHistory] = useState([]);

  const reset = useCallback(() => {
    setBoard(initialBoard()); setBars({ 1: 0, '-1': 0 }); setBorne({ 1: 0, '-1': 0 });
    setTurn(1); setDice([]); setCandidates([]); setSelected(null);
    setRolling(false); setBusy(false); setWinner(0); setError(''); setNotice(''); setHistory([]);
  }, []);

  const finishTurn = useCallback((nextBoard, nextBars, nextBorne, nextTurn) => {
    if (nextBorne[nextTurn] >= 15) { setWinner(nextTurn); setCandidates([]); setDice([]); setSelected(null); return; }
    setBoard(nextBoard); setBars(nextBars); setBorne(nextBorne);
    setTurn(-nextTurn); setDice([]); setCandidates([]); setSelected(null);
    setNotice('');
  }, []);

  const roll = useCallback(() => {
    if (turn !== 1 || dice.length || rolling || busy || winner) return;
    setError(''); setNotice(''); setRolling(true);
    try {
      const first = secureDie();
      const second = secureDie();
      const rolled = first === second ? [first, first, first, first] : [first, second];
      setHistory(prev => [{ side: turn, dice: [first, second], at: new Date().toISOString() }, ...prev].slice(0, 8));
      window.setTimeout(() => {
        setDice(rolled);
        const moves = allTurnSequences(board, bars, borne, 1, rolled);
        setCandidates(moves);
        setRolling(false);
        if (!moves.some(path => path.length)) {
          setNotice(t.noMoves);
          window.setTimeout(() => finishTurn(board, bars, borne, 1), 900);
        } else if (first === second) setNotice(t.double);
      }, 420);
    } catch {
      setRolling(false); setError(t.diceError);
    }
  }, [turn, dice.length, rolling, busy, winner, board, bars, borne, finishTurn, t]);

  const choosePoint = useCallback((point) => {
    if (turn !== 1 || busy || rolling || !dice.length || winner || !candidates.length) return;
    const matching = candidates.filter(path => path.length && path[0].from === point);
    if (!matching.length) { setSelected(null); return; }
    setSelected(point);
  }, [turn, busy, rolling, dice.length, winner, candidates]);

  const destinations = useMemo(() => {
    if (selected === null) return [];
    return [...new Set(candidates.filter(path => path.length && path[0].from === selected).map(path => path[0].to))];
  }, [selected, candidates]);

  const moveTo = useCallback((to) => {
    if (selected === null || turn !== 1 || busy || !candidates.length) return;
    const matching = candidates.filter(path => path.length && path[0].from === selected && path[0].to === to);
    if (!matching.length) return;
    const step = matching[0][0];
    const next = applyStep(board, bars, borne, 1, step);
    const remaining = matching.map(path => path.slice(1)).filter(path => path.length);
    setBoard(next.board); setBars(next.bars); setBorne(next.borne);
    setDice(prev => { const idx = prev.indexOf(step.die); return idx < 0 ? prev : prev.filter((_, i) => i !== idx); });
    setSelected(null);
    if (next.borne[1] >= 15) { setWinner(1); setCandidates([]); setDice([]); return; }
    if (!remaining.length) finishTurn(next.board, next.bars, next.borne, 1);
    else setCandidates(remaining);
  }, [selected, turn, busy, candidates, board, bars, borne, finishTurn]);

  useEffect(() => {
    if (turn !== -1 || winner || busy || rolling || dice.length) return;
    setBusy(true);
    const timer = window.setTimeout(() => {
      let first, second;
      try { first = secureDie(); second = secureDie(); }
      catch { setError(t.diceError); setBusy(false); return; }
      const rolled = first === second ? [first, first, first, first] : [first, second];
      setHistory(prev => [{ side: -1, dice: [first, second], at: new Date().toISOString() }, ...prev].slice(0, 8));
      setDice(rolled);
      const paths = allTurnSequences(board, bars, borne, -1, rolled).filter(path => path.length);
      if (!paths.length) {
        setNotice(t.noMoves);
        window.setTimeout(() => { finishTurn(board, bars, borne, -1); setBusy(false); }, 800);
        return;
      }
      const bestScore = Math.max(...paths.map(path => scoreComputerPath(path, board, bars, borne)));
      const best = paths.filter(path => scoreComputerPath(path, board, bars, borne) === bestScore);
      const chosen = best[0];
      let state = { board, bars, borne };
      const snapshots = chosen.map(step => {
        state = applyStep(state.board, state.bars, state.borne, -1, step);
        return { board: [...state.board], bars: { ...state.bars }, borne: { ...state.borne } };
      });
      snapshots.forEach((snapshot, index) => {
        window.setTimeout(() => {
          setBoard(snapshot.board); setBars(snapshot.bars); setBorne(snapshot.borne);
          if (snapshot.bars[1] > bars[1]) setNotice(t.hit);
          if (index === snapshots.length - 1) {
            setBusy(false);
            if (snapshot.borne[-1] >= 15) { setWinner(-1); setDice([]); setCandidates([]); }
            else finishTurn(snapshot.board, snapshot.bars, snapshot.borne, -1);
          }
        }, 550 * (index + 1));
      });
    }, 650);
    return () => window.clearTimeout(timer);
  }, [turn, winner, busy, rolling, dice.length, board, bars, borne, finishTurn, t]);

  const topPoints = Array.from({ length: 12 }, (_, i) => i + 12);
  const bottomPoints = Array.from({ length: 12 }, (_, i) => 11 - i);
  const canClickPoint = (point) => candidates.some(path => path.length && path[0].from === point);
  const renderPoint = (point, top) => {
    const count = Math.abs(board[point]);
    const side = Math.sign(board[point]);
    const active = destinations.includes(point);
    const selectable = canClickPoint(point);
    const checkers = Math.min(count, 5);
    return <button key={point} type="button" onClick={() => active ? moveTo(point) : choosePoint(point)}
      disabled={turn !== 1 || busy || rolling || !dice.length || winner || (!active && !selectable)}
      aria-label={`Point ${point + 1}, ${count} ${side === 1 ? 'your' : 'computer'} checkers`}
      className={`relative flex min-w-0 flex-1 flex-col items-center ${top ? 'justify-start' : 'justify-end'} overflow-hidden rounded-sm border-x border-black/20 h-[170px] ${active ? 'bg-amber-300/25 ring-2 ring-inset ring-yellow-300' : selectable ? 'bg-white/10' : ''} `}>
      <span className={`absolute left-1/2 z-0 h-[82%] w-[88%] -translate-x-1/2 ${top ? 'top-0' : 'bottom-0'} ${point % 2 === 0 ? 'bg-gradient-to-b from-[#c75b36] to-[#7d2c22]' : 'bg-gradient-to-b from-[#f1d6a0] to-[#b58b50]'}`}
        style={{ clipPath: top ? 'polygon(0 0,100% 0,50% 100%)' : 'polygon(0 100%,100% 100%,50% 0)' }} />
      {top && <span className="relative z-10 mt-1 text-[9px] font-black text-white/70">{point + 1}</span>}
      <span className={`relative z-10 flex ${top ? 'flex-col' : 'flex-col-reverse'} items-center ${top ? 'mt-1' : 'mb-1'} gap-[-5px]`}>
        {Array.from({ length: checkers }, (_, i) => <span key={i} className={`relative block h-6 w-6 rounded-full border-2 shadow-[0_2px_3px_rgba(0,0,0,.55)] sm:h-7 sm:w-7 ${side === 1 ? 'border-amber-100 bg-gradient-to-br from-[#fff5d5] via-[#e9d4a5] to-[#98764a]' : 'border-slate-500 bg-gradient-to-br from-slate-100 via-slate-500 to-slate-950'} ${i ? '-mt-3' : ''}`} />)}
        {count > 5 && <span className="rounded-full bg-black/75 px-1 text-[10px] font-bold text-white">{count}</span>}
      </span>
      {!top && <span className="relative z-10 mb-1 text-[9px] font-black text-white/70">{point + 1}</span>}
      {active && <span className="absolute inset-x-0 z-20 text-center text-[9px] font-black text-yellow-100 ${top ? 'bottom-1' : 'top-1'}">MOVE</span>}
    </button>;
  };

  return <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 text-white" dir={language === 'العربية' ? 'rtl' : 'ltr'}>
    <style>{`@keyframes diceShake{0%,100%{transform:rotate(0) scale(1)}25%{transform:rotate(-12deg) scale(1.05)}75%{transform:rotate(12deg) scale(1.05)}}`}</style>
    <div className="flex items-center justify-between gap-3">
      <button onClick={onBack} className="rounded-xl border border-amber-400/50 bg-slate-900 px-4 py-2 text-sm font-bold text-amber-200">{t.back}</button>
      <div className="text-center"><h2 className="text-2xl font-black text-amber-300">{t.title}</h2><p className="text-xs text-slate-300">{t.subtitle}</p></div>
      <button onClick={reset} className="rounded-xl border border-amber-400/50 bg-slate-900 px-3 py-2 text-sm font-bold text-amber-200">{t.newGame}</button>
    </div>

    <div className="grid grid-cols-2 gap-3">
      <div className={`rounded-xl border p-3 text-center ${turn === 1 ? 'border-amber-300 bg-amber-500/15' : 'border-slate-700 bg-slate-900/80'}`}>
        <div className="text-xs font-black tracking-widest text-amber-200">{t.you}</div><div className="mt-1 text-2xl font-black">{15 - borne[1]}/15</div><div className="text-[10px] text-slate-400">{t.borneOff}: {borne[1]} · {t.bar}: {bars[1]}</div>
      </div>
      <div className={`rounded-xl border p-3 text-center ${turn === -1 ? 'border-rose-300 bg-rose-500/15' : 'border-slate-700 bg-slate-900/80'}`}>
        <div className="text-xs font-black tracking-widest text-rose-200">{t.computer}</div><div className="mt-1 text-2xl font-black">{15 - borne[-1]}/15</div><div className="text-[10px] text-slate-400">{t.borneOff}: {borne[-1]} · {t.bar}: {bars[-1]}</div>
      </div>
    </div>

    <div className="rounded-[28px] border-[7px] border-[#8a4c22] bg-gradient-to-br from-[#e6bd7c] via-[#8d4b25] to-[#542b19] p-2 shadow-[inset_0_0_0_3px_#e4b76f,0_14px_35px_rgba(0,0,0,.45)] sm:p-4">
      <div className="rounded-xl border-2 border-[#e6c58e] bg-gradient-to-br from-[#63351f] via-[#3b241d] to-[#704126] p-2 shadow-inner">
        <div className="grid grid-cols-12 gap-[2px] border-b-2 border-[#c08b4d] pb-2">{topPoints.map(point => renderPoint(point, true))}</div>
        <div className="my-2 flex items-center justify-between gap-2 rounded-lg border-y border-[#d0a366]/40 bg-black/25 px-3 py-2 text-[10px] font-black tracking-widest text-amber-100/80">
          <span>{t.bar}: <b className="text-white">{bars[1]} / {bars[-1]}</b></span>
          <span className="text-amber-300">DANAT BACKGAMMON</span>
          <span>{t.borneOff}: <b className="text-white">{borne[1]} / {borne[-1]}</b></span>
        </div>
        <div className="grid grid-cols-12 gap-[2px] border-t-2 border-[#c08b4d] pt-2">{bottomPoints.map(point => renderPoint(point, false))}</div>
      </div>
    </div>

    <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-amber-300/30 bg-slate-900/90 p-4 shadow-lg">
      <Die value={dice[0] || 1} rolling={rolling} />
      <Die value={dice[1] || (dice[0] || 1)} rolling={rolling} />
      {dice.length > 2 && <span className="text-xs font-bold text-amber-200">×4</span>}
      {turn === 1 && !dice.length && <button onClick={roll} disabled={rolling || busy || !!winner} className="rounded-xl border-2 border-amber-200 bg-gradient-to-b from-yellow-300 to-amber-600 px-6 py-3 font-black tracking-wide text-slate-950 shadow-[0_4px_0_#815018] disabled:opacity-60">{rolling ? t.rolling : t.roll}</button>}
      <div className="min-w-[150px] text-center">
        <div className="text-sm font-black text-amber-200">{winner ? (winner === 1 ? t.win : t.lose) : turn === 1 ? t.yourTurn : t.cpuTurn}</div>
        <div className="mt-1 text-xs text-slate-300">{error || notice || (turn === -1 ? t.thinking : dice.length ? t.move : t.choose)}</div>
      </div>
    </div>

    <div className="rounded-xl border border-emerald-400/25 bg-emerald-950/30 px-4 py-3 text-center text-xs text-emerald-100"><span className="font-bold">{t.fair}</span><div className="mt-1 text-[10px] text-emerald-100/70">Each die uses an independent secure random draw. Rejection sampling removes modulo bias.</div></div>
    <p className="rounded-xl bg-slate-900/70 p-3 text-xs leading-relaxed text-slate-300">{t.rules}</p>
    {winner !== 0 && <button onClick={reset} className="rounded-xl bg-gradient-to-r from-amber-300 to-yellow-600 px-5 py-3 font-black text-slate-950 shadow-lg">{t.playAgain}</button>}
    <div className="text-center text-[10px] text-slate-500">Dice rolls are generated locally with the Web Crypto API. No roll is selected based on who is winning.</div>
  </div>;
}
