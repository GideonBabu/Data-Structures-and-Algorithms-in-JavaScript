/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 * runs in O(n) time where n is the no. of characters in the string
 * O(1) constant time as we will only need 26 alphabets to store in map
 * @author Gideon Babu https://www.linkedin.com/in/gideon-babu/
 */
var lengthOfLongestSubstring = function(s) {
    const map = new Map();
    let left = 0;
    let right = 0;
    let long = 0;
    
    while (right < s.length) {
        const c = s.charAt(right);
        
        if (map.has(c)) {
            left = Math.max(left, map.get(c) + 1);
        }
        
        map.set(c, right);
        long = Math.max(long, right - left + 1);
        right++;        
    }
    
    return long;
};
