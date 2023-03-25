/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  let cleaned = s.replace(/[^0-9a-z]/gi, "").toLowerCase();
  let sArray = cleaned.split("");
  for (
    let i = 0, j = sArray.length - 1;
    i < Math.floor(s.length / 2);
    i++, j--
  ) {
    if (sArray[i] !== sArray[j]) return false;
  }
  return true;
}
// @lc code=end
