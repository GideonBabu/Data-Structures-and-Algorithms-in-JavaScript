/**
 * https://leetcode.com/problems/keyboard-row/
 * @param {string[]} words
 * @return {string[]}
 * Time - O(nl) where n is the no. of words in the input and l is the longest word
 * Space - O(n) to store the results
 * @author https://www.linkedin.com/in/gideon-babu/
 */
var findWords = function(words) {
    let results = new Array();
    
    // a hashtable to maps alphabets to a row in keyboard
    // a to row 2
    // q to row 1
    // z to row 3
    let map = alphabetMap();

    // iterate throw each words
    for (let word of words) {  
        // get the first character row and store in a variable
        const row = map.get(word.charAt(0).toLowerCase());    
        // initialize the flag can be typed in a row to true
        let inOneRow = true;

        // iterate over each char on a word starting from 1st index
        for (let i = 1; i < word.length; i++) {
            // get the char at index i
            const c = word.charAt(i).toLowerCase();
            
            // get the row from the hash table and compare it with first
            // char row
            // if it is not the same row, set the flag to false and break the loop
            // immediately
            if (map.get(c) !== row) {
                inOneRow = false;
                break;
            }
        }
        
        // after each word iteration is done, if flag is still set to tru
        // we know this word can be typed in one row keys, so what are you waiting for?
        // add it to the results array
        if (inOneRow) {
            results.push(word);
        }
    }

    return results;        
};

var alphabetMap = function() {
    const map = new Map([
        ['a', 2],
        ['b', 3],
        ['c', 3],
        ['d', 2],
        ['e', 1],
        ['f', 2],
        ['g', 2],
        ['h', 2],
        ['i', 1],
        ['j', 2],
        ['k', 2],
        ['l', 2],
        ['m', 3],
        ['n', 3],
        ['o', 1],
        ['p', 1],
        ['q', 1],
        ['r', 1],
        ['s', 2],
        ['t', 1],
        ['u', 1],
        ['v', 3],
        ['w', 1],
        ['x', 3],
        ['y', 1],
        ['z', 3],
    ]);        
    return map;
}

