/**
 * https://leetcode.com/problems/reverse-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * Time - O(n) - n is the no. of the nodes in the given linked list
 * Space - O(n) - 'coz we are creating n no. of nodes for form reversed list
 */
var reverseList = function(head) {
    // initialise newHead to be null as first node next should be pointing to null in the reversed list
    let newHead = null;
    
    // traverse the linked list from head to tail    
    while (head != null) {
        // create a new node and assign the value from Linked List to the new node
        let node = new ListNode(head.val);
        // node next should point to the current new Head
        node.next = newHead;
        // newHead should be updated with the current new Head
        newHead = node;
        // update the head to go to the next node in the list        
        head = head.next;
    }
    
    return newHead;
};
