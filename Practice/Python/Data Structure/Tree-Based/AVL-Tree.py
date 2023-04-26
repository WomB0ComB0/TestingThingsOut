# AVL tree implementation in Python
# An AVL Tree is a self-balancing binary search tree.  It is a height-balanced binary search tree. It is used to improve the worst-case time complexity of binary search trees. It is a binary search tree in which the difference of heights of left and right subtrees of any node is less than or equal to one. It is a self-balancing binary search tree.
import sys
class TreeNode(object): # Create a tree node
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None
        self.height = 1
class AVLTree(object): # Create an avl tree class with insert and delete functions
    def insert_node(self, root, key): # Function to insert a node
        if not root: # Find the correct location and insert the node
            return TreeNode(key)
        elif key < root.key:
            root.left = self.insert_node(root.left, key)
        else:
            root.right = self.insert_node(root.right, key)
        root.height = 1 + max(self.getHeight(root.left), self.getHeight(root.right))

        # Update the balance factor and balance the tree
        balanceFactor = self.getBalance(root)
        if balanceFactor > 1:
            if key < root.left.key:
                return self.rightRotate(root)
            else:
                root.left = self.leftRotate(root.left)
                return self.rightRotate(root)
        if balanceFactor < -1:
            if key > root.right.key:
                return self.leftRotate(root)
            else:
                root.right = self.rightRotate(root.right)
                return self.leftRotate(root)
        return root
    def delete_node(self, root, key): # Function to delete a node
        if not root: # Find the node to be deleted and remove it
            return root
        elif key < root.key:
            root.left = self.delete_node(root.left, key)
        elif key > root.key:
            root.right = self.delete_node(root.right, key)
        else:
            if root.left is None:
                temp = root.right
                root = None
                return temp
            elif root.right is None:
                temp = root.left
                root = None
                return temp
            temp = self.getMinValueNode(root.right)
            root.key = temp.key
            root.right = self.delete_node(root.right, temp.key)
        if root is None:
            return root
        root.height = 1 + max(self.getHeight(root.left), self.getHeight(root.right)) # Update the balance factor of nodes
        balanceFactor = self.getBalance(root)
        if balanceFactor > 1: # Balance the tree
            if self.getBalance(root.left) >= 0:
                return self.rightRotate(root)
            else:
                root.left = self.leftRotate(root.left)
                return self.rightRotate(root)
        if balanceFactor < -1:
            if self.getBalance(root.right) <= 0:
                return self.leftRotate(root)
            else:
                root.right = self.rightRotate(root.right)
                return self.leftRotate(root)
        return root
    def leftRotate(self, z): # Function to perform left rotation
        y = z.right
        T2 = y.left
        y.left = z
        z.right = T2
        z.height = 1 + max(self.getHeight(z.left), self.getHeight(z.right))
        y.height = 1 + max(self.getHeight(y.left), self.getHeight(y.right))
        return y
    def rightRotate(self, z): # Function to perform right rotation
        y = z.left
        T3 = y.right
        y.right = z
        z.left = T3
        z.height = 1 + max(self.getHeight(z.left), self.getHeight(z.right))
        y.height = 1 + max(self.getHeight(y.left), self.getHeight(y.right))
        return y
    def getHeight(self, root): # Get the height of the node
        if not root:
            return 0
        return root.height
    def getBalance(self, root): # Get balance factor of the node
        if not root:
            return 0
        return self.getHeight(root.left) - self.getHeight(root.right)
    def getMinValueNode(self, root): # Get the node with minimum value
        if root is None or root.left is None:
            return root
        return self.getMinValueNode(root.left)
    def preOrder(self, root): # Preorder tree traversal
        if not root:
            return
        print("{0} ".format(root.key), end="")
        self.preOrder(root.left)
        self.preOrder(root.right)
    def printHelper(self, currPtr, indent, last): # Print the tree
        if currPtr != None:
            sys.stdout.write(indent)
            if last:
                sys.stdout.write("R----")
                indent += "     "
            else:
                sys.stdout.write("L----")
                indent += "|    "
            print(currPtr.key)
            self.printHelper(currPtr.left, indent, False)
            self.printHelper(currPtr.right, indent, True)
myTree = AVLTree()
root = None
nums = [33, 13, 52, 9, 21, 61, 8, 11]
for num in nums:
    root = myTree.insert_node(root, num)
myTree.printHelper(root, "", True)
key = 13
root = myTree.delete_node(root, key)
print("After Deletion: ")
myTree.printHelper(root, "", True)