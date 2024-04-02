class Solution:
    def isIsomorphic(self, s1: str, s2: str) -> bool:
        map = {}
        for idx, c in enumerate(s1):
            if c in map:
                if map[c] != s2[idx]:
                    return False
            else:
                if s2[idx] in map.values():
                    return False
                map[c] = s2[idx]

        return True
