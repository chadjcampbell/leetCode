#
# @lc app=leetcode id=26 lang=python3
#
# [26] Remove Duplicates from Sorted Array
#

# @lc code=start
from typing import List


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        L = 1
        R = 1
        while R < len(nums):
            if nums[R] != nums[R-1]:
                nums[L] = nums[R]
                L += 1
            R += 1
        return L

# @lc code=end
