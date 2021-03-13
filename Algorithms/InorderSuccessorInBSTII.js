/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 * Time Complexity: O(H), where H is the height of the tree. That means O(log N) in the average case, and O(N) in the worst case, where N is the number of nodes in the tree.
 * Space Complexity: O(1), since no additinoal space is allocated during calculation that expand based on the input
 */
var inorderSuccessor = function(node) {
    
    if (node === null) {
        return null;        
    }
    
    if (node.right !== null) {
        return leftMostChild(node.right);   
    }
    
    return findNextAncestorWithHigherVal(node);
};

function findNextAncestorWithHigherVal(node) {
    let child = node;
    let ancestor = node.parent;
    
    while (ancestor != null && ancestor.left != child) {
        child = ancestor;
        ancestor = ancestor.parent;
    }
    
    return ancestor;
}

function leftMostChild(node) {
    
    if (node === null) {
        return null;
    }
    
    while (node.left != null) {
        node = node.left;    
    }
    
    return node;
}



