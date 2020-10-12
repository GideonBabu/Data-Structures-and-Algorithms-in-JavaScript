/**
 * Magic Index: Find a magic index in a array of sorted numbers where A[i] = i
 */

const findMagicIndex = function(arr) {  
  return findMagicIndexR(arr, 0, arr.length - 1);
}

/**
 * binary search approach 
 * Time - O(logN)
 * 
 */
function findMagicIndexR(arr, start, end) {  
  if (end < start) {
    return -1;
  }
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === mid) {    
    return mid;
  } else if (arr[mid] > mid) {
    return findMagicIndexR(arr, start, mid - 1);
  } else {
    return findMagicIndexR(arr, mid + 1, end);
  }  
}

console.log(findMagicIndex([-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13]));
