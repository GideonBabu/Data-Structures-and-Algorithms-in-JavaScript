/**
 * https://leetcode.com/problems/hamming-distance/
 * @param {number} x
 * @param {number} y
 * @return {number}
 * time O(n) where n is the no. of bits in the binary number after doing XOR of x and y
 * space O(1)
 */
var hammingDistance = function(x, y) {    
    let xOr = x ^ y;
    let distance = 0;

    while (xOr) {
        if (xOr & 1) {
            distance += 1;
        }
        xOr = xOr >> 1;
    }
    return distance;
};
