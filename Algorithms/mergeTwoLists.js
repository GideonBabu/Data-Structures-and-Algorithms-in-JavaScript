/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * Time O(n) where n is the no. of nodes in the smaller linked list of given two list
 * Space O(a + b) where a and b are the no. of nodes in each given linked list
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 === null && l2 === null) {
        return null;
    }
    if (l1 === null) {
        return l2;
    }
    if (l2 === null) {
        return l1;
    }
    
    let head = null;
    let tail;    
    while (l1 !== null && l2 !== null) {
        let node;
        if (l1.val < l2.val) {
            node = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            node = new ListNode(l2.val);
            l2 = l2.next;
        }
        
        if (head === null) {
            head = node;
        } else {
            tail.next = node;
        }
        tail = node;    
    }
    
    if (l1 !== null) {
        tail.next = l1;
    }
    
    if (l2 !== null) {
        tail.next = l2;
    }
    
    return head;
};
