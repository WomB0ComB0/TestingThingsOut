function Tree(key) {
  var node = new Node(key)
  this.root = node
}

Tree.prototype.find = function (k, R) {
  if (R.key == k) { // If equal to root key
    return R
  } else if (k < R.key) { // If less than root key
    if (R.left) { // If left child is not null
      return this.find(k, R.left)
    }
    return R // If no left child, return place
  } else if (k > R.key) { // If greater than root key
    if (R.right) { // If right child is not null
      return this.find(k, R.right)
    }
    return R // If no right child, return place
  }
}

Tree.prototype.rangeSearch = function (x, y) {
  var L = [] // Array to store our results
  var N = this.find(x, this.root) // Turn x into node
  while (N.key <= y) { // If new node's key is less than or equal to y
    if (N.key >= x) { // If new node's key is greater than or equal to x
      L.push(N) // Add to array
    }
    N = this.next(N) // Continue in range
  }
  return L // Return array of results
}

Tree.prototype.next = function (N) {
  if (!N.key) {
    var N = this.find(N, this.root)
  }
  if (N.right) {
    return this.leftDescendant(N.right) // If right child exists, get descendant
  } else {
    return this.rightAncestor(N) // Else get ancestor
  }
}

Tree.prototype.leftDescendant = function (N) {
  if (!N.left) { // If no left child, return
    return N
  } else {
    return this.leftDescendant(N.left) // Else find descendant of left child
  }
}

Tree.prototype.rightAncestor = function (N) {
  if (N.parent) { // If parent is not null
    if (N.key < N.parent.key) { // If node's key is less than parent's key
      return N.parent // Return parent
    } else {
      return this.rightAncestor(N.parent) // Else find ancestor of parent
    }
  }
}

Tree.prototype.insert = function (k) {
  P = this.find(k, this.root) // Get place to insert node
  var node = new Node(k) // Create new node
  node.parent = P // Set parent
  node.parent.size++ // Increment size of parent
  if (P && k > P.key) { // If new value is greater than place
    P.right = node // Set parent's right child to new node
  } else {
    P.left = node // Set parent's left child to new node
  }
  return node // Return new node
}

Tree.prototype.avlInsert = function (k) {
  var N = this.insert(k, this.root) // Set N equal to insertion of new node
  this.adjustDepth(N) // Adjust depth of the new node
  this.rebalance(N) // Rebalance tree based on node size
}

Tree.prototype.rebalance = function (N) {
  if (N.parent) { // If node has parent, set equal to P
    var P = N.parent
  }
  if (N.left && N.right) { // If node has both a left and right
    if (N.left.size > N.right.size + 1) { // If left size is greater than right size plus 1
      this.rebalanceRight(N) // Rebalance on the right side
    }
    if (N.right.size > N.left.size + 1) { // If right size is greater than left size plus 1
      this.rebalanceLeft(N) // Rebalance on the left side
    }
  } else if (N.left && N.left.size > 1) { // If no right child but left size is greater than 1
    this.rebalanceRight(N) // Rebalance on the right side
  } else if (N.right && N.right.size > 1) { // If no left child but right size is greater than 1
    this.rebalanceLeft(N) // Rebalance on the left side
  }
  this.adjustHeight(N) // Update heights
  this.adjustDepth(N) // Update depths
  if (P) { // If node had parent, recurse rebalance function with parent
    this.rebalance(P)
  }
}

Tree.prototype.rebalanceRight = function (N) {
  var M = N.left // Set M equal to node's left child
  if (M.right && M.left && M.right.size > M.left.size) { // If M has both right and left children and M's right size is greater than it's left size
    this.rotateLeft(M) // Rotate left on M
  } else if (M.right && M.right.size > 1) { // If M has a right child and it's size is more than 1
    this.rotateLeft(M) // Rotate left on M
  }
  this.rotateRight(N) // Rotate right on N
}

Tree.prototype.rebalanceLeft = function (N) {
  var M = N.right // Set M equal to node's right child
  if (M.right && M.left && M.left.size > M.right.size) { // If M has both right and left children and M's left size is greater than M's right size
    this.rotateRight(M) // Rotate right on M
  } else if (M.left && M.left.size > 1) { // If M has a left child and it's size is more than 1
    this.rotateRight(M) // Rotate right on M
  }
  this.rotateLeft(N) // Rotate left on N
}

Tree.prototype.rotateRight = function (X) {
  var P = X.parent // P is parent of current node
  var Y = X.left // Y is current node's left child
  var B = Y.right // B is Y's right child
  Y.parent = P // Set Y's parent equal to X's parent
  if (Y && P) { // If Y and P not null
    if (Y.key > P.key) { // If Y bigger than P - X's parent
      P.right = Y // X's parent's right child equal to Y
    } else {
      P.left = Y // X's parent's left child equal to Y
    }
  }
  if (X.parent == null) { // If X is current root node
    this.root = Y // Set Y as the tree's new root
  }
  X.parent = Y // Set X's new parent to Y
  X.left = B // Set's X's left child to B
  Y.right = X // Set Y's right child to X
  if (B) { // If Y has a right child
    B.parent = X // Set it's parent to X
  }
  this.recomputeSize(X) // Recompute size of X
  this.recomputeSize(Y) // Recompute size of Y
  if (P) { // If P or X's parent is not null
    this.recomputeSize(P) // Recompute size of P
  }
}

Tree.prototype.rotateLeft = function (X) {
  var P = X.parent // P is parent of current node
  var Y = X.right // Y is current node's right child
  var B = Y.left // 8 is Y's left child
  Y.parent = P // Set Y's parent equal to P - X's parent
  if (Y && P) { // If Y and P not null
    if (Y.key > P.key) { // If Y greater than P
      P.right = Y // Set X's parent's right child equal to Y
    } else {
      P.left = Y // Set X's parent's left child equal to Y
    }
  }
  if (X.parent == null) { // If X is current root node
    this.root = Y // Set Y as the tree's new root
  }
  X.parent = Y // Set X's new parent as Y
  Y.left = X // Set Y's left child as X
  if (B) { // If Y has a left child
    B.parent = X // Set Y's left child equal to X
  }
  X.right = B // Set X's right child equal to B - Y's former left child
  this.recomputeSize(X) // Recompute size of X
  this.recomputeSize(Y) // Recompute size of Y
  if (P) { // If P or X's parent is not null
    this.recomputeSize(P) // Recompute size of P
  }
}

Tree.prototype.recomputeSize = function (N) {
  var size = 1 // Start with size of 1
  if (N.left) { // If node has left child
    size += N.left.size // Add size of left child
  }
  if (N.right) { // If node has right child
    size += N.right.size // Add size of right child
  }
  N.size = size // Set node's size equal to size variable
}

Tree.prototype.adjustHeight = function (N) {
  if (N.left && N.right) { // If both left and right children
    N.height = 1 + Math.max(N.left.height, N.right.height) // New height is 1 plus the max between the left and right heights
  } else if (N.left) { // If not both, but left child exists
    N.height = 1 + N.left.height // New height is 1 plus height of left child
  } else if (N.right) { // If not both but right child exists
    N.height = 1 + N.right.height // New height is 1 plus height of right child
  } else {
    N.height = 1 // If no children, new height is 1
  }
  if (N.parent) { // Recurse adjustHeight on parent till root node
    this.adjustHeight(N.parent)
  }
}

Tree.prototype.adjustDepth = function (N) {
  if (N.key < this.root.key) { // If this node is on the left side of the tree
    N.depth = this.root.left.height - N.height + 1 // New depth is height of root's left child - height of current node plus 1
  } else if (N.key > this.root.key) { // If this node is on right side of tree
    N.depth = this.root.right.height - N.height + 1 // New depth is height of root's right child - height of current node plus 1
  } else if (N.key == this.root.key) { // If node is root
    N.depth = 0 // New depth is 0
  }
  if (N.right) { // If node has right child, recurse adjustDepth function
    this.adjustDepth(N.right)
  }
  if (N.left) { // If node has left child, recurse adjustDepth function
    this.adjustDepth(N.left)
  }
}

Tree.prototype.delete = function (N) {
  if (!N.key) {
    var N = this.find(N, this.root) // Set N equal to node of key N
  }
  if (N.right) { // If node has a right child
    if (N.right.key > N.parent.key) { // If node's right key is greater than node's parent key
      N.parent.right = N.right // Set parent's right equal to replacing node
    } else {
      N.parent.left = N.right // Else set parent's left equal to replacing node
    }
    N.right.parent = N.parent // Set the parent of the replacing node
    N.right.depth-- // Reduce it's depth by 1
  } else if (N.left) { // Else if node has left child
    if (N.left.key > N.parent.key) { // If node's left key is greater than node's parent key
      N.parent.right = N.left // Set parent's right equal to replacing node
    } else {
      N.parent.left = N.left // Else set parent's left equal to replacing node
    }
    N.left.parent = N.parent // Set the parent of the replacing node
    N.left.depth-- // Reduce it's depth by 1
  }
  var temp = N // Set temp equal to node to be deleted
  delete N // Delete node
  return temp // Return deleted node
}

Tree.prototype.avlDelete = function (N) {
  var N = this.find(N, this.root) // Create node from inserted value
  var M = N.parent // Set M equal to node's parent
  this.delete(N) // Delete node using delete function
  this.rebalance(M) // Rebalance tree with M
}

Tree.prototype.orderStatistic = function (R, k) {
  if (R.left) { // If root node has left child
    var s = R.left.size // Set s equal to size of left child
  } else {
    var s = 0 // Set s equal to 0
  }
  if (!k.key) { // If not node, set k equal to its node
    var k = this.find(k, R)
  }
  if (k.size == s + 1) { // If k's size is equal to s + 1
    return R // Return the root node
  } else if (k.size < s + 1) { // If k is less, recurse the function with the root's left size
    return this.orderStatistic(R.left, k)
  } else if (k.size > s + 1) { // If k is greater, recurse the function with the root's right side
    return this.orderStatistic(R.right, k.size - s - 1)
  }
}

Tree.prototype.rangeSum = function (x, y) {
  var range = this.rangeSearch(x, y) // Get array of nodes in range
  var sum = 0 // Set sum equal to 0
  for (i = 0; i < range.length; i++) { // Loop through nodes in range
    sum += range[i].key // Increase sum per keys
  }
  return sum // Return result
}

var tree = new Tree(5)
tree.avlInsert(4)
tree.avlInsert(2)
tree.avlInsert(3)
tree.avlInsert(7)
tree.avlInsert(1)
tree.avlInsert(6)
tree.avlInsert(9)
tree.avlInsert(8)
tree.avlInsert(10)
tree.avlInsert(11)
tree.avlInsert(14)
tree.avlInsert(12)