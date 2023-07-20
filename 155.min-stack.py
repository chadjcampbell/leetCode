#
# @lc app=leetcode id=155 lang=python3
#
# [155] Min Stack
#

# @lc code=start

class MinStack:

    def __init__(self):
        self.stack = []
        self.min = 2**31

    def push(self, val: int) -> None:
        if val <= self.min or not self.stack:
            self.min = val
        self.stack.append({'val': val, 'min': self.min})

    def pop(self) -> None:
        self.stack.pop()
        if self.stack:
            self.min = self.stack[-1]['min']

    def top(self) -> int:
        return self.stack[-1]['val']

    def getMin(self) -> int:
        return self.min


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
# @lc code=end
