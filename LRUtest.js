class LRUCache {
  capacity;
  map;

  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key) {
    const value = this.map.get(key);

    if (value === undefined) return -1;

    // Small hack to re-order keys: we remove the requested key and place it at the end
    this.map.delete(key);
    this.map.set(key, value);

    return value;
  }

  put(key, value) {
    // remove last element to avoid overflow, only if it does not have
    // the inserted key is a new key
    if (this.map.size >= this.capacity && !this.map.has(key)) {
      const firstKey = this.map.keys().next().value;
      this.map.delete(firstKey);
    }

    // Small hack to re-order keys: we remove the requested key and place it at the end
    this.map.delete(key);
    this.map.set(key, value);
  }
}

let cache = new LRUCache(3);
cache.put(1, 1);
cache.put(2, 2);
cache.put(3, 3);
cache.put(4, 4);
console.log(cache);
