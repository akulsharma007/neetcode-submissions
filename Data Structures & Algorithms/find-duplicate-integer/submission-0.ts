class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        let left = 1;
        let right = nums.length - 1;
        let duplicate = -1;

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            
            // Count how many numbers in the array are <= mid
            let count = 0;
            for (const num of nums) {
                if (num <= mid) {
                    count++;
                }
            }

            // Pigeonhole Principle
            if (count > mid) {
                // The duplicate is mid or smaller
                duplicate = mid;
                right = mid - 1;
            } else {
                // The duplicate is strictly greater than mid
                left = mid + 1;
            }
        }

        return duplicate;
    }
}