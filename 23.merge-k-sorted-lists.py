#
# @lc app=leetcode id=23 lang=python3
#
# [23] Merge k Sorted Lists
#

# @lc code=start
# Definition for singly-linked list.
from typing import List, Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        finalHead = ListNode()
        finalCurr = finalHead

        def mergeTwo(L1, L2):
            dummyHead = ListNode()
            curr = dummyHead
            while L1 and L2:
                if (L1.val <= L2.val):
                    curr.next = L1
                else:
                    curr.next = L2
                curr = curr.next
            while L1:
                curr.next = L1
                curr = curr.next
            while L2:
                curr.next = L2
                curr = curr.next
            return dummyHead.next

        for i in range(len(lists)):
            finalCurr.next = mergeTwo(lists[i-1], lists[i])
        return finalHead.next

# @lc code=end
