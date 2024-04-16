# Definition for a binary tree node.
from collections import deque
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def addOneRow(self, root: Optional[TreeNode], val: int, depth: int) -> Optional[TreeNode]:
        if depth == 1:
            return TreeNode(val, left=root, right=None)

        def bfs(target_depth):
            curr_depth = 1
            deq = deque([root])
            while deq and curr_depth != target_depth - 1:
                for _ in range(len(deq)):
                    curr_node = deq.popleft()
                    if curr_node.left:
                        deq.append(curr_node.left)
                    if curr_node.right:
                        deq.append(curr_node.right)
                curr_depth += 1
            return deq
        target_parents = bfs(depth)
        for t_node in target_parents:
            new_left_node = TreeNode(val)
            new_right_node = TreeNode(val)
            if t_node.left:
                new_left_node.left = t_node.left
            if t_node.right:
                new_right_node.right = t_node.right
            t_node.left = new_left_node
            t_node.right = new_right_node
        return root
