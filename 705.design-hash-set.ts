/*
 * @lc app=leetcode id=705 lang=typescript
 *
 * [705] Design HashSet
 */

// @lc code=start
class MyHashSet {
  arr: number | undefined[];
  constructor() {
    this.arr = new Array(1000000);
  }

  add(key: number): void {
    this.arr[key] = key;
  }

  remove(key: number): void {
    if (this.arr[key] !== undefined) {
      this.arr[key] = undefined;
    }
  }

  contains(key: number): boolean {
    return this.arr[key] !== undefined ? true : false;
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
// @lc code=end
