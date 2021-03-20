/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 * time O(N) since each node in the BST is processed exactly once
 * space O(N) as we are calling the helper function recursively, stack of the size we need would be height of the tree which is O(log N) for best case of complexity if tree is well balanced and O(N) for the worst case of complexity for unbalanced tree
 */
var treeToDoublyList = function(root) {
    
    if (root === null) return null;
    
    let first = null;
    let last = null;
    
    helper(root);
    
    function helper(node) {
        if (node !== null) {
            // go to the left sub tree recursively
            helper(node.left);
            
            // if last node is not null, link the last and current nodes
            if (last !== null) {
                last.right = node;
                node.left = last;
            } else {
                first = node;
            }
            
            last = node;
            
            // go to the right sub tree recursively
            helper(node.right);
        }
    }
    
    last.right = first;
    first.left = last;
    
    // return the head as first will have the smaller value node from bst
    return first;
};
