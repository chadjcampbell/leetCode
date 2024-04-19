from typing import List


class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        res = 0

        def dfs(x, y):
            grid[x][y] = "-1"
            if x > 0 and grid[x-1][y] == "1":
                dfs(x-1, y)
            if x < len(grid) - 1 and grid[x+1][y] == "1":
                dfs(x+1, y)
            if y > 0 and grid[x][y-1] == "1":
                dfs(x, y-1)
            if y < len(grid[0]) - 1 and grid[x][y+1] == "1":
                dfs(x, y+1)

        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == "1":
                    res += 1
                    dfs(i, j)

        return res
