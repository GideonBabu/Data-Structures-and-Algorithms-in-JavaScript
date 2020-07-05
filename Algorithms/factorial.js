// Write two functions that finds the factorial of any number. 
// One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
    if (number === 1) {
        return 1;
    }
    return number * findFactorialRecursive(number - 1);
}
  
function findFactorialIterative(number) {
    let factorial = 1;
    for (let i = number; i >= 2; i--) {
      factorial *= i;
    }
    return factorial;
  }
  
  findFactorialRecursive(5);
  findFactorialIterative(5);