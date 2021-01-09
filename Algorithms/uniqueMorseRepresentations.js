/**
 * https://leetcode.com/problems/unique-morse-code-words/
 * @param {string[]} words
 * @return {number}
 * Time O(nm) where n is the no. of words given input array
 * m is the longest word in the given array
 * Space O(n) because in the worst case all the given words transformed to be unique
 */
var uniqueMorseRepresentations = function(words) {
    const map = new Map([
        ['a', ".-"],
        ['b', "-..."],
        ['c', "-.-."],
        ['d', "-.."],
        ['e', "."],
        ['f', "..-."],
        ['g', "--."],
        ['h', "...."],
        ['i', ".."],
        ['j', ".---"],
        ['k', "-.-"],
        ['l', ".-.."],
        ['m', "--"],
        ['n', "-."],
        ['o', "---"],
        ['p', ".--."],
        ['q', "--.-"],
        ['r', ".-."],
        ['s', "..."],
        ['t', "-"],
        ['u', "..-"],
        ['v', "...-"],
        ['w', ".--"],
        ['x', "-..-"],
        ['y', "-.--"],
        ['z', "--.."]
    ]);
    
    const transformed = new Set();
    for (const word of words) {
        let decode = '';
        for (let i = 0; i < word.length; i++) {
            decode += map.get(word.charAt(i));
        }
        if (!transformed.has(decode)) {
            transformed.add(decode);
        }        
    }
    return transformed.size;    
};

