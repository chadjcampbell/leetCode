/*
 * @lc app=leetcode id=78 lang=typescript
 *
 * [78] Subsets
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  let result: number[][] = [];
  let subset: number[] = [];
  function binary(idx: number): void {
    if (idx === nums.length) {
      result.push([...subset]);
      return;
    }
    subset.push(nums[idx]);
    binary(idx + 1);
    subset.pop();
    binary(idx + 1);
  }
  binary(0);
  return result;
}

// @lc code=end
