/**
 * @param {number[][]} intervals
 * @return {number}
 * Time complexity: O(N Log N) for sorting intervals where N is the total number intervals given
 * In worst case, each interval meetings will collide and N add opration on the heap. OR N extract-min operation can happen
 * Overall time complexity being O(N Log N)
 * Space complexity: O(N) as we use min-heap that can contain N elements in the worst case
 */
var minMeetingRooms = function(intervals) {
    if (intervals.length === 0 ) {
        return 0;   
    }
    
    intervals.sort((a, b) => a[0] - b[0]);
    
    const allocator = new MinHeap((a, b) => b - a);
    
    for (const meeting of intervals) {        
        if (allocator.getSize() > 0 && meeting[0] >= allocator.peek()) {
            allocator.poll();            
        }
        
        allocator.add(meeting[1]);        
    }
    
    return allocator.getSize();    
    
};

// A simple MinHeap based on Array which is used a stack so removing can be done in O(1) time
// MinHeap works well when implemented on binary tree so extracting min value and adding new value to heap can be done in O(log N) operation
 
class MinHeap {
    constructor(func) {
        this.heap = new Array();
        this.compare = func;
        this.size = 0;
    }
    
    getSize() {
        return this.heap.length;
    }
    
    peek() {
        if (this.size === 0) {
            return null;
        }
        return this.heap[this.size - 1];
    }
    
    // remove the top most value 
    poll() {
        if (this.heap.length === 0) {
            return null;   
        }
        const popped = this.heap.pop();
        this.size--;
        return popped;
    }
    
    add(val) {        
        this.heap.push(val);
        this.size++;
        this.heap.sort(this.compare);
    }

}
