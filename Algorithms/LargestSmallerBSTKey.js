/** 
 * Time Complexity: we scan the tree once from the root to the the leaves and do a constant number of actions for each node. if the tree is balanced the    complexity is O(log(N)). Otherwise, it could be up to O(N).
Space Complexity: throughout the entire algorithm we used only a constant amount of space, hence the space complexity is O(1).
 */
var findLargestSmallerKey = function(root, num) {        
  let currentNode = root;
  let largest = -1;
  
  while (currentNode != null) {
    if (currentNode.key > num) {
      currentNode = currentNode.left;
    } else if (currentNode.key < num) {
      largest = currentNode.key;
      currentNode = currentNode.right;      
    } else {
      return largest;
    }
  }
  
  return largest;  
}
