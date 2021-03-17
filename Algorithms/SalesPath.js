function getCheapestCost(rootNode) {
  let children = rootNode.children;
  if (children.length === 0) {
    return rootNode.cost;
  }
  
  let minCost = Number.MAX_SAFE_INTEGER;
  
  for (const child of children) {
    let tempMin = getCheapestCost(child);
    
    if (tempMin < minCost) {
      minCost = tempMin;
    }
  }
  
  return minCost + rootNode.cost;
}

let root = new Node(0);
root.children = [new Node(5), new Node(3), new Node(6)];
root.children[0].children = [new Node(4)];
root.children[1].children = [new Node(2), new Node(0)];
root.children[2].children = [new Node(6)];
root.children[1].children[0].children = [new Node(1)];
root.children[1].children[0].children[0].children = [new Node(1)];
root.children[1].children[1].children = [new Node(10)];
root.children[2].children[0].children = [new Node(1), new Node(5)];

console.log(getCheapestCost(root));
/*

5 , 3, 6

CC = 0 + 0 + 5 + 4
MC = 5


*/

/******************************************
 * Use the helper code below to implement *
 * and test your function above           *
 ******************************************/ 

// Constructor to create a new Node
function Node(cost) {
  this.cost = cost;
  this.children = [];
}

