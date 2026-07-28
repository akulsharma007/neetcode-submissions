class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const occurance = new Map<number, number>();

        for (const num of nums) {
            occurance.set(num, (occurance.get(num) || 0) + 1);
        }

        const frequencies: number[][] = Array.from({ length: nums.length + 1 }, () => []);

        for (const [key, value] of occurance) {
            frequencies[value].push(key);
        }

        const result: number[] = [];
        for (let i = frequencies.length - 1; i >= 0; i--) {
            if (frequencies[i].length != 0) {
                result.push(...frequencies[i]);
                if (result.length >= k) {
                    return result.slice(0, k);
                }
            }
        }

        return result;
    }
}
