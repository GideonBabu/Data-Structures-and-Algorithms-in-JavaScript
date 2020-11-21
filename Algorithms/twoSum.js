/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Time - O(n) where n is the total no. of items in the array
 * Space - O(n) as we use hashtable to store the visited numbers
 */
var twoSum = function(nums, target) {
    if (nums.length <= 1) {
        throw new Error('invalid input nums for twoSums function - nums.length is lesser than or equal to 1');
    }
        
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const pair = target - nums[i];
        if (map.has(pair)) {
            return [map.get(pair), i];            
        } else {
            map.set(nums[i], i);
        }
    }
};
