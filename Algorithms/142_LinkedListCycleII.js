/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 * time O(n) - where n is the no. of nodes in the linked list
 * space O(1) 
 * another approach could be to use hashset to store the visited nodes as we scan through the list nodes and as soon as we find a node which is already exists in the hashset, we can return that node as it is the start of the linked list cycle
 */
var detectCycle = function(head) {
    
    if (head === null || head.next === null) {
        return null;
    }
    
    let hare = head, tortoise = head;
    
    while (hare !== null && hare.next !== null) {
        hare = hare.next.next;
        tortoise = tortoise.next;
        
        if (hare === tortoise) {
            break; 
        }
    }
    
    if (hare !== tortoise) {
        return null;
    }
    
    hare = head;
    
    while (hare !== tortoise) {
        hare = hare.next;
        tortoise = tortoise.next;
    }
    
    return hare;    
};
