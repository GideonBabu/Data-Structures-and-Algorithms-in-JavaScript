/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * https://leetcode.com/problems/balanced-binary-tree/
 * @param {TreeNode} root
 * @return {boolean}
 * Time - O(n), where n = # of nodes in the tree
 * Space - O(h) where h is the height of the tree
 * @author https://www.linkedin.com/in/gideon-babu/
 */
var isBalanced = function(root) {
	return checkHeight(root) !== Number.MIN_VALUE;
};

var checkHeight = function(root) {
	if (root === null) {
		return -1;
	}
	const leftHeight = checkHeight(root.left);
	if (leftHeight === Number.MIN_VALUE) {
		return Number.MIN_VALUE;
	}
	
	const rightHeight = checkHeight(root.right);
	if (rightHeight === Number.MIN_VALUE) {
		return Number.MIN_VALUE;
	}
	
	const heightDiff = leftHeight - rightHeight;
	
	if (Math.abs(heightDiff) > 1) {
		return Number.MIN_VALUE;
	}
	
	return Math.max(leftHeight, rightHeight) + 1;
};