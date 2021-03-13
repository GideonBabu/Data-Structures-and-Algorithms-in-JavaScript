/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} row, col
 *     @return {integer}
 *     this.get = function(row, col) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 * Time Complexity: O(MLogN) where M is the no. of columns and N is the no. of rows. Log N comes from bineary search we do over the rows
 * Space complexity: O(1) as we are using constant extra space
 */
var leftMostColumnWithOne = function(binaryMatrix) {
    
    
    let rows, cols;
    [rows, cols] = binaryMatrix.dimensions();
    let left = 0;
    let right = cols - 1;
    let result = -1;
    
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        
        if (isColWithOne(mid)) {
            result = mid;
            right = mid - 1;            
        } else {
            left = mid + 1;   
        }
    }
    
    return result;
    
    function isColWithOne(col) {
        for (let row = 0; row < rows; row++) {
            if (binaryMatrix.get(row, col) === 1) {
                return true;   
            }
        }
        
        return false;
    }
    
};

// Another approach

/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} row, col
 *     @return {integer}
 *     this.get = function(row, col) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 * Time complexity: O(M + N) where M and N are no. of rows and cols in the binary Matrix
 * At each step, we're moving 1 step left or 1 step down. Therefore, we'll always finish looking at either one of the M rows or N columns. Therefore, we'll stay in the grid for at most N + MN+M steps, and therefore get a time complexity of O(N + M)O(N+M).
 * Space complexity: O(1) as we are only using constant amount of memory to store the variables
  
 */
var leftMostColumnWithOne = function(binaryMatrix) {            
    [rows, cols] = binaryMatrix.dimensions();
    
    let rowIndex = 0;
    let colIndex = cols - 1;
    let result = -1;
    
    while (rowIndex < rows && colIndex >= 0) {
        if (binaryMatrix.get(rowIndex, colIndex) === 1) {
            result = colIndex;
            colIndex--; // go left
        } else {
            rowIndex++; // go down   
        }
    }
    
    return result;
    
};
