class Solution:
    def makeGood(self, s: str) -> str:
        good = []  
        for c in s:
            if good and abs(ord(c) - ord(good[-1])) == 32:
                good.pop()
            else:
                good.append(c)

        return "".join(good)