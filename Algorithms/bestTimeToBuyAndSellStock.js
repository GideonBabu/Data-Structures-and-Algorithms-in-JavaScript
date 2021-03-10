/**
 * @param {number[]} prices
 * @return {number}
 * Time Complexity: O(n) where n is the no. of the prices in the given prices array input
 * Space complexity: O(1) as I only need few variables to store buy, sell and profit prices
 */
var maxProfit = function(prices) {
    
    // input validation/edge case
    
    if (!Array.isArray(prices)) {
        return 0;
    }
    
    if (prices.length === 0 || prices.length === 1) {
        return 0;    
    }
    
    let buy = Number.MAX_SAFE_INTEGER;
    let sell = Number.MIN_SAFE_INTEGER;
    let profit = 0;
    
    for (const price of prices) {
        if (!alreadyBought()) {
            buy = price;   
        }
        
        // already bought        
        if (price < buy) {
            buy = price;    
        }
        
        if (!alreadySold()) {
            sell = price;    
        }
        
        if (price - buy > profit) {
            profit = price - buy;    
        }
    }    
    
    return profit;
    
    function alreadyBought() {
        return buy !== Number.MAX_SAFE_INTEGER;
    }    
    
    function alreadySold() { 
        return sell != Number.MIN_SAFE_INTEGER;
    }
};
