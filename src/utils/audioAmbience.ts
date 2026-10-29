/**
 * Procedural Nature Audio Generator for Nature's Canopy
 * Uses Web Audio API to synthesize a subtle, relaxing forest canopy breeze.
 * Zero external audio files required - works hermetically in all environments.
 */

class ForestAmbienceEngine {
  private ctx: AudioContext | null = null;
  private noiseNode: AudioNode | null = null;
  private filterNode: BiquadFilterNode | null = null;
  private gainNode: GainNode | null = null;
  private lfoNode: OscillatorNode | null = null;
  private isPlaying: boolean = false;

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  public start(): void {
    if (this.isPlaying) return;

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();

      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      // Generate 4 seconds of smooth pink/brown noise
      const bufferSize = this.ctx.sampleRate * 4;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);

      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
        b6 = white * 0.115926;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Lowpass filter to simulate deep leaf rustling in canopy
      this.filterNode = this.ctx.createBiquadFilter();
      this.filterNode.type = 'lowpass';
      this.filterNode.frequency.setValueAtTime(320, this.ctx.currentTime);
      this.filterNode.Q.setValueAtTime(1.8, this.ctx.currentTime);

      // Low Frequency Oscillator for wind swells
      this.lfoNode = this.ctx.createOscillator();
      this.lfoNode.type = 'sine';
      this.lfoNode.frequency.setValueAtTime(0.12, this.ctx.currentTime); // Gentle swell every ~8 seconds

      const lfoGain = this.ctx.createGain();
      lfoGain.gain.setValueAtTime(120, this.ctx.currentTime);
      this.lfoNode.connect(lfoGain);
      lfoGain.connect(this.filterNode.frequency);

      // Master output volume with gentle fade-in
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.gainNode.gain.exponentialRampToValueAtTime(0.18, this.ctx.currentTime + 2.5);

      whiteNoise.connect(this.filterNode);
      this.filterNode.connect(this.gainNode);
      this.gainNode.connect(this.ctx.destination);

      whiteNoise.start();
      this.lfoNode.start();

      this.noiseNode = whiteNoise;
      this.isPlaying = true;
    } catch (e) {
      console.warn('Audio ambience context not permitted:', e);
      this.isPlaying = false;
    }
  }

  public stop(): void {
    if (!this.isPlaying || !this.ctx || !this.gainNode) return;

    try {
      this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, this.ctx.currentTime);
      this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.2);

      setTimeout(() => {
        if (this.noiseNode && 'stop' in this.noiseNode) {
          (this.noiseNode as AudioBufferSourceNode).stop();
        }
        if (this.lfoNode) {
          this.lfoNode.stop();
        }
        if (this.ctx && this.ctx.state !== 'closed') {
          this.ctx.close();
        }
        this.isPlaying = false;
      }, 1300);
    } catch {
      this.isPlaying = false;
    }
  }
}

export const forestAudio = new ForestAmbienceEngine();
