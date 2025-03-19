import { Howl } from 'howler';

class SoundSystem {
  private sounds: Map<string, Howl>;
  private enabled: boolean = true;
  private volume: number = 0.7;
  
  // ...implementation as provided...
}

export const soundSystem = new SoundSystem();
