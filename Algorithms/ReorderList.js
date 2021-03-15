/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 * Time complexity: O(N). there are 3 steps. To identify the middle node takes O(N) time. To reverse the second part of the list N / 2 operations. The final step to merge two lists, N/2 operations are needed. thus results in O(N) in total
 * space complexity is O(1) as we do not allocate any additional space that scale accordingly to the input
 */
var reorderList = function (head) {
    // find thd middle node of the linked list
    
    let middleNode = findMiddleNode(head);
    
    // reverse the second part of the list from slow node
    let reversedHead = reverseList(middleNode);
    
    // merge two lists
    mergeList(head, reversedHead);
}

function reverseList(head) {
    let prev = null;
    let curr = head;
    let next;
    
    while (curr != null) {
        next = curr.next;
        
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    
    return prev;
}

function findMiddleNode(head) {
    let slow = head;
    let fast = head.next;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
}

function mergeList(head1, head2) {
    
    let first = head1;
    let second = head2;
    let temp;
    
    while (first != null && second != null) {
        temp = first.next;
        first.next = second;
        first = temp;
        
        temp = second.next;
        second.next = first;
        second = temp;
    }
}
