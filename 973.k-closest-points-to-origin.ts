/*
 * @lc app=leetcode id=973 lang=typescript
 *
 * [973] K Closest Points to Origin
 */

// @lc code=start
function kClosest(points: number[][], k: number): number[][] {
  return points
    .sort((a, b) => a[0] ** 2 + a[1] ** 2 - (b[0] ** 2 + b[1] ** 2))
    .slice(0, k);
}
// @lc code=end
