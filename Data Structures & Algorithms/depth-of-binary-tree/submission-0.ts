/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        if (root === null) {
            return 0;
        }
        let globalNodes = [root];
        let count = 0;

        while (globalNodes.length !== 0) {
            count++;
            const localNodes = [];
            for (const node of globalNodes) {
                const left = node.left;
                const right = node.right;
                if (left) {
                    localNodes.push(left);
                }
                if (right) {
                    localNodes.push(right);
                }
            }
            globalNodes = localNodes
        }

        return count
    }
}
