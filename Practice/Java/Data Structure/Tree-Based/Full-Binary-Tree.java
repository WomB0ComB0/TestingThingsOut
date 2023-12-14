/**
 * Let, i = the number of internal nodes [tab] n = be the total number of nodes
 * [tab] l = number of leaves [tab] lambda = number of levels
 * 
 * 1. The number of leaves is i + 1
 * 2. The total number of nodes is 2i + 1
 * 3. THe number of internal nodes is (n - 1) / 2
 * 4. The number of leaves is (n + 1) / 2
 * 5. The total number of nodes is 2l - 1
 * 6. THe number of internal nodes is l - 1
 * 7. The number fo leaves is at most 2^(lambda - 1)
 */

// Checking if a binary tree is a full binary tree in Java

class Node {
    int data;
    Node leftChild, rightChild;

    Node(int item) {
        data = item;
        leftChild = rightChild = null;
    }
}

class BinaryTree {
    Node root;

    // Check for Full Binary Tree
    boolean isFullBinaryTree(Node node) {

        // Checking tree emptiness
        if (node == null)
            return true;

        // Checking the children
        if (node.leftChild == null && node.rightChild == null)
            return true;

        if ((node.leftChild != null) && (node.rightChild != null))
            return (isFullBinaryTree(node.leftChild) && isFullBinaryTree(node.rightChild));

        return false;
    }

    public static void main(String args[]) {
        BinaryTree tree = new BinaryTree();
        tree.root = new Node(1);
        tree.root.leftChild = new Node(2);
        tree.root.rightChild = new Node(3);
        tree.root.leftChild.leftChild = new Node(4);
        tree.root.leftChild.rightChild = new Node(5);
        tree.root.rightChild.leftChild = new Node(6);
        tree.root.rightChild.rightChild = new Node(7);

        if (tree.isFullBinaryTree(tree.root))
            System.out.print("The tree is a full binary tree");
        else
            System.out.print("The tree is not a full binary tree");
    }
}