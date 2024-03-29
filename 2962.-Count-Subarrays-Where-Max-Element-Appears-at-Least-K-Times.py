from typing import List


class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        result = 0
        maximum = max(nums)
        cnt = 0
        left = 0
        for n in nums:
            if n == maximum:
                cnt += 1
            while cnt > k or (cnt == k and nums[left] != maximum):
                if nums[left] == maximum:
                    cnt -= 1
                left += 1
            if cnt == k:
                result += left + 1

        return result
