i/**
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
 * uses recursive technique
 */
var inorderTraversal = function(root) {
    
    const order = new Array();
    
    const visit = (root) => {        
        order.push(root.val);
    };
    
    const inOrderTrav = (root, order) => {
        if (root === null) {
            return;
        }    

        inOrderTrav(root.left);        
        visit(root);
        inOrderTrav(root.right);
    };
    
    
    inOrderTrav(root, order);
    
    return order;
    
};


