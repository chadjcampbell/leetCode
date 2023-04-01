/*
 * @lc app=leetcode id=912 lang=typescript
 *
 * [912] Sort an Array
 */

// @lc code=start
function sortArray(nums: number[]): number[] {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1;
    while (j >= 0 && nums[j] > nums[j + 1]) {
      let temp = nums[j + 1];
      nums[j + 1] = nums[j];
      nums[j] = temp;
      j -= 1;
    }
  }
  return nums;
}
// @lc code=end
