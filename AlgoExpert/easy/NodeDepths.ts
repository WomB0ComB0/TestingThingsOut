export const nodeDepths = (tree: BinaryTree | null, runningDepthTotal: number = 0): number =>
  tree ? runningDepthTotal + nodeDepths(tree.left, runningDepthTotal + 1) + nodeDepths(tree.right, runningDepthTotal + 1) : 0 // if tree is null, return 0, else return the runningDepthTotal + the left subtree + the right subtree

// This is the class of the input binary tree.
class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
