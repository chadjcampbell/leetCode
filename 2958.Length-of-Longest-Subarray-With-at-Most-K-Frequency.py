from typing import List


class Solution:
    def maxSubarrayLength(self, nums: List[int], k: int) -> int:
        current_max = 0
        result = 0
        left = 0
        kmap = {}
        for right, n in enumerate(nums):
            if n in kmap:
                kmap[n] += 1
            else:
                kmap[n] = 1
            if kmap[n] <= k:
                current_max = right - left + 1
                if current_max > result:
                    result = current_max
                if kmap[n] > k:
                    kmap[nums[left]] -= 1
                    left += 1
        return result


""" Currently 738/992 test cases passed needs fixed """

""" Example
Input: nums = [1,2,3,1,2,3,1,2], k = 2
Output: 6
Explanation: The longest possible good subarray is [1,2,3,1,2,3] since the values 1, 2, and 3 occur at most twice in this subarray. Note that the subarrays [2,3,1,2,3,1] and [3,1,2,3,1,2] are also good.
It can be shown that there are no good subarrays with length more than 6. """
