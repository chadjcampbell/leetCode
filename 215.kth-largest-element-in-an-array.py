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
        for i in range(s, e):
            if nums[i] <= key:
                nums[j], nums[i] = nums[i], nums[j]
                j += 1
        nums[j], nums[e] = nums[e], nums[j]
        return j

    def findKthLargest(self, nums: List[int], k: int) -> int:
        kthIndex = len(nums) - k
        s = 0
        e = len(nums)-1
        while s < e:
            pivot = self.partition(nums, s, e)
            if pivot < kthIndex:
                s = pivot+1
            elif pivot > kthIndex:
                e = pivot-1
            else:
                break
        return nums[kthIndex]
# @lc code=end
