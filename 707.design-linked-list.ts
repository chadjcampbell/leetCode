/*
 * @lc app=leetcode id=707 lang=typescript
 *
 * [707] Design Linked List
 */

// @lc code=start

class LLNode {
  val: number;
  next: LLNode | null;
  constructor(val?: number, next?: LLNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class MyLinkedList {
  head: LLNode | null;
  constructor(head = null) {
    this.head = head;
  }

  get(index: number): number {
    if (this.head === null) return -1;
    if (index === 0) return this.head.val;
    let temp = this.head.next;
    let count = 0;
    while (count !== index) {
      count++;
      if (temp === null) return -1;
      if (count === index) {
        return temp.val;
      }
      temp = temp.next;
    }
    return -1;
  }

  addAtHead(val: number): void {
    if (this.head === null) {
      this.head = new LLNode(val);
      return;
    }
    let newHead = new LLNode(val);
    let temp = this.head;
    newHead.next = temp;
    this.head = newHead;
  }

  addAtTail(val: number): void {
    if (this.head === null) {
      this.head = new LLNode(val);
      return;
    }
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = new LLNode(val);
  }

  addAtIndex(index: number, val: number): void {
    if (index === 0) this.addAtHead(val);
    let temp = this.head;
    let count = 0;
    while (count !== index) {
      count++;
      if (temp === null) return;
      if (count === index) {
        let newNode = new LLNode(val);
        newNode.next = temp.next;
        temp.next = newNode;
      }
      temp = temp.next;
    }
    return;
  }

  deleteAtIndex(index: number): void {
    if (this.head === null) return;
    let temp = this.head;
    let count = 0;
    if (index === 0) {
      temp = this.head.next;
      this.head = temp;
      return;
    }
    while (count !== index) {
      count++;
      if (temp === null) return;
      if (count === index) {
        if (temp.next === null) {
          temp = null;
          return;
        }
        temp.next = temp.next.next;
        return;
      }
      temp = temp.next;
    }
    return;
  }
}
/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
