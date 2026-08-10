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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
        const dummy = new ListNode(0, head);
        let slow = dummy;
        let fast = dummy;

        // 1. Move the fast pointer n + 1 steps ahead
        // We do n + 1 so that 'slow' stops right BEFORE the target node
        for (let i = 0; i <= n; i++) {
            fast = fast.next!;
        }

        // 2. Slide the "ruler" down the list 1 step at a time
        while (fast !== null) {
            slow = slow.next!;
            fast = fast.next!;
        }

        // 3. Sever the target node from the list
        slow.next = slow.next!.next;

        // Return the true head of the list
        return dummy.next;
    }
}