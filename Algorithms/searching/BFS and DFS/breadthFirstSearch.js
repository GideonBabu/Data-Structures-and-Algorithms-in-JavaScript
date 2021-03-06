/**
 * Binary Search Tree Data Structure implementation in JavaScript
 */

// a simple class to create nodes for Trees
class Node {
	constructor(value){
		this.left = null;
		this.right = null;
		this.value = value;
	}
}

// main Binary Search Tree class
class BinarySearchTree {
	constructor(){
		this.root = null;
	}
	
	// insert method to add new node to the tree
	// O(log N)
	insert(value){
		// todo: validate the input
		
		const newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
		} else {
			let trav = this.root;
			while (true) {
				// left
				if (value < trav.value) {
					if (!trav.left) {
						trav.left = newNode;
						return this;
					}
					trav = trav.left;
				} else {
					// right
					if (!trav.right) {
						trav.right = newNode;
						return this;
					}
					trav = trav.right;
				}
			}
		}
		return this;
	}
	
	// search through the tree to find if the value exists in the tree nodes
	// O(log N)
	lookup(value) {
		// todo: validate the input
		
		let trav = this.root;
		while (true) {
			if (trav === null) {
				return false;
			} else if (trav.value === value) {
				return trav;
			} else if (trav.value < value) {
				trav = trav.right;
			} else {
				trav = trav.left;
			}
		}
		return false;		
	}
	
	remove(value) {
		
    }
    
    breadthFirstSearch() {
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);

        while (queue.length) {
            currentNode = queue.shift();
            list.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return list;
    }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1);

//JSON.stringify(traverse(tree.root));
//tree.lookup(170);

//     9
//  4     20
//1  6  15  170

function traverse(node) {
	const tree = { value: node.value };
	tree.left = node.left === null ? null : traverse(node.left);
	tree.right = node.right === null ? null : traverse(node.right);
	return tree;
}