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
 * @return {number}
* Time Complexity: O(n) where n is number of nodes in Binary Tree.
 * Space Complexity: O(h) where h is the height of the binary tree
 */
var maxPathSum = function(root) {
    let finalMax = Number.MIN_SAFE_INTEGER;
    
    const helper = (root) => {
                
        // base case
        if (root === null) {
            return 0;   
        }
        
        const leftMax = helper(root.left);
        const rightMax = helper(root.right);

        
        //compare leftMax + rool val with rightMax + root.val to select
        let maxTillNow = Math.max(leftMax + root.val, rightMax + root.val);
        
        // if current node val alone itself is max
        maxTillNow = Math.max(maxTillNow, root.val);
        
        // what about adding both left and right to root.val?
        const tempMax = Math.max(maxTillNow, leftMax + rightMax + root.val);
                
        finalMax = Math.max(finalMax, tempMax);
        
        return maxTillNow;
        
    };
    
    helper(root);
    
    return finalMax;
};
