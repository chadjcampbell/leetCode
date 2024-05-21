from typing import List


class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res = []

        def build_subsets(i, curr_subset: List[int] = []):
            # Base case, end of the decision tree
            if i == len(nums):
                if curr_subset not in res:
                    res.append(curr_subset[:])
                return
            # Add, or don't add, every element
            curr_subset.append(nums[i])
            build_subsets(i+1, curr_subset)
            curr_subset.pop()
            build_subsets(i+1, curr_subset)

        build_subsets(0)
        return res
