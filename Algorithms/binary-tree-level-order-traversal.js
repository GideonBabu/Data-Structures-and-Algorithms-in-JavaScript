  /**
   * @see https://leetcode.com/problems/binary-tree-level-order-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * Time complexity - O(n)
 * Space complexity - O(n)
 */
var levelOrder = function(root) {
    if (!root) {
        return [];
    }
    let result = [];
    let queue = [];
    queue.push(root);
    
    while (queue.length) {
        let level = [];
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        result.push(level);
    }
    return result;
}; 
