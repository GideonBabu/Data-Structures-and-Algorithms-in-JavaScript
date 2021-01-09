/**
 * https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
 * @param {number} n
 * @return {number}
 * time O(n) where n is the no. of digits in the given number
 * n is 3 for 234 as there are 3 digits
 * space O(1)
 */
var subtractProductAndSum = function(n) {    
    let product = 1;
    let sum = 0;
    while (n) {
        const remainder = n % 10;         
        n = Math.floor(n / 10);
        sum += remainder;
        product *= remainder;
    }       
    return product - sum;
};
