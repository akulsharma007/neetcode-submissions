class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const len = nums.length;

        const indices = new Map<number, number>();

        for (let i = 0; i < len; i++) {
            const toFind = target - nums[i]
            const foundValue = indices.get(toFind)
            if(foundValue!==undefined){
                return [foundValue, i]
            } else {
                indices.set(nums[i], i)
            }
        }
    }
}
