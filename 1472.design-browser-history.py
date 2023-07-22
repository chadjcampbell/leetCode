#
# @lc app=leetcode id=1472 lang=python3
#
# [1472] Design Browser History
#

# @lc code=start

class BrowserNode:
    def __init__(self, url: str) -> None:
        self.prev = None
        self.next = None
        self.url = url


class BrowserHistory:

    def __init__(self, homepage: str):
        self.head = BrowserNode(homepage)
        self.curr = self.head

    def visit(self, url: str) -> None:
        node = BrowserNode(url)
        self.curr.next = node
        node.prev = self.curr
        self.curr = node

    def back(self, steps: int) -> str:
        while self.curr.prev and steps:
            self.curr = self.curr.prev
            steps -= 1
        return self.curr.url

    def forward(self, steps: int) -> str:
        while self.curr.next and steps:
            self.curr = self.curr.next
            steps -= 1
        return self.curr.url


# Your BrowserHistory object will be instantiated and called as such:
# obj = BrowserHistory(homepage)
# obj.visit(url)
# param_2 = obj.back(steps)
# param_3 = obj.forward(steps)
# @lc code=end
