class Solution:
    def tribonacci(self, n: int) -> int:
        tribs = [0, 1, 1]
        while len(tribs) - 1 <= n:
            tribs.append(tribs[-1]+tribs[-2]+tribs[-3])
        return tribs[n]
