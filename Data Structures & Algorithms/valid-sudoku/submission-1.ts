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

                /*To convert any 2D coordinate (row, col) into a flat 1D array index, the universal formula in computer science is:
                Index = (row * width) + col

                Since our "mini grid" of boxes has a width of 3, the formula becomes:
                Index = (box_row * 3) + box_col

                Let's plug in the standard board coordinates (r, c) to get the box_row and box_col:

                box_row = Math.floor(r / 3)

                box_col = Math.floor(c / 3)*/
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
