/**
 * https://leetcode.com/problems/merge-sorted-array/
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * time complexity - O(n)
 * space complexity - O(1)
 */

// nums1 = [1, 2, 3, 0, 0, 0]
// num2 = [2, 5, 6]
var merge = function(nums1, m, nums2, n) {
    let indexMerged = m + n - 1; // last index of merged array
    let indexNum1 = m - 1;
    let indexNum2 = n - 1;
    
    // merge nums1 and nums2 by comparing the last element in each
    while (indexNum2 >= 0) {
        if (indexNum1 >=0 && nums1[indexNum1] > nums2[indexNum2]) {
            nums1[indexMerged] = nums1[indexNum1]; // copy element
            indexNum1--;
        } else {
            nums1[indexMerged] = nums2[indexNum2]; // copy element
            indexNum2--;
        }
        indexMerged--; // move indices
    }
};
