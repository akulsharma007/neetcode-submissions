class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numsSet = new Set<number>();
        let result = 0;
        for (const num of nums) {
            numsSet.add(num);
        }

        for (const num of numsSet) {
            if (!numsSet.has(num - 1)) {
                let i = 1;
                while (numsSet.has(num + i)) {
                    i++;
                }
                result = Math.max(result, i);
            }
        }

        return result;
    }
}
