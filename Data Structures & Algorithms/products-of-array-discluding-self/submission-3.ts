class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result = new Array().fill(1)

        let leftProductSoFar = 1
        for(let i = 0;i<nums.length;i++){
            result[i] = leftProductSoFar
            leftProductSoFar *= nums[i]
        }

        let rightProductSoFar = 1
        for(let i=nums.length-1;i>=0;i--){
            result[i] *= rightProductSoFar
            rightProductSoFar *= nums[i]
        }

        return result
    }
}

// class Solution {
//     /**
//      * @param {number[]} nums
//      * @return {number[]}
//      */
//     productExceptSelf(nums: number[]): number[] {
//         let totalProduct = 1;
//         let zeroCount = 0;

//         for (const num of nums) {
//             if (num === 0) {
//                 zeroCount++;
//                 if (zeroCount === 1) {
//                     continue;
//                 } else {
//                     totalProduct = 0;
//                     break;
//                 }
//             }
//             totalProduct *= num;
//         }

//         return nums.map((num) => {
//             if (zeroCount > 1) {
//                 return 0;
//             }
//             if (zeroCount > 0) {
//                 if (num !== 0) {
//                     return 0;
//                 } else {
//                     return totalProduct;
//                 }
//             }
//             return totalProduct / num;
//         });
//     }
// }
