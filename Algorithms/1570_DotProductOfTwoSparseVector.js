var Pair = function(index, val) {
    this.index = index;
    this.val = val;
};

/**
 * @param {number[]} nums
 * @return {SparseVector}
 * Let n be the length of the input array and L1 and L2 be the number of non-zero elements for the two vectors.
 * time O(N) for creating the <index, value> pair for non-zero values and O (L1 + L2) for calculating the product
 * space O(L) for storing <index, value> pair in array
 */
 */
var SparseVector = function(nums) {
    this.vector = this.convertSparseVector(nums);    
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 * time complexity: O(N + M) where N and M are non-zero values in vector v1 and v2
 * space: 
 */
SparseVector.prototype.dotProduct = function(vec) {
    
    let v1 = this.vector;
    let v2 = vec.vector;
    let i = 0;
    let j = 0;
    let product = 0;
    
    while (i < v1.length && j < v2.length) {
        
        if (v1[i].index < v2[j].index) i++;
        
        else if (v2[j].index < v1[i].index) j++;
                
        else if (v1[i].index === v2[j].index) {
            product += v1[i].val * v2[j].val;    
            i++;
            j++;
        }
    }
    
    return product;
    
};



SparseVector.prototype.convertSparseVector = function(nums) {
    let vector = new Array();
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            const pair = new Pair(i, nums[i]);
            vector.push(pair);
        }
    }
    
    return vector;
    
};
