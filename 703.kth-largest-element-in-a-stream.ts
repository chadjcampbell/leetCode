/*
 * @lc app=leetcode id=703 lang=typescript
 *
 * [703] Kth Largest Element in a Stream
 */

// @lc code=start
class KthLargest {
  k: number;
  heap: number[];
  constructor(k: number, nums: number[]) {
    this.k = k;
    this.heap = [-1000000];
    nums.forEach((num) => {
      this.add(num);
    });
  }

  add(val: number): number {
    if (this.heap.length === 1) {
      this.heap.push(val);
      return val;
    }
    this.heapPush(val);
    if (this.heap.length - 1 > this.k) {
      this.heapPop();
    }
    return this.heap[1];
  }

  heapPush(val: number): void {
    this.heap.push(val);
    let i: number = this.heap.length - 1;
    while (i > 1 && this.heap[Math.floor(i / 2)] > this.heap[i]) {
      let temp = this.heap[i];
      this.heap[i] = this.heap[Math.floor(i / 2)];
      this.heap[Math.floor(i / 2)] = temp;
      i = Math.floor(i / 2);
    }
  }

  heapPop(): void {
    if (this.heap.length === 1) return;
    if (this.heap.length === 2) {
      this.heap.pop();
      return;
    }
    this.heap[1] = this.heap.pop()!;
    let i = 1;
    while (2 * i < this.heap.length) {
      if (
        2 * i + 1 < this.heap.length &&
        this.heap[2 * i + 1] < this.heap[2 * i] &&
        this.heap[2 * i + 1] < this.heap[i]
      ) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[2 * i + 1];
        this.heap[2 * i + 1] = temp;
        i = 2 * i + 1;
      } else if (this.heap[2 * i] < this.heap[i]) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[2 * i];
        this.heap[2 * i] = temp;
        i = 2 * i;
      } else {
        break;
      }
    }
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end
