/**
 * https://leetcode.com/problems/permutations-ii/
 * @param {number[]} nums
 * @return {number[][]}
 * Time O(n!)
 * Space O(n) to store the nums in hashtable 
 */
var permuteUnique = function(nums) {
    const result = [];
    const map = buildFreqTable(nums);
    getPerms(map, [], nums.length, result);
    return result;
};

var buildFreqTable = function(nums) {
    const map = new Map();
    for (let n of nums) {   
        if (!map.has(n)) {          
            map.set(n, 0);
        } 
        map.set(n, map.get(n) + 1);        
    }
    return map;
};

var getPerms = function(map, prefix, remainder, result) {
    if (remainder === 0) {
        result.push(prefix);
        return;
    }
    
    for (let [key, value] of map) { 
        const count = value;
        if (count > 0) {
            map.set(key, count - 1);         
            getPerms(map, [...prefix, key], remainder - 1, result);
            map.set(key, count);
        }
    }
};
