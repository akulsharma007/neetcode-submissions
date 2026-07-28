class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let maxVol = 0;
        let i = 0,
            j = heights.length - 1;

        while (i < j) {
            const smallerHeight = Math.min(heights[i], heights[j]);
            maxVol = Math.max(maxVol, smallerHeight * (j - i));
            if (heights[i] < heights[j]) {
                i++;
            } else {
                j--;
            }
        }

        return maxVol;
    }
}
