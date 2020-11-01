/**
 * https://leetcode.com/problems/permutation-in-string/ 
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * todo: needs improvement to be accepted solution as this solution has Time limit exceede
 */
var checkInclusion = function(s1, s2) {
    const result = [];
    permute("", s1, result);
    for (let i = 0; i < result.length; i++) {
        if (s2.includes(result[i])) {
            return true;
        }
    }
    
    return false;
};

var permute = function(prefix, remainder, result) {
    if (remainder.length === 0) {
        result.push(prefix);
    }
    
    for (let i = 0; i < remainder.length; i++) {
        const before = remainder.slice(0, i);
        const after = remainder.slice(i + 1);
        const c = remainder.charAt(i);
        permute(prefix + c, before + after, result);
    }
};
