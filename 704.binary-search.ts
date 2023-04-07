/*
 * @lc app=leetcode id=704 lang=typescript
 *
 * [704] Binary Search
 */

// @lc code=start
function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  let mid = Math.floor((right + left) / 2);
  while (left <= right) {
    mid = Math.floor((right + left) / 2);
    if (target === nums[mid]) {
      return mid;
    }
    if (target < nums[mid]) {
      right = mid - 1;
    }
    if (target > nums[mid]) {
      left = mid + 1;
    }
  }
  return -1;
}
// @lc code=end
