// JavaScript code for the above approach
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  static perfectBinaryTree(depth) {
    if (depth === 0) {
      return new TreeNode(0);
    }

    const queue = [];
    let i = 0;
    const root = new TreeNode(i);
    queue.push(root);

    while (queue.length > 0) {
      const size = queue.length;
      i++;
      if (i > depth) {
        break;
      }
      else {
        for (let j = 0; j < size; j++) {
          const node = queue.shift();
          node.left = new TreeNode(i);
          node.right = new TreeNode(i);
          queue.push(node.left);
          queue.push(node.right);
        }
      }
    }

    return root;
  }

  static inOrderTraversal(node) {
    if (node === null) return;
    this.inOrderTraversal(node.left);
    console.log(node.val + " ");
    this.inOrderTraversal(node.right);
  }
}

const N = 2;
const binaryTreeRoot = BinaryTree.perfectBinaryTree(N);
BinaryTree.inOrderTraversal(binaryTreeRoot);
