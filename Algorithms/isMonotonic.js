/**
 * https://leetcode.com/problems/monotonic-array/
 * @param {number[]} A
 * @return {boolean}
 * Time O(n)
 * Space O(1)
 */
var isMonotonic = function(A) {
	
	// when array has one or 2 elements, there is no need to check
	// we could immediately return true
	if (A.length === 1 || A.length == 2) {
		return true;
	}
	
	let order;
	
	for (let i = 1; i < A.length; i++) {
		
		// when previous values are equal
		// don't need to check for anything
		// go/coninue to the next item in the array
		if (A[i] === A[i - 1]) {
			continue;
		}
		
		// set the order if it is undefined
		if (order === undefined) {
			if (A[i] < A[i-1]) {
				order = 'D';
				continue;
			} else if (A[i] > A[i-1]) {
				order = 'A';
				continue;
			}
		}
		
		// when order is set
		// check their relation with previous item
		// compare the order or relation
		// and return immediately when it is not in order
		if (order) {
			if (A[i] > A[i-1] && order !== 'A') {
				return false;
			}
			
			if (A[i] < A[i-1] && order !== 'D') {
				return false;
			}
		}
	}
	
	// finally return true
	return true;
};