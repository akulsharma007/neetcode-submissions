/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        if (head === null || head.next === null || head.next.next === null) {
            return false;
        }
        let slow = head,
            fast = head.next.next;

        while (slow.next && fast.next && fast.next.next) {
            if (slow === fast) {
                return true;
            }
            slow = slow.next;
            fast = fast.next.next;
        }

        return false;
    }
}
