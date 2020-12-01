/**
 * https://leetcode.com/problems/remove-element/
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * Time O(n ^ 2) where n is the number of the elements in the array
 * Space O(1))
 */
var removeElement = function(nums, val) {
	if (!nums.length) {
		// when there is no nums in the array return 0
		return 0;
	}
	
	if (val === undefined) {
		throw new Error('argument val cannot be undefined for removeElement function');
	}
	
	let i = 0;
	
	while (i < nums.length) {
		if (nums[i] === val) {
			// shift array values by removing the value at index i
			for (let j = i; j < nums.length - 1; j++) {
				nums[j] = nums[j + 1];
			}
			
			// remove the last value in the array as it is now copy of second last
			nums.pop();
		} else {
			i++;
		}
	}
	
	return nums.length;
};

/**
 * https://leetcode.com/problems/remove-element/
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * Time O(n) - n is the no. of items in nums
 * Space O(1)
 * Optimized run time
 */
var removeElement = function(nums, val) {
	if (!nums.length) {
		// when there is no nums in the array return 0
		return 0;
	}
	
	if (val === undefined) {
		throw new Error('argument val cannot be undefined for removeElement function');
	}
	
	let index = 0;
	
	/* for each items in the given array, check if the val is not equivalent to the val to the removed
	 * if yes, then copy that value to the index which we are having as a pointer
	 * and then increment the index by 1
	 * finally return the index which should hold the number is items in the given array which is not === val
	*/
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== val) {
			nums[index] = nums[i];
			index++;
		}
	}
	
	return index;
};