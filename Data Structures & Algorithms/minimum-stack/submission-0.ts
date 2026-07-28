class MinStack {
    private stack: { element: number; min: number }[];
    constructor() {
        this.stack = new Array();
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        const length = this.stack.length;
        if (length === 0) {
            this.stack.push({ element: val, min: val });
        } else {
            this.stack.push({ element: val, min: Math.min(val, this.stack[length - 1].min) });
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        const length = this.stack.length;
        return this.stack[length - 1].element;
    }

    /**
     * @return {number}
     */
    getMin(): number {
        const length = this.stack.length;
        return this.stack[length - 1].min;
    }
}
