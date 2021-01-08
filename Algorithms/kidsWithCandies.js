/**
 * https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 * Time O(n) where n is the number of items in candies array
 * Space O(n) to store the result in an array of size n
 */
var kidsWithCandies = function(candies, extraCandies) {    
    const maxCandy = findMax(candies);
    const kidsWithMaxCandies = new Array();
    for (let i = 0; i < candies.length; i++) {
        let greatest = false;
        if (candies[i] + extraCandies >= maxCandy) {
            greatest = true;
        }
        kidsWithMaxCandies.push(greatest);
    }
    return kidsWithMaxCandies;
};

function findMax(arr) {
    let max = Number.MIN_SAFE_INTEGER;    
    for (const val of arr) {
        if (val > max) {
            max = val;
        }
    }    
    return max;
}

