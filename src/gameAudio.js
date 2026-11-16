let audioContext;
let noiseBuffer;

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;
  if (!audioContext) {
    audioContext = new AudioContextClass({ latencyHint: 'interactive' });
    const length = Math.floor(audioContext.sampleRate * 0.35);
    noiseBuffer = audioContext.createBuffer(1, length, audioContext.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < length; i += 1) data[i] = (Math.random() * 2 - 1) * (1 - i / length);
  }
  return audioContext;
}

// Call from the game's first pointer interaction so audio is ready before an action.
export function primeGameAudio() {
  const context = getAudioContext();
  if (context?.state === 'suspended') context.resume().catch(() => {});
}

function withReadyAudio(play) {
  const context = getAudioContext();
  if (!context) return;
  if (context.state === 'running') play(context);
  else context.resume().then(() => {
    if (context.state === 'running') play(context);
  }).catch(() => {});
}

export function playDiceRoll() {
  withReadyAudio((context) => {
    const now = context.currentTime + 0.004;
    const noise = context.createBufferSource();
    const filter = context.createBiquadFilter();
    const gain = context.createGain();
    noise.buffer = noiseBuffer;
    filter.type = ' bandpass'.trim();
    filter.frequency.setValueAtTime(1250, now);
    filter.frequency.exponentialRampToValueAtTime(420, now + 0.22);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.16, now + 0.018);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);
    noise.connect(filter).connect(gain).connect(context.destination);
    noise.start(now);
    noise.stop(now + 0.26);

    [0, 0.075, 0.145, 0.205].forEach((offset, index) => {
      const osc = context.createOscillator();
      const hit = context.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(260 + index * 75, now + offset);
      osc.frequency.exponentialRampToValueAtTime(105 + index * 12, now + offset + 0.045);
      hit.gain.setValueAtTime(0.0001, now + offset);
      hit.gain.exponentialRampToValueAtTime(0.12, now + offset + 0.006);
      hit.gain.exponentialRampToValueAtTime(0.0001, now + offset + 0.055);
      osc.connect(hit).connect(context.destination);
      osc.start(now + offset);
      osc.stop(now + offset + 0.06);
    });
  });
}

export function playCannonShot() {
  withReadyAudio((context) => {
    const now = context.currentTime + 0.003;
    const osc = context.createOscillator();
    const tone = context.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.exponentialRampToValueAtTime(95, now + 0.16);
    tone.gain.setValueAtTime(0.0001, now);
    tone.gain.exponentialRampToValueAtTime(0.22, now + 0.012);
    tone.gain.exponentialRampToValueAtTime(0.0001, now + 0.19);
    osc.connect(tone).connect(context.destination);
    osc.start(now);
    osc.stop(now + 0.2);

    const burst = context.createBufferSource();
    const filter = context.createBiquadFilter();
    const burstGain = context.createGain();
    burst.buffer = noiseBuffer;
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1800, now);
    filter.frequency.exponentialRampToValueAtTime(350, now + 0.11);
    burstGain.gain.setValueAtTime(0.0001, now);
    burstGain.gain.exponentialRampToValueAtTime(0.12, now + 0.008);
    burstGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
    burst.connect(filter).connect(burstGain).connect(context.destination);
    burst.start(now);
    burst.stop(now + 0.13);
  });
}
