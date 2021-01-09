i/**
 * https://leetcode.com/problems/determine-if-string-halves-are-alike/
 * @param {string} s
 * @return {boolean}
 * time O(n) where n is the no. of characters in the given string
 * space O(1)
 */
var halvesAreAlike = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E','I', 'O','U']);    
    let count = 0;
    let mid = s.length / 2;    
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        if (vowels.has(char)) {            
            count = (i < mid) ? count + 1 : count - 1;            
        }
    }    
    return count === 0;    
};
