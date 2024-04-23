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

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        dfs(grid, i, j);
        count++;
      }
    }
  }
  return count;
};

const dfs = (grid, i, j) => {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0') return;
  grid[i][j] = '0';
  dfs(grid, i - 1, j);
  dfs(grid, i + 1, j);
  dfs(grid, i, j - 1);
  dfs(grid, i, j + 1);
}

/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function (land) {
  let result = [];
  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < land[0].length; j++) {
      if (land[i][j] === 1) {
        let farmland = [i, j];
        dfs(land, i, j, farmland);
        result.push(farmland);
      }
    }
  }
  return result;
};

const dfs = (land, i, j, farmland) => {
  if (i < 0 || j < 0 || i >= land.length || j >= land[0].length || land[i][j] === 0) return;
  land[i][j] = 0;
  farmland[2] = i;
  farmland[3] = j;
  dfs(land, i - 1, j, farmland);
  dfs(land, i + 1, j, farmland);
  dfs(land, i, j - 1, farmland);
  dfs(land, i, j + 1, farmland);
}

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  let dead = new Set(deadends);
  if (dead.has('0000')) return -1;
  let queue = ['0000'];
  let visited = new Set(queue);
  let steps = 0;
  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let current = queue.shift();
      if (current === target) return steps;
      for (let j = 0; j < 4; j++) {
        for (let k = -1; k <= 1; k += 2) {
          let next = current.slice(0, j) + (Number(current[j]) + k + 10) % 10 + current.slice(j + 1);
          if (!visited.has(next) && !dead.has(next)) {
            queue.push(next);
            visited.add(next);
          }
        }
      }
    }
    steps++;
  }
  return -1;
};

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  if (n === 1) return [0];
  // Create adjacency list
  const adjList = [...Array(n)].map((e) => new Set());
  // Add edges to adjacency list
  for (const [n1, n2] of edges) {
    adjList[n1].add(n2);
    adjList[n2].add(n1);
  }
  // Create a queue with all the leaf nodes
  const deq = new Queue()
  for (let index = 0; index <  adjList.length; index++) {
    // If the node has only one neighbor, it is a leaf node
    if (adjList[index].size === 1) {
      // Add the leaf node to the queue
      deq.enqueue(index);
    }
  }

  // Remove the leaf nodes level by level
  while (n > 2) {
    let size = deq.size();
    n -= size;
    // Remove the leaf nodes
    for (let i = 0; i < size; i++) {
      let node = deq.dequeue();
      // Get the only neighbor of the leaf node
      for (let neighbor of adjList[node]) {
        // Remove the leaf node from the neighbor
        adjList[neighbor].delete(node);
        // If the neighbor becomes a leaf node, add it to the queue
        if (adjList[neighbor].size === 1) {
          // Add the leaf node to the queue
          deq.enqueue(neighbor);
        }
      }
    }
  }
  // Return the remaining nodes in the queue
  return deq.toArray();
};