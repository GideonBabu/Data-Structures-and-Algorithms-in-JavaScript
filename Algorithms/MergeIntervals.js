/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * time O(nlogn) where n is the no. of intervals
 * space O(n)
 */
var merge = function(intervals) {
    
    intervals.sort((a, b) => a[0] - b[0]);
    
    let merged = new Array();
    
    for (const interval of intervals) {
        if (merged.length === 0 || merged[merged.length - 1][1] < interval[0]) {
            merged.push(interval);   
        } else {
            merged[merged.length - 1][1] = Math.max(interval[1], merged[merged.length - 1][1]);    
        }
    }
    
    return merged;
};

