// A binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child. A recursive definition using just set theory notions is that a (non-empty) binary tree is a tuple (L, S, R), where L and R are binary trees or the empty set and S is a singleton set. Some authors allow the binary tree to be the empty set as well.

/**
 * Full Binary Tree
 * 
 * A full Binary tree is a special type of binary tree in which every parent node/internal node has either two or no children.
*/

/**
 * Perfect Binary Tree
 * 
 * A perfect binary tree is a type of binary tree in which every internal node has exactly two child nodes and all of the leaf nodes are at the same level.
*/

/**
 * Complete Binary Tree
 * 
 * A complete binary tree is just like a full binary tree, but with two major differences.
 * 
 * 1. Every level must be completely filled
 * 2. All the leaf elements must lean towards the left. 
 * 3. The last leaf might not have a right singling i.e. a complete tree doesn't have to be a full binary tree.
*/

/**
 * Skewed Binary Tree
 * 
 * A skewed binary tree is a pathological/degenerate tree in which the tree is either dominated by the left nodes or the right nodes. Thus, there are two types of skewed binary tree: left-skewed binary tree and right-skewed binary tree.
*/

/**
 * Balanced Binary Tree
 * 
 * It is a type of binary tree in which the difference between the height of the left and the right subtree for each node is either 0 or 1.
*/

class Node {
  int key;
  Node left, right;

  public Node(int item) {
  key = item;
  left = right = null;
  }
}

class BinaryTree {
  Node root;

  BinaryTree(int key) {
  root = new Node(key);
  }

  BinaryTree() {
  root = null;
  }

  // Traverse Inorder
  public void traverseInOrder(Node node) {
  if (node != null) {
    traverseInOrder(node.left);
    System.out.print(" " + node.key);
    traverseInOrder(node.right);
  }
  }

  // Traverse Postorder
  public void traversePostOrder(Node node) {
  if (node != null) {
    traversePostOrder(node.left);
    traversePostOrder(node.right);
    System.out.print(" " + node.key);
  }
  }

  // Traverse Preorder
  public void traversePreOrder(Node node) {
  if (node != null) {
    System.out.print(" " + node.key);
    traversePreOrder(node.left);
    traversePreOrder(node.right);
  }
  }

  public static void main(String[] args) {
  BinaryTree tree = new BinaryTree();

  tree.root = new Node(1);
  tree.root.left = new Node(2);
  tree.root.right = new Node(3);
  tree.root.left.left = new Node(4);

  System.out.print("Pre order Traversal: ");
  tree.traversePreOrder(tree.root);
  System.out.print("\nIn order Traversal: ");
  tree.traverseInOrder(tree.root);
  System.out.print("\nPost order Traversal: ");
  tree.traversePostOrder(tree.root);
  }
}