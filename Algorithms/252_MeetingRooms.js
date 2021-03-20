/**
 * @param {number[][]} intervals
 * @return {boolean}
 * time O(N log N) where n is the number intervals 
 * O(N) for sorting 
 */
var canAttendMeetings = function(intervals) {
    if (intervals.length === 1) {
        return true;   
    }
    
    intervals.sort((intA, intB) => intA[0] - intB[0]);
    
    for (let i = 1; i < intervals.length; i++) {
        const interval = intervals[i];
        
        if (interval[0] < intervals[i-1][1]) {
            return false;   
        }
    }
    
    return true;
};
