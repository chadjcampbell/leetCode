class Solution:
    def equalSubstring(self, s: str, t: str, maxCost: int) -> int:
        res = 0

        # build a list of ascii differences between s and t
        diffs = []
        for i in range(len(s)):
            diffs.append(abs(ord(s[i]) - ord(t[i])))

        # find the max substring where sum <= maxcost, variable size sliding window
        left, cost = 0, 0
        for right in range(len(diffs)):
            cost += diffs[right]
            if cost <= maxCost:
                res = max(res, right - left + 1)
            else:
                cost -= diffs[left]
                left += 1

        return res
