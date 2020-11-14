/**
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Time O(a + b) where a and b are length of the string s and t respectively
 * Space O(a) / O(b) because a and b going to be of same length when we use it
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    const map = new Map();
    
    // iterate through first string and store each character frequency in a map
    for (const char of s) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1);
        }
    }
    
    // iterate through second string and reduce the char count from map
    for (const char of t) {
        if (!map.get(char)) {
            return false;
        } else {
            map.set(char, map.get(char) - 1);
            if (map.get(char) === 0) {
                map.delete(char);
            }
        }
    }
    
    // if map still has size then it is not a anagram
    if (map.size) {
        return false;
    }
    
    return true;
};
