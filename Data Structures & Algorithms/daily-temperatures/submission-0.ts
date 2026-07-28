class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const n = temperatures.length;
        const result = new Array<number>(n).fill(0);
        const stack = new Array<number>();

        for (let i = 0; i < n; i++) {
            const temp = temperatures[i];

            while (stack.length !== 0 && temp > temperatures[stack[stack.length - 1]]) {
                const top = stack.pop();
                result[top] = i - top;
            }

            stack.push(i);
        }

        return result;
    }
}
