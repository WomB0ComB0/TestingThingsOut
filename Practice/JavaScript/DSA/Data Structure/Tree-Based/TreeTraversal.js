function TreeNode(val = 0, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function inorderRecursive(tree) {
  const result = [];

  function inorderTraverse(node) {
    if (!node) return;

    inorderTraverse(node.left);
    result.push(node.val);
    inorderTraverse(node.right);
  }

  inorderTraverse(tree);

  return result;
}

function inorderIterative(tree) {
  const stack = [];
  const result = [];
  let currentNode = tree;

  while (currentNode || stack.length) {
    while (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    }

    const node = stack.pop();
    result.push(node.val);
    currentNode = node.right;
  }

  return result;
}

function preorderRecursive(tree) {
  const result = [];

  function preorderTraverse(node) {
    if (!node) return;

    result.push(node.val);
    preorderTraverse(node.left);
    preorderTraverse(node.right);
  }

  preorderTraverse(tree);

  return result;
}

function preorderTraversal(root) {
  if (!root) return [];

  const stack = [root];
  const result = [];

  while (stack.length) {
    const node = stack.pop();
    result.push(node.val);

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return result;
}

function postorderRecursive(tree) {
  const result = [];

  function postorderTraverse(node) {
    if (!node) return;

    postorderTraverse(node.left);
    postorderTraverse(node.right);
    result.push(node.val);
  }

  postorderTraverse(tree);

  return result;
}

function postorderTraversal(root) {
  if (!root) return [];

  const stack = [root];
  const result = [];

  while (stack.length) {
    const node = stack[stack.length - 1];

    if (node.left) {
      stack.push(node.left);
      node.left = null;
    } else if (node.right) {
      stack.push(node.right);
      node.right = null;
    } else {
      result.push(stack.pop().val);
    }
  }

  return result;
}