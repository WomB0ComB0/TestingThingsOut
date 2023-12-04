/**
 * UnionFind class represents a data structure for disjoint-set (union-find) operations.
 * @class
 * @param {Array} elements - An array of elements to initialize the disjoint sets.
 */
class UnionFind {
  constructor(elements) {
    // Parent mapping for each element
    this.parent = {};

    // Initialize each element as its own parent
    elements.forEach(e => (this.parent[e] = e));
  }

  /**
   * Unions two sets by updating the parent of the representative element of set a to the representative element of set b.
   * @param {*} a - Element from the first set.
   * @param {*} b - Element from the second set.
   */
  union(a, b) {
    this.parent[this.find(a)] = this.find(b);
  }

  /**
   * Finds the representative element of the set to which the given element belongs.
   * @param {*} a - The element to find.
   * @returns {*} - The representative element of the set.
   */
  find(a) {
    while (this.parent[a] !== a) {
      a = this.parent[a];
    }

    return a;
  }

  /**
   * Checks if two elements are in the same set.
   * @param {*} a - First element.
   * @param {*} b - Second element.
   * @returns {boolean} - True if both elements are in the same set, false otherwise.
   */
  connected(a, b) {
    return this.find(a) === this.find(b);
  }
}

// _____________________________________________________________

/**
 * Performs binary search on a sorted array to find the index of a specific value.
 * @param {Array} arr - The sorted array.
 * @param {*} val - The value to search for.
 * @returns {number} - The index of the value if found, otherwise -1.
 */
function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (arr[mid] !== val && left <= right) {
    if (val < arr[mid]) right = mid - 1;
    else left = mid + 1;
    mid = Math.floor((left + right) / 2);
  }

  return arr[mid] === val ? mid : -1;
}

// _____________________________________________________________

/**
 * Swaps elements at two given indices in an array.
 * @param {Array} arr - The array.
 * @param {number} i - Index of the first element to swap.
 * @param {number} j - Index of the second element to swap.
 */
function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// _____________________________________________________________

/**
 * Merges two sorted arrays into a single sorted array.
 * @param {Array} left - The left sorted array.
 * @param {Array} right - The right sorted array.
 * @returns {Array} - The merged sorted array.
 */
function merge(left, right) {
  let arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return [...arr, ...left, ...right];
}

// _____________________________________________________________

/**
 * Deque class represents a double-ended queue.
 * @class
 */
class Deque {
  constructor() {
    // Internal array to store elements
    this.deque = [];
  }

  /**
   * Adds an element to the front of the deque.
   * @param {*} element - The element to add.
   */
  addFront(element) {
    this.deque.unshift(element);
  }

  /**
   * Adds an element to the rear of the deque.
   * @param {*} element - The element to add.
   */
  addRear(element) {
    this.deque.push(element);
  }

  /**
   * Removes and returns the element from the front of the deque.
   * @returns {*} - The element removed from the front.
   */
  removeFront() {
    if (!this.isEmpty()) {
      return this.deque.shift();
    }
    return null;
  }

  /**
   * Removes and returns the element from the rear of the deque.
   * @returns {*} - The element removed from the rear.
   */
  removeRear() {
    if (!this.isEmpty()) {
      return this.deque.pop();
    }
    return null;
  }

  /**
   * Returns the element at the front of the deque without removing it.
   * @returns {*} - The element at the front.
   */
  getFront() {
    if (!this.isEmpty()) {
      return this.deque[0];
    }
    return null;
  }

  /**
   * Returns the element at the rear of the deque without removing it.
   * @returns {*} - The element at the rear.
   */
  getRear() {
    if (!this.isEmpty()) {
      return this.deque[this.size() - 1];
    }
    return null;
  }

  /**
   * Checks if the deque is empty.
   * @returns {boolean} - True if the deque is empty, false otherwise.
   */
  isEmpty() {
    return this.deque.length === 0;
  }

  /**
   * Returns the number of elements in the deque.
   * @returns {number} - The size of the deque.
   */
  size() {
    return this.deque.length;
  }
}

// _____________________________________________________________

/**
 * Queue class represents a basic queue data structure.
 * @class
 */
class Queue {
  constructor() {
    // Internal object to store items
    this.items = {};
    // Front and back indices
    this.frontIndex = 0;
    this.backIndex = 0;
  }

  /**
   * Enqueues an element into the queue.
   * @param {*} element - The element to enqueue.
   * @returns {string} - A message indicating the element insertion.
   */
  enqueue(element) {
    const item = this.items[this.backIndex] = element;
    this.backIndex++;
    return item + ' inserted';
  }

  /**
   * Dequeues an element from the front of the queue.
   * @returns {string} - A message indicating the element removal.
   */
  dequeue() {
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item + ' removed';
  }

  /**
   * Returns the element at the front of the queue without removing it.
   * @returns {*} - The element at the front.
   */
  peek() {
    return this.items[this.frontIndex];
  }

  /**
   * Returns the internal representation of the queue.
   * @returns {Object} - The items in the queue.
   */
  get printQueue() {
    return this.items;
  }

  /**
   * Checks if the queue is empty.
   * @returns {boolean} - True if the queue is empty, false otherwise.
   */
  get isEmpty() {
    return this.frontIndex === this.backIndex;
  }
}

// _____________________________________________________________

/**
 * Stack class represents a basic stack data structure.
 * @class
 */
class Stack {
  constructor() {
    // Internal array to store items
    this.items = [];
  }

  /**
   * Pushes an element onto the stack.
   * @param {*} element - The element to push.
   */
  push(element) {
    this.items.push(element);
  }

  /**
   * Pops and returns the element from the top of the stack.
   * @returns {*} - The element popped from the stack.
   */
  pop() {
    if (this.items.length == 0)
      return "Underflow";
    return this.items.pop();
  }

  /**
   * Returns the element at the top of the stack without removing it.
   * @returns {*} - The element at the top.
   */
  peek() {
    return this.items[this.items.length - 1];
  }

  /**
   * Checks if the stack is empty.
   * @returns {boolean} - True if the stack is empty, false otherwise.
   */
  isEmpty() {
    return this.items.length == 0;
  }

  /**
   * Returns a string representation of the stack.
   * @returns {string} - The elements of the stack as a string.
   */
  printStack() {
    var str = "";
    for (var i = 0; i < this.items.length; i++)
      str += this.items[i] + " ";
    return str;
  }
}

// _____________________________________________________________

/**
 * Node class representing a node in a linked list.
 * @class
 */
class Node {
  /**
   * Initializes a new node with the given element.
   * @constructor
   * @param {*} element - The element of the node.
   */
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

/**
 * LinkedList class representing a linked list data structure.
 * @class
 */
class LinkedList {
  /**
   * Initializes an empty linked list.
   * @constructor
   */
  constructor() {
    this.head = null;
    this.size = 0;
  }

  /**
   * Adds an element at the end of the linked list.
   * @param {*} element - The element to add.
   */
  add(element) {
    var node = new Node(element);
    var current;

    if (this.head == null) this.head = node;
    else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  /**
   * Inserts an element at the specified position in the linked list.
   * @param {*} element - The element to insert.
   * @param {number} index - The position at which to insert the element.
   */
  insertAt(element, index) {
    if (index < 0 || index > this.size)
      return console.log('Please enter a valid index.');
    else {
      var node = new Node(element);
      var curr, prev;

      curr = this.head;

      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        var it = 0;

        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }

  /**
   * Removes the element at the specified position in the linked list.
   * @param {number} index - The position of the element to remove.
   * @returns {*} - The removed element.
   */
  removeFrom(index) {
    if (index < 0 || index >= this.size)
      return console.log('Please Enter a valid index');
    else {
      var curr, prev, it = 0;
      curr = this.head;
      prev = curr;

      if (index === 0) {
        this.head = curr.next;
      } else {
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        prev.next = curr.next;
      }
      this.size--;

      return curr.element;
    }
  }

  /**
   * Removes the first occurrence of a given element from the linked list.
   * @param {*} element - The element to remove.
   * @returns {*} - The removed element, or -1 if not found.
   */
  removeElement(element) {
    var current = this.head;
    var prev = null;

    while (current != null) {
      if (current.element === element) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.element;
      }
      prev = current;
      current = current.next;
    }
    return -1;
  }

  /**
   * Finds the index of a given element in the linked list.
   * @param {*} element - The element to find.
   * @returns {number} - The index of the element, or -1 if not found.
   */
  indexOf(element) {
    var count = 0;
    var current = this.head;

    while (current != null) {
      if (current.element === element)
        return count;
      count++;
      current = current.next;
    }
    return -1;
  }

  /**
   * Checks if the linked list is empty.
   * @returns {boolean} - True if the linked list is empty, false otherwise.
   */
  isEmpty() {
    return this.size == 0;
  }

  /**
   * Returns the size of the linked list.
   * @returns {number} - The size of the linked list.
   */
  size_of_list() {
    console.log(this.size);
  }

  /**
   * Prints the elements of the linked list.
   */
  printList() {
    var curr = this.head;
    var str = '';
    while (curr) {
      str += curr.element + ' ';
      curr = curr.next;
    }
    console.log(str);
  }
}

// _____________________________________________________________

/**
 * Class representing a Node in a Binary Search Tree.
 */
class Node {
  /**
   * Create a new node with the given data.
   * @param {*} data - The data for the new node.
   */
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Class representing a Binary Search Tree.
 */
class BinarySearchTree {
  /**
   * Create a BinarySearchTree instance with an optional initial root.
   */
  constructor() {
    // root of a binary search tree
    this.root = null;
  }

  /**
   * Insert a new node with the given data into the tree.
   * @param {*} data - The data for the new node.
   */
  insert(data) {
    // Creating a node and initializing with data 
    var newNode = new Node(data);

    // root is null then node will be added to the tree and made root.
    if (this.root === null)
      this.root = newNode;
    else
      // find the correct position in the tree and add the node
      this.insertNode(this.root, newNode);
  }

  /**
   * Helper method to insert a node into the tree.
   * @param {Node} node - The current node being considered.
   * @param {Node} newNode - The new node to be inserted.
   */
  insertNode(node, newNode) {
    // if the data is less than the node data move left of the tree 
    if (newNode.data < node.data) {
      // if left is null insert node here
      if (node.left === null)
        node.left = newNode;
      else
        // if left is not null recur until null is found
        this.insertNode(node.left, newNode);
    }
    // if the data is more than the node data move right of the tree 
    else {
      // if right is null insert node here
      if (node.right === null)
        node.right = newNode;
      else
        // if right is not null recur until null is found
        this.insertNode(node.right, newNode);
    }
  }

  /**
   * Remove a node with the given data from the tree.
   * @param {*} data - The data of the node to be removed.
   */
  remove(data) {
    // root is re-initialized with root of a modified tree.
    this.root = this.removeNode(this.root, data);
  }

  /**
   * Helper method to remove a node from the tree.
   * @param {Node} node - The current node being considered.
   * @param {*} key - The data of the node to be removed.
   * @returns {Node} - The modified subtree after removal.
   */
  removeNode(node, key) {
    // if the root is null then tree is empty
    if (node === null)
      return null;
    // if data to be delete is less than roots data then move to left subtree
    else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    }
    // if data to be delete is greater than roots data then move to right subtree
    else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    }
    // if data is similar to the root's data then delete this node
    else {
      // deleting node with no children
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      // deleting node with one children
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      // Deleting node with two children
      // minimum node of the right subtree is stored in aux
      var aux = this.findMinNode(node.right);
      node.data = aux.data;
      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  /**
   * Perform an inorder traversal of the tree.
   * @param {Node} node - The current node being considered.
   */
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  /**
   * Perform a preorder traversal of the tree.
   * @param {Node} node - The current node being considered.
   */
  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  /**
   * Perform a postorder traversal of the tree.
   * @param {Node} node - The current node being considered.
   */
  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  /**
   * Find the minimum node in the tree starting from the given node.
   * @param {Node} node - The starting node for the search.
   * @returns {Node} - The minimum node found.
   */
  findMinNode(node) {
    // if left of a node is null then it must be the minimum node
    if (node.left === null)
      return node;
    else
      return this.findMinNode(node.left);
  }

  /**
   * Get the root node of the tree.
   * @returns {Node} - The root node of the tree.
   */
  getRootNode() {
    return this.root;
  }

  /**
   * Search for a node with the given data in the tree.
   * @param {Node} node - The current node being considered.
   * @param {*} data - The data to search for.
   * @returns {Node} - The node with the specified data, or null if not found.
   */
  search(node, data) {
    // if the tree is empty return null
    if (node === null)
      return null;
    // if data is less than node's data move left
    else if (data < node.data)
      return this.search(node.left, data);
    // if data is more than node's data move right
    else if (data > node.data)
      return this.search(node.right, data);
    // if data is equal to the node data return node
    else
      return node;
  }
}


// _____________________________________________________________

/**
 * Check the height of a binary tree starting from the given node.
 * @param {TreeNode} node - The root node of the binary tree.
 * @returns {number|boolean} - The height of the binary tree or false if it is not balanced.
 */
const checkHeight = (node) => {
  // Base case: if the node is null, the height is 0
  if (node === null) return 0;

  // Recursively calculate the height of the left and right subtrees
  const left = checkHeight(node.left);
  const right = checkHeight(node.right);

  // If any subtree is not balanced, or the height difference is greater than 1, return false
  if (left === false || right === false || Math.abs(left - right) > 1) {
    return false;
  }

  // Return the height of the current node
  return Math.max(left, right) + 1;
};

/**
 * Check if a binary tree is balanced.
 * @param {TreeNode} root - The root node of the binary tree.
 * @returns {boolean} - True if the binary tree is balanced, false otherwise.
 */
const isBalanced = (root) => {
  // Base case: if the tree is empty, it is considered balanced
  if (root === null) return true;

  // Check the height of the tree and return true if it is not false (i.e., balanced)
  return checkHeight(root) !== false;
};

// _____________________________________________________________

/**
 * Represents a node in a binary search tree.
 * @class
 */
class Node {
  /**
   * Create a node with the given data.
   * @constructor
   * @param {*} data - The data to be stored in the node.
   */
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Represents a Binary Search Tree (BST).
 * @class
 */
class BinarySearchTree {
  /**
   * Create an empty Binary Search Tree.
   * @constructor
   */
  constructor() {
    this.root = null;
  }

  /**
   * Insert a new node with the given data into the BST.
   * @param {*} data - The data to be inserted into the BST.
   */
  insert(data) {
    const newNode = new Node(data);

    if (this.root === null)
      this.root = newNode;
    else
      this.insertNode(this.root, newNode);
  }

  /**
   * Helper method to recursively insert a new node into the BST.
   * @param {Node} node - The current node being considered.
   * @param {Node} newNode - The new node to be inserted.
   */
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null)
        node.left = newNode;
      else
        this.insertNode(node.left, newNode);
    } else {
      if (node.right === null)
        node.right = newNode;
      else
        this.insertNode(node.right, newNode);
    }
  }

  /**
   * Remove a node with the given data from the BST.
   * @param {*} data - The data to be removed from the BST.
   */
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  /**
   * Helper method to recursively remove a node with the given data from the BST.
   * @param {Node} node - The current node being considered.
   * @param {*} key - The data to be removed.
   * @returns {Node} - The modified subtree after removal.
   */
  removeNode(node, key) {
    if (node === null)
      return null;

    if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      const aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  /**
   * Find the node with the minimum value in a given subtree.
   * @param {Node} node - The root node of the subtree.
   * @returns {Node} - The node with the minimum value.
   */
  findMinNode(node) {
    if (node.left === null)
      return node;
    else
      return this.findMinNode(node.left);
  }

  /**
   * Get the root node of the BST.
   * @returns {Node} - The root node of the BST.
   */
  getRootNode() {
    return this.root;
  }

  /**
   * Perform an inorder traversal of the BST.
   * @param {Node} node - The root node of the subtree.
   */
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  /**
   * Perform a preorder traversal of the BST.
   * @param {Node} node - The root node of the subtree.
   */
  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  /**
   * Perform a postorder traversal of the BST.
   * @param {Node} node - The root node of the subtree.
   */
  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  /**
   * Search for a node with the given data in the BST.
   * @param {Node} node - The root node of the subtree.
   * @param {*} data - The data to be searched for.
   * @returns {Node|null} - The node with the given data, or null if not found.
   */
  search(node, data) {
    if (node === null)
      return null;

    if (data < node.data)
      return this.search(node.left, data);
    else if (data > node.data)
      return this.search(node.right, data);
    else
      return node;
  }
}
