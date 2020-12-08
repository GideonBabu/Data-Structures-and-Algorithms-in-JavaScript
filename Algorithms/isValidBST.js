/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * https://leetcode.com/problems/validate-binary-search-tree/
 * @param {TreeNode} root
 * @return {boolean}
 * Time - O(n) where n = # of nodes in the BST
 * Space - O(log n) as we need to use call-stack space for recursion
 * @author https://www.linkedin.com/in/gideon-babu/
 */
var isValidBST = function(root) {
	return validateBST(root, null, null);
};

var validateBST = function(root, min, max) {
	if (root === null) {
		return true;
	}
	
	if (min !== null && root.val <= min) {
		return false;
	}
	
	if (max !== null && root.val >= max) {
		return false;
	}
	
	if (!validateBST(root.left, min, root.val) || !validateBST(root.right, root.val, max)) {
		return false;
	}
	
	return true;
};