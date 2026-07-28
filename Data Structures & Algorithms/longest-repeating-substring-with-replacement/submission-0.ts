class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        // Array to store the frequency of the 26 uppercase letters
        const counts = new Array(26).fill(0);
        let left = 0;
        let longest = 0;
        let maxFreq = 0;

        for (let right = 0; right < s.length; right++) {
            // Add the right character to our window counts
            const rightCharIndex = s.charCodeAt(right) - 65; // 65 is ASCII for 'A'
            counts[rightCharIndex]++;

            // Keep track of the highest frequency of a single character in our window
            maxFreq = Math.max(maxFreq, counts[rightCharIndex]);

            // Equation: (Window Length) - (Most Frequent Character) = Characters to Replace
            // If we need more replacements than k, the window is invalid. Shrink it.
            while (right - left + 1 - maxFreq > k) {
                const leftCharIndex = s.charCodeAt(left) - 65;
                counts[leftCharIndex]--;
                left++;
            }

            // If we made it here, the window is valid. Update our longest record.
            longest = Math.max(longest, right - left + 1);
        }

        return longest;
    }
}
