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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        if (list1 === null) {
            return list2;
        }
        if (list2 === null) {
            return list1;
        }
        let l1, l2;
        if (list1.val <= list2.val) {
            l1 = list1;
            l2 = list2;
        } else {
            l1 = list2;
            l2 = list1;
        }
        const result = l1;

        while (l1 !== null && l2 !== null) {
            if (l1.next !== null && l1.next.val <= l2.val) {
                l1 = l1.next;
                continue;
            }
            const nextTemp2 = l2.next;
            // if (l1.val <= l2.val) {
            //     l2.next = l1.next;
            //     l1.next = l2;
            //     l1 = l2;
            // } else {
            //     l1.next = l2;
            //     l2.next = l1;
            //     l1 = l2;
            // }
            l2.next = l1.next;
            l1.next = l2;
            l1 = l2;
            l2 = nextTemp2;
        }

        if (l2 !== null) {
            l1.next = l2;
        }

        return result;
    }
}
