class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) {
            return false;
        }

        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);

        for (let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - 97]++;
            s2Count[s2.charCodeAt(i) - 97]++;
        }

        for (let i = s1.length; i < s2.length; i++) {
            if (this.arraysMatch(s1Count, s2Count)) {
                return true;
            }

            const rightChar = s2.charCodeAt(i) - 97;
            s2Count[rightChar]++;

            const leftChar = s2.charCodeAt(i - s1.length) - 97;
            s2Count[leftChar]--;
        }

        return this.arraysMatch(s1Count, s2Count);
    }

    private arraysMatch(arr1: number[], arr2: number[]): boolean {
        for (let i = 0; i < 26; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }
}
