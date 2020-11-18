/**
 * https://leetcode.com/problems/fibonacci-number/
 * @param {number} N
 * @return {number}
 * Time - O(n) where n is the given input no. to calculate fibonacci
 * Space - O(1) we use just 3 variables
 */
var fib = function(n) {
    if (n === 0 || n === 1) {
        return n;
    }    
    
    let a = 0;
    let b = 1;
    
    
    for (let i = 2; i < n; i++) {
        const c = a + b;
        a = b;
        b = c;
    }
    
    return a + b;
};
