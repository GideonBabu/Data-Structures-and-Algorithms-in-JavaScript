/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * Time Complexity - O(n) where n is the numbers in the given input nums array
 * Space compleixty- O(k) to store the values in hashtable where k is the target integer in the given input
 */
var checkSubarraySum = function(nums, k) {
    
    if (nums.length < 2) {
        return false;    
    }
        
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === 0 && nums[i + 1] === 0) {
            return true;
        }
    }    
    
    // Let's only check positive k. Because if there is a n makes n * k = sum, it is always true -n * -k = sum.
    if (k < 0) k = -k;    
    
    const map = new Map();
    map.set(0, -1);
    let runningSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        runningSum += nums[i];
        
        // corner case: k CANNOT be 0 when we use a number mod k
        if (k != 0) {            
            runningSum %= k;
        }        
        
        if (map.has(runningSum)) {
            if (i - map.get(runningSum) > 1) {
                return true;
            }
        } else {
            map.set(runningSum, i);    
        }
                
    }    
    
    return false;
};

