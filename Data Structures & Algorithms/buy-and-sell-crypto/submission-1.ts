class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let profit = 0;
        let buyPrice = prices[0];
        let sellPrice = -1;

        for (let i = 1; i < prices.length; i++) {
            if (prices[i] < buyPrice) {
                buyPrice = prices[i];
                sellPrice = -1;
            } else if (prices[i] > sellPrice) {
                sellPrice = prices[i];
            }
            profit = Math.max(profit, sellPrice - buyPrice);
        }

        return profit;
    }
}
