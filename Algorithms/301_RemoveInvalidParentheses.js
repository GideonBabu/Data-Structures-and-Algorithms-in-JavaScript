/**
Limited Backtracking approach
time: O(2 ^ N) where N is the length of the string
space: O(N) for the recursion call stack
We have to go to a maximum recursion depth of N before hitting the base case. Note that we are not considering the space required to store the valid expressions. We only count the intermediate space here.
*/
var removeInvalidParantheses = function(s) {
    let validExpressions = new Set();
    
    const recurse = (s, index, openCount, closeCount, openRem, closeRem, expression) => {
        if (index === s.length) {
            if (openRem === 0 && closeRem === 0) {
                validExpressions.add(expression.join(''));   
            }
        } else {
            
            let char = s.charAt(index);
            let length = expression.length;
            
            // when we encounter ( or ) and openRem /CloseRam is there go recurse
            
            if ((char === '(' && openRem > 0) || (char === ')' && closeRem > 0)) {
                recurse(
                    s,
                    index + 1,
                    openCount, 
                    closeCount, 
                    openRem - (char === '(' ? 1 : 0),
                    closeRem - (char === ')' ? 1 : 0),
                    expression);   
            }
            
            expression.push(char);
            
            // if the char is neither open or close recurse
            
            if (char !== '(' && char !== ')') {
                recurse(s, index + 1, openCount, closeCount, openRem, closeRem, expression);   
            } else if (char === '(') {
                // consider a open parenthesis   
                
                recurse(s, index + 1, openCount + 1, closeCount, openRem, closeRem, expression);
            } else if (closeCount < openCount) {
                // consider a close paranthesis
                recurse(s, index + 1, openCount, closeCount + 1, openRem, closeRem, expression);    
            }
            expression.splice(length, 1);
        }
           
    }
    
    let open = 0, close = 0;
    
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        if (char === '(') open = open + 1;
        else if (char === ')') {
            close = (open === 0) ? close + 1 : close;
            
            open = (open > 0) ? open - 1 : open;
        }
    }
    
    console.log('open ', open);
    console.log('close ', close);
    
    recurse(s, 0, 0, 0, open, close, new Array());
    
    return Array.from(validExpressions);
    
};

const s = "()())()";

console.log(removeInvalidParantheses(s));
