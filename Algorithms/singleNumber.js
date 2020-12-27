/**
 * https://leetcode.com/problems/single-number/
 * @param {number[]} nums
 * @return {number}
 * Time O(n) where n is the number of integers in the array 
 * Space O(n)
 */
var singleNumber = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    
    const map = new Map();
    
    for (const num of nums) {
        if (map.has(num)) {
            map.delete(num);
        } else {
            map.set(num, true);
        }
    }
    
    if (map.size) {
        for (const key of map.keys()) {
            return key;
        }    
    }    
};
