from typing import List


class Solution:
    def trap(self, height: List[int]) -> int:
        res = 0
        MHLeft, MHRight = 0, 0
        left = 0
        right = len(height) - 1
        while left < len(height) and right >= 0 and left <= right:
            if MHLeft < MHRight:
                water = MHLeft - height[left]
                MHLeft = max(MHLeft, height[left])
                left += 1
            else:
                water = MHRight - height[right]
                MHRight = max(MHRight, height[right])
                right -= 1
            if water > 0:
                res += water

        return res
