/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * https://leetcode.com/problems/merge-two-binary-trees/
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 * time - O(a + b) where a is the no. of the nodes in tree 1 and b is the no. of space in tree 2
 * space - O(a + b + h) we create a new nodes for new merged tree - h is the height/depth of the big tree 1 or 2
 * @desc we use pre order tree traversal technique to traverse recursively
 */
var mergeTrees = function(t1, t2) {
    if (t1 === null && t2 === null) {
        return null;
    }
    
    if (t1 === null) {
        return t2;
    }
    
    if (t2 === null) {
        return t1;
    }
    
    const node = new TreeNode(t1.val + t2.val);
    node.left = mergeTrees(t1.left, t2.left);
    node.right = mergeTrees(t1.right, t2.right);
    
    return node;
};
