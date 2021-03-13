/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 * * Time Complexity O(2^n) - n is the numbers in nums array
 * Space complexity O(n) for the recursion call stack 
*/
var findTargetSumWays = function(nums, S) {
    let count = 0;
    findTarget(nums, 0, 0, S);    
    return count;
    
    function findTarget(nums, index, sum, S) {
    
        if (index === nums.length) {
            if (sum === S) {
                count++;        
            }    
        } else {
            findTarget(nums, index + 1, sum + nums[index], S);
            findTarget(nums, index + 1,  sum - nums[index], S);
        }        
    }
};
