/**
 * https://leetcode.com/problems/add-two-numbers/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * Time O(n + m) where n and m are no. of nodes in linked lists l1 and l2 respectively
 * Space O(L) where L is the no. of nodes in the longest linked list of l1 and l2
 */
var addTwoNumbers = function(l1, l2) {
    
    let head = new ListNode(0);
    let node = head;    
    let carry = 0;
    let sum = 0;
    
    while (l1 !== null || l2 !== null || sum > 0) {
        
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }
        
        if (sum > 9) {
            carry = 1;
            sum = sum - 10;
        }
        
        
        node.next = new ListNode(sum);
        node = node.next;
        
        sum = carry;
        carry = 0;        
    }
    
    return head.next;
};
