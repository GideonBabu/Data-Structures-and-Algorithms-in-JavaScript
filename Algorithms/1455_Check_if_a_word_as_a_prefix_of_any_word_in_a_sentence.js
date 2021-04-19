/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 * O(n * w) where n : number of words and w : searchWord.length
 * O(M) where M is the maximum length of the word in the sentence to store in the array
 */
var isPrefixOfWord = function(sentence, searchWord) {
    
    // iterate through every character in the sentence
    // as soon as we find a space, check if we found a word which is a prefix/word which is a search word

    let wordArr = [];
    let wordCount = 0;

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence.charAt(i);
        if (char === ' ' || i === sentence.length - 1) {
            // last index
            if (i === sentence.length - 1) {
                wordArr.push(char);
            }
            wordCount++;
            if (isItPrefix(wordArr, searchWord)) {
                return wordCount;
            }
            wordArr = [];
        } else {
            wordArr.push(char);
        }
    }

    return -1;
    
    function isItPrefix(word, search) {
        console.log(word)
        for (let i = 0; i < search.length; i++) {
            if (search.charAt(i) !== word[i]) {
                return false;
            }
        }
        return true;
    }
};

const sentence = "love errichto jonathan dumb"
, searchWord = "dumb";

console.log(isPrefixOfWord(sentence, searchWord))
console.log(isPrefixOfWord('this problem is an easy problem', 'pro'));
console.log(isPrefixOfWord('i use triple pillow', 'pill'));
console.log(isPrefixOfWord('i am tired', 'you'));
