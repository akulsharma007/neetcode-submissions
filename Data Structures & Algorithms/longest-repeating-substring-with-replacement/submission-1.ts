class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let longest = 0;
        let i = 0;
        let maxOcc = 0;
        let occ = new Map<string, number>();

        for (let j = 0; j < s.length; j++) {
            const currOcc = occ.get(s[j]) || 0;
            occ.set(s[j], currOcc + 1);

            maxOcc = Math.max(maxOcc, currOcc + 1);

            while (j - i + 1 - maxOcc > k) {
                occ.set(s[i], occ.get(s[i]) - 1);
                i++;
            }

            longest = Math.max(longest, j - i + 1);
        }

        return longest;
    }
}
