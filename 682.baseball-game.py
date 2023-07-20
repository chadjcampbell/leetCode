#
# @lc app=leetcode id=682 lang=python3
#
# [682] Baseball Game
#

# @lc code=start
from typing import List


class Solution:
    def calPoints(self, operations: List[str]) -> int:
        ans = []
        j = 0
        for i in range(len(operations)):
            if operations[i] == '+':
                ans.append(int(ans[j-1]) + int(ans[j-2]))
                j += 1
            elif operations[i] == 'D':
                ans.append(int(ans[j-1]*2))
                j += 1
            elif operations[i] == 'C':
                ans.pop()
                j -= 1
            else:
                ans.append(int(operations[i]))
                j += 1
        return sum(ans)

# @lc code=end
