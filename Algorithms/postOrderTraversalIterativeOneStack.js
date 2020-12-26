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
    
    const stack = new Array();
    let prev = null;
    let curr = root;
    
    while (curr!= null || stack.length != 0) {
        if (curr != null) {            
            stack.push(curr);
            curr = curr.left;
        } else {
            curr = stack[stack.length - 1]; // stack.peek()
            
            if (curr.right === null || curr.right === prev) {
                visit(stack.pop());
                prev = curr;
                curr = null;
            } else {
                curr = curr.right;
            }
        }        
    }
        
    return order;
};
