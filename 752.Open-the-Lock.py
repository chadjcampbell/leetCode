from collections import deque
from typing import List


class Solution:
    def openLock(self, deadends: List[str], target: str) -> int:

        # handle edge cases
        if "0000" in deadends or target in deadends:
            return -1

        # set depth and q for BFS, add memoization to trim decision tree
        depth = 0
        q = deque(["0000"])
        memo = set(deadends)

        # build each of 8 combinations from a single lock turn
        def build_dec(combo):
            res = []
            for i in range(4):
                string_up = [c for c in combo]
                string_up[i] = str((int(string_up[i]) + 1) % 10)
                res.append("".join(string_up))
                string_down = [c for c in combo]
                string_down[i] = str((int(string_down[i]) + 9) % 10)
                res.append("".join(string_down))
            return res

        # BFS the decision tree
        while q:
            for _ in range(len(q)):
                cur = q.popleft()
                if cur == target:
                    return depth
                for dec in build_dec(cur):
                    if dec not in memo:
                        memo.add(dec)
                        q.append(dec)
            depth += 1

        return -1
