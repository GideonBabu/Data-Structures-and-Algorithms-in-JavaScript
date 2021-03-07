/**
 * @param {number} n
 * @return {string[]}
 * Time complexity is O(4 ^ n/Sqrt of n)
 * Space complexity is O(4 ^ n/Sqrt of n)
 */
var generateParenthesis = function(n) {
    let result = new Array();
    const list = new Array();
    
    const helper = (str, open, close, max) => {
        if (str.length === max * 2) {
            result.push(str);
            return;
        }
        
        if (open < max) {            
            helper(str + '(', open + 1, close, max);
        }
        
        if (close < open) {            
            helper(str + ')', open, close + 1, max);
        }                
    };
    
    helper('', 0 , 0, n);
    
    return result;
    
};
