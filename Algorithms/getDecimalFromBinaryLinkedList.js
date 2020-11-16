/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
 * @param {ListNode} head
 * @return {number}
 * Time - O(n) where n is the total no. of nodes in the given linked list
 * Space - O(n)
 */
var getDecimalValue = function(head) {    
    let binary = [];
    let node = head;
    
    while (node != null) {
        binary.push(node.val);
        node = node.next;
    }    
    return binary2Decimal(binary);
    
};

function binary2Decimal(binary) {    
    let digitPlace = 0;
    let decimal = 0;
    
    for (let num = binary.length - 1; num >= 0; num--) {
        decimal += binary[num] * Math.pow(2, digitPlace);
        digitPlace++;
    }
    
    return decimal;
}
    

