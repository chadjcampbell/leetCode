from typing import List


class Solution:
    def matrixScore(self, grid: List[List[int]]) -> int:
        res = 0

        # helper functions for flip rows and columns
        def flip_row(row):
            for j in range(len(grid[row])):
                if grid[row][j] == 1:
                    grid[row][j] = 0
                else:
                    grid[row][j] = 1

        def flip_col(col):
            for i in range(len(grid)):
                if grid[i][col] == 1:
                    grid[i][col] = 0
                else:
                    grid[i][col] = 1

        # handle rows, first position needs to be a 1 to get the biggest binary number
        for i in range(len(grid)):
            if grid[i][0] == 0:
                flip_row(i)

        # handle columns, we want as many 1's as possible per column
        for j in range(len(grid[0])):
            zeros = 0
            ones = 0
            for i in range(len(grid)):
                if grid[i][j] == 1:
                    ones += 1
                else:
                    zeros += 1
            if zeros > ones:
                flip_col(j)
        for n in grid:
            res += int(''.join([str(x) for x in n]), 2)
        return res
