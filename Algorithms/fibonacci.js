// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n){
    let arr = [0, 1];
    for (let i = 2; i <= n; i++) {
      arr.push(arr[i-1] + arr[i-2]);
    }
    return arr[n];
}
fibonacciIterative(3);

let calc = 0;
function fibonacciRecursive(n) {
	calc++;
    if (n < 2) {
      return n;
    }
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
 }
  
//fibonacciRecursive(8);
//fibonacciIterative(8);

let calcDP = 0;
// Time Complexity: O(n)
// memoization/dynamic programming
function fibonacciDP() {
	let cache = {};
	
	return function fib(n) {
		calcDP++;
		if (n in cache) {
			return cache[n];
		}
		if (n < 2) {
			cache[n] = n;
			return n;
		}
		cache[n] = fib(n -1) + fib (n - 2);
		return cache[n];
	}
}

console.log('slow fibonacci ', fibonacciRecursive(35));
console.log('we did ' + calc + ' calculations');
const fasterFib = fibonacciDP();
console.log('DP ', fasterFib(35));
console.log('we did ' + calcDP + ' calculations');