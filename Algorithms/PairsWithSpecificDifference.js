// time: O(N Log N) in the worst case for hashtable lookup and O(N) in the average case
// space: O(N) to for the ouput variable and hahstable will also hold N elements 2N equivalent to N in Big O
function findPairsWithGivenDifference(arr, k) {
  // edge cases
  if (arr.length === 0 || arr.length === 1) return [];
  
  if (k === 0) return [];
  
  const map = new Map();
  const pairs = new Array();
  
  for (const num of arr) {
    map.set(num - k, num);
  }
  
  for (const num of arr) {    
    if (map.has(num)) {
      pairs.push([map.get(num), num]);      
    }    
  }
  
  return pairs;
}

const arr = [0, -1, -2, 2, 1], k = 1;

console.log(findPairsWithGivenDifference(arr, k));

/**

[0, -1, -2, 2, 1]

-1: 0
-2: -1
-3: -2
1: 2
0: 1


set {
  -1
  -2
}
x - k = x
[0, -1], [-1, -2], [2, 1], [1, 0] 


{
-1: 0
-2: 1
-3: 2
1: 3
0: 4
}


0 - 1 => -1

arr = [0, -1, -2, 2, 1], k = 1
       i
0 - 1 = -1

[[1, 0], [0, -1], [-1, -2], [2, 1]]

input: integer array - distinct values
k - difference

O: array or pairs or empty array



1
2 - 1



O(n + n) -> O(n)

**/
