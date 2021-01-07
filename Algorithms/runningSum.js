/**
 * https://leetcode.com/problems/running-sum-of-1d-array/
 * @param {number[]} nums
 * @return {number[]}
 * Time O(n) where n is the numbers in the given array
 * Space O(n) to store the new runningSum
 * we can resume space to constant by altering the given input array itself
 */
var runningSum = function(nums) {
    if (nums.length === 1) {
        return nums;
    }
    
    const runningSum = [nums[0]];
    
    for (let i = 1; i < nums.length; i++) {
        runningSum[i] = nums[i] + runningSum[i-1];
    }
        
    return runningSum;
};
