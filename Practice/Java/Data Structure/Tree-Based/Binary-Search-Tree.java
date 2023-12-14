// Binary Search Tree is a node-based binary tree data structure which has the following properties: The left subtree of a node contains only nodes with keys lesser than the node’s key. The right subtree of a node contains only nodes with keys greater than the node’s key. The left and right subtree each must also be a binary search tree. There must be no duplicate nodes.

/**
 * It is called a binary tree because each tree node has a maximum of two children.
 * It is called a search tree because it can be used to search for the presence of a number in O(log(n)) time.
 * 
 * 1. All nodes of left subtree are less than the root node
 * 2. Al nodes of right subtree are more than the root node
 * 3. Both subtrees of each n ode are also BSTs i.e they have the above two properties
*/

/**
 * Search Operation
 * 
 * The algorithm depends on the property of BST that if each left subtree has values below root and each right subtree has values above the root.
 * 
 * If the value is below the root, we can say for sure that the value is not the right subtree;we need to only search the left subtree and if the value is a above the root, we can say for sure that the value is not in the left subtree; we need to only search we need to only search in the right subtree.
 * 
 * Algorithm
 * if root == NULL --> return NULL; If number == root->data --> return root->data; if number < root->data --> return search(root->left); if number > root->data --> return search(root->right);
*/

/**
 * Insert Operation
 * 
 * Inserting a value in the correct position is similar to searching because we try to maintain the rule that the left subtree is lesser than root and the right subtree is larger than root. 
 * 
 * We keep going to either right subtree or left subtree depending on the value and when we reach a point left or right subtree is null, we put the new node there.
 * 
 * Algorithm
 * If node == NULL --> return createNode(data); if (data < node->data) --> node->left = insert(node->left, data); else if (data > node->data) --> node->right = insert(node->right, data); return node;
*/

/**
 * Deletion Operation
 * 
 * There are three cases for deleting a node from a binary search tree.
 * Case I --> In the first case, teh node to be deleted is the leaf node. In such a case, simply delete the node from the tree. 
 * 
 * Case II --> In the second case, the node to be deleted has a single child node. In such a case follow the steps below:
 * [tab] 1. replace that node with its child node
 * [tab] 2. remove the child node from its original position
 * 
 * Case III --> In the third case, the node to be deleted has two children. In such a case follow the steps below:
 * [tab] 1. Get the in-order successor of that node.
 * [tab] 2. Replace the node with the in-order successor.
 * [tab] 3. Remove the in-order successor from its original position.
*/

// Binary Search Tree operations in Java

class BinarySearchTree {
    class Node {
        int key;
        Node left, right;

        public Node(int item) {
            key = item;
            left = right = null;
        }
    }

    Node root;

    BinarySearchTree() {
        root = null;
    }

    void insert(int key) {
        root = insertKey(root, key);
    }

    // Insert key in the tree
    Node insertKey(Node root, int key) {
        // Return a new node if the tree is empty
        if (root == null) {
            root = new Node(key);
            return root;
        }

        // Traverse to the right place and insert the node
        if (key < root.key)
            root.left = insertKey(root.left, key);
        else if (key > root.key)
            root.right = insertKey(root.right, key);

        return root;
    }

    void inorder() {
        inorderRec(root);
    }

    // Inorder Traversal
    void inorderRec(Node root) {
        if (root != null) {
            inorderRec(root.left);
            System.out.print(root.key + " -> ");
            inorderRec(root.right);
        }
    }

    void deleteKey(int key) {
        root = deleteRec(root, key);
    }

    Node deleteRec(Node root, int key) {
        // Return if the tree is empty
        if (root == null)
            return root;

        // Find the node to be deleted
        if (key < root.key)
            root.left = deleteRec(root.left, key);
        else if (key > root.key)
            root.right = deleteRec(root.right, key);
        else {
            // If the node is with only one child or no child
            if (root.left == null)
                return root.right;
            else if (root.right == null)
                return root.left;

            // If the node has two children
            // Place the inorder successor in position of the node to be deleted
            root.key = minValue(root.right);

            // Delete the inorder successor
            root.right = deleteRec(root.right, root.key);
        }

        return root;
    }

    // Find the inorder successor
    int minValue(Node root) {
        int minv = root.key;
        while (root.left != null) {
            minv = root.left.key;
            root = root.left;
        }
        return minv;
    }

    // Driver Program to test above functions
    public static void main(String[] args) {
        BinarySearchTree tree = new BinarySearchTree();

        tree.insert(8);
        tree.insert(3);
        tree.insert(1);
        tree.insert(6);
        tree.insert(7);
        tree.insert(10);
        tree.insert(14);
        tree.insert(4);

        System.out.print("Inorder traversal: ");
        tree.inorder();

        System.out.println("\n\nAfter deleting 10");
        tree.deleteKey(10);
        System.out.print("Inorder traversal: ");
        tree.inorder();
    }
}