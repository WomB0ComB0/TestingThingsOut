// Link: https://www.algoexpert.io/questions/Reconstruct%20BST
// Difficulty: Medium
// Concepts: Binary Search Tree, Recursion
// Question: Given a pre-order traversal array of a Binary Search Tree, reconstruct the tree and return the root node of the tree.

// Input: [10, 4, 2, 1, 5, 17, 19, 18]
// Output: 10
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
  insert(value) { // O(log(n)) time | O(1) space
    if (value < this.value) { // left
      if (this.left) this.left.insert(value)
      else this.left = new BST(value)
    } else { // right
      if (this.right) this.right.insert(value)
      else this.right = new BST(value)
    }
  }
}
function reconstructBst(preOrderTraversalValues) { // O(n) time | O(n) space
  const root = new BST(preOrderTraversalValues[0]) // first value is the root
  for (let i = 1; i < preOrderTraversalValues.length; i++) { // O(n) time
    root.insert(preOrderTraversalValues[i]) // O(log(n)) time
  }
  return root;
}
// Do not edit the lines below.
exports.BST = BST;
exports.reconstructBst = reconstructBst;