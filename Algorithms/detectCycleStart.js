/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @see https://leetcode.com/problems/linked-list-cycle-ii/
 * @param {ListNode} head
 * @return {ListNode}
 * @author Gideon Babu https://www.linkedin.com/in/gideon-babu/
 * Time O(n) where n is the no. of nodes in the linked list
 * Space O(1) 'coz we only use 3 variables
 */
var detectCycle = function(head) {
	// Start both runners at the beginning
	let slowRunner = head;
	let fastRunner = head;
	let loopFound = false;
	
	// iterate until fastRunner hit the end of the list
	while (fastRunner && fastRunner.next) {
		slowRunner = slowRunner.next;
		fastRunner = fastRunner.next.next;
		
		// Case: fastRunner is about to "lap" slowRunner
		if (slowRunner === fastRunner) {
			loopFound = true;
			break;
		}
	}
	
	// Case: fastRunner hit the end of the list
	if (!loopFound) {
		return null;
	}
	
	// case: when loop found, reassign slowRunner to head and
	// move one node both slow and fast to see where they meet each
	// other in the circle
	slowRunner = head;
	while (slowRunner !== fastRunner) {
		slowRunner = slowRunner.next;
		fastRunner = fastRunner.next;
	}
	
	return slowRunner;
};