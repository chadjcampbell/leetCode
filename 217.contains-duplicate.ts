/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  const setClone = new Set([...nums]);
  if (setClone.size === nums.length) return false;
  return true;
}
// @lc code=end
