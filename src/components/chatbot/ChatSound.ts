/**
 * Chatbot Sound Synthesizer — Sound Disabled
 */

class SoundSynthesizer {
  public toggleSound(): boolean {
    return false;
  }

  public isEnabled(): boolean {
    return false;
  }

  public playSend(): void {
    // Sound disabled
  }

  public playReceive(): void {
    // Sound disabled
  }

  public playOpen(): void {
    // Sound disabled
  }
}

export const chatSounds = new SoundSynthesizer();
