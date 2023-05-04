/*
 * @lc app=leetcode id=200 lang=typescript
 *
 * [200] Number of Islands
 */

// @lc code=start
function numIslands(grid: string[][]): number {
  let count: number = 0;
  function dfs(grid: string[][], r: number, c: number): void {
    if (
      Math.min(r, c) < 0 ||
      r >= grid.length ||
      c >= grid[0].length ||
      grid[r][c] == "0"
    ) {
      return;
    }
    grid[r][c] = "0";
    dfs(grid, r + 1, c);
    dfs(grid, r - 1, c);
    dfs(grid, r, c + 1);
    dfs(grid, r, c - 1);
  }

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] == "1") {
        count++;
        dfs(grid, r, c);
      }
    }
  }

  return count;
}

// @lc code=end
