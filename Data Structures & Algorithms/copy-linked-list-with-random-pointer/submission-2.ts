// To do this in O(1) space complexity, we can use the Weaver Method. 
// We use the original linked list itself as our Hash Map by inserting the cloned nodes directly into the original list, right next to their original counterparts!
// 1.Weave the List:Iterate through the list and create clones. Insert each clone immediately after its original node. A -> B -> C becomes A -> A' -> B -> B' -> C -> C'
// 2.Copy the Random Pointers:Because every clone is right next to its original, if A.random points to C, then the clone's random pointer is simply C.next (which is C')! curr.next.random = curr.random.next
// 3.Unweave the Lists:Separate the woven list back into two distinct lists, restoring the original list and extracting the copied list.

// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head: Node | null): Node | null {
        if (!head) return null;

        // Step 1: Weave the copied nodes alongside the original nodes
        let curr: Node | null = head;
        while (curr !== null) {
            const newNode = new Node(curr.val, curr.next);
            curr.next = newNode;
            curr = newNode.next;
        }

        // Step 2: Assign random pointers for the copied nodes
        curr = head;
        while (curr !== null) {
            if (curr.random !== null) {
                // The clone's random is the original's random's clone (which is .next)
                curr.next!.random = curr.random.next;
            }
            curr = curr.next!.next;
        }

        // Step 3: Unweave the lists
        curr = head;
        const copyHead = curr.next;
        
        while (curr !== null) {
            const copyNode = curr.next!;
            
            // Restore original list pointer
            curr.next = copyNode.next;
            
            // Link the copied list forward
            if (copyNode.next !== null) {
                copyNode.next = copyNode.next.next;
            }
            
            curr = curr.next;
        }

        return copyHead;
    }
}
