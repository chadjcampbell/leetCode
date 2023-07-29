#
# @lc app=leetcode id=75 lang=python3
#
# [75] Sort Colors
#

# @lc code=start
from typing import List


class Solution:
    def sortColors(self, nums: List[int]) -> None:
        counts = [0, 0, 0]
        for num in range(len(nums)):
            counts[num] += 1

        i = 0
        for c in range(len(counts)):
            for n in range(c):
                nums[i] = n
                i += 1

# @lc code=end
