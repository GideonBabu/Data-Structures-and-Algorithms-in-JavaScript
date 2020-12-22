/**
 * https://leetcode.com/problems/binary-tree-preorder-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * Time O(n) where n is the number of nodes in the tree
 * Space O(n) to store the order of visited node value in an array
 * This is recursive approach and technically use stack space for additional
 * calls
 */
var preorderTraversal = function(root) {
    const order = new Array();        
    
    const visit = function(node) {
        order.push(node.val);    
    };
    
    const preOrder = function(node, order) {
        if (node === null) {
            return;
        }
        visit(node);
        preOrder(node.left, order);
        preOrder(node.right, order);
    };
    
    preOrder(root, order);
    return order;
};
