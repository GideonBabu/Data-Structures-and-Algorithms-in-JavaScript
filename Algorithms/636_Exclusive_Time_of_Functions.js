/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 * time: O(n) we iterate over the entire logs array just once. Here, n refers to the number of elements in the logs list
 * space: O(n) for the stack. The stack can grow max of n/2.
 */
var exclusiveTime = function(n, logs) {
    let stack = new Array();
    let result = new Array(n).fill(0);
    let s = logs[0].split(':');
    stack.push(parseInt(s[0]));
    let i = 1, prevTime = parseInt(s[2]);
    
    while (i < logs.length) {
        s = logs[i].split(':');
        
        if (s[1] === 'start') {
            if (stack.length) {                
                result[stack[stack.length - 1]] += parseInt(s[2]) - prevTime;                
            }
            stack.push(parseInt(s[0]));
            prevTime = parseInt(s[2]);
        } else {    
            result[stack[stack.length - 1]] += parseInt(s[2]) - prevTime + 1;
            stack.pop();
            prevTime = parseInt(s[2]) + 1;
        }
        
        i++;
    }
    
    return result;
    
};
