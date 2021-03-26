var TrieNode = function (c = '') {
    this.character = c;
    this.children = new Map();
    this.terminates = false;
}

TrieNode.prototype.getChild = function(c) {
    return this.children.get(c);
};
    
TrieNode.prototype.setTerminates = function(t) {
    this.terminates = t;   
};
    
TrieNode.prototype.terminates = function() {
    return this.terminates;   
};
    
TrieNode.prototype.addWord = function(word) {
    if (word === null || word.length === 0) return;

    let firstChar = word.charAt(0);
    let child = this.getChild(firstChar);

    if (!child) {
        child = new TrieNode(firstChar);
        this.children.set(firstChar, child);
    }

    if (word.length > 1) {
        child.addWord(word.substring(1));   
    } else {
        child.setTerminates(true);   
    }
};


/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = new TrieNode();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    this.root.addWord(word);
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word, exact = true) {
    let lastNode = this.root;
    
    for (let i = 0; i < word.length; i++) {
        lastNode = lastNode.getChild(word.charAt(i));
        if (!lastNode) return false;
    }
    
    return (exact) ? lastNode.terminates : true;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return this.search(prefix, false);
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
