#
# @lc app=leetcode id=215 lang=python3
#
# [215] Kth Largest Element in an Array
#

# @lc code=start
from typing import List


class Solution:
    def partition(self, nums, s, e):
        key = nums[e]
        j = s
        for i in range(nums[s], nums[e]):
            if nums[i] <= key:
                nums[j], nums[i] = nums[i], nums[j]
                j += 1
        return

    def findKthLargest(self, nums: List[int], k: int) -> int:
        return
# @lc code=end
