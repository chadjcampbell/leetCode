/*
 * @lc app=leetcode id=23 lang=typescript
 *
 * [23] Merge k Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let newHead = new ListNode();
  let tail = newHead;
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }
  if (list1 !== null) {
    tail.next = list1;
  }
  if (list2 !== null) {
    tail.next = list2;
  }
  return newHead.next;
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null;
  let mergedLists = new ListNode(-100000);
  for (let i = 0; i < lists.length; i++) {
    let merged = mergeTwoLists(mergedLists, lists[i]);
    mergedLists = merged;
  }
  return mergedLists.next;
}
// @lc code=end
