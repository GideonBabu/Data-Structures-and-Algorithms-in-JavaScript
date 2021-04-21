class MinHeap {
    constructor() {
        this.size = 0;
        this.items = new Array();        
    }

    getLeftIndex(parentIndex) { return parentIndex * 2 + 1; }
    getRightIndex(parentIndex) { return parentIndex * 2 + 2; }
    getParentIndex(childIndex) { return Math.floor((childIndex - 1) / 2)}

    hasLeftChild(parentIndex) { return this.getLeftIndex(parentIndex) < this.size; }
    hasRightChild(parentIndex) { return this.getRightIndex(parentIndex) < this.size; }
    hasParent(childIndex) { return this.getParentIndex(childIndex) >= 0; }

    leftChild(index) { return this.items[this.getLeftIndex(index)]; }
    rightChild(index) { return this.items[this.getRightIndex(index)]; }
    parent(index) {return this.items[this.getParentIndex(index)]; }

    peek() {
        if (this.size === 0) {
            throw new Error('MinHeap is empty. Illegal call to peek');
        }

        return this.items[0];
    }

    poll() {
        let itemToPoll = this.items[0];
        this.swap(0, this.size - 1);
        // removes the last item from the array        
        this.items.pop(); 
        this.size--;
        this.heapifyDown();
        return itemToPoll;
    }

    add(item) {
        // todo: check for extra capacity
        this.items[this.size] = item;
        this.size++;        
        this.heapifyUp();
    }

    heapifyDown() {
        let index = 0;

        while (this.hasLeftChild(index)) {            
            let smallerIndex = this.getLeftIndex(index);            
            if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {                
                smallerIndex = this.getRightIndex(index);
            }

            if (this.items[index] < this.items[smallerIndex]) {
                break;
            } else {
                this.swap(index, smallerIndex);
            }            
            index = smallerIndex;
        }        
    }

    heapifyUp() {
        let index = this.size - 1;        
        while (this.hasParent(index) && this.items[index] < this.parent(index)) {            
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);            
        }
    }

    swap(indexOne, indexTwo) {
        let temp = this.items[indexOne];
        this.items[indexOne] = this.items[indexTwo];
        this.items[indexTwo] = temp;
    }

    getItems() {        
        return this.items;
    }
}

const mH = new MinHeap();
mH.add(10);
mH.add(5);
mH.add(2);
mH.add(15);
mH.poll()
mH.add(4);
console.log(mH.getItems());

