/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  deck.sort((a, b) => a - b);
  let result = [];
  result.push(deck.pop());
  while (deck.length > 0) {
    result.unshift(result.pop());
    result.unshift(deck.pop());
  }
  return result;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let leftMax = 0, rightMax = 0, left = 0, right = height.length - 1, res = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      res += Math.max(leftMax - height[left], 0);
      leftMax = Math.max(leftMax, height[left]);
      left++;
    } else {
      res += Math.max(rightMax - height[right], 0);
      rightMax = Math.max(rightMax, height[right]);
      right--;
    }
  }
  return res
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  return dfs(root, []);
};

function dfs(node, path) {
  if (!node) return 0;
  path.push(node.val);
  if (!node.left && !node.right) {
    return parseInt(path.join(''));
  }
  let left = dfs(node.left, path.slice());
  let right = dfs(node.right, path.slice());
  return left + right;
}

/**
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
  if (depth === 1) {
    let newRoot = new TreeNode(val);
    newRoot.left = root;
    return newRoot;
  }
  return () => {
    let queue = [root];
    let level = 1;
    while (queue.length) {
      let size = queue.length;
      for (let i = 0; i < size; i++) {
        let node = queue.shift();
        if (level === depth - 1) {
          let left = new TreeNode(val);
          let right = new TreeNode(val);
          left.left = node.left;
          right.right = node.right;
          node.left = left;
          node.right = right;
        }
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      level++;
    }
    return root;
  }
};

var smallestFromLeaf = function (root) {
  let result = '';
  dfs(root, '');
  return result;
};

function dfs(node, path) {
  if (!node) return;
  path = String.fromCharCode(node.val + 97) + path;
  if (!node.left && !node.right) {
    result = result ? result < path ? result : path : path;
  }
  dfs(node.left, path);
  dfs(node.right, path);
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let perimeter = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        perimeter += 4;
        if (i > 0 && grid[i - 1][j] === 1) perimeter -= 2;
        if (j > 0 && grid[i][j - 1] === 1) perimeter -= 2;
      }
    }
  }
  return perimeter;
};