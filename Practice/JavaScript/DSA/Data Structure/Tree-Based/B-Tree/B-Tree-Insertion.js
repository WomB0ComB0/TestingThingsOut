function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let insertIntoBST = function (root, val) {
  let current = root;

  while (current.val !== val) {
    if (current.val < val) {
      if (current.right === null) {
        current.right = new TreeNode(val);
      } else {
        current = current.right;
      }
    } else {
      if (current.left === null) {
        current.left = new TreeNode(val);
      } else {
        current = current.left;
      }
    }
  }
}

function insertNode (node, newNode) {
  if (newNode.val < node.val) {
    if (node.left === null) {
      node.left = newNode;
    } else {
      insertNode(node.left, newNode);
    }
  } else {
    if (node.right === null) {
      node.right = newNode;
    } else {
      insertNode(node.right, newNode);
    }
  }
}