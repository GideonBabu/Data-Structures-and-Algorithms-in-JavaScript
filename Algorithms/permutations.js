/**
 * @see https://leetcode.com/problems/permutations/
 * @param {number[]} nums
 * @return {number[][]}
 * Time complexity - O(n * n!)
 * space complexity - O(n!)
 */
var permute = function(nums) {
    return permuteRecursively(nums, [], []);
};

var permuteRecursively = function(nums, set, result) {
    if (nums.length === 0) {
        result.push([...set]);
    }
    
    for (let i = 0; i < nums.length; i++) {
        const newNums = nums.filter((n, index) => index != i);
        set.push(nums[i]);
        permuteRecursively(newNums, set, result);
        set.pop();
    }
    return result;
}
