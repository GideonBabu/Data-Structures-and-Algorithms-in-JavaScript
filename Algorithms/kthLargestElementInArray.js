/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Time complexity O(n) where n is the number of elements in the given nums array
 * space complexity is constant O(1)
 */
var findKthLargest = function(nums, k) {
  return quickSelect(nums, 0, nums.length - 1, k);  
};

function quickSelect(arr, left, right, k) {
    const pivotIndex = partition(arr, left, right, k);
    
    if (k < arr.length - pivotIndex) {
        return quickSelect(arr, pivotIndex + 1, right, k);   
    } else if (k > arr.length - pivotIndex) {
        return quickSelect(arr, left, pivotIndex - 1, k);   
    }
    
    return arr[pivotIndex];
}

function partition(arr, start, end, k) {
    //const random = arr;
    const pivot = arr[end];
    
    let i = start;
    let j = end - 1;
    
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;   
        }
        
        while (arr[j] > pivot) {
            j--;   
        }
        
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    
    swap(arr, i, end);
    return i;
    
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
