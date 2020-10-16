/**
 * @see https://leetcode.com/problems/subsets/
 * @param {number[]} nums
 * @return {number[][]}
 * Complexity
 * Time - O(n 2^n)
 * Space - O(n 2^n)
 * Recursive approach
 */
var subsets = function(nums) {
    const subset = [];
    const allSubset = [];
    const index = 0;
    return generateSubsets(nums, subset, index, allSubset);
};

var generateSubsets = function(nums, subset, index, allSubset) {
    allSubset.push(subset);
    for (let i = index; i < nums.length; i++) {
        const newSubset = [...subset, nums[i]];
        generateSubsets(nums, newSubset, i + 1, allSubset);
    }
    return allSubset;
}

const nums = [1,2,3];
console.log(subsets(nums));