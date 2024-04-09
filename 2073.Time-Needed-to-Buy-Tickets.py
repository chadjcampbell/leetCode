from typing import List


class Solution:
    def timeRequiredToBuy(self, tickets: List[int], k: int) -> int:
        result = 0
        while tickets[k] > 0:
            for idx, person in enumerate(tickets):
                if person > 0:
                    tickets[idx] -= 1
                    result += 1
                if tickets[k] == 0:
                    break
        return result
