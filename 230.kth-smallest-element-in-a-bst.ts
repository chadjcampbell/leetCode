/*
 * @lc app=leetcode id=230 lang=typescript
 *
 * [230] Kth Smallest Element in a BST
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

function kthSmallest(root: TreeNode | null, k: number): number {
  let reverseOrderArray: number[] = [];
  inOrder(root, reverseOrderArray);
  return reverseOrderArray[k - 1];
}

function inOrder(root: TreeNode, reverseOrderArray: number[]) {
  if (root === null) return;
  inOrder(root.left, reverseOrderArray);
  reverseOrderArray.push(root.val);
  inOrder(root.right, reverseOrderArray);
}
// @lc code=end
