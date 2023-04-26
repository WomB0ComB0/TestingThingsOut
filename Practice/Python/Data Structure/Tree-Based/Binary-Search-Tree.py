# Binary Search Tree operations in Python
# Binary Search Tree is a node-based binary tree data structure which has the following properties: The left subtree of a node contains only nodes with keys lesser than the node’s key. The right subtree of a node contains only nodes with keys greater than the node’s key. The left and right subtree each must also be a binary search tree. There must be no duplicate nodes. 
class Node: # Create a node
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None
def inorder(root): # Inorder traversal
    if root is not None:
        inorder(root.left) # Traverse left
        print(str(root.key) + "->", end=' ') # Traverse root
        inorder(root.right) # Traverse right
def insert(node, key): # Insert a node
    if node is None: # Return a new node if the tree is empty
        return Node(key)
    if key < node.key: # Traverse to the right place and insert the node
        node.left = insert(node.left, key)
    else:
        node.right = insert(node.right, key)
    return node
def minValueNode(node): # Find the inorder successor
    current = node 
    while(current.left is not None): # Find the leftmost leaf
        current = current.left
    return current
def deleteNode(root, key): # Deleting a node
    if root is None: # Return if the tree is empty
        return root
    if key < root.key: # Find the node to be deleted
        root.left = deleteNode(root.left, key)
    elif(key > root.key):
        root.right = deleteNode(root.right, key)
    else:
        if root.left is None: # If the node is with only one child or no child
            temp = root.right
            root = None
            return temp
        elif root.right is None:
            temp = root.left
            root = None
            return temp
        temp = minValueNode(root.right) # If the node has two children, place the inorder successor in position of the node to be deleted

        root.key = temp.key

        root.right = deleteNode(root.right, temp.key) # Delete the inorder successor

    return root


root = None
root = insert(root, 8)
root = insert(root, 3)
root = insert(root, 1)
root = insert(root, 6)
root = insert(root, 7)
root = insert(root, 10)
root = insert(root, 14)
root = insert(root, 4)

print("Inorder traversal: ", end=' ')
inorder(root)

print("\nDelete 10")
root = deleteNode(root, 10)
print("Inorder traversal: ", end=' ')
inorder(root)