#
# @lc app=leetcode id=70 lang=python3
#
# [70] Climbing Stairs
#

# @lc code=start
# dp solution
""" class Solution:
    def climbStairs(self, n: int) -> int:
        a, b = 1, 1
        for _ in range(n):
            a, b = b, a+b
        return a
 """

# recursive with memoization solution


class Solution:
    def climbStairs(self, n: int, memo={1: 1, 2: 2, 3: 3}) -> int:
        if n in memo:
            return memo[n]
        memo[n] = self.climbStairs(n-1)+self.climbStairs(n-2)
        return memo[n]
# @lc code=end
