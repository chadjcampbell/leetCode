/*
 * @lc app=leetcode id=374 lang=typescript
 *
 * [374] Guess Number Higher or Lower
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

function guessNumber(n: number): number {
  let low = 1,
    high = n;
  let myGuess: number;
  while (low <= high) {
    myGuess = Math.floor((high + low) / 2);
    console.log(myGuess);
    if (guess(myGuess) < 0) {
      high = myGuess - 1;
    } else if (guess(myGuess) > 0) {
      low = myGuess + 1;
    } else {
      return myGuess;
    }
  }
  return -1;
}
// @lc code=end
