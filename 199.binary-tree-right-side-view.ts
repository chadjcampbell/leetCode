/*
 * @lc app=leetcode id=199 lang=typescript
 *
 * [199] Binary Tree Right Side View
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function rightSideView(root: TreeNode | null): number[] {
  let result: number[] = [];
  if (!root) return result;
  let queue: TreeNode[] = [root];
  while (queue.length > 0) {
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let curr = queue.pop();
      if (i === length - 1) {
        result.push(curr.val);
      }
      if (curr.left) {
        queue.unshift(curr.left);
      }
      if (curr.right) {
        queue.unshift(curr.right);
      }
    }
  }
  return result;
}
// @lc code=end
