class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const parenthesis = new Map<string, string>([
            [")", "("],
            ["}", "{"],
            ["]", "["],
        ]);
        const check: string[] = [];

        for (const char of s) {
            const matchingOpenToFind = parenthesis.get(char);
            if (matchingOpenToFind) {
                const top = check.length > 0 ? check[check.length - 1] : "";
                if (top !== matchingOpenToFind) {
                    return false;
                }
                check.pop();
            } else {
                check.push(char);
            }
        }

        return check.length === 0;
    }
}
