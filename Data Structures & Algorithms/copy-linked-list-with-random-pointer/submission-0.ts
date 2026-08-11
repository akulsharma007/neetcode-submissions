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
    copyRandomList(head: Node | null): Node {
        const oldToNew: Map<Node, Node> = new Map();
        let current = head;

        while (current) {
            const newNode = new Node(current.val);
            oldToNew.set(current, newNode);
            current = current.next;
        }

        current = head;
        // Dummy node
        const result = new Node(-1000);
        let resultCurrent = result;

        while (current) {
            const newNode = oldToNew.get(current);
            resultCurrent.next = newNode;
            const newRandom = oldToNew.get(current.random);
            newNode.random = newRandom;
            current = current.next;
            resultCurrent = resultCurrent.next;
        }

        return result.next;
    }
}
