/*
 * @lc app=leetcode id=703 lang=typescript
 *
 * [703] Kth Largest Element in a Stream
 */

// @lc code=start
class KthLargest {
  k: number;
  nums: number[];
  constructor(k: number, nums: number[]) {
    this.k = k;
    this.nums = nums.length > 1 ? nums.sort((a, b) => a - b).slice(-k) : nums;
  }

  add(val: number): number {
    this.nums.push(val);
    this.nums.sort((a, b) => a - b);
    return this.nums[this.nums.length - this.k];
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end
