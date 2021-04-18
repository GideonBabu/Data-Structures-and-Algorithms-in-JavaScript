/**
 * @param {string} S
 * @return {string[]}
 * time O(2 ^ N * N) N = S.length
 * space O(2 ^ N * N) 
 */
var letterCasePermutation = function(S) {

    let result = [];
    lcp(0, '');

    function lcp(index, prefix) {        
        if (index === S.length || prefix.length === S.length) {
            result.push(prefix);
            return;
        }
        
        let c = S.charAt(index);
        
        if (isLetter(c)) {
            lcp(index + 1, prefix + c.toLowerCase());
            lcp(index + 1, prefix + c.toUpperCase());
        } else {
            lcp(index + 1, prefix + c);
        }        
    }

    function isLetter(char) {
        return char.length === 1 && char.match(/[a-z]/i);
    }

    return result;
};
