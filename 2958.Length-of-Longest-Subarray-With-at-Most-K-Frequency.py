from typing import List


class Solution:
    def maxSubarrayLength(self, nums: List[int], k: int) -> int:
        current_max = 0
        result = 0
        left = 0
        kmap = {}
        for right, n in enumerate(nums):
            if n in kmap and kmap[n] != 0:
                kmap[n] += 1
            else:
                kmap[n] = 1
            while kmap[n] > k:
                kmap[nums[left]] -= 1
                left += 1
            current_max = right - left + 1
            if current_max > result:
                result = current_max

        return result
