class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        result = 0
        for c in reversed(s.strip()):
            if c == " ":
                break
            result += 1

        return result
