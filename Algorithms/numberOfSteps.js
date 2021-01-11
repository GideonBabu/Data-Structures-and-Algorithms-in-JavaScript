/**
 * https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
 * @param {number} num
 * @return {number}
 * time O(log n)
 * space O(1)
 */
var numberOfSteps  = function(num) {
    let steps = 0;
    while (num) {
        if (num % 2 === 0) {
            num /= 2;
            steps++;
        } else {
            num--;
            steps++;
        }
    }
    return steps;
};
