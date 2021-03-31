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
 * @param {number} target
 * @return {number}
 * time: O(H) where H is the height of the tree
 * space: O(1) as only few variables are used
 */
var closestValue = function(root, target) {
    if (!root) return null;
    
    let closest = root.val;        
    let node = root;
    
    while (node) {
        let val = node.val;
        closest = Math.abs(target - val) < Math.abs(target - closest) ? val : closest;        
        node = (val < target) ? node.right : node.left;
    }
    
    return closest;
};
