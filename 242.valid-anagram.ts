/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  const sArr = s.split("");
  const tArr = t.split("");
  if (sArr.length !== tArr.length) return false;
  sArr.forEach((element) => {
    const index = tArr.indexOf(element);
    if (index !== -1) {
      tArr.splice(index, 1);
    }
  });
  if (tArr.length === 0) return true;
  return false;
}
// @lc code=end
