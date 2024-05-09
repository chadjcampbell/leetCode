from typing import List


class Solution:
    def maximumHappinessSum(self, happiness: List[int], k: int) -> int:
        top_children = sorted(happiness)[-k:]
        top_children.reverse()
        res = 0
        for i, child in enumerate(top_children):
            if child - i > 0:
                res += child - i

        return res
