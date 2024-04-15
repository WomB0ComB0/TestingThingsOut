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