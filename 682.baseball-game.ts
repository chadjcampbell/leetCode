/*
 * @lc app=leetcode id=682 lang=typescript
 *
 * [682] Baseball Game
 */

// @lc code=start
function calPoints(operations: string[]): number {
  let newArr: number[] = [];
  for (let i = 0; i < operations.length; i++) {
    switch (operations[i]) {
      case "+":
        newArr.push(newArr[newArr.length - 1] + newArr[newArr.length - 2]);
        break;
      case "D":
        newArr.push(newArr[newArr.length - 1] * 2);
        break;
      case "C":
        newArr.pop();
        break;
      default:
        newArr.push(parseInt(operations[i]));
        break;
    }
  }
  return newArr.reduce((sum, num) => sum + num, 0);
}
// @lc code=end
