/**
 * @param {number[][]} accounts
 * @return {number}
 * O(mn) time where m is the total no. of customers and n is the maximum accounts of a customer 
 * Constant space complexity.
 */
var maximumWealth = function(accounts) {
    let max = Number.MIN_SAFE_INTEGER;
    
    for (let account of accounts) {
        let wealth = 0;
        for (let amount of account) {
            wealth += amount;
        }
        
        max = (wealth > max) ? wealth : max;
    }
    
    return max;
};
