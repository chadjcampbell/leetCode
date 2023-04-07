/*
 * @lc app=leetcode id=215 lang=typescript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
function findKthLargest(nums: number[], k: number): number {
  k = nums.length - k;
  function quickSortToK(start: number, end: number): number {
    if (end - start <= 0) return nums[k];
    let pivot = nums[end];
    let left = start;
    for (let i = start; i < end; i++) {
      if (nums[i] < pivot) {
        let temp = nums[i];
        nums[i] = nums[left];
        nums[left] = temp;
        left++;
      }
    }
    nums[end] = nums[left];
    nums[left] = pivot;
    if (k < left) {
      quickSortToK(start, left - 1);
    }
    if (k > left) {
      quickSortToK(left + 1, end);
    }
    return nums[k];
  }
  return quickSortToK(0, nums.length - 1);
}
// @lc code=end
