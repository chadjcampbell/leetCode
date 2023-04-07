/*
 * @lc app=leetcode id=74 lang=typescript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  let arr;
  for (let i = 0; i < matrix.length; i++) {
    const element = matrix[i];
    if (matrix[i][0] <= target && matrix[i][matrix[i].length - 1] >= target) {
      arr = matrix[i];
      break;
    }
    if (i === matrix.length - 1) {
      return false;
    }
  }
  return binarySearch(arr, target);
}

function binarySearch(arr: number[], target: number): boolean {
  let l = 0,
    r = arr.length - 1;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (target > arr[m]) {
      l = m + 1;
    } else if (target < arr[m]) {
      r = m - 1;
    } else {
      return true;
    }
  }
  return false;
}
// @lc code=end
