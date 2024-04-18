from typing import List


class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        res = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == 1:
                    if j - 1 < 0 or (j > 0 and grid[i][j-1] == 0):
                        res += 1
                    if i - 1 < 0 or (i > 0 and grid[i-1][j] == 0):
                        res += 1
                    if j + 1 == len(grid[0]) or (j < len(grid[0]) - 1 and grid[i][j+1] == 0):
                        res += 1
                    if i + 1 == len(grid) or (i < len(grid) - 1 and grid[i+1][j] == 0):
                        res += 1
        return res
