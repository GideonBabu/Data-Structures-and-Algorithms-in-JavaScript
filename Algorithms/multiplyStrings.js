/**
 * @see https://leetcode.com/problems/multiply-strings/submissions/
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return '0';
    }
    
    if (num1 === '1' || num2 === '1') {
        return num1 === '1' ? num2 : num1;
    }
    
    let result = new Array(num1.length  + num2.length).fill(0);
    
    for (let i = num1.length - 1; i >= 0; i--) {
        let carry = 0;
        for (let j = num2.length - 1; j >= 0; j--) {
            result[i + j + 1] += carry + num1[i] * num2[j];
            carry = Math.floor(result[i + j + 1] / 10);
            result[i + j + 1] = result[i + j + 1] % 10;
        }
        result[i] += carry;
    }
    
    if (result[0] === 0) {
        result.shift();
    }
    
    return result.join('');
};
