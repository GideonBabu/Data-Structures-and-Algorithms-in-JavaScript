/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 * Time Complexity: O(NlogN), where N is the length of words. We count the frequency of each word in O(N) time, then we sort the given words in O(NlogN) time.
 * Space Complexity: O(N), the space used to store the freq of the words in a map and array.
 */
var topKFrequent = function(words, k) {
    let wordsMap = new Map();

    for (const word of words) {
        wordsMap.set(word, (wordsMap.get(word) || 0) + 1);
    }

    let wordsArr = new Array();

    for (const [word, freq] of wordsMap) {
        wordsArr.push([word, freq]);
       
    }

    wordsArr.sort((wordA, wordB) => {
        if (wordA[1] === wordB[1]) {                  
            if (wordA[0] < wordB[0]) return -1;
            else if (wordA[0] > wordB[0]) return 1;
            else return 0;
        }

        return wordB[1] - wordA[1];
    });
    
    return wordsArr.slice(0, k).map(word => word[0]);    
};

