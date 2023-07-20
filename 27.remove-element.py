#
# @lc app=leetcode id=27 lang=python3
#
# [27] Remove Element
#

# @lc code=start
from typing import List


class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        L = 0
        for R in range(len(nums)):
            if nums[R] != val:
                nums[L] = nums[R]
                L += 1
        return L
# @lc code=end
