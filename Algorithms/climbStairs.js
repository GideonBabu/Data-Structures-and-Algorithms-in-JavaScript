/**
 * https://leetcode.com/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 * Time - O(n) where n is the no. of the steps given as a input
 * Spacce - O(n)
 */
var climbStairs = function(n) {
    let memo = new Array(n + 1).fill(-1);
    return climbR(n, memo);
};

var climbR = function(n, memo) {
    if (n < 0) {
        return 0;
    }
    
    if (n === 0) {
        return 1;
    }
    
    if (memo[n] > -1) {
        return memo[n];
    }
    
    memo[n] = climbR(n - 1, memo) + climbR(n - 2, memo);    
    return memo[n];
    
};
