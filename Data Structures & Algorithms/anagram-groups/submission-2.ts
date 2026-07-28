class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const result: string[][] = [];
        for (let i = 0; i < strs.length; i++) {
            if (strs[i] === "_") {
                continue;
            }
            const intermediateResult: string[] = [];
            intermediateResult.push(strs[i]);
            for (let j = i + 1; j < strs.length; j++) {
                if (this.isAnagram(strs[i], strs[j])) {
                    intermediateResult.push(strs[j]);
                    strs[j] = "_";
                }
            }
            result.push(intermediateResult);
        }

        return result;
    }

    isAnagram(str1: string, str2: string): boolean {
        if (str1.length !== str2.length) {
            return false;
        }

        const occurance = new Map<string, number>();

        for (const char of str1) {
            occurance.set(char, (occurance.get(char) || 0) + 1);
        }

        for (const char of str2) {
            if (occurance.has(char)) {
                const count = occurance.get(char);
                if (count < 1) {
                    return false;
                }
                occurance.set(char, count - 1);
            } else {
                return false;
            }
        }

        return true;
    }
}
