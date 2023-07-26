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
        if not lists or len(lists) == 0:
            return None
        while len(lists) > 1:
            merged = []
            for i in range(0, len(lists), 2):
                left = lists[i]
                right = lists[i+1] if i+1 < len(lists) else None
                merged.append(self.mergeTwo(left, right))
            lists = merged
        return lists[0]

    def mergeTwo(self, L1, L2):
        dummyHead = ListNode()
        curr = dummyHead
        while L1 and L2:
            if (L1.val <= L2.val):
                curr.next = L1
                L1 = L1.next
            else:
                curr.next = L2
                L2 = L2.next
            curr = curr.next
        while L1:
            curr.next = L1
            curr = curr.next
            L1 = L1.next
        while L2:
            curr.next = L2
            curr = curr.next
            L2 = L2.next
        return dummyHead.next
