/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 * time O(N + M) where N and M are lengths of firstList and secondList respectively
 * space O(N + M) to store the result in an array. In worst case, we might need to store the intersect upto N + M values
 */
var intervalIntersection = function(firstList, secondList) {
    
    // edge cases
    if (firstList.length === 0 && secondList.length) return [];
    if (firstList.length && secondList.length === 0) return [];
    if (firstList.length === 0 && secondList.length === 0) return [];
    
    let i = 0;
    let j = 0;
    let intersects = new Array();
    
    while (i < firstList.length && j < secondList.length) {
        const start = Math.max(firstList[i][0], secondList[j][0]);
        const end = Math.min(firstList[i][1], secondList[j][1]);
        
        let duration = end - start;
        
        if (duration >= 0) {
            intersects.push([start, end]);
        } 
        
        if (firstList[i][1] < secondList[j][1]) {
            i++;
        } else {
            j++;   
        }
        
    }
    
    return intersects;
    
};

