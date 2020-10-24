/**
 * @see https://leetcode.com/problems/valid-palindrome/
 * @author Gideon Babu
 * @param {string} s
 * @return {boolean}
 * Time and Space - O(n)
 */
var isPalindrome = function(s) {
    if (s.length === 0 || s.length === 1) {
        return true;
    }
    
    s = s.toLowerCase();
    
    let alphaNumeric = [];
    
    // check each character and if it is alphanumeric push to the array
    for (let c = 0; c < s.length; c++) {
        const regex = /^[a-zA-Z0-9]{1}$/;
        if (regex.test(s.charAt(c))) {
            alphaNumeric.push(s.charAt(c));
        }
    }
    
    const mid = Math.floor(alphaNumeric.length / 2);
    
    for (let i = 0; i < mid; i++) {
        const j = alphaNumeric.length - i - 1;
        if (alphaNumeric[i] !== alphaNumeric[j]) {
            return false;
        }
    }
    
    return true;
};
