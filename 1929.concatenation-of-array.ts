/*
 * @lc app=leetcode id=1929 lang=typescript
 *
 * [1929] Concatenation of Array
 */

// @lc code=start
function getConcatenation(nums: number[]): number[] {
  let ans = [...nums, ...nums];
  return ans;
}
// @lc code=end
