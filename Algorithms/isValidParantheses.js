/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
        
    if (s.length === 1) {
        return false;
    }
    
    const stack = [];
    
    for (let char of s) {        
        if (isOpen(char)) {
            stack.push(char);
        } else {
            if (isClose(char)) {
                if (isPair(char, stack)) {
                    stack.pop();
                } else {
                    return false;
                }     
            }
        }
    }

    return !stack.length;
};

var isOpen = function(char) {

    switch (char) {
        case '(':
        case '{':
        case '[':
            return true;
        
        default:
            return false;
    }
}

var isClose = function(char) {    

    switch (char) {
        case ')':
        case '}':
        case ']':
            return true;
        
        default:
            return false;
    }
}

var isPair = function(close, stack) {
    const top = stack[stack.length - 1];
    switch (close) {
        case '}':
            return top === '{';
        case ')':
            return top === '(';
        case ']':
            return top === '[';
        
        default:
            return false;
    }
}
