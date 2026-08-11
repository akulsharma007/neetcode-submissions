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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        let current = new ListNode(-1);
        let result = current;
        let carry = 0;

        while (l1 || l2) {
            const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
            const unitsPlace = sum % 10;
            const tensPlace = Math.floor(sum / 10);
            carry = tensPlace;
            current.next = new ListNode(unitsPlace);
            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
            current = current.next;
        }

        if (carry > 0) {
            current.next = new ListNode(carry);
        }

        return result.next;
    }
}
