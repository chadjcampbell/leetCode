from collections import deque
from typing import List


class Solution:
    def openLock(self, deadends: List[str], target: str) -> int:
        depth = 0
        q = deque(["0000"])
        memo = set(deadends)

        def build_dec(combo: str):
            res = []
            for i in range(4):
                string_up = combo.split()
                string_up[i] = str((int(string_up[i]) + 1) % 10)
                res.append("".join(string_up))
                string_down = combo.split()
                string_down[i] = str((int(string_up[i]) + 9) % 10)
                res.append("".join(string_down))
            return res

        while q:
            for _ in q:
                cur = q.popleft()
                if cur == target:
                    return depth
                if cur in memo:
                    continue
                for dec in build_dec(cur):
                    memo.add(dec)
                    q.append(dec)
                depth += 1

        return -1
