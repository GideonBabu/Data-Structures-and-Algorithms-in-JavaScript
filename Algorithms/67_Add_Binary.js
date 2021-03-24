/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * time O(Max(N, M)) where N and M are length of the input strings a and b
 * space O(Max(N, M)) to store the result in the array
 */
var addBinary = function(a, b) {
    
    let n = a.length, m = b.length;
    
    if (n < m) return addBinary(b, a);
    
    let L = Math.max(n, m);
    
    let carry = 0, j = m - 1;
    let str = new Array();
    
    for (let i = L - 1; i >= 0; i--) {
        if (a.charAt(i) === '1') ++carry;
        
        if (j >= 0 && b.charAt(j--) === '1') ++carry;
        
        if (carry % 2 === 1) str.push('1');
        else str.push('0');
        carry = Math.floor(carry / 2)
    }
    
    if (carry === 1) str.push('1');
    
    return str.reverse().join('');
    
};
