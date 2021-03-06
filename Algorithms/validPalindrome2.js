/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let misMatch = 0;
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        if (s.charAt(left) !== s.charAt(right)) {
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
        }
        
        left++;
        right--;
    }
    return true;
};

var isPalindrome = function (s, start, end) {
    while (start < end) {
        if (s.charAt(start) !== s.charAt(end)) {
            return false;
        }
        start++;
        end--;
    }
    return true;
        
};
