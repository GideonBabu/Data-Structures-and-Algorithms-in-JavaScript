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
 * @return {number[]}
 */

var rightSideView = function(root) {
    let rightSideNodes = [];
    
    if (root === null) {
        return rightSideNodes;
    }
    
    rightSideNodes = RightOrderTrav(root, 0, []);
    
    function RightOrderTrav(node, level, result) {        
        if (node === null) {
            return;
        }
    
        result[level] = node.val;
        
        if (node.left) {
            RightOrderTrav(node.left, level + 1, result);
        }
        
        if (node.right) {                
            RightOrderTrav(node.right, level + 1, result);
        }      
        
        return result;
    }
    
    return rightSideNodes;
    
};


