#
# @lc app=leetcode id=322 lang=python3
#
# [322] Coin Change
#

# @lc code=start
import math
from typing import List


class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        memo = {0: 0}

        def dfs(target):
            if target < 0:
                return math.inf
            if target == 0:
                return target
            if target in memo:
                return memo[target]

            memo[target] = math.inf

            for coin in coins:
                memo[target] = min(memo[target], 1 + dfs(target-coin))

            return memo[target]

        result = dfs(amount)
        if result != math.inf:
            return result
        else:
            return -1


# @lc code=end
