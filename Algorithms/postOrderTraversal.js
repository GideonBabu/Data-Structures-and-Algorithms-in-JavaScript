/**
 * https://leetcode.com/problems/binary-tree-postorder-traversal/
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
 * Time - O(n) where n is the no. of nodes in the tree
 * Space - O(h) where h is the height of the tree
 */
var postorderTraversal = function(root) {
    const order = new Array();
        
    if (root === null) {
        return order;
    }
    
    const visit = node => {
        order.push(node.val);    
    };
    
    const postOrder = node => {
        if (node === null) {
            return;
        }
        postOrder(node.left);
        postOrder(node.right);
        visit(node);
    };
    
    postOrder(root);
    return order;
};
