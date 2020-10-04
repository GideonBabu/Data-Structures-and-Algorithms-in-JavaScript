/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * @see https://leetcode.com/problems/remove-nth-node-from-end-of-list/submissions/
 */
var removeNthFromEnd = function(head, n) {
    
    // check for null head
    if (!head) {
        return null;
    }
    
    // check for single element linked list
    if (head.next === null && n == 1) {
        head = null;
        return head;
    }
    
    let slower = head;
    let faster = head;
    
    for (let i = 0; i < n; i++) {
        /*if (faster === null) {
            return null; // out of bounds
        }*/
        faster = faster.next;
    }
    
    // when n is the total number is nodes in the list
    if (faster === null) {
        head = head.next;
        return head;
    }
    
    while (faster.next !== null) {
        slower = slower.next;
        faster = faster.next;
    }
    
    if (slower !== null) {
        slower.next = slower.next.next;
    }
    return head;
};
