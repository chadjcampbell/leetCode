#
# @lc app=leetcode id=1700 lang=python3
#
# [1700] Number of Students Unable to Eat Lunch
#

# @lc code=start
from typing import List
from collections import deque


class Solution:
    def countStudents(self, students: List[int], sandwiches: List[int]) -> int:
        count = 0
        q = deque(students)
        while q:
            if count == len(q):
                return len(q)
            for student in q:
                count += 1
                if student == sandwiches[0]:
                    q.remove(student)
                    sandwiches = sandwiches[1:]
                    count = 0
                    break
        return 0
# @lc code=end
