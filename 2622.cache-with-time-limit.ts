class TimeLimitedCache {
  cache: Map<number, number> = new Map();
  timers: Map<number, any> = new Map();
  constructor() {
    this.cache = new Map();
    this.timers = new Map();
  }

  set(key: number, value: number, duration: number): boolean {
    if (this.cache.has(key)) {
      clearInterval(this.timers.get(key));
      this.cache.set(key, value);
      const timerId = setTimeout(() => {
        this.cache.delete(key);
      }, duration);
      this.timers.set(key, timerId);
      return true;
    } else {
      this.cache.set(key, value);
      const timerId = setTimeout(() => {
        this.cache.delete(key);
      }, duration);
      this.timers.set(key, timerId);
      return false;
    }
  }

  get(key: number): number {
    if (this.cache.has(key)) {
      return this.cache.get(key)!;
    } else {
      return -1;
    }
  }

  count(): number {
    return this.cache.size;
  }
}

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
