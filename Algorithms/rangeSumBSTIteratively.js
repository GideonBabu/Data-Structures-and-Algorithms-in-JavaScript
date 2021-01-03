/**
 * https://leetcode.com/problems/range-sum-of-bst/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 * Time: O(n) where n is the no. of nodes in the BST
 * Space: O(n)
 * Iterative approach - Breadth First search
 */ 
var rangeSumBST = function(root, low, high) {
    let rangeSum = 0;    
    const stack = new Array();    
    stack.push(root);    
    while (stack.length) {
        const node = stack.pop();        
        if (node) {
            if (low <= node.val && node.val <= high) {
                rangeSum += node.val;
            }
            
            if (low < node.val) {
                stack.push(node.left);
            }
            
            if (high > node.val) {
                stack.push(node.right);
            }
        }
    }    
    return rangeSum;        
};
