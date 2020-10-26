function towerOfHanoi(n, a, b, c) {
  let result = [];
  towerOfHanoiR(n, a, b, c, result)
  return result;
}

function towerOfHanoiR(n, origin, buffer, destination, result) {
  if (n == 1) {
    result.push([origin, destination]);  
    return;
  }

  towerOfHanoiR(n - 1, origin, destination, buffer, result);

  result.push([origin, destination]);

  towerOfHanoiR(n - 1, buffer, origin, destination, result);
}

console.log(towerOfHanoi(3, 'A', 'B', 'C')); 

