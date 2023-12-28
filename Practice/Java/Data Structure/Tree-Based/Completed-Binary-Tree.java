/**
 * A complete binary tree is a binary tree in which all the leaves are completely filled except possibly the lowest one, which is filled from the left. 
 * 
 * A complete binary tree is just like a full binary tree, but with two major differences
 * 
 * 1. All the leaf elements must lean towards the left. 
 * 2. The last leaf element might not have a right sibling i.e a complete binary tree doesn't have to be a full binary tree.
*/

/**
 * How a complete binary tree is created
 * 
 * 1. Select the first element of the list to be the root node. (no. of elements on level-I: 1)
 * 2. Put the second element as a left child of the rot node and the third element as the right child. (no. of elements on level-II: 2)
 * 3. Put the next two elements as children of the left node of the second level. Again, put the next two elements as children of the right node of the second level (no. of elements on level-III: 4).
 * 4. Keep repeating until you reach the last element.
*/

// Checking if a binary tree is a complete binary tree in Java

// Node creation
class Node {
    int data;
    Node left, right;

    Node(int item) {
        data = item;
        left = right = null;
    }
}

class BinaryTree {
    Node root;

    // Count the number of nodes
    int countNumNodes(Node root) {
        if (root == null)
            return (0);
        return (1 + countNumNodes(root.left) + countNumNodes(root.right));
    }

    // Check for complete binary tree
    boolean checkComplete(Node root, int index, int numberNodes) {

        // Check if the tree is empty
        if (root == null)
            return true;

        if (index >= numberNodes)
            return false;

        return (checkComplete(root.left, 2 * index + 1, numberNodes)
                && checkComplete(root.right, 2 * index + 2, numberNodes));
    }

    public static void main(String args[]) {
        BinaryTree tree = new BinaryTree();

        tree.root = new Node(1);
        tree.root.left = new Node(2);
        tree.root.right = new Node(3);
        tree.root.left.right = new Node(5);
        tree.root.left.left = new Node(4);
        tree.root.right.left = new Node(6);

        int node_count = tree.countNumNodes(tree.root);
        int index = 0;

        if (tree.checkComplete(tree.root, index, node_count))
            System.out.println("The tree is a complete binary tree");
        else
            System.out.println("The tree is not a complete binary tree");
    }
}