from typing import List


class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        res = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                # if you hit a 1, check all 4 sides
                if grid[i][j] == 1:
                    # on each side, check if it's out of bounds or 0
                    if j - 1 < 0 or grid[i][j-1] == 0:
                        res += 1
                    if i - 1 < 0 or grid[i-1][j] == 0:
                        res += 1
                    if j + 1 == len(grid[0]) or grid[i][j+1] == 0:
                        res += 1
                    if i + 1 == len(grid) or grid[i+1][j] == 0:
                        res += 1
        return res
