/*
 * @lc app=leetcode id=112 lang=typescript
 *
 * [112] Path Sum
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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;
  let sum = 0;
  return findSum(root, sum, targetSum);
}

function findSum(root, sum, targetSum) {
  sum += root.val;

  if (!root.left && !root.right) {
    if (sum === targetSum) return true;
    return false;
  }
  if (root.left && findSum(root.left, sum, targetSum)) return true;
  if (root.right && findSum(root.right, sum, targetSum)) return true;
  return false;
}
// @lc code=end
