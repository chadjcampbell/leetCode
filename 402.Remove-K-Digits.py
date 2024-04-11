class Solution:
    def removeKdigits(self, num: str, k: int) -> str:
        res = []
        # build monotonic stack
        for n in num:
            while k and res and res[-1] > n:
                k -= 1
                res.pop()
            res.append(n)
        # if still k, remove from end
        while k and res:
            k -= 1
            res.pop()
        # remove leading zeros
        while res and res[0] == "0":
            res.pop(0)
        # if not empty return stack as a string
        if res:
            return "".join(res)
        else:
            return "0"
