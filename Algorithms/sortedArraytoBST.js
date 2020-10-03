/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 * https://leetcode.com/explore/featured/card/top-interview-questions-easy/94/trees/631
 */
var sortedArrayToBST = function(nums) {
    return createMinimalBST(nums, 0, nums.length - 1);
};

var createMinimalBST = function(arr, start, end) {
    if (end < start) {
        return null;
    } 
    const mid = Math.ceil((start + end) / 2);
    const node = new TreeNode(arr[mid]);
    node.left = createMinimalBST(arr, start, mid - 1);
    node.right = createMinimalBST(arr, mid + 1, end);
    return node;    
};
