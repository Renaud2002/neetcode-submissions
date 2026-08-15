class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l= 0;
        let profit = 0;
        for (let r=1; r<prices.length; r++) {
            if (prices[l] > prices[r]){
                l=r;
            } else if (prices[r] - prices[l] > profit) {
                profit = prices[r] - prices[l];
            }
        }

        return profit;
    }
}
