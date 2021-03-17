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
 * @param {number} targetSum
 * @return {boolean}
 * time complexity: O(n) where n is the no. of nodes in the tree
 * space: O(n) in the worst case when tree in completely unbalanced and O(log n) when balances. Log N is the height/depth of the tree
 */
var hasPathSum = function(root, targetSum) {
    
    if (root === null) {
        return false;
    }
    
    targetSum = targetSum - root.val;
    
    if (root.left === null && root.right === null) {
        return targetSum === 0;
    }
    
    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
    
};
