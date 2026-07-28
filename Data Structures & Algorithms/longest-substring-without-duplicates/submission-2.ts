class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let longest = 0;
        let charToIndex = new Map<string, number>();
        let i = 0,
            j = 0;
        let n = s.length;

        for (j = 0; j < n; j++) {
            const foundIndex = charToIndex.get(s[j]);
            if (foundIndex !== undefined && foundIndex >= i) {
                longest = Math.max(longest, j - i);
                i = foundIndex + 1;
            }
            charToIndex.set(s[j], j);
        }

        return Math.max(longest, j - i);
    }
}
