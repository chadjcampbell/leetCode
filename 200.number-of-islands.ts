/*
 * @lc app=leetcode id=200 lang=typescript
 *
 * [200] Number of Islands
 */

// @lc code=start
function numIslands(grid: string[][]): number {
  let count = 0;
  let r = 0;
  let c = 0;
  let visited = [];
  function findIsland(
    grid: string[][],
    r: number,
    c: number,
    visited: string[]
  ) {
    let thisCoord = r.toString() + c.toString();
    if (
      Math.min(r, c) < 0 ||
      grid[r][c] == "0" ||
      visited.includes(thisCoord)
    ) {
      //youve hit water or already visited
    }
    visited.push(thisCoord);
    findIsland(grid, r + 1, c, visited);
    findIsland(grid, r - 1, c, visited);
    findIsland(grid, r, c + 1, visited);
    findIsland(grid, r, c - 1, visited);
  }
  return count;
}
// @lc code=end
