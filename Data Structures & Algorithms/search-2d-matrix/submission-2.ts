class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const m = matrix.length; //2
        const n = matrix[0].length; //1

        if (target < matrix[0][0] || target > matrix[m - 1][n - 1]) {
            return false;
        }

        let l = 0,
            r = m - 1;
        let p = -1;

        while (l <= r) {
            const middle = l + Math.floor((r - l) / 2);
            const found = matrix[middle][0];
            if (found === target) {
                return true;
            }
            if (target > found && target <= matrix[middle][n - 1]) {
                p = middle;
                break;
            }
            if (found < target) {
                l = middle + 1;
            } else {
                r = middle - 1;
            }
        }
        if (p === -1) {
            return false;
        }
        l = 0;
        r = n - 1;
        while (l <= r) {
            const middle = l + Math.floor((r - l) / 2);
            const found = matrix[p][middle];
            if (found === target) {
                return true;
            }
            if (found < target) {
                l = middle + 1;
            } else {
                r = middle - 1;
            }
        }

        return false;
    }
}
