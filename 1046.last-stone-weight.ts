/*
 * @lc app=leetcode id=1046 lang=typescript
 *
 * [1046] Last Stone Weight
 */

// @lc code=start

function lastStoneWeight(stones: number[]): number {
  const maxHeap = new MaxPriorityQueue();
  for (let i = 0; i < stones.length; i++) {
    maxHeap.enqueue(stones[i]);
  }
  while (maxHeap.size() > 1) {
    let biggest = maxHeap.dequeue().element;
    let secondBiggest = maxHeap.dequeue().element;
    if (biggest > secondBiggest) {
      let difference = biggest - secondBiggest;
      maxHeap.enqueue(difference);
    }
  }
  if (maxHeap.isEmpty()) {
    return 0;
  } else {
    return maxHeap.front().element;
  }
}
// @lc code=end
