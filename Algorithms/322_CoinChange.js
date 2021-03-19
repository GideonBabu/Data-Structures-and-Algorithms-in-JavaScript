/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * time O(A * C) where A is the amount and C is denominations or number of different variation of coins given in the coins array
 * space O(A) to store the dp table
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(amount + 1);
    
    // base case
    dp[0] = 0;
    
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (i - coin < 0) continue;
            // induction rule
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }
    
    return dp[amount] === (amount + 1) ? -1 : dp[amount];
    
};
