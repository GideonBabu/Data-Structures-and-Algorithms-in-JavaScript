/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 * time complexity: O(SP) where s is length of the string and p is the length of the pattern
 * space: O(SP) to store the results dynamically in 2d array
 */
var isMatch = function(s, p) {
    
    let memo = [...new Array(s.length + 1)].map(() =>
		new Array(p.length + 1).fill(false)
	);
    
    memo[0][0] = true;
    
    for (let i = 0; i < p.length; i++) {
        if (p.charAt(i) === '*' && memo[0][i-1]) {
            memo[0][i + 1] = true;    
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < p.length; j++) {
            if (s.charAt(i) === p.charAt(j) || p.charAt(j) === '.') {
                memo[i+1][j+1] = memo[i][j];   
            } 
            
            if (p.charAt(j) === '*') {
                
                if (s.charAt(i) != p.charAt(j-1) && p.charAt(j-1) != '.') {
                    memo[i+1][j+1] = memo[i+1][j-1];
                } else {
                    memo[i+1][j+1] = memo[i+1][j] || memo[i][j+1] || memo[i+1][j-1]; 
                }
            }
        }
    }
    
    return memo[s.length][p.length];
    
};
