/*
 * @lc app=leetcode id=39 lang=typescript
 *
 * [39] Combination Sum
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  let result: number[][] = [];
  function binary(idx: number, subset: number[]): void {
    if (sum(subset) === target) {
      result.push([...subset]);
      return;
    }
    if (sum(subset) > target) {
      return;
    }
    if (idx >= candidates.length) {
      return;
    }
    subset.push(candidates[idx]);
    binary(idx, subset);
    subset.pop();
    binary(idx + 1, subset);
  }
  binary(0, []);
  return result;
}

function sum(arr: number[]): number {
  return arr.reduce((prev, next) => prev + next, 0);
}
// @lc code=end
