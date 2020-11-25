/**
 * @see https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 * @desc Time O(n) where n is the no. of prices in the given prices list/array
 * Space - O(1)
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    if (!prices) {
        return maxProfit;
    }
    if (prices.length === 0 || prices.length === 1) {
        return maxProfit;
    }
    
    let buy;
    let sell;
    let profit;
    for (let price of prices) {
        if (typeof buy === 'undefined') {
            buy = price;
            continue;
        }
        if (typeof buy !== 'undefined' && price < buy) {
            buy = price;
            continue;
        }
        profit = price - buy;
        if (profit > maxProfit) {
            sell = price;
            maxProfit = profit;
        }        
    }
    
    return maxProfit;
};
