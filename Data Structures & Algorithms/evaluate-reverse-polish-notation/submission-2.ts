type MathOperation = (num1: number, num2: number) => number;

class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const operators: Record<string, MathOperation> = {
            "+": (num1, num2) => num1 + num2,
            "-": (num1, num2) => num1 - num2,
            "*": (num1, num2) => num1 * num2,
            "/": (num1, num2) => Math.trunc(num1 / num2),
        };

        const stack: number[] = [];

        for (const token of tokens) {
            if (isNaN(Number(token))) {
                const num2 = stack.pop();
                const num1 = stack.pop();
                stack.push(operators[token](Number(num1), Number(num2)));
            } else {
                stack.push(Number(token));
            }
        }

        return stack.pop();
    }
}
