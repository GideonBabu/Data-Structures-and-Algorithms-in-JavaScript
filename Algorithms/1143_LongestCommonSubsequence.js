/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 * time O(N * M) where N and M are length of the two strings
 * space O(N * M) to store the 2d array to build the result
 */
var longestCommonSubsequence = function(str1, str2) {
    
    let table = Array.from(new Array(str1.length + 1).fill(0), () => new Array(str2.length + 1).fill(0));
    
    table[0][0] = 0;
    
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) {
                table[i+1][j+1] = table[i][j] + 1; 
            } else {
                table[i+1][j+1] = Math.max(table[i+1][j], table[i][j+1]);    
            }
        }
    }
    
    return table[str1.length][str2.length];
};
