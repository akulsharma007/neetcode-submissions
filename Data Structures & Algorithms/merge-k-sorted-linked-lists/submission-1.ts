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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists: ListNode[]): ListNode {
        if (lists.length === 0) {
            return null;
        }

        while (lists.length > 1) {
            const mergedLists: ListNode[] = [];

            for (let i = 0; i < lists.length; i += 2) {
                mergedLists.push(
                    this.mergeList(lists[i], i + 1 < lists.length ? lists[i + 1] : null),
                );
            }
            lists = mergedLists;
        }

        return lists[0];
    }

    mergeList(list1: ListNode, list2: ListNode): ListNode {
        const result = new ListNode(-1);
        let current = result;

        while (list1 !== null && list2 !== null) {
            if (list1.val <= list2.val) {
                current.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next;
        }

        if (list1 !== null) {
            current.next = list1;
        } else {
            current.next = list2;
        }

        return result.next;
    }
}
