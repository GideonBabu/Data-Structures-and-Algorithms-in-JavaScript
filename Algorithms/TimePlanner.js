function meetingPlanner(slotsA, slotsB, dur) {
  // base case
  // todo: validate the input slotsA and slotsB for empty or single intervals
  // time O(N + M) where N and M are lengths of slotsA and slotsB respectively
  // space O(1) as we only need constant amount of variables for the algorithm
  let output = new Array();
  
  let i = 0;
  let j = 0;
  
  while (i < slotsA.length && j < slotsB.length) {
    
    const slotA = slotsA[i];
    const slotB = slotsB[j];
    
    const start = Math.max(slotA[0], slotB[0]);
    const end = Math.min(slotA[1], slotB[1]);
    
    const duration = end - start;
    
    if (dur <= duration) {
      return [start, start + dur];
    }
    
    if (slotA[1] < slotB[1]) {
      i++;
    } else {
      j++;
    }
  }
  
  return output; 
  
}

const slotsA = [[1, 10]],
        slotsB = [[2, 3], [5, 7]],
        dur = 2;

console.log(meetingPlanner(slotsA, slotsB, dur));

/**

                p
[[10, 50], [60, 120], [140, 210]]
                q
[[0, 15], [55, 70]]

// time O(A * B) -> O(A Log B)  -> O(A + B)
// space O(1)

  slotsA = [[10, 50], [60, 120], [140, 210]]
        slotsB = [[0, 15], [60, 70]]

**/
