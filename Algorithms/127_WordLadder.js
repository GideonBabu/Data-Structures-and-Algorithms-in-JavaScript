/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 * time: O(N * K ^ 2) where n is the wordList length and K is the longest word in the wordList
 * space: O(N) to store wordList in Map and visited map
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if (wordList.length === 0) return 0;
    if (!beginWord || !endWord) return 0;
    
    const wordset = new Set(wordList);
    const queue = new Array();
    queue.push([beginWord, 0]);
    const visited = new Set(beginWord);
    
    while (queue.length) {
        let [word, depth] = queue.shift();
        
        if (word === endWord) return depth + 1;
        
        for (const choice of wordList) {
            if (visited.has(choice)) continue;
            
            if (choice.length !== word.length) continue;
            
            let diff = 0;
            
            for (let i = 0; i < word.length; i++) {
                if (word[i] !== choice[i]) {
                    diff++;
                    if (diff === 2) break;
                }
                
            }
            
            if (diff === 1) {
                queue.push([choice, depth + 1]);
                visited.add(choice);
            }
        }
    }
    
    return 0;
};
