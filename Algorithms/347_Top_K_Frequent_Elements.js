/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();

    for (let n of nums) {
        if (!map.has(n)) {
            map.set(n, 0);            
        }
        map.set(n, map.get(n) + 1);
    }

    let n = map.size;
    let unique = new Array(n);
    let i = 0;
    for (let num of map.keys()) {
        unique[i] = num;
        i++;
    }

    quickSelect(unique, 0, n - 1, n - k, map);    

    return unique.slice(n - k, n);
};

function quickSelect(list, left, right, k, map) {
    if (left === right) {
        return;
    }
    
    let randomPivot = getRandom(left, right);
    let pivotIndex = partition(list, left, right, randomPivot, map);

    if (pivotIndex === k) {
        return;
    } 

    if (k < pivotIndex) {
        return quickSelect(list, left, pivotIndex - 1, k, map);
    }

    return quickSelect(list, pivotIndex + 1, right, k, map);
}

function partition(list, left, right, pivotIndex, map) {

    let pivotVal = map.get(list[pivotIndex]);
    let storeIndex = left;

    // move the pivot to the end
    swap(pivotIndex, right);

    for (let i = left; i <= right - 1; i++) {
        if (map.get(list[i]) < pivotVal) {
            swap(i, storeIndex);
            storeIndex++;
        }
    }

    // Move pivot to its final place
    swap(storeIndex, right);

    return storeIndex;

    // helper function to swap the values in the list
    function swap(i, j) {
        let temp = list[i];
        list[i] = list[j];
        list[j] = temp;
    }
}

function getRandom(min, max) {
    // to include max value in the random range
    max = max + 1;    
    return Math.floor((Math.random() * (max - min) + min));
}
