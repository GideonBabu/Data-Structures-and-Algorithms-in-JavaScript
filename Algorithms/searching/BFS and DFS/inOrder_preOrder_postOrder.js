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
	
	/**
	 * breadth first search in a recursive manner
	 * @param {*} queue
	 * @param {*} list
	 */
    breadthFirstSearchR(queue, list) {

		if (!queue.length) {
			return list;
		}

		let currentNode = queue.shift();
		
		list.push(currentNode.value);

		if (currentNode.left) {
			queue.push(currentNode.left);

		}
		if (currentNode.right) {
			queue.push(currentNode.right);
		}

		return this.breadthFirstSearchR(queue, list);
	}

	inOrder(node, list) {
		if (node.left) {
			this.inOrder(node.left, list);
		}
		list.push(node.value);
		if (node.right) {
			this.inOrder(node.right, list);
		}
		return list;
	}

	preOrder() {
		list.push(node.value);
		if (node.left) {
			this.preOrder(node.left, list);
		}
		if (node.right) {
			this.preOrder(node.right, list);
		}
		return list;
	}

	postOrder(node, list) {
		if (node.left) {
			this.postOrder(node.left, list);
		}
		if (node.right) {
			this.postOrder(node.right, list);
		}
		list.push(node.value);
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
//tree.breadthFirstSearchR([tree.root], [])
console.log('inOrder ' + tree.inOrder(tree.root, []));
console.log('preOrder ' + tree.preOrder(tree.root, []));
console.log('postOrder ' + tree.postOrder(tree.root, []));

//JSON.stringify(traverse(tree.root));
//tree.lookup(170);

//     9
//  4     20
//1  6  15  170

// inorder - [1, 4, 6, 9, 15, 20, 170]
// preorder - [9, 1, 4, 6, 20, 15, 170]
// postorder - [1, 6, 4, 15, 170, 20, 9]

function traverse(node) {
	const tree = { value: node.value };
	tree.left = node.left === null ? null : traverse(node.left);
	tree.right = node.right === null ? null : traverse(node.right);
	return tree;
}