#
# @lc app=leetcode id=707 lang=python3
#
# [707] Design Linked List
#

# @lc code=start
class ListNode:
    def __init__(self, val) -> None:
        self.prev = None
        self.val = val
        self.next = None


class MyLinkedList:

    def __init__(self):
        self.head = None
        self.tail = None

    def get(self, index: int) -> int:
        if not self.head:
            return -1
        i = 0
        curr = self.head
        while i < index:
            if not curr:
                return -1
            curr = curr.next
            i += 1
        return curr.val

    def addAtHead(self, val: int) -> None:
        if not self.head:
            self.head = self.tail = ListNode(val)
            return
        new = ListNode(val)
        new.next = self.head
        self.head.prev = new
        self.head = new

    def addAtTail(self, val: int) -> None:
        if not self.head:
            self.head = self.tail = ListNode(val)
            return
        new = ListNode(val)
        new.prev = self.tail
        self.tail.next = new
        self.tail = new

    def addAtIndex(self, index: int, val: int) -> None:
        i = 0
        if not self.head and index == 0:
            self.head = self.tail = ListNode(val)
            return
        curr = self.head
        while i < index:
            if not curr:
                return
            curr = curr.next
            i += 1
        if not curr:
            new = ListNode(val)
            self.tail.next = new
            new.prev = self.tail
            self.tail = new
            return
        prev = curr.prev
        new = ListNode(val)
        new.prev = prev
        new.next = curr
        if prev:
            prev.next = new
        curr.prev = new
        if curr == self.head:
            self.head = self.head.prev
        if curr == self.tail:
            self.tail = self.tail.next

    def deleteAtIndex(self, index: int) -> None:
        i = 0
        if not self.head:
            return
        curr = self.head
        while i < index:
            if not curr:
                return
            curr = curr.next
            i += 1
        if not curr:
            return
        prev = curr.prev
        next = curr.next
        if prev:
            prev.next = next
        if next:
            next.prev = prev
        if curr == self.head:
            self.head = self.head.next
        if curr == self.tail:
            self.tail = self.tail.prev


# Your MyLinkedList object will be instantiated and called as such:
# obj = MyLinkedList()
# param_1 = obj.get(index)
# obj.addAtHead(val)
# obj.addAtTail(val)
# obj.addAtIndex(index,val)
# obj.deleteAtIndex(index)
# @lc code=end
