/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * https://leetcode.com/problems/palindrome-linked-list/submissions/
 * @param {ListNode} head
 * @return {boolean}
 * Time - O(n)
 * Space - O(n)
 */
var isPalindrome = function(head) {
    const stack = new Array();
    let node = head;
    
    while (node != null) {
        stack.push(node.val);
        node = node.next;
    }
    node = head;
    
    while (stack.length) {
        if (stack.pop() != node.val) {
            return false;
        }
        node = node.next;
    }
    
    return true;
};
