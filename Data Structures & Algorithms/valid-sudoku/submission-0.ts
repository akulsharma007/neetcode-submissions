class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        // Initialize an array of 9 empty Sets for rows, cols, and boxes
        const rows = Array.from({ length: 9 }, () => new Set<string>());
        const cols = Array.from({ length: 9 }, () => new Set<string>());
        const boxes = Array.from({ length: 9 }, () => new Set<string>());

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const val = board[r][c];

                // Skip empty cells
                if (val === ".") {
                    continue;
                }

                // Calculate which 3x3 box we are currently in
                const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                // If the value is already in the corresponding row, col, or box, it's invalid
                if (rows[r].has(val) || cols[c].has(val) || boxes[boxIndex].has(val)) {
                    return false;
                }

                // Otherwise, add the value to our trackers
                rows[r].add(val);
                cols[c].add(val);
                boxes[boxIndex].add(val);
            }
        }

        return true;
    }
}
