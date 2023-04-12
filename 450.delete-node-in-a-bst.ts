/*
 * @lc app=leetcode id=450 lang=typescript
 *
 * [450] Delete Node in a BST
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
function findMin(root: TreeNode | null) {
  while (root.left !== null) {
    root = root.left;
  }
  return root;
}

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return null;
  if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else {
    if (!root.left) {
      return root.right;
    } else if (!root.right) {
      return root.left;
    } else {
      let min = findMin(root.right);
      root.val = min.val;
      root.right = deleteNode(root.right, min.val);
    }
  }
  return root;
}

// @lc code=end
