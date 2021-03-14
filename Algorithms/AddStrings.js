/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * Time Complexity: O(N) where N is the longest string out of num1 and num2
 * Space complexity: O(1) as we use constant amount of variables to store the results and pointers
 */
var addStrings = function(num1, num2) {
    let total = new Array();
    let pointerNum1 = num1.length - 1;
    let pointerNum2 = num2.length - 1;
    let carry = 0;
    
    while (pointerNum1 >= 0 || pointerNum2 >= 0) {        
        const val1 = pointerNum1 < 0 ? 0 : parseInt(num1.charAt(pointerNum1));
        const val2 = pointerNum2 < 0 ? 0 : parseInt(num2.charAt(pointerNum2));        
        
        const sum = (carry + val1 + val2) % 10
        carry = Math.floor((carry + val1 + val2) / 10);                
        
        total.push(sum);
        
        pointerNum1--;
        pointerNum2--;
    }
    
    if (carry > 0) {
        total.push(carry);
    }
    
    return total.reverse().join('');
    
};
