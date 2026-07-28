class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let totalProduct = 1;
        let zeroCount = 0;

        for (const num of nums) {
            if (num === 0) {
                zeroCount++;
                if (zeroCount === 1) {
                    continue;
                } else {
                    totalProduct = 0;
                    break;
                }
            }
            totalProduct *= num;
        }

        return nums.map((num) => {
            if (zeroCount > 1) {
                return 0;
            }
            if (zeroCount > 0) {
                if (num !== 0) {
                    return 0;
                } else {
                    return totalProduct;
                }
            }
            return totalProduct / num;
        });
    }
}
