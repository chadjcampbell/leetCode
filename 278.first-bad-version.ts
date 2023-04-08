/*
 * @lc app=leetcode id=278 lang=typescript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let low = 1,
      high = n;
    let mid;
    while (low <= high) {
      mid = Math.floor((high + low) / 2);
      if (isBadVersion(mid)) {
        if (!isBadVersion(mid - 1)) {
          return mid;
        }
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return mid;
  };
};
// @lc code=end
