class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  rightRotate(node) {
    let newRoot = node.left;
    let moveSubtree = newRoot.right;

    newRoot.right = node;
    node.left = moveSubtree;

    return newRoot;
  }

  leftRotate(node) {
    let newRoot = node.right;
    let moveSubtree = newRoot.left;

    newRoot.left = node;
    node.right = moveSubtree;

    return newRoot;
  }
}
