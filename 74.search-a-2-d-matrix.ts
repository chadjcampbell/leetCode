/*
 * @lc app=leetcode id=74 lang=typescript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  const merged = matrix.flat();
  let l = 0,
    r = merged.length - 1;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (target > merged[m]) {
      l = m + 1;
    } else if (target < merged[m]) {
      r = m - 1;
    } else {
      return true;
    }
  }
  return false;
}
// @lc code=end
