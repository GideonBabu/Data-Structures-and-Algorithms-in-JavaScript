/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Time - O(log n) where n - # of items in the array
 * if there are duplicates in worst case, the run time would be O(n)
 * Space - O(log n) for stack of recursive calls
 * @author https://www.linkedin.com/in/gideon-babu/
 */
var search = function(nums, target) {
	return searchR(nums, 0, nums.length - 1, target);
};

// modified binary search
var searchR = function(n, left, right, target) {
	if (left > right) {
		return -1;
	}
	
	let middle = Math.floor((left + right) / 2);
	
	if (n[middle] === target) {
		return middle;
	}
	
	// check if left array is in order
	if (n[left] < n[middle]) { // left is in order
		// determine if search should be on the left right or right side
		if (n[left] <= target && target < n[middle]) {
			return searchR(n, left, middle - 1, target); // search left
		} else {
			return searchR(n, middle + 1, right, target); // search right
		}
	} else if (n[right] > n[middle]) { // right is in order
		if (n[middle] < target && target <= n[right]) {
			return searchR(n, middle + 1, right, target); // search right
		} else {
			return searchR(n, left, middle - 1, target); // search left
		}
	} else {
		let location = -1;
		
		if (n[left] === n[middle]) {
			location = searchR(n, middle + 1, right, target); // search right
		}
		
		if (location !== -1 && n[right] === n[middle]) {
			location = search(n, left, middle - 1, target); // search left
		}
		
		return location;
	}
};