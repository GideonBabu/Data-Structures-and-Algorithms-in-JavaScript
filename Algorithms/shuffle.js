/**
 * https://leetcode.com/problems/shuffle-the-array/
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 * time O(n) where n is the total numbers in the given input array
 * space O(n) to store the shuffled result
 */
var shuffle = function(nums, n) {
    const shuffled = [];
    
    for (let i = 0; i < n; i++) {
        shuffled.push(nums[i], nums[i + n]);
    }
    
    return shuffled;
};
