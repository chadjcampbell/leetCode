/*
 * @lc app=leetcode id=75 lang=typescript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */

//in place quickSort, and O(n) bucketSort
function sortColors(nums: number[]): void {
  function bucketSort(arr) {
    //make a bucket for each option
    let buckets = [0, 0, 0];
    //tally the counts for each bucket
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) buckets[0]++;
      if (arr[i] === 1) buckets[1]++;
      if (arr[i] === 2) buckets[2]++;
    }
    //overwrite the array based on bucket counts
    let index = 0;
    for (let i = 0; i < buckets.length; i++) {
      for (let j = 0; j < buckets[i]; j++) {
        arr[index] = i;
        index++;
      }
    }
    return arr;
  }
  return bucketSort(nums);
  //return quickSort(nums, 0, nums.length - 1);
}

function quickSort(arr, s, e) {
  if (e - s + 1 <= 1) {
    return arr;
  }

  let pivot = arr[e];
  let left = s; // pointer for left side

  // Partition: elements smaller than pivot on left side
  for (let i = s; i < e; i++) {
    if (arr[i] < pivot) {
      let tmp = arr[left];
      arr[left] = arr[i];
      arr[i] = tmp;
      left++;
    }
  }

  // Move pivot in-between left & right sides
  arr[e] = arr[left];
  arr[left] = pivot;

  // Quick sort left side
  quickSort(arr, s, left - 1);

  // Quick sort right side
  quickSort(arr, left + 1, e);

  return arr;
}
// @lc code=end
