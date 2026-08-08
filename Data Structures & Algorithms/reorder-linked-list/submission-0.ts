class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        if (head === null || head.next === null) {
            return;
        }

        let slow = head;
        let fast = head;

        while (fast.next !== null && fast.next.next !== null) {
            slow = slow.next!;
            fast = fast.next.next!;
        }

        let secondHalf = slow.next;
        slow.next = null;
        
        secondHalf = this.reverse(secondHalf);

        let firstHalf: ListNode | null = head;
        
        while (secondHalf !== null) {
            const tempFirst = firstHalf!.next;
            const tempSecond = secondHalf.next;
            
            firstHalf!.next = secondHalf;
            secondHalf.next = tempFirst;
            
            firstHalf = tempFirst;
            secondHalf = tempSecond;
        }
    }

    private reverse(node: ListNode | null): ListNode | null {
        let prev: ListNode | null = null;
        let curr = node;

        while (curr !== null) {
            const nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }

        return prev;
    }
}