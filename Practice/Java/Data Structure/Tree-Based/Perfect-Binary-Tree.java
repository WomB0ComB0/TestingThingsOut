// A perfect binary tree is a type of binary tree in which every internal node has exactly two child nodes and all the leaf nodes are at the same level. In a perfect binary tree, the number of nodes at each level must be double the number of the previous level plus one. Also, all the nodes are as far left as possible.

/**
 * All the internal nodes have a degree of 2
 * Recursively, a perfect binary tree can be defined as:
 * 
 * 1. if a single node has no children, it is a perfect binary tree of height h
 * = 0,
 * 2. If a node has h > 0, it is a perfect binary tree if both of its subtrees
 * are of height h - 1 and are non-overlapping.
 */
// Checking if a binary tree is a perfect binary tree in Java

class PerfectBinaryTree {

    static class Node {
        int key;
        Node left, right;
    }

    // Calculate the depth
    static int depth(Node node) {
        int d = 0;
        while (node != null) {
            d++;
            node = node.left;
        }
        return d;
    }

    // Check if the tree is perfect binary tree
    static boolean is_perfect(Node root, int d, int level) {

        // Check if the tree is empty
        if (root == null)
            return true;

        // If for children
        if (root.left == null && root.right == null)
            return (d == level + 1);

        if (root.left == null || root.right == null)
            return false;

        return is_perfect(root.left, d, level + 1) && is_perfect(root.right, d, level + 1);
    }

    // Wrapper function
    static boolean is_Perfect(Node root) {
        int d = depth(root);
        return is_perfect(root, d, 0);
    }

    // Create a new node
    static Node newNode(int k) {
        Node node = new Node();
        node.key = k;
        node.right = null;
        node.left = null;
        return node;
    }

    public static void main(String args[]) {
        Node root = null;
        root = newNode(1);
        root.left = newNode(2);
        root.right = newNode(3);
        root.left.left = newNode(4);
        root.left.right = newNode(5);

        if (is_Perfect(root) == true)
            System.out.println("The tree is a perfect binary tree");
        else
            System.out.println("The tree is not a perfect binary tree");
    }
}