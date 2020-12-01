/**
 * https://leetcode.com/problems/move-zeroes/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * Time - O(n) where n is the no. of elements in nums
 * Space - O(1)
 */
var moveZeroes = function(nums) {
	// validate the input
	if (!nums.length) {
		throw new Error('argument nums array is empty length for moveZeroes function');
	}
	
	let zeros = 0;
	let pointer = 0;
	
	/* for each number in the given array, check if the value is not === zero then copy that value
	 * to the pointer and increment the pointer. This way to move the non-zeo values to front of the
	 * array in-order. When value is zero, increment the zeros counter
	 */
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			nums[pointer] = nums[i];
			pointer++;
		} else {
			zeros++;
		}
	}
	
	// for the no. of zeros counter we encountered above, fill in the zeros from the behind
	// of the given input
	while (zeros) {
		nums[nums.length - zeros] = 0;
		zeros--;
	}
};