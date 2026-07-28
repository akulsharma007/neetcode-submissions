class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let i = 1;
        let j = Math.max(...piles);
        let rate = j;

        while (i <= j) {
            const mid = i + Math.floor((j - i) / 2);

            let hours = 0;
            for (let pile of piles) {
                hours += Math.ceil(pile / mid);
            }

            if (hours <= h) {
                rate = mid;
                j = mid - 1;
            } else {
                i = mid + 1;
            }
        }

        return rate;
    }
}
