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
 * Space O(n)
 * Iterative approach using stacks
 */
var preorderTraversal = function(root) {
    const stack = new Array();    
    const order = new Array();        
    
    const visit = function(node) {
        order.push(node.val);    
    };
    
    if (root === null) {
        return order;
    }
    
    stack.push(root);
    
    while (stack.length) {
        
        const curr = stack.pop();
        
        visit(curr);
        
        if (curr.right != null) {
            stack.push(curr.right);
        }
        
        if (curr.left != null) {
            stack.push(curr.left);    
        }
    }
    
    return order;
    
};
