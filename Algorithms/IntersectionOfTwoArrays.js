/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * Time Complexity: O(M) where M is the length of the shortest array of numbers
 * Space complexity: O(N) where N is the intersections of the two array. In the worst case, both arrays are equal and distinct values, then we need to have O(N) space where N is also equal to the input array size 
 */
var intersection = function(nums1, nums2) {
    
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    
    const intersections = new Array();
    
    let p1 = 0; 
    let p2 = 0;
    
    while (p1 < nums1.length && p2 < nums2.length) {
        const p1Val = nums1[p1];
        const p2Val = nums2[p2];
        
        if (p1Val === p2Val) {
            intersections.push(p1Val); // p2Val would also work            
            while(nums1[p1] === p1Val) p1++;            
            while (nums2[p2] === p2Val) p2++;            
            continue;
        }
        
        if (p1Val < p2Val) {
            while (nums1[p1] === p1Val) p1++;            
        } else {
            while (nums2[p2] === p2Val) p2++;         
        }
    }
    
    return intersections;    
};
