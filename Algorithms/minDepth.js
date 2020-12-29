/**
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * Time O(n) where n is the no. of nodes in the tree
 * Space O(h) where h is the height of the tree
 */
var minDepth = function(root) {
    if (root === null) {
        return 0;
    }
    
    if (root.left === null && root.right === null) {
        return 1;
    }
    
    if (root.left === null) {
        return minDepth(root.right) + 1;
    }
    
    if (root.right === null) {
        return minDepth(root.left) + 1;        
    }
    
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;    
        
};
