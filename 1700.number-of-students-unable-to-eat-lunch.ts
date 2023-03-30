/*
 * @lc app=leetcode id=1700 lang=typescript
 *
 * [1700] Number of Students Unable to Eat Lunch
 */

// @lc code=start

class MyQueue {
  queue: { key?: number };
  head: number;
  tail: number;

  constructor() {
    this.queue = {};
    this.head = 0;
    this.tail = 0;
  }

  size() {
    return this.tail - this.head;
  }

  enqueue(value: number): void {
    this.queue[this.tail] = value;
    this.tail++;
  }

  dequeue(): number {
    const value = this.queue[this.head];
    delete this.queue[this.head];
    this.head++;
    return value;
  }

  peek(): number {
    return this.queue[this.head];
  }
}

function countStudents(students: number[], sandwiches: number[]): number {
  let studentQ = new MyQueue();
  students.forEach((student) => studentQ.enqueue(student));
  let sandwicheQ = new MyQueue();
  sandwiches.forEach((sandwiche) => sandwicheQ.enqueue(sandwiche));
  let count = 0;
  while (count !== sandwicheQ.size()) {
    if (sandwicheQ.peek() === studentQ.peek()) {
      sandwicheQ.dequeue();
      studentQ.dequeue();
      count = 0;
      continue;
    } else {
      studentQ.enqueue(studentQ.dequeue());
      count++;
    }
  }
  return count;
}
// @lc code=end
