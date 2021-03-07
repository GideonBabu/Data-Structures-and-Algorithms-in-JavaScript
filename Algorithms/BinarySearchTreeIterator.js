/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.stack = new Array();
    this.pushLeftTreeToStack(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    const node = this.stack.pop();
    this.pushLeftTreeToStack(node.right);    
    return node.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    
    if (this.stack.length) {
        return true;
    }
    
    return false;    
};

BSTIterator.prototype.pushLeftTreeToStack = function(node) {
    if (node === null) {
        return;
    }
    
    this.stack.push(node);
    this.pushLeftTreeToStack(node.left);
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
