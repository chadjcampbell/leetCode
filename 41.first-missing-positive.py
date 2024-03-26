from typing import List


class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        result = 1

        for idx, n in enumerate(nums):
            if n < 0:
                nums[idx] = 0
        for n in nums:
            idx = abs(n) - 1
            if n != 0 and abs(n) <= len(nums):
                nums[idx] = abs(nums[idx]) * -1
                if nums[idx] == 0:
                    nums[idx] = -len(nums) - 1
        for n in nums:
            if n < 0:
                result += 1
            else:
                return result

        return result
