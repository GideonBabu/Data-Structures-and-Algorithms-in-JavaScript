/**
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 * we use inorder traversal to find the kth smallest element
 * as we traverse we decrease the kth value which is stored in 1st index
 * of the array nums
 * as soon it the value reaches 0, we know this is the node we are looking for
 * we store the value of the node in the nums array and thus the length of the 
 * array increased and greater than 1
 * nums[0] has the kth value initially and decreased
 * nums[1] has the value of the kth smallest node in the BST
 * Run time O(n) as we might need to traverse all the node in the worst case
 * Space O(h) where h is the height of the tree auxilary space used for recursion stack calls
 */
var kthSmallest = function(root, k) {
    const nums = [k];
    var inOrder = (root, nums) => {
        if (nums.length > 1) {
            return;
        }
        
        if (root.left) {
            inOrder(root.left, nums);    
        }
        
        nums[0] -= 1;
        
        if (nums[0] === 0) {
            nums.push(root.val);
            return;
        }
        
        if (root.right) {
            inOrder(root.right, nums);    
        }
        
    };
    
    inOrder(root, nums);
    return nums[1];
};


