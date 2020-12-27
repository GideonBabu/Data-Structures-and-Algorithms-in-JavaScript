/**
 * https://leetcode.com/problems/single-number/
 * @param {number[]} nums
 * @return {number}
 * Time O(n) where n is the number of integers in the array 
 * Space O(1) - constant space
 */
var singleNumber = function(nums) {
    
    let single = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        single ^= nums[i];    
    }
    
    return single;
};
