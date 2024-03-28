from typing import List


class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        if k <= 1:
            return 0
        result = 0
        left = 0
        product = 1
        for right, n in enumerate(nums):
            product *= n
            while product >= k:
                product /= nums[left]
                left += 1
            result += right - left + 1
        return result
