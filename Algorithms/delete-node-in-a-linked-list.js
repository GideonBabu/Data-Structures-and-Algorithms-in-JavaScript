/**
 * https://leetcode.com/problems/delete-node-in-a-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    if (!node || node.next === null) {
        return false;
    }
    let nextNode = new ListNode();
    nextNode = node.next;
    node.val = nextNode.val;
    node.next = nextNode.next;
};
