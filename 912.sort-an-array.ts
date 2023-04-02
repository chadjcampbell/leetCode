/*
 * @lc app=leetcode id=912 lang=typescript
 *
 * [912] Sort an Array
 */

// @lc code=start

function merge(left: number[], right: number[]) {
  let i = 0,
    j = 0;
  let sorted: number[] = [];
  while (left[i] !== undefined && right[j] !== undefined) {
    if (left[i] <= right[j]) {
      sorted.push(left[i]);
      i++;
    } else {
      sorted.push(right[j]);
      j++;
    }
  }
  if (left[i] !== undefined) {
    sorted.push(...left.slice(i));
  }
  if (right[j] !== undefined) {
    sorted.push(...right.slice(j));
  }
  return sorted;
}

function sortArray(nums: number[]): number[] {
  if (nums.length <= 1) return nums;
  let mid = Math.floor(nums.length / 2);
  let left = sortArray(nums.slice(0, mid));
  let right = sortArray(nums.slice(mid));
  let sorted = merge(left, right);
  return sorted;
}

//insertion sort
/* function sortArray(nums: number[]): number[] {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1;
    while (j >= 0 && nums[j] > nums[j + 1]) {
      let temp = nums[j + 1];
      nums[j + 1] = nums[j];
      nums[j] = temp;
      j -= 1;
    }
  }
  return nums;
} */
// @lc code=end
