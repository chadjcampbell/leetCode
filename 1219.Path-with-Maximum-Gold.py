from typing import List


class Solution:
    def getMaximumGold(self, grid: List[List[int]]) -> int:
        res = 0
        ROWS = len(grid)
        COLS = len(grid[0])

        # function for dfs
        def dfs(r, c, visited):
            if (r < 0 or c < 0 or r >= ROWS or c >= COLS or grid[r][c] == 0 or (r, c) in visited):
                return 0
            visited.add((r, c))
            neighbors = [[r+1, c], [r-1, c], [r, c+1], [r, c-1]]
            path = 0
            for nr, nc in neighbors:
                path = max(path, grid[r][c] + dfs(nr, nc, visited))
            visited.remove((r, c))
            return path

        # check every non zero cell as a starting point
        for i in range(ROWS):
            for j in range(COLS):
                if grid[i][j] != 0:
                    res = max(res, dfs(i, j, set()))

        return res
