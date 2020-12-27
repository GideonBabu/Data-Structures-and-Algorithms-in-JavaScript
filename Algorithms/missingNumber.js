/**
 * https://leetcode.com/problems/missing-number/
 * @param {number[]} nums
 * @return {number}
 * Time O(n) where n is the numbers in the given input array
 * Space O(n) as we create a new copy of the array to store the values in sorting order
 */
var missingNumber = function(nums) {
    
    const copy = new Array(nums.length + 1).fill(-1);
    
    for (const num of nums) {
        copy[num] = num;
    }
    
    for (let i = 0; i < copy.length; i++) {
        if (copy[i] !== i) {
            return i;
        }
    }
    
    // return copy.indexOf(-1) would also work
};
