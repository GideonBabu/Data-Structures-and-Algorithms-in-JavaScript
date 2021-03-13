/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 * Time Complexity: O(N * M) where N and M are length of the strings word1 and word2 respectively
 * Space Complexity: O(N * M) to store the results dynamically in an 2D array
 */
var minDistance = function(word1, word2) {
    let memo =  new Array(word1.length + 1).fill().map(() => new Array(word2.length + 1));
                                                   
    for (let i = 0; i <= word1.length; i++) {
        for (let j = 0; j <= word2.length; j++) {
            if (i === 0) {
                memo[i][j] = j;   
            } else if (j === 0) {
                memo[i][j] = i;   
            } else if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
                memo[i][j] = memo[i - 1][j - 1];   
            } else {
                memo[i][j] = 1 + Math.min(memo[i - 1][j], memo[i][j -1]);   
            }
        }
    }
    
    return memo[word1.length][word2.length];
};
