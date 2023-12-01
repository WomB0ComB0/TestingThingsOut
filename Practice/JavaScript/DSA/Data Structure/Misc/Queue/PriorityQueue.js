class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    getLeftChildrenIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }

    getRightChildrenIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    hasParent(childIndex) {
        return this.getParentIndex(childIndex) >= 0;
    }

    hasLeftChild(parentIndex) {
        return this.getLeftChildrenIndex(parentIndex) < this.heap.length;
    }

    hasRightChild(parentIndex) {
        return this.getRightChildrenIndex(parentIndex) < this.heap.length;
    }

    leftChild(parentIndex) {
        return this.heap[this.getLeftChildrenIndex(parentIndex)];
    }

    rightChild(parentIndex) {
        return this.heap[this.getRightChildrenIndex(parentIndex)];
    }

    parent(childIndex) {
        return this.heap[this.getParentIndex(childIndex)];
    }

    swap(indexOne, indexTwo) {
        const temp = this.heap[indexOne];
        this.heap[indexOne] = this.heap[indexTwo];
        this.heap[indexTwo] = temp;
    }

    peek() {
        if (this.heap.length == 0)
            return null;
        return this.heap[0];
    }

    remove() {
        if (this.heap.length == 0)
            return null;
        const item = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return item;
    }

    add(item) {
        this.heap.push(item);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildrenIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
                smallerChildIndex = this.getRightChildrenIndex(index);
            }

            if (this.heap[index] < this.heap[smallerChildIndex]) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }
}

// Creating The Priority Queue
var PriQueue = new PriorityQueue();
 
// Adding the Elements
PriQueue.add(32);
PriQueue.add(45);
PriQueue.add(12);
PriQueue.add(65);
PriQueue.add(85);
 
 
console.log(PriQueue.peek());
console.log(PriQueue.remove());
console.log(PriQueue.peek());
console.log(PriQueue.remove());
console.log(PriQueue.peek());
console.log(PriQueue.remove());