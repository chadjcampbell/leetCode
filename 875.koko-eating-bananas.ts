/*
 * @lc app=leetcode id=875 lang=typescript
 *
 * [875] Koko Eating Bananas
 */

// @lc code=start
function minEatingSpeed(piles: number[], h: number): number {
  function allEaten(bite: number): boolean {
    let hours = h;
    for (let i = 0; i < piles.length; i++) {
      let bitesNeeded = Math.ceil(piles[i] / bite);
      hours -= bitesNeeded;
      if (hours < 0) return false;
    }
    return true;
  }

  let low = 1,
    high = Math.max(...piles);
  let mid;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (allEaten(mid)) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
}

// @lc code=end
