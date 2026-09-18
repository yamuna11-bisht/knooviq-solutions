/**
 * Client-Side & Session Anti-Abuse Rate Limiter
 * Tracks recent submission timestamps to prevent automated spamming.
 */

interface RateLimitConfig {
  maxAttempts: number;
  windowMs: number; // e.g. 60,000 ms (1 minute)
}

const DEFAULT_CONFIG: RateLimitConfig = {
  maxAttempts: 3,
  windowMs: 60 * 1000, // 3 submissions per minute max
};

export class RateLimiter {
  private static STORAGE_KEY_PREFIX = 'knooviq_ratelimit_';

  public static checkRateLimit(actionName: string, config = DEFAULT_CONFIG): { allowed: boolean; remainingWaitSec?: number } {
    try {
      const storageKey = `${this.STORAGE_KEY_PREFIX}${actionName}`;
      const rawHistory = sessionStorage.getItem(storageKey);
      const now = Date.now();

      let timestamps: number[] = rawHistory ? JSON.parse(rawHistory) : [];
      // Filter out timestamps outside current window
      timestamps = timestamps.filter(ts => now - ts < config.windowMs);

      if (timestamps.length >= config.maxAttempts) {
        const oldestAttempt = timestamps[0];
        const remainingWaitMs = config.windowMs - (now - oldestAttempt);
        const remainingWaitSec = Math.ceil(remainingWaitMs / 1000);
        return { allowed: false, remainingWaitSec };
      }

      // Record this attempt
      timestamps.push(now);
      sessionStorage.setItem(storageKey, JSON.stringify(timestamps));
      return { allowed: true };
    } catch {
      // Gracefully allow in case of restricted storage environments
      return { allowed: true };
    }
  }

  public static reset(actionName: string): void {
    try {
      sessionStorage.removeItem(`${this.STORAGE_KEY_PREFIX}${actionName}`);
    } catch {
      // Ignore
    }
  }
}
