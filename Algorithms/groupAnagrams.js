/**
 * https://leetcode.com/problems/group-anagrams/
 * @param {string[]} strs
 * @return {string[][]}
 * Time O(nmlogm) where n is the total no. of the strings in the given array of strs
 * m is the longest word in the strings array 
 * mlogm is for sorting each string alphabetically
 */
var groupAnagrams = function(strs) {
    const grouped = new Array();
    const map = new Map();
    
    for (const str of strs) {
        const sorted = sortAlpha(str);
        if (!map.has(sorted)) {
            map.set(sorted, new Array());            
        }
        map.get(sorted).push(str);   
                
    }
    
    for (const val of map.values()) {
        grouped.push(val);
    }
    
    return grouped;
};

var sortAlpha = function(str) {
  return str.split('').sort().join('')  
};
