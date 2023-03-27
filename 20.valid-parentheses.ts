/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
  const left = ["(", "{", "["];
  const right = [")", "}", "]"];
  let sArray: string[] = s.split("");
  let stack: string[] = [];
  for (let i = 0; i < sArray.length; i++) {
    if (left.includes(sArray[i])) {
      stack.push(sArray[i]);
    } else {
      if (right.indexOf(sArray[i]) === left.indexOf(stack[stack.length - 1])) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.length !== 0) return false;
  return true;
}
// @lc code=end
