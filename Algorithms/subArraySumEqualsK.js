/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Time complexity: O(n) where n is the number of integers in the given input array nums
 * Space complexity: O(n) to store the sum value in hashtable
 */
var subarraySum = function(nums, k) {
    
    let count = 0;        
    let sum = 0;
    const map = new Map();
    
    map.set(0, 1);
    
    for (let i = 0; i < nums.length; i++) {            
        
        sum += nums[i];
        
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        
        const occurence = map.has(sum) ? map.get(sum) : 0
        map.set(sum, occurence + 1);
                
    }
    
    return count;
};
