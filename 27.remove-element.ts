/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: any[], val: number): number {
  let dups = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      for (let j = nums.length - 1; j > i; j--) {
        if (nums[j] !== val) {
          let temp = nums[j];
          nums[j] = nums[i];
          nums[i] = temp;
          break;
        }
      }
    }
  }
  for (let k = 0; k < nums.length; k++) {
    if (nums[k] === val) dups++;
  }
  return nums.length - dups;
}
// @lc code=end;
