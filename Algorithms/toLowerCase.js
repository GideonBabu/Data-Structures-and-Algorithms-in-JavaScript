/**
 * https://leetcode.com/problems/to-lower-case/
 * @param {string} str
 * @return {string}
 * Time O(n) where n is the no. of characters in the string
 * Space O(n) to store the result of lower case into an array 
 */
var toLowerCase = function(str) {
    let lowerArr = [];    
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        const lower = getLowerCase(char);
        if (!lower) {
            lowerArr.push(char);
        } else {
            lowerArr.push(lower);
        }
    }
    return lowerArr.join('');
};

var getLowerCase = function(char) {
    const map = new Map([
        ['A', 'a'],
        ['B', 'b'],
        ['C', 'c'],
        ['D', 'd'],
        ['E', 'e'],
        ['F', 'f'],
        ['G', 'g'],
        ['H', 'h'],
        ['I', 'i'],
        ['J', 'j'],
        ['K', 'k'],
        ['L', 'l'],
        ['M', 'm'],
        ['N', 'n'],
        ['O', 'o'],
        ['P', 'p'],
        ['Q', 'q'],
        ['R', 'r'],
        ['S', 's'],
        ['T', 't'],
        ['U', 'u'],
        ['V', 'v'],
        ['W', 'w'],
        ['X', 'x'],
        ['Y', 'y'],
        ['Z', 'z']
    ]);
    
    return map.get(char);
}
