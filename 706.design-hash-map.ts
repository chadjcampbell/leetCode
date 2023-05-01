/*
 * @lc app=leetcode id=706 lang=typescript
 *
 * [706] Design HashMap
 */

// @lc code=start
class MyHashMap {
  map: {};
  constructor() {
    this.map = {};
  }

  put(key: number, value: number): void {
    this.map[key] = value;
  }

  get(key: number): number {
    if (this.map[key] !== undefined) {
      return this.map[key];
    } else {
      return -1;
    }
  }

  remove(key: number): void {
    delete this.map[key];
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// @lc code=end
