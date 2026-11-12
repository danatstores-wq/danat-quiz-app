import React, { useMemo, useState } from 'react';

const COPY = {
  en: {
    back: 'Back to Home', games: 'Mini Games', choose: 'Choose a game',
    block: 'Block Blast', word: 'Word Puzzle', sudoku: 'Sudoku', jigsaw: 'Jigsaw Puzzle',
    score: 'Game score', best: 'Best', newGame: 'New game', selectPiece: 'Choose a block, then tap the board.',
    wordHint: 'Unscramble the letters to make the word.', answer: 'Your answer', check: 'Check word',
    correct: 'Great job!', tryAgain: 'Not quite. Try again.', next: 'Next word',
    sudokuHint: 'Fill each row, column and 3×3 box with numbers 1–9.',
    erase: 'Erase', solved: 'Puzzle solved!', jigsawHint: 'Tap a tile next to the empty space to move it.',
    won: 'You completed the puzzle!', moves: 'Moves', miniScoreNote: 'Mini-game scores are separate from quiz points.'
  },
  ar: {
    back: 'العودة للرئيسية', games: 'الألعاب المصغّرة', choose: 'اختر لعبة',
    block: 'تركيب المكعبات', word: 'لعبة الكلمات', sudoku: 'سودوكو', jigsaw: 'أحجية الصور',
    score: 'نقاط اللعبة', best: 'الأفضل', newGame: 'لعبة جديدة', selectPiece: 'اختر شكلاً ثم اضغط على لوحة اللعب.',
    wordHint: 'رتّب الحروف لتكوين الكلمة الصحيحة.', answer: 'إجابتك', check: 'تحقق من الكلمة',
    correct: 'أحسنت!', tryAgain: 'ليست صحيحة بعد، حاول مجدداً.', next: 'الكلمة التالية',
    sudokuHint: 'املأ كل صف وعمود ومربع 3×3 بالأرقام من 1 إلى 9.',
    erase: 'مسح', solved: 'تم حل اللغز!', jigsawHint: 'اضغط على قطعة بجانب الفراغ لتحريكها.',
    won: 'أكملت الأحجية!', moves: 'الحركات', miniScoreNote: 'نقاط الألعاب المصغّرة منفصلة عن نقاط الاختبار.'
  },
  fr: {
    back: 'Retour à l’accueil', games: 'Mini-jeux', choose: 'Choisissez un jeu',
    block: 'Block Blast', word: 'Jeu de mots', sudoku: 'Sudoku', jigsaw: 'Puzzle',
    score: 'Score du jeu', best: 'Record', newGame: 'Nouvelle partie', selectPiece: 'Choisissez une forme, puis touchez la grille.',
    wordHint: 'Remettez les lettres dans le bon ordre.', answer: 'Votre réponse', check: 'Vérifier',
    correct: 'Bravo !', tryAgain: 'Pas encore. Réessayez.', next: 'Mot suivant',
    sudokuHint: 'Remplissez chaque ligne, colonne et carré 3×3 avec les chiffres de 1 à 9.',
    erase: 'Effacer', solved: 'Puzzle résolu !', jigsawHint: 'Touchez une pièce voisine de la case vide pour la déplacer.',
    won: 'Puzzle terminé !', moves: 'Coups', miniScoreNote: 'Les scores des mini-jeux sont séparés des points du quiz.'
  }
};

const WORDS = {
  en: [{w:'APPLE',h:'A fruit that can be red or green.'},{w:'OCEAN',h:'A very large body of salt water.'},{w:'PLANET',h:'Earth is one.'},{w:'GARDEN',h:'A place where flowers grow.'}],
  ar: [{w:'تفاحة',h:'فاكهة قد تكون حمراء أو خضراء.'},{w:'مدرسة',h:'مكان يتعلم فيه الطلاب.'},{w:'حديقة',h:'مكان تنمو فيه الأزهار.'},{w:'قمر',h:'جسم مضيء نراه ليلاً.'}],
  fr: [{w:'POMME',h:'Un fruit rouge ou vert.'},{w:'OCÉAN',h:'Une immense étendue d’eau salée.'},{w:'PLANÈTE',h:'La Terre en est une.'},{w:'JARDIN',h:'Un endroit où poussent les fleurs.'}]
};

const SUDOKU_START = [
  [5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],
  [8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],
  [0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]
];
const SUDOKU_SOLUTION = [
  [5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],
  [8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]
];

const SHAPES = [
  [[1,1],[1,1]], [[1,1,1]], [[1],[1],[1]], [[1,1,1],[0,1,0]],
  [[1,0],[1,0],[1,1]], [[1,1,0],[0,1,1]], [[1,1,1],[1,0,0]]
];
const makeBoard = () => Array.from({length:8},()=>Array(8).fill(0));
const randomPieces = () => Array.from({length:3},()=>SHAPES[Math.floor(Math.random()*SHAPES.length)]);

function MiniGameCard({icon,title,onClick}) {
  return <button onClick={onClick} className="rounded-2xl border border-purple-400/40 bg-[#240a47]/95 p-4 text-center shadow-lg active:scale-95 transition">
    <div className="text-4xl mb-2">{icon}</div>
    <div className="font-black text-yellow-300 text-sm">{title}</div>
  </button>;
}

export default function MiniGames({language='en',onBack}) {
  const lang = language === 'العربية' ? 'ar' : language === 'Français' ? 'fr' : 'en';
  const t = COPY[lang];
  const rtl = lang === 'ar';
  const [game,setGame] = useState(null);
  const [scores,setScores] = useState(() => {
    try { return JSON.parse(localStorage.getItem('danatMiniGameScores') || '{}'); } catch { return {}; }
  });
  const [blockBoard,setBlockBoard] = useState(makeBoard);
  const [pieces,setPieces] = useState(randomPieces);
  const [pieceIndex,setPieceIndex] = useState(0);
  const [wordIndex,setWordIndex] = useState(0);
  const [wordInput,setWordInput] = useState('');
  const [wordMessage,setWordMessage] = useState('');
  const [sudoku,setSudoku] = useState(()=>SUDOKU_START.map(row=>[...row]));
  const [sudokuCell,setSudokuCell] = useState([0,2]);
  const [jigsaw,setJigsaw] = useState([1,2,3,4,5,6,7,0,8]);
  const [jigsawMoves,setJigsawMoves] = useState(0);
  const [jigsawWon,setJigsawWon] = useState(false);
  const words = WORDS[lang];
  const currentWord = words[wordIndex % words.length];
  const scrambled = useMemo(() => currentWord.w.split('').sort((a,b)=>a.localeCompare(b)).join(''),[currentWord]);
  const best = game ? (scores[game] || 0) : 0;

  const addScore = (key,amount) => {
    setScores(old => {
      const next = {...old,[key]:Math.max(old[key] || 0, amount)};
      try { localStorage.setItem('danatMiniGameScores',JSON.stringify(next)); } catch {}
      return next;
    });
  };
  const startGame = key => {
    setGame(key);
    if(key==='block'){setBlockBoard(makeBoard());setPieces(randomPieces());setPieceIndex(0);}
    if(key==='word'){setWordIndex(0);setWordInput('');setWordMessage('');}
    if(key==='sudoku'){setSudoku(SUDOKU_START.map(row=>[...row]));setSudokuCell([0,2]);}
    if(key==='jigsaw'){setJigsaw([1,2,3,4,5,6,7,0,8]);setJigsawMoves(0);setJigsawWon(false);}
  };

  const placeBlock = (r,c) => {
    const shape=pieces[pieceIndex];
    if(!shape) return;
    const cells=[];
    shape.forEach((row,y)=>row.forEach((v,x)=>{if(v) cells.push([r+y,c+x]);}));
    if(cells.some(([y,x])=>y>=8||x>=8||blockBoard[y][x])) return;
    const next=blockBoard.map(row=>[...row]);
    cells.forEach(([y,x])=>{next[y][x]=1;});
    const rows=next.map((row,i)=>row.every(Boolean)?i:-1).filter(i=>i>=0);
    const cols=Array.from({length:8},(_,x)=>x).filter(x=>next.every(row=>row[x]));
    rows.forEach(y=>next[y].fill(0));
    cols.forEach(x=>next.forEach(row=>row[x]=0));
    setBlockBoard(next);
    const points=cells.length+rows.length*8+cols.length*8;
    addScore('block',(scores.block||0)+points);
    if(pieceIndex===2){setPieces(randomPieces());setPieceIndex(0);} else setPieceIndex(pieceIndex+1);
  };

  const checkWord = () => {
    if(wordInput.trim().toLocaleUpperCase()===currentWord.w.toLocaleUpperCase()){
      const nextScore=(scores.word||0)+10; addScore('word',nextScore); setWordMessage(t.correct);
    } else setWordMessage(t.tryAgain);
  };
  const nextWord = () => {setWordIndex(i=>(i+1)%words.length);setWordInput('');setWordMessage('');};

  const setSudokuValue = value => {
    const [r,c]=sudokuCell;
    if(SUDOKU_START[r][c]!==0) return;
    const next=sudoku.map(row=>[...row]); next[r][c]=value; setSudoku(next);
    if(next.every((row,y)=>row.every((n,x)=>n===SUDOKU_SOLUTION[y][x]))){
      addScore('sudoku',(scores.sudoku||0)+100);
    }
  };

  const moveJigsaw = index => {
    if(jigsawWon) return;
    const empty=jigsaw.indexOf(0);
    const adjacent=Math.abs(Math.floor(index/3)-Math.floor(empty/3))+Math.abs(index%3-empty%3)===1;
    if(!adjacent) return;
    const next=[...jigsaw]; [next[index],next[empty]]=[next[empty],next[index]];
    setJigsaw(next); setJigsawMoves(m=>m+1);
    if(next.every((v,i)=>v===((i+1)%9))){setJigsawWon(true);addScore('jigsaw',Math.max(10,100-(jigsawMoves+1)));}
  };

  return <div className="flex flex-col gap-4" dir={rtl?'rtl':'ltr'}>
    <div className="flex items-center justify-between gap-2">
      <button onClick={game?()=>setGame(null):onBack} className="rounded-xl border border-purple-400/40 bg-[#240a47] px-3 py-2 text-xs font-bold">{game?t.back:t.back}</button>
      <div className="text-lg font-black text-yellow-300">{game ? t[game] : t.games}</div>
      <div className="w-16" />
    </div>
    {!game ? <>
      <div className="text-center"><h2 className="text-xl font-black text-white">{t.choose}</h2><p className="text-[11px] text-purple-200 mt-1">{t.miniScoreNote}</p></div>
      <div className="grid grid-cols-2 gap-3">
        <MiniGameCard icon="🧱" title={t.block} onClick={()=>startGame('block')}/>
        <MiniGameCard icon="🔤" title={t.word} onClick={()=>startGame('word')}/>
        <MiniGameCard icon="🔢" title={t.sudoku} onClick={()=>startGame('sudoku')}/>
        <MiniGameCard icon="🧩" title={t.jigsaw} onClick={()=>startGame('jigsaw')}/>
      </div>
      <div className="rounded-xl border border-yellow-500/30 bg-black/30 p-3 text-xs text-yellow-100">
        {t.score}: {Object.values(scores).reduce((a,b)=>a+b,0)} · {t.best}: {Math.max(0,...Object.values(scores))}
      </div>
    </> : <>
      <div className="flex justify-between rounded-xl border border-yellow-500/30 bg-black/30 p-3 text-xs">
        <span>{t.score}: <b className="text-yellow-300">{scores[game]||0}</b></span>
        <span>{t.best}: <b className="text-yellow-300">{best}</b></span>
      </div>
      {game==='block' && <div className="space-y-3">
        <p className="text-center text-xs text-purple-100">{t.selectPiece}</p>
        <div className="grid grid-cols-8 gap-1 rounded-xl bg-[#10051f] p-2 border border-purple-400/30">
          {blockBoard.map((row,r)=>row.map((v,c)=><button key={r+'-'+c} onClick={()=>placeBlock(r,c)} className={'aspect-square rounded-sm border border-purple-300/10 '+(v?'bg-yellow-400':'bg-purple-900/70 hover:bg-purple-700')}/>))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {pieces.map((shape,i)=><button key={i} onClick={()=>setPieceIndex(i)} className={'min-h-16 rounded-xl border p-2 flex items-center justify-center '+(pieceIndex===i?'border-yellow-300 bg-yellow-500/20':'border-purple-400/30 bg-[#240a47]')}>
            <div className="grid gap-0.5" style={{gridTemplateColumns:'repeat('+Math.max(...shape.map(row=>row.length))+', 12px)'}}>
              {shape.flatMap((row,y)=>row.map((v,x)=><span key={y+'-'+x} className={'w-3 h-3 rounded-[2px] '+(v?'bg-yellow-400':'bg-transparent')}/>))}
            </div>
          </button>)}
        </div>
        <button onClick={()=>startGame('block')} className="w-full rounded-xl bg-purple-800 py-2 text-xs font-bold">{t.newGame}</button>
      </div>}
      {game==='word' && <div className="rounded-2xl border border-purple-400/40 bg-[#240a47]/90 p-5 text-center space-y-4">
        <div className="text-5xl">🔤</div><p className="text-xs text-purple-100">{t.wordHint}</p>
        <p className="text-2xl font-black tracking-widest text-yellow-300">{scrambled.split('').join(' ')}</p>
        <p className="text-xs text-purple-200">{currentWord.h}</p>
        <input value={wordInput} onChange={e=>setWordInput(e.target.value)} placeholder={t.answer} className="w-full rounded-xl bg-[#10051f] border border-purple-400/40 p-3 text-center text-white outline-none"/>
        {wordMessage && <p className="text-sm font-bold text-yellow-300">{wordMessage}</p>}
        {wordMessage===t.correct ? <button onClick={nextWord} className="w-full rounded-xl bg-yellow-400 p-3 font-black text-black">{t.next}</button> : <button onClick={checkWord} className="w-full rounded-xl bg-yellow-400 p-3 font-black text-black">{t.check}</button>}
      </div>}
      {game==='sudoku' && <div className="space-y-3">
        <p className="text-center text-xs text-purple-100">{t.sudokuHint}</p>
        <div className="grid grid-cols-9 overflow-hidden rounded-lg border-2 border-yellow-400 bg-[#10051f]">
          {sudoku.flatMap((row,r)=>row.map((value,c)=><button key={r+'-'+c} onClick={()=>setSudokuCell([r,c])} className={'aspect-square text-sm font-bold border border-purple-300/20 '+(SUDOKU_START[r][c]?'text-white bg-purple-950':sudokuCell[0]===r&&sudokuCell[1]===c?'bg-yellow-400 text-black':'text-yellow-200 bg-[#240a47]')+(c%3===2&&c!==8?' border-r-2 border-r-yellow-400':'')+(r%3===2&&r!==8?' border-b-2 border-b-yellow-400':'' )}>{value||''}</button>))}
        </div>
        <div className="grid grid-cols-5 gap-2">
          {[1,2,3,4,5,6,7,8,9].map(n=><button key={n} onClick={()=>setSudokuValue(n)} className="rounded-lg bg-purple-800 py-3 font-black">{n}</button>)}
          <button onClick={()=>setSudokuValue(0)} className="rounded-lg bg-rose-800 py-3 text-xs font-bold">{t.erase}</button>
        </div>
        {sudoku.every((row,r)=>row.every((n,c)=>n===SUDOKU_SOLUTION[r][c]))&&<p className="text-center font-black text-yellow-300">{t.solved}</p>}
        <button onClick={()=>startGame('sudoku')} className="w-full rounded-xl bg-purple-800 py-2 text-xs font-bold">{t.newGame}</button>
      </div>}
      {game==='jigsaw' && <div className="space-y-3">
        <p className="text-center text-xs text-purple-100">{t.jigsawHint}</p>
        <div className="grid grid-cols-3 gap-2 rounded-xl bg-[#10051f] p-2">
          {jigsaw.map((value,index)=><button key={index} onClick={()=>moveJigsaw(index)} className={'aspect-square rounded-xl border-2 text-2xl font-black shadow-inner '+(value===0?'border-dashed border-purple-400/40 bg-black/30':'border-yellow-400/50 bg-gradient-to-br from-purple-500 to-indigo-800 text-white')}>
            {value===0?'':(['','🌅','🌴','🌊','⛵','☀️','🏝️','🐚','🌺'][value])}
          </button>)}
        </div>
        <div className="flex justify-between text-xs text-purple-100"><span>{t.moves}: {jigsawMoves}</span>{jigsawWon&&<b className="text-yellow-300">{t.won}</b>}</div>
        <button onClick={()=>startGame('jigsaw')} className="w-full rounded-xl bg-purple-800 py-2 text-xs font-bold">{t.newGame}</button>
      </div>}
    </>}
  </div>;
}
