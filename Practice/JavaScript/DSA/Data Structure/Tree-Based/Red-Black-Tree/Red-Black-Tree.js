// Define the color constants 
const RED = "red";
const BLACK = "black";

class RBNode {
  constructor(value) {
    this.value = value;
    this.color = RED;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  isRed() {
    return this.color === RED;
  }
}

class RBTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new RBNode(value);

    // insert node like in a regular BST 
    this.root = this.insertNode(this.root, node);

    // fix any violations of the red-black properties 
    this.fixupInsert(node);
  }

  insertNode(root, node) {
    if (!root) {
      return node;
    }

    if (node.value < root.value) {
      root.left = this.insertNode(root.left, node);
      root.left.parent = root;
    } else {
      root.right = this.insertNode(root.right, node);
      root.right.parent = root;
    }

    return root;
  }

  fixupInsert(node) {
    while (node.parent && node.parent.isRed()) {
      if (node.parent === node.parent.parent.left) {
        const uncle = node.parent.parent.right;

        if (uncle && uncle.isRed()) {
          // case 1: uncle is red 
          node.parent.color = BLACK;
          uncle.color = BLACK;
          node.parent.parent.color = RED;
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            // case 2: uncle is black and node is a right child 
            node = node.parent;
            this.rotateLeft(node);
          }

          // case 3: uncle is black and node is a left child 
          node.parent.color = BLACK;
          node.parent.parent.color = RED;
          this.rotateRight(node.parent.parent);
        }
      } else {
        const uncle = node.parent.parent.left;

        if (uncle && uncle.isRed()) {
          // case 1: uncle is red 
          node.parent.color = BLACK;
          uncle.color = BLACK;
          node.parent.parent.color = RED;
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            // case 2: uncle is black and node is a left child 
            node = node.parent;
            this.rotateRight(node);
          }

          // case 3: uncle is black and node is a right child 
          node.parent.color = BLACK;
          node.parent.parent.color = RED;
          this.rotateLeft(node.parent.parent);
        }
      }
    }

    this.root.color = BLACK;
  }

  rotateLeft(node) {
    const right = node.right;
    node.right = right.left;

    if (right.left) {
      right.left.parent = node;
    }

    right.parent = node.parent;

    if (!node.parent) {
      this.root = right;
    } else if (node === node.parent.left) {
      node.parent.left = right;
    } else {
      node.parent.right = right;
    }

    right.left = node;
    node.parent = right;
  }

  rotateRight(node) {
    const left = node.left;
    node.left = left.right;

    if (left.right) {
      left.right.parent = node;
    }

    left.parent = node.parent;

    if (!node.parent) {
      this.root = left;
    } else if (node === node.parent.left) {
      node.parent.left = left;
    } else {
      node.parent.right = left;
    }

    left.right = node;
    node.parent = left;
  }

  // search for a value in the tree 
  search(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) {
        return current;
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return null;
  }
  // traverse the tree in order 
  inOrderTraversal(callback) {
    this.inOrderTraversalNode(this.root, callback);
  }

  inOrderTraversalNode(node, callback) {
    if (node) {
      this.inOrderTraversalNode(node.left, callback);
      callback(node);
      this.inOrderTraversalNode(node.right, callback);
    }
  }
}
const tree = new RBTree();

tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(15);
tree.insert(5);

console.log("Inorder Traversal of the Red Black Tree: ");
tree.inOrderTraversal((node) => console.log(node.value)); 
