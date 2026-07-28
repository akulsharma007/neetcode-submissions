class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        if (strs.length === 0) {
            return "";
        }
        const lengthOfStrings = strs.map((s) => s.length);
        return `${lengthOfStrings.join(",")}#${strs.join("")}`;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if (str.length === 0) {
            return [];
        }
        const separatorIndex = str.indexOf("#");
        const lengthsStr = str.slice(0, separatorIndex);
        const lengthOfStrs = lengthsStr.split(",").map((str) => Number(str));

        const result = [];
        let i = separatorIndex + 1;
        let j = 0;
        while (j < lengthOfStrs.length) {
            if (lengthOfStrs[j] === 0) {
                result.push("");
                j++;
                continue;
            }
            result.push(str.slice(i, i + lengthOfStrs[j]));
            i = i + lengthOfStrs[j];
            j++;
        }

        return result;
    }
}
