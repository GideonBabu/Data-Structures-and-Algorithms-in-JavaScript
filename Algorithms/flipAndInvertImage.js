/**
 * https://leetcode.com/problems/flipping-an-image/
 * @param {number[][]} A
 * @return {number[][]}
 * time O(nm) where n is the no of rows in the given image array
 * m is the maximum element in the rows
 * space O(1)
 */
var flipAndInvertImage = function(A) {
    // reverse the boolean arrays
    for (const box of A) {        
        const mid = Math.floor((box.length - 1) / 2);        
        for (let i = 0; i <= mid; i++) {
            const offset = box.length - 1 - i;        
            swap(box, i, offset);      
        }        
    }

    for (const box of A) {
        for (let i = 0; i < box.length; i++) {
            invert(box, i);
        }
    }
    
    return A;
};

var swap = function(box, i, j) {
    const temp = box[i];
    box[i] = box[j];
    box[j] = temp;
};

var invert = function(box, index) {
    box[index] = box[index] ? 0 : 1;
};
