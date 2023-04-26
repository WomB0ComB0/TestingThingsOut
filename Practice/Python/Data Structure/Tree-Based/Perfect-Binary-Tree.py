# Checking if a binary tree is a perfect binary tree in Python
class newNode:
    def __init__(self, k):
        self.key = k
        self.right = self.left = None
def calculateDepth(node): # Calculate the depth
    d = 0
    while (node is not None):
        d += 1
        node = node.left
    return d
def is_perfect(root, d, level=0): # Check if the tree is perfect binary tree
    if (root is None): # Check if the tree is empty
        return True
    if (root.left is None and root.right is None): # Check the presence of trees
        return (d == level + 1)
    if (root.left is None or root.right is None):
        return False
    return (is_perfect(root.left, d, level + 1) and
            is_perfect(root.right, d, level + 1))

root = None
root = newNode(1)
root.left = newNode(2)
root.right = newNode(3)
root.left.left = newNode(4)
root.left.right = newNode(5)

if (is_perfect(root, calculateDepth(root))):
    print("The tree is a perfect binary tree")
else:
    print("The tree is not a perfect binary tree")