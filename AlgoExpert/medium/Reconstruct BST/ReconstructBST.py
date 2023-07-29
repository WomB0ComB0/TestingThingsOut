# The pre-order traversal of a Binary Tree is a traversal technique that starts at the tree's root node and visits nodes in the following order: 1. Current Node 2. Left Subtree 3. Right Subtree
# Given a non-empty array of integers representing the pre-order traversal of a Binary Search Tree (BST), write a function that creates the relevant BST and returns its root node.
# The input array will contain the values of BST nodes in the order in which these nodes would be visited with a pre-order traversal.
# 💡Recall Each BST node has an integer value, a left child node, and a right child node. A node is said to be a valid BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves or None / null.

# preOrderTraversalValues = [10, 4, 2, 1, 5, 17, 19, 18]

# This is an input class. Do not edit.
class BST:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


def reconstructBst(preOrderTraversalValues):
    # Write your code here.
    return None
