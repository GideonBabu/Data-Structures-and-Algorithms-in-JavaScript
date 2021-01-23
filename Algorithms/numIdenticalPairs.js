/**
 * https://leetcode.com/problems/number-of-good-pairs/
 * @param {number[]} nums
 * @return {number}
 * time O(n) where n is the no. of numbers in nums array
 * space O(n) for map
 */
var numIdenticalPairs = function(nums) {
    const map = new Map();
    let pairs = 0;

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            pairs += map.get(nums[i]);
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    return pairs;
};
