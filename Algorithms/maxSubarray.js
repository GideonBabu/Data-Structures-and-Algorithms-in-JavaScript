/**
 * https://leetcode.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 * Time - O(n) where n - # of items in the given array nums
 * Space - O(1)
 * @author Gideon Babu https://www.linkedin.com/in/gideon-babu/
 */
var maxSubArray = function(nums) {
	
	// initialize both largest and current sum to first value in the nums array
	let largestSum = nums[0];
	let currentSum = nums[0];
	
	// start iterating from the first index
	for (let i = 1; i < nums.length; i++) {
		// add the current sum with index value
		currentSum += nums[i];
		// reassign by checking if we include the current value or just by
		// taking the value alone we can get the max value
		currentSum = Math.max(currentSum, nums[i]);
		
		// compare it with previous largest value we identified
		largestSum = Math.max(largestSum, currentSum);
	}
	
	return largestSum;
};