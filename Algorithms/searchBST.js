/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * https://leetcode.com/problems/search-in-a-binary-search-tree/
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 * Time - O(h) where h is the height of the tree / O(log n) where n is the no. of nodes in the tree
 * Space - O(1)
 */
var searchBST = function(root, val) {
    if (!root) {
        throw new Error('Tree must have at least one node');
        //return null;
    }
    
    let current = root;
    
    while (current) {
        if (current.val === val) {
            return current;
        } else if (current.val < val) {
            current = current.right;
        } else {
            current = current.left;
        }
    }
    
    return null;
};
