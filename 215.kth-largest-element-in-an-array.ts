/*
 * @lc app=leetcode id=215 lang=typescript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
function findKthLargest(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  return nums[nums.length - k];
}
// @lc code=end
