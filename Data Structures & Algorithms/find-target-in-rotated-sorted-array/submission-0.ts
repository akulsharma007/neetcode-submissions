class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);

            // Did we find it?
            if (nums[mid] === target) {
                return mid;
            }

            // Is the LEFT half perfectly sorted?
            if (nums[left] <= nums[mid]) {
                // Does our target fall strictly within this sorted left half?
                if (target >= nums[left] && target < nums[mid]) {
                    // It's in the left half, so discard the right
                    right = mid - 1;
                } else {
                    // It's not here, so it MUST be in the right half
                    left = mid + 1;
                }
            } 
            // Otherwise, the RIGHT half must be perfectly sorted
            else {
                // Does our target fall strictly within this sorted right half?
                if (target > nums[mid] && target <= nums[right]) {
                    // It's in the right half, so discard the left
                    left = mid + 1;
                } else {
                    // It's not here, so it MUST be in the left half
                    right = mid - 1;
                }
            }
        }

        // We searched everywhere and didn't find it
        return -1;
    }
}