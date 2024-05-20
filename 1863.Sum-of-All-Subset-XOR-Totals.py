from typing import List


class Solution:
    def subsetXORSum(self, nums: List[int]) -> int:

        def subsets_total(i, res):
            # Base case, end of the decision tree
            if i == len(nums):
                return res

            return subsets_total(i + 1, res ^ nums[i]) + subsets_total(i + 1, res)

        return subsets_total(0, 0)
