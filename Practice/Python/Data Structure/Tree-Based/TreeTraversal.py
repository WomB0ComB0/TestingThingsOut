# Tree traversal in Python (DFS) - Inorder, Preorder, Postorder
# Tree traversal is a form of graph traversal. It is the process of visiting each node in a tree exactly once. Unlike linear data structures (Array, Linked List, Queues, Stacks, etc) which have only one logical way to traverse them, trees can be traversed in different ways. Following are the generally used ways for traversing trees.
class Node:
    def __init__(self, item):
        self.left = None
        self.right = None
        self.val = item
def inorder(root):
    if root:
        inorder(root.left) # Traverse left
        print(str(root.val) + "->", end='') # Traverse root
        inorder(root.right) # Traverse right
def postorder(root):
    if root:
        postorder(root.left) # Traverse left
        postorder(root.right) # Traverse right
        print(str(root.val) + "->", end='')# Traverse root
def preorder(root):
    if root:
        print(str(root.val) + "->", end='') # Traverse root
        preorder(root.left) # Traverse left
        preorder(root.right) # Traverse right

root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)

print("Inorder traversal ")
inorder(root)
print("\nPreorder traversal ")
preorder(root)
print("\nPostorder traversal ")
postorder(root)