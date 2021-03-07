/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    
    if (root === null) {
        return 'null,';
    }

    const leftSerialized = serialize(root.left);
    const rightSerialized = serialize(root.right);        
    return root.val + ',' + leftSerialized + rightSerialized;
};


/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    
    if (!data.length) {
        return null;
    }
    
    const queue = data.split(',');
    
    const helper = (nodesQueue) => {
        const nodeVal = nodesQueue.shift();
        if (nodeVal === 'null') {
            return null;    
        }
        
        const node = new TreeNode(parseInt(nodeVal));
        
        node.left = helper(nodesQueue);
        node.right = helper(nodesQueue);
        
        return node;
    };
    
    return helper(queue);
};
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
