/*
 * @lc app=leetcode id=206 lang=typescript
 *
 * [206] Reverse Linked List
 */

// @lc code=start
/* *
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * } */

function reverseList(head: ListNode | null): ListNode | null {
  let previous = null;
  let current = head;
  while (current !== null) {
    let temp = current.next;
    current.next = previous;
    previous = current;
    current = temp;
  }
  return previous;
}
// @lc code=end
