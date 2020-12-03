/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * https://leetcode.com/problems/linked-list-cycle/
 * @param {ListNode} head
 * @return {boolean}
 * @author Gideon Babu https://www.linkedin.com/in/gideon-babu/
 * Time O(n) where n is the no. of nodes in the linked list
 * Space O(1) 'coz we only use two variables
 */
var hasCycle = function(head) {
	
	// Start both runners at the beginning
	let slowRunner = head;
	let fastRunner = head;
	
	// iterate until fastRunner hit the end of the list
	while (fastRunner && fastRunner.next) {
		slowRunner = slowRunner.next;
		fastRunner = fastRunner.next.next;
		
		// Case: fastRunner is about to "lap" slowRunner
		if (slowRunner === fastRunner) {
			return true;
		}
	}
	
	// Case: fastRunner hit the end of the list
	return false;
};

class LinkedListNode {
	constructor(value) {
		this.val = value;
		this.next = null;
	}
}