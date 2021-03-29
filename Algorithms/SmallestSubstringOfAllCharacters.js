// https://www.pramp.com/challenge/wqNo9joKG6IJm67B6z34
// N size of the arr
// M length of the str
// time: O(N + M)
// space: O(N) to store the N keys in the hash table/map
function getShortestUniqueSubstring(arr, str) {
  
  // edge case
  if (str.length < arr.length) return "";
    
  let countMap = new Map();
  let headIndex = 0;
  let shortest = "";
  let matchedCounter = 0;
  
  for (const char of arr) {
    countMap.set(char, 0);
  }
  
  for (let tailIndex = 0; tailIndex < str.length; tailIndex++) {
    let tailChar = str.charAt(tailIndex);
    
    if (!countMap.has(tailChar)) continue;
    
    let tailCount = countMap.get(tailChar);
    
    if (tailCount === 0) {
      matchedCounter = matchedCounter + 1;
    }
    
    countMap.set(tailChar, tailCount + 1);
    
    while (matchedCounter === arr.length) {
      // calc the current length
      let currLength = tailIndex - headIndex + 1;

      // if this is equals to arr length, this is the shortest we can make return this string
      if (currLength === arr.length) return str.slice(headIndex, tailIndex + 1);
      
      // if this length is lesser than the length we have seen so far update
      if (shortest === "" || currLength < shortest.length) {
        shortest = str.slice(headIndex, tailIndex + 1);
      }
      
      // try shrinking the window by incrementing the headIndex
      let headChar = str.charAt(headIndex);
      
      if (countMap.has(headChar)) {
        let headCount = countMap.get(headChar) - 1;
        
        if (headCount === 0) {
          matchedCounter--;
        }
        countMap.set(headChar, headCount);
      }
      headIndex++;
    }
  }
  
  return shortest;
}

const arr = ['x','y','z'], str = "xyyzyzyx";
console.log(getShortestUniqueSubstring(arr, str));


/**

input: arr = ['x','y','z'], str = "xyyabczyzyx"

assumptions: all in English lowercase

output: string

min = 3
str = zyx

|-----|
xyyabczyzyx
------

{
x: 1
y: 2
a: 1
b: 1
c: 1
z: 
}

currentMatchedCount = 2

[x, y]


{
x: 1
y: 3

}

    |-|
"xyyyzxyx"
 -----

N - length of the str
M - size of the array

time: O(N * M) where n is the length of the str
space: O(N + M) 
**/
