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
 * level order traversal solution
 * Time O(n) where n is the no. of nodes in the tree
 * Space O(w) where w is the max. width fo the tree
 * at any point in time, we would need to store the queue with max.
 * width of the nodes
 */
var minDepth = function(root) {
    if (root === null) {
        return 0;
    }
    
    const queue = new Array();
    queue.push({node: root, depth: 1});
    
    while (queue.length) {
        let curr = queue.shift();
        let node = curr.node;
        let depth = curr.depth;
        
        if (node.left === null && node.right === null) {
            return depth;
        }
        
        if (node.left) {
            queue.push({node: node.left, depth: depth + 1});
        }
        
        if (node.right) {
            queue.push({node: node.right, depth: depth + 1});
        }        
    }        
};
