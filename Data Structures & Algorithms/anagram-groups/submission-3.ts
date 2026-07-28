class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const occurance = new Map<string, string[]>()

        for(const str of strs) {
            const sortedStr = str.split("").sort().join();
            let found = [str]
            if(occurance.has(sortedStr)){
                found = occurance.get(sortedStr)
                found.push(str)
            }
            occurance.set(sortedStr, found)
        }

        return Array.from(occurance.values())
    }
}
