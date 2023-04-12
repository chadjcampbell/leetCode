/*
 * @lc app=leetcode id=94 lang=typescript
 *
 * [94] Binary Tree Inorder Traversal
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

function inorderTraversal(root: TreeNode | null): number[] {
  let inOrderArr: number[] = [];
  inOrder(root, inOrderArr);
  return inOrderArr;
}

function inOrder(root: TreeNode, inOrderArr: number[]): void {
  if (root === null) return;
  inOrder(root.left, inOrderArr);
  inOrderArr.push(root.val);
  inOrder(root.right, inOrderArr);
}
// @lc code=end
