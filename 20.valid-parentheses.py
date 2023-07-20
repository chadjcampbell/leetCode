#
# @lc app=leetcode id=20 lang=python3
#
# [20] Valid Parentheses
#

# @lc code=start
class Solution:
    def isValid(self, s: str) -> bool:
        left_stack = []
        for i in range(len(s)):
            print(left_stack)
            if s[i] == '(' or s[i] == '[' or s[i] == '{':
                left_stack.append(s[i])
            else:
                if s[i] == ')':
                    if len(left_stack) == 0 or left_stack.pop() != '(':
                        return False
                if s[i] == ']':
                    if len(left_stack) == 0 or left_stack.pop() != '[':
                        return False
                if s[i] == '}':
                    if len(left_stack) == 0 or left_stack.pop() != '{':
                        return False
        if len(left_stack):
            return False
        return True
# @lc code=end
