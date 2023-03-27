/*
 * @lc app=leetcode id=155 lang=typescript
 *
 * [155] Min Stack
 */

// @lc code=start
class MinStack {
  vals: number[];
  mins: number[];
  constructor(vals = [], mins = []) {
    this.vals = vals;
    this.mins = mins;
  }

  push(val: number): void {
    if (this.mins.length === 0 || val <= this.mins[this.mins.length - 1]) {
      this.mins.push(val);
    } else {
      this.mins.unshift(val);
    }
    this.vals.push(val);
  }

  pop(): void {
    if (this.vals.pop() === this.mins[this.mins.length - 1]) {
      this.mins.pop();
    }
  }

  top(): number {
    return this.vals[this.vals.length - 1];
  }

  getMin(): number | null {
    return this.mins[this.mins.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
