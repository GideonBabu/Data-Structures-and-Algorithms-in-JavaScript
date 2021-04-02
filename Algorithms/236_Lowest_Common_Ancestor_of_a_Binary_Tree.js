/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * time: O(n) for balanced tree where n is the no. of nodes in the tree
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!isExists(root, p) || !isExists(root, q)) {
        return null;   
    }
    
    return LCS_Helper(root, p, q);
    
};

var LCS_Helper = function (root, p, q) {
    
    if (root === null || root === p || root === q) return root;
    
    let pOnLeft = isExists(root.left, p);
    let qOnLeft = isExists(root.left, q);
    
    if (pOnLeft !== qOnLeft) return root;
    
    let childSide = pOnLeft ? root.left : root.right;
    
    return LCS_Helper(childSide, p, q);
};

var isExists = function(root, find) {
    if (root === null) return false;
    
    if (root === find) return true;
    
    return isExists(root.left, find) || isExists(root.right, find);
};
