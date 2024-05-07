# Definition for singly-linked list.
import sys
from typing import Optional

sys.set_int_max_str_digits(10001)


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def doubleIt(self, head: Optional[ListNode]) -> Optional[ListNode]:
        num_string = str(head.val)

        while head.next:
            head = head.next
            num_string += str(head.val)

        doubled = int(num_string) * 2
        doubled_array = [int(d) for d in str(doubled)]

        res = ListNode(doubled_array[0])
        ref = res

        for i, n in enumerate(doubled_array):
            if i == 0:
                continue
            ref.next = ListNode(n)
            ref = ref.next
        return res
