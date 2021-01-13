/**
 * https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
 * @param {number[]} nums
 * @return {number[]}
 * time O(nlogn) where n is the number of elements in the given array
 * space O(n)
 */
var smallerNumbersThanCurrent = function(nums) {
    
    const sorted = [...nums].sort((a, b) => b - a);
    
    const map = new Map(sorted.map((num, index) => [num, nums.length - index - 1]));
    
    return nums.map(num => map.get(num));

};
