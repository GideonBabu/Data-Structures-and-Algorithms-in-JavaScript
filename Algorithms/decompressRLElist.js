/**
 * https://leetcode.com/problems/decompress-run-length-encoded-list/
 * @param {number[]} nums
 * @return {number[]}
 * Time O(n)
 * space O(m) where m is the total no. of frequency
 */
var decompressRLElist = function(nums) {
    const RLElist = [];
    for (let i = 1; i < nums.length; i += 2) {
        const freq = nums[i - 1];
        const val = nums[i];
        RLElist.push(...new Array(freq).fill(val));
    }    
    return RLElist;
};
