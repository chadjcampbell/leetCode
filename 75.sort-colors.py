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
        for num in nums:
            counts[num] += 1

        i = 0
        for c in range(len(counts)):
            for _ in range(counts[c]):
                nums[i] = c
                i += 1

# @lc code=end
