i/**
 * https://leetcode.com/problems/middle-of-the-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * time O(n)
 * space O(1)
 */
var middleNode = function(head) {
    let slow = head;
    let fast = head;    
    while (fast.next) {        
        fast = (fast.next.next) ? fast.next.next : fast.next;        
        slow = slow.next;
    }
    return slow;
};
