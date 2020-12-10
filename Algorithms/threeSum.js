/**
 * https://leetcode.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 * Time - O(n ^ 2)
 * Space - O(1)
 */
var threeSum = function(nums) {
	// sort the numbers in the ascending order
	// runs in O(n log n)
	nums.sort((a, b) => a - b);
	
	// array to store the result
	const triplets = new Array();
	
	// keep the i index within length - 2 for j, k to be within boundry
	// i runs from 0 to second last element so that j, k can go to the first last and last respectively so we can add elements of i, j and k
	for (let i = 0; i < nums.length - 2; i++) {
		
		// skip the duplicate i element after the first element of k
		if (i > 0 && nums[i] === nums[i-1]) {
			continue;
		}
		// initialize j, k two pointers
		// j to be pointing after i
		// k pointing from the last element
		let j = i + 1;
		let k = nums.length - 1;
		
		while (j < k) {
			const sum = nums[i] + nums[j] + nums[k];
			
			if (sum === 0) {
				// when sum equals to 0, we found the triplets
				// push that as an array to triplets array
				triplets.push([nums[i], nums[j], nums[k]]);
				
				// update j and k to point to next index
				j += 1;
				k -= 1;
				
				// skip the duplicate values for j
				while (j < k && nums[j] === nums[j-1]) {
					j += 1;
				}
				
				// skip the duplicate values for k
				while (j < k && nums[k] === nums[k+1]) {
					k -= 1;
				}
			} else if (sum < 0) { // if sum is lesser than 0 then increase j to point to the next index
				j +=1;
			} else { // otherwise, decrease the k pointer
				k -= 1;
			}
		}
	}
	return triplets;
};