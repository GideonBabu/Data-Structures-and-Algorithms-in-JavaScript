/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let firstDecreasing = -1;
    // find the first decreasing index from the end of the array
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i-1] < nums[i]) {
            firstDecreasing = i-1;
            break;
        }
    }
    
    if (firstDecreasing === -1) {
        nums.reverse();
        return;
    }
    
    let large = nextLarge(firstDecreasing);
    
    if (large) {
        swap(firstDecreasing, large);
    }
    
    reverse(firstDecreasing + 1);
    
    function reverse(index) {
        if (index >= nums.length) {
            return;
        }
        let start = index;
        let end = nums.length - 1;
        while (start < end) {
            swap(start, end);
            start++;
            end--;
        }
    }
    
    function swap(i, j) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    
    function nextLarge(index) {
        for (let j = nums.length - 1; j > index; j--) {
            if (nums[j] > nums[index]) {
                return j;
            }
        }
    }    
};
