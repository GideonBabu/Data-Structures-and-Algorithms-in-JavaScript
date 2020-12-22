/**
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
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
 * Time O(n) where n is the no. of nodes in the tree
 * Space O(n) to store the order of travesal node values in an array
 * uses iterative approach using stack
 */
var inorderTraversal = function(root) {
           
    const stack = new Array();
    const order = new Array();
    let curr = root;
    
    while (stack.length || curr != null) {
        if (curr != null) {
            stack.push(curr);
            curr = curr.left;            
        } else {
            curr = stack.pop();
            order.push(curr.val);
            curr = curr.right;
        }        
    }
    
    return order;
};


