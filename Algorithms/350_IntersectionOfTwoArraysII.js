/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * time: O(N log N + M log M + N + M) => O(N log N + M log M)
 * space: O(1) we don't consider extra array we use for output
 */
var intersect = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    
    let p = 0, q = 0;
    let intersections = new Array();
    
    while (p < nums1.length && q < nums2.length) {
        if (nums1[p] === nums2[q]) {
            intersections.push(nums1[p]);   
            p++;
            q++;
        } else if (nums1[p] < nums2[q])
            p++;
        else q++;
    }
    
    return intersections;
};
