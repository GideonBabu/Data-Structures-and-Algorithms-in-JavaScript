/**
 * https://leetcode.com/problems/reverse-string/
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * Time - O(n)
 * Space - O(1)
 */
var reverseString = function(s) {
    if (!s) return null;
    
    if (s.length === 0 || s.length === 1) return s;
    
    const mid = Math.floor(s.length / 2) - 1;
    
    for (let i = 0; i <= mid; i++) {
        const swapIndex = s.length - 1 - i;
        [s[i], s[swapIndex]] = [s[swapIndex], s[i]];
    }
};
