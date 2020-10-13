/**
 * @see https://leetcode.com/problems/sort-an-array/
 * @param {number[]} nums
 * @return {number[]}
 *
 */
var sortArray = function(nums) {
    quickSort(nums, 0, nums.length - 1);
    return nums;
};

var quickSort = function(arr, left, right) {
    if (left >= right) {
        return;
    }
    const pivot = arr[Math.floor(left + (right - left) / 2)];
    const index = partition(arr, left, right, pivot);
    quickSort(arr, left, index - 1);
    quickSort(arr, index, right);    
}

var partition = function(arr, left, right, pivot) {
    while (left <= right) {
        while (arr[left] < pivot) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }
        if (left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    return left;
}

var swap = function(arr, left, right) {
    let temp;
    temp = arr[left];
    arr[left] = arr[right]
    arr[right] = temp;
}
