class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }

        const occurance = new Map<string, number>();

        // for (const char of s) {
        //     if (occurance.has(char)) {
        //         occurance.set(char, occurance.get(char) + 1);
        //     } else {
        //         occurance.set(char, 1);
        //     }
        // }

        for (const char of s) {
            occurance.set(char, (occurance.get(char) || 0) + 1);
        }

        for (const char of t) {
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

// class Solution {
//     isAnagram(s: string, t: string): boolean {
//         if (s.length !== t.length) {
//             return false;
//         }

//         const charCount = new Map<string, number>();

//         for (const char of s) {
//             charCount.set(char, (charCount.get(char) || 0) + 1);
//         }

//         for (const char of t) {
//             const count = charCount.get(char) || 0;
            
//             if (count === 0) {
//                 return false;
//             }
//             charCount.set(char, count - 1);
//         }

//         return true;
//     }
// }

