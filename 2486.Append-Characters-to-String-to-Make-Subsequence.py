class Solution:
    def appendCharacters(self, s: str, t: str) -> int:
        res = len(t)
        i = 0
        for c in s:
            if c == t[i]:
                i += 1
                res -= 1
                if i == len(t):
                    return 0

        return res
