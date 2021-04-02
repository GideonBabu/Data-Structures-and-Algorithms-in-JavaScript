/**
 * @param {string} s
 * @return {boolean}
 * time O(n) n = s.length
 * space O(1)
 */
var isNumber = function(s) {
    if (!s) return false;
    
    s = s.trim();
    let n = s.length;
    
    if (n === 0) return false;
    
    // flags
    let signCount = 0;
    let hasNum = false;
    let hasE = false;
    let hasDot = false;
    
    for (let i = 0; i < n; i++) {
        let c = s.charAt(i);
        
        if (!isValid(c)) return false;
        
        if (isNum(c)) hasNum = true;
        
        // exponent check
        
        if (isExp(c)) {
            // can appear only once and cannot be appear before num
            if (hasE || !hasNum) return false;
            
            // cannot be the last one
            if (i === n - 1) return false;
            
            hasE = true;
        }
        
        // decimal check
        
        if (isDot(c)) {
            // can appear only once and exponent should not been seen since
            if (hasDot || hasE) return false;
            
            // cannot be last one if yes, previous one should be num eg, 2.
            if (i === n - 1 && !isNum(s.charAt(i - 1))) return false;
            
            hasDot = true;
        }
        
        // sign check
        
        if (isSign(c)) {
            // max two signs only can appear
            if (signCount === 2) return false;
            
            if (i === n - 1) return false;
            
            // when appearing in the middle previous element should be exponent
            if (i > 0 && !isExp(s.charAt(i - 1))) return false;
            
            signCount++;
        }
    }
    
    return true;
};

var isValid = function(c) {
    switch (c) {
        case '+':
        case '-':
        case 'e':
        case 'E':
        case '.':
            return true;
        default:
            return c >= '0' && c <= '9';
    }
}

var isNum = function(c) {
    return c >= '0' && c <= '9';
};

var isExp = function(c) {
    return c === 'e' || c === 'E'; 
}

var isDot = function(c) {
    return c === '.';  
};

var isSign = function(c) {
    return c === '+' || c === '-';  
};

const s = "-123.456e789";
console.log(isNumber(s));
