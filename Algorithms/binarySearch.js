/**
 * @see https://leetcode.com/problems/binary-search/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Time Complexity is O(log N)
 * Space Complexity is O(1)
 */
var search = function(nums, target) {
    return binarySearch(nums, target);
};

var binarySearch = function(nums, target) {
    if (nums.length < 0) {
        return -1;
    }
    
    let low = 0;
    let high = nums.length - 1;
    let mid;
    
    while (low <= high) {
        mid = Math.floor(low + (high - low / 2));
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] > target) {
            high = mid - 1
        } else {
            low = mid + 1;
        }
    }
    return -1;
};