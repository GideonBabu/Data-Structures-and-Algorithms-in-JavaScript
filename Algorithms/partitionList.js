/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @see https://leetcode.com/problems/partition-list/
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 * Time complexity O(n) where n is the no. of nodes in the list
 * Space complexity O(n) we create two seperate linked list to keep adding lower values to the before list and greater/equal values to the after list - This list holds the total no. of the list in the given input
 */
var partition = function(head, x) {
    if (head === null) {
        return null;
    }
    if (head.next === null) {
        return head;
    }
    let node = head;
    let beforeStart = null;
    let beforeEnd = null;
    let afterStart = null;
    let afterEnd = null;
    while (node != null) {
        let next = node.next;
        node.next = null;
        if (node.val < x) {
            if (beforeStart === null) {
                beforeStart = node;
                beforeEnd = beforeStart;
            } else {
                beforeEnd.next = node;
                beforeEnd = node;
            }
        } else {
            if (afterStart === null) {
                afterStart = node;
                afterEnd = afterStart;
            } else {
                afterEnd.next = node;
                afterEnd = node;
            }
        }
        node = next;
    }
    
    if (beforeStart === null) {
        return afterStart;
    }
    
    beforeEnd.next = afterStart;
    return beforeStart;
    
};
