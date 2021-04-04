/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * time: O(N log N/K) where k is the width of the tree or k is the number of colums max in the result
 * space: O(N) where is the number of nodes in the tree
 */
var verticalTraversal = function(root) {
    let vertical = new Array();
    if (root === null) return vertical;
    
    let colTable = new Map();
    let minCol = 0, maxCol = 0;
    
    const BST = function(root) {
        let queue = new Array();        
        queue.push([root, 0, 0]);
        
        while (queue.length) {
            let [node, row, col] = queue.shift();
            
            if (node) {
                if (!colTable.has(col)) {
                    colTable.set(col, new Array());   
                }
                colTable.get(col).push([row, node.val]);     
                minCol = Math.min(minCol, col);
                maxCol = Math.max(maxCol, col);
                queue.push([node.left, row + 1, col - 1]);
                queue.push([node.right, row + 1, col + 1]);                
            }
        }
    };
    
    BST(root);    
    
    for (let col = minCol; col <= maxCol; col++) {
        colTable.get(col).sort((a, b) => {
            if (a[0] === b[0]) return a[1] - b[1];
            else return a[0] - b[0];
        });
        
        
        let sortedCol = new Array();
        
        for (const pair of colTable.get(col)) {
            sortedCol.push(pair[1]);   
        }

        vertical.push(sortedCol);
    }
    
    return vertical;
};
