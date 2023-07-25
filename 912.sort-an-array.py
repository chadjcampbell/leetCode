#
# @lc app=leetcode id=912 lang=python3
#
# [912] Sort an Array
#

# @lc code=start
from typing import List


class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        def mergeSort(arr):
            if len(arr) <= 1:
                return arr
            middle = len(arr)//2
            left = mergeSort(arr[:middle])
            right = mergeSort(arr[middle:])
            return merge(left, right)

        def merge(left, right):
            result = []
            i, j = 0, 0
            while i < len(left) and j < len(right):
                if left[i] <= right[j]:
                    result.append(left[i])
                    i += 1
                else:
                    result.append(right[j])
                    j += 1
            result.append(left[i:])
            result.append(right[j:])
            return result
        return mergeSort(nums)

# @lc code=end
