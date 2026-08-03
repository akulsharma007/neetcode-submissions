class TimeMap {
    private store: Map<string, { val: string; time: number }[]>;

    constructor() {
        this.store = new Map();
    }

    set(key: string, value: string, timestamp: number): void {
        if (!this.store.has(key)) {
            this.store.set(key, []);
        }
        this.store.get(key)!.push({ val: value, time: timestamp });
    }

    get(key: string, timestamp: number): string {
        const values = this.store.get(key);
        if (!values) return "";

        let left = 0;
        let right = values.length - 1;
        let result = "";

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);

            if (values[mid].time <= timestamp) {
                result = values[mid].val;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }
}
