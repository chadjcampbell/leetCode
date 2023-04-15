/*
 * @lc app=leetcode id=102 lang=typescript
 *
 * [102] Binary Tree Level Order Traversal
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

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  let output: number[][] = [];
  let queue: TreeNode[] = [];
  queue.unshift(root);
  while (queue.length > 0) {
    let Qlength = queue.length;
    let levelArray: number[] = [];
    for (let i = 0; i < Qlength; i++) {
      let curr = queue.pop();
      levelArray.push(curr.val);
      if (curr.left) {
        queue.unshift(curr.left);
      }
      if (curr.right) {
        queue.unshift(curr.right);
      }
    }
    output.push(levelArray);
  }

  return output;
}
// @lc code=end
