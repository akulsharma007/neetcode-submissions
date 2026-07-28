class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);
        const uniqueResult = new Set<string>();
        nums.sort((a, b) => a - b);
        for (let i = 0; i < nums.length - 2; i++) {
            const target = 0 - nums[i];
            const targetSums = this.targetSums(nums.slice(i + 1), target);
            if (targetSums.length !== 0) {
                targetSums.forEach((s) => uniqueResult.add(`${[nums[i], ...s].join(",")}`));
            }
        }

        return Array.from(uniqueResult).map((res) => res.split(",").map((num) => Number(num)));
    }

    targetSums(nums: number[], target: number): number[][] {
        const result = [];

        let i = 0,
            j = nums.length - 1;
        while (i < j) {
            const sum = nums[i] + nums[j];
            if (sum === target) {
                result.push([nums[i], nums[j]]);
                i++;
                j--;
            } else if (sum < target) {
                i++;
            } else {
                j--;
            }
        }

        return result;
    }
}
