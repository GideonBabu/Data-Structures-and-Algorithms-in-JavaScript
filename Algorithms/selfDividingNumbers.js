/**
 * https://leetcode.com/problems/self-dividing-numbers/
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 * run time of O(nm) where n is the numbers between left and right (both inclusive)
 * or answer of right - left + 1 (coz of inclusive)
 * space complexity O(n)
 */
var selfDividingNumbers = function(left, right) {
    
    const selfDividers = [];
    
    for (let num = left; num <= right; num++) {
        let selfDividable = false;
        let n = num;
        while (n) {
            let remainder = n % 10;
            n = Math.floor(n / 10);
            
            if (remainder === 0) {
                selfDividable = false;
                break;
            }
            
            if (num % remainder === 0) {
                selfDividable = true;            
            } else {
                selfDividable = false;
                break;
            }
        }
        
        if (selfDividable) {
            selfDividers.push(num);
        }
    }
    
    return selfDividers;
};
