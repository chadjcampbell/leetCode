from typing import List


class Solution:
    def findFarmland(self, land: List[List[int]]) -> List[List[int]]:
        res = []

        def get_group(row, col):
            land[row][col] = -1
            while row < len(land) - 1 and land[row+1][col] == 1:
                get_group(row+1, col)
            while col < len(land[row]) - 1 and land[row][col+1] == 1:
                get_group(row, col+1)
            return [row, col]

        for i in range(len(land)):
            for j in range(len(land[i])):
                if land[i][j] == 1:
                    start = [i, j]
                    end = get_group(i, j)
                    area = start + end
                    res.append(area)

        return res
