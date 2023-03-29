/*
 * @lc app=leetcode id=1472 lang=typescript
 *
 * [1472] Design Browser History
 */

// @lc code=start

class HNode {
  url: string;
  prev: HNode | null;
  next: HNode | null;
  constructor(url: string, prev?: HNode | null, next?: HNode | null) {
    this.url = url;
    this.prev = prev === undefined ? null : prev;
    this.next = next === undefined ? null : next;
  }
}

class BrowserHistory {
  homepage: string;
  current: HNode;
  constructor(homepage: string, current = new HNode(homepage)) {
    this.homepage = homepage;
    this.current = current;
  }

  visit(url: string): void {
    let newNode = new HNode(url);
    this.current.next = newNode;
    newNode.prev = this.current;
    this.current = newNode;
  }

  back(steps: number): string {
    let count = 0;
    while (count !== steps) {
      count++;
      if (this.current.prev === null) return this.current.url;
      this.current = this.current.prev;
      if (count === steps) {
        return this.current.url;
      }
    }
    return this.current.url;
  }

  forward(steps: number): string {
    let count = 0;
    while (count !== steps) {
      count++;
      if (this.current.next === null) return this.current.url;
      this.current = this.current.next;
      if (count === steps) {
        return this.current.url;
      }
    }
    return this.current.url;
  }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
// @lc code=end
