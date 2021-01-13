/**
 * https://leetcode.com/problems/split-a-string-in-balanced-strings/
 * @param {string} s
 * @return {number}
 * time O(n)
 * space O(1)
 */
var balancedStringSplit = function(s) {
    let left = 0;
    let right = 0;
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        left = (char === 'L') ? left + 1 : left;
        right = (char === 'R') ? right + 1 : right;
        
        if (left === right) {
            count++;
        }
    }
    
    return count;
};
