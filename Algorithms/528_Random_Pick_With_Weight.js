/**
 * @param {number[]} w
 * time: O(n) n = w.length
 * space: O(1)
 */
var Solution = function(w) {
    this.prefixSum = new Array(w.length);
    this.sum = 0;
    for (let i = 0; i < w.length; i++) {
        this.sum += w[i];
        this.prefixSum[i] = this.sum;
    }
};

/**
 * @return {number}
 * time: O(nlogn)
 * space: O(1)
 */
Solution.prototype.pickIndex = function() {
    let target = Math.floor(Math.random() * this.sum);
    
    let low = 0, high = this.prefixSum.length - 1;
    
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        
        if (target < this.prefixSum[mid]) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    
    return low;
};
