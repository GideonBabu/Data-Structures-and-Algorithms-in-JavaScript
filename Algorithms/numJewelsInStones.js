/**
 * https://leetcode.com/problems/jewels-and-stones/
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 * Time - O(n) where n is the no. of characters in stones
 * we take only the iteration of stones because jewels gonna have
 * only unique characters that's definitely will be lesser than stones length
 * At max it will have 52 characters as we are dealing with English alphabets and
 * case sensitive
 * Space - O(1) as hash table will not go beyond 52 so it is again constant
 * @author Gideon Babu https://www.linkedin.com/in/gideon-babu/
 */
var numJewelsInStones = function(jewels, stones) {
    const map = new Map();    
    for (let i = 0; i < stones.length; i++) {
        const stone = stones.charAt(i);
        if (map.has(stone)) {
            map.set(stone, map.get(stone) + 1);
        } else {
            map.set(stone, 1);
        }
    }
    let jewelsInStones = 0;
    for (let j = 0; j < jewels.length; j++) {
        const jewel = jewels.charAt(j);
        
        if (map.has(jewel)) {
            jewelsInStones += map.get(jewel);
        }
    }
    return jewelsInStones;
};
