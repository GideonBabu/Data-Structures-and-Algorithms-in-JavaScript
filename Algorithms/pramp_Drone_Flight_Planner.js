/**
 * time: O(n) where n is the number of routes in the given input array
 * space: O(1) as we only use few varibles
 */
function calcDroneMinEnergy(route) {
  // edge case
  if (route.length <= 1) return 0;
  
  let lastZ = route[0][2];
  let minEnergy = 0;
  let curEnergy = 0;
  
  for (let r of route) {
      // going downwards
      if (lastZ >= r[2]) {
        curEnergy += lastZ - r[2];
      } else { // upwards
        let energyNeeded = r[2] - lastZ;
        
        if (curEnergy >= energyNeeded) {
          curEnergy = curEnergy - energyNeeded;
        } else {
          energyNeeded = energyNeeded - curEnergy;
          minEnergy += energyNeeded;        
          curEnergy = 0;          
        }
        
      }
    lastZ = r[2];
  }
  
  return minEnergy;
}

const route = [ [0,   2, 10],
                  [3,   5,  0],
                  [9,  20,  6],
                  [10, 12, 15],
                  [10, 10,  8] ];

console.log(calcDroneMinEnergy(route));
