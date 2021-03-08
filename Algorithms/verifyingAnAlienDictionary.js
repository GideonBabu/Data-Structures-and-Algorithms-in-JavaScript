/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 * Time Complexity: O(O) + O(WK) + O (O + WK) where O is the length of the order string
 * W is the no. of words in given words array
 * K is the longest word in words array
 * Space Complexity: O(1)
 */
var isAlienSorted = function(words, order) {
    
    // edge case
    // when there are one or no words in the words array
    if (words.length < 2) {
        return false;
    }
    
    const alphabets = new Map();
    let index = 0;
    
    for (const char of order) {        
        alphabets.set(char, index);
        index++;
    }
    
    for (let i = 0; i < words.length - 1; i++) {
        const current = words[i];
        const next = words[i+1];
        
        if (compare(current, next) !== 1) {
            continue;     
        }
        
        return false;
    }
    
    return true;
    
    /**
     * return 0: a is equal to b
     * return -1: a should be before b in the final result
     * return 1: a should be after b     
     *
    **/ 
    function compare(strA, strB) {
        const aLength = strA.length;
        const bLength = strB.length;
        const minLength = Math.min(aLength, bLength);
        
        for (let i = 0; i < minLength; i++) {
            
            const aOrder = alphabets.get(strA.charAt(i));
            const bOrder = alphabets.get(strB.charAt(i));
            if (aOrder === bOrder) {
                continue; 
            }
            
            if (aOrder < bOrder) {
                return -1;
            }
            
            // when a greater than b return 1
            return 1;
        }
        
        // when both a and b are equal return 0
        if (aLength === bLength) {
            return 0;   
        }
        
        return aLength > bLength ? 1 : 0;   
    }        
};
