/*
 * @lc app=leetcode id=695 lang=typescript
 *
 * [695] Max Area of Island
 */

// @lc code=start
function maxAreaOfIsland(grid: number[][]): number {
  let islandSize: number = 0;
  let biggestIsland: number = 0;

  function dfs(grid: number[][], r: number, c: number): void {
    if (
      Math.min(r, c) < 0 ||
      r >= grid.length ||
      c >= grid[0].length ||
      grid[r][c] == 0
    ) {
      return;
    }
    islandSize++;
    grid[r][c] = 0;
    dfs(grid, r + 1, c);
    dfs(grid, r - 1, c);
    dfs(grid, r, c + 1);
    dfs(grid, r, c - 1);
  }

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] == 1) {
        dfs(grid, r, c);
        if (islandSize > biggestIsland) {
          biggestIsland = islandSize;
        }
        islandSize = 0;
      }
    }
  }

  return biggestIsland;
}
// @lc code=end
