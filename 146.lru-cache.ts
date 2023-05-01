/*
 * @lc app=leetcode id=146 lang=typescript
 *
 * [146] LRU Cache
 */

// @lc code=start
class LRUCache {
  capacity: number;
  map: Map<number, LLNode>;
  head: LLNode;
  tail: LLNode;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = new LLNode();
    this.tail = new LLNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: number): number {
    if (this.map.has(key)) {
      this.remove(this.map.get(key)!);
      this.add(this.map.get(key)!);
      return this.map.get(key)!.val;
    } else {
      return -1;
    }
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      let node = this.map.get(key);
      node!.val = value;
      this.remove(node!);
      this.add(node!);
    } else {
      const nodeToAdd = new LLNode(key, value);
      this.add(nodeToAdd);
      this.map.set(key, nodeToAdd);
      if (this.map.size > this.capacity) {
        let LCU = this.tail.prev;
        this.remove(LCU!);
        this.map.delete(LCU!.key);
      }
    }
  }
  add(node: LLNode): void {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next!.prev = node;
    this.head.next = node;
  }
  remove(node: LLNode): void {
    if (node.next && node.prev) {
      node.next.prev = node.prev;
      node.prev.next = node.next;
    }
  }
}

class LLNode {
  key: number;
  val: number;
  prev: LLNode | null;
  next: LLNode | null;
  constructor(key = -1, val = -1, prev = null, next = null) {
    this.key = key;
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
