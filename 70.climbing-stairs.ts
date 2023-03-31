/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
function climbStairs(n: number): number {
  let sum = 1;
  let prevSum = 1;
  for (let i = 0; i < n - 1; i++) {
    let temp = sum;
    sum = sum + prevSum;
    prevSum = temp;
  }
  return sum;
}
// @lc code=end
