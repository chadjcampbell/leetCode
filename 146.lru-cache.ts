/*
 * @lc app=leetcode id=146 lang=typescript
 *
 * [146] LRU Cache
 */

// @lc code=start
class LRUCache {
  capacity: number;
  size: number;
  map: Map<number, LLNode>;
  head: LLNode;
  tail: LLNode;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.size = 0;
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
      if (this.size >= this.capacity) {
        this.remove(this.tail.prev!);
        this.map.delete(key);
        this.size--;
      }
      const nodeToAdd = new LLNode(value);
      this.add(nodeToAdd);
      this.map.set(key, nodeToAdd);
      this.size++;
    }
  }
  add(node: LLNode): void {
    const nodeToAdd = new LLNode(node.val);
    nodeToAdd.next = this.head.next;
    nodeToAdd.prev = this.head;
    this.head.next = nodeToAdd;
  }
  remove(node: LLNode): void {
    if (node.next && node.prev) {
      node.next = node.next?.next;
      node.prev = node.prev?.prev;
    }
  }
}

class LLNode {
  val: number;
  prev: LLNode | null;
  next: LLNode | null;
  constructor(val = -1, prev = null, next = null) {
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
