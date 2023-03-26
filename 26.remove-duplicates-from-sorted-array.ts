/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: any[]): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = null;
      for (let j = i; j < nums.length; j++) {
        nums[j] = nums[j + 1];
      }
      nums.pop();
      i--;
    }
  }
  return nums.length;
}
// @lc code=end
