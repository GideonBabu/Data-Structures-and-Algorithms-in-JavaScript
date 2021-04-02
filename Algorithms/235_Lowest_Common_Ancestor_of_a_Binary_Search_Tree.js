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
 * time: O(n) n = total number of nodes in tree
 * space: O(1)
 */
var lowestCommonAncestor = function(root, p, q) {
    let nodeVal = root.val;
    let pVal = p.val;
    let qVal = q.val;
    
    let node = root;
    
    while (node) {
        let nodeVal = node.val;
        if (nodeVal < pVal && nodeVal < qVal) {
            node = node.right;
        } else if (nodeVal > pVal && nodeVal > qVal) {
            node = node.left;   
        } else {
            return node;   
        }
    }
    
    return null;
};
