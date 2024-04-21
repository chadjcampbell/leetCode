from typing import List


class Solution:
    def findFarmland(self, land: List[List[int]]) -> List[List[int]]:
        res = []
        
        for i in range(len(land)):
            for j in range(len(land[i])):
                # if i, j starts a new farm plot
                if land[i][j] == 1 and (i == 0 or land[i - 1][j] == 0) and (j == 0 or land[i][j - 1] == 0):
                    down = i
                    right = j
                    # go down
                    while down + 1 < len(land) and land[down + 1][j] == 1:
                        down += 1
                    # go right
                    while right + 1 < len(land[i]) and land[i][right + 1] == 1:
                        right += 1

                    res.append([i, j, down, right])
                    
        return res