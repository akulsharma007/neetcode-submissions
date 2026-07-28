class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const m = matrix.length;
        const n = matrix[0].length;

        let l = 0,
            r = m * n - 1;

        while (l <= r) {
            const middle = l + Math.floor((r - l) / 2);

            const found = matrix[Math.floor(middle / n)][middle % n];

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
