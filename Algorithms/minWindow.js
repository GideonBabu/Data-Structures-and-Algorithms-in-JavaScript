/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    
    if (s.length === 0 || t.length === 0 || s.length < t.length) {
        return '';
    }
        
    let left = 0;
    let right = 0;
    
    let currentWindowMap = new Map();
    let numMatchedChars = 0;
    
    // [currentLeft, currentRight, length of the current Minimum Window]
    let currentMinWindow = [0, s.length - 1, Number.MAX_SAFE_INTEGER];
    
    const tToMap = createCharMap(t);
    
    while (right < s.length) {
        
        const char = s.charAt(right);
        
        if (currentWindowMap.has(char)) {
            currentWindowMap.set(char, currentWindowMap.get(char) + 1);
        } else {
            currentWindowMap.set(char, 1);
        }
        
        if (tToMap.has(char) && tToMap.get(char) === currentWindowMap.get(char)) {
            numMatchedChars++;
        }
        
        while (numMatchedChars === tToMap.size && left <= right) {
            if (right - left < currentMinWindow[2]) {                
                currentMinWindow = [left, right, right - left];
            }
            
            const charAtLeft = s.charAt(left);
            currentWindowMap.set(charAtLeft, currentWindowMap.get(charAtLeft) - 1);
            
            if (tToMap.has(charAtLeft) && tToMap.get(charAtLeft) > currentWindowMap.get(charAtLeft)) {
                numMatchedChars--;
            }
            left++;
        }
        right++;
    }
    
    if (currentMinWindow[2] === Number.MAX_SAFE_INTEGER) {
        return '';
    }
    
    return s.slice(currentMinWindow[0], currentMinWindow[1] + 1);
    
    function createCharMap(string) {
        const map = new Map();
        for (let char of string) {
            if (map.has(char)) {
                map.set(char, map.get(char) + 1);
            } else {
                map.set(char, 1);
            }
        }
        return map;
    }
};

