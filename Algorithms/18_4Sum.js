/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 * time: O(N ^ 3) n is the size of the arr
 * space: O(1) 
 */
var fourSum = function(arr, target) {
    const n = arr.length;
  
  //edge cases: array length is lesser than 4 return empty  
  if (n < 4) return [];
  
  // sort the arr in ascending order
  arr.sort((a, b) => a - b);
  let uniqueQuadruplets = new Array();

  for (let i = 0; i < n - 3; i++) {
    for (let j = i + 1; j < n - 2; j++) {
      
      let start = j + 1;
      let end = n - 1;
      
      while (start < end) {       	
        let sum = arr[i] + arr[j] + arr[start] + arr[end];
        if (sum === target) {
            uniqueQuadruplets.push([arr[i], arr[j], arr[start], arr[end]]);
            while (arr[start] === arr[start + 1]) start++;
            while (arr[end] === arr[end - 1]) end--;            
            start++;
            end--;
        } else if (sum < target) start++;
        else if (sum > target) end--;        
      }        
      while (arr[j] === arr[j+1]) j++;
    }
    while (arr[i] === arr[i+1]) i++;
  }
  
  return uniqueQuadruplets;
};
