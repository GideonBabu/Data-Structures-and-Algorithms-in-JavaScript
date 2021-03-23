/**
 * @param {string} s
 * @return {string}
 * time: O(N) where n is the no. of characters in the string
 * Space: O(N) where n is the length of the input string
 */
var minRemoveToMakeValid = function(s) {
    
    const indexToBeRemoved = new Set();
    const stack = new Array();
    let result = new Array();
    
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        
        if (char === '(') {
            stack.push(i);   
        } else {
            if (char === ')') {
                if (!stack.length) {
                    indexToBeRemoved.add(i); 
                } else {
                    stack.pop();
                }
            }
        }
    }
    
    while (stack.length) indexToBeRemoved.add(stack.pop());
    
    for (let i = 0; i < s.length; i++) {
        if (!indexToBeRemoved.has(i)) {
            result.push(s.charAt(i));
        }
    }
    
    return result.join('');
    
};
