class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const trimmedStr = this.trimNonAlphanumeric(s).toLowerCase();

        let i = 0,
            j = trimmedStr.length - 1;
        while (i < j) {
            if (trimmedStr[i] !== trimmedStr[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }

    trimNonAlphanumeric(s: string): string {
        const regex = /[^a-zA-Z0-9]/g;
        return s.replace(regex, "");
    }
}
