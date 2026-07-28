class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const occurance = new Map<number,number>()

        for(const num of nums){
            let valueToSet = 1
            if(occurance.has(num)){
                const count = occurance.get(num)
                valueToSet = count + 1
            }
            occurance.set(num, valueToSet)
        }

        const sortedOccurance = new Map(
            [...occurance.entries()].sort((a, b) => b[1] - a[1])
            );

        return Array.from(sortedOccurance.keys()).slice(0, k)
    }
}
