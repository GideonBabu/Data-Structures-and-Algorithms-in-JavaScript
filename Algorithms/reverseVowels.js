/**
 * https://leetcode.com/problems/reverse-vowels-of-a-string/
 * @param {string} s
 * @return {string}
 * Time - O(n) where n is the no. of characters in the given input string
 * Space - O(n) as we use additional stack to store the vowels we find
 * To even optimize the space, we could use two pointers technique where we can
 * have two pointers one from the start and other from end. Comparing and swapping characters
 * when both pointers found a vowel 
 */
var reverseVowels = function(s) {
    if (typeof s !== 'string') {
        throw new Error('reverseVowels argument must be of type string');
    }
    
    if (s === "") { // s.length === 0 | !s.length
        return s;
    }
    
    if (s.length === 1) {
        return s;
    }
    
    let stack = new Array();
    let reversed = "";
    
    // iterate throw each character in the string and push the vowels to the stack
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        if (isVowel(char)) {
            stack.push(char);
        }
    }
    
    // again iterate throw characters and when we see vowel, pop the value from stack and add it
    // to the string
    // as we use stack. Popping gives the last added vowel from the string and we could easily reverse
    // the vowels this way
    for (let j = 0; j < s.length; j++) {
        const char = s.charAt(j);
        if (isVowel(char)) {
            reversed += stack.pop();
        } else {
            reversed += char;           
        }
        
    }
    
    return reversed;
};

var isVowel = function(c) {
  
    switch (c) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
            return true;
        default:
            return false;
    }
};
