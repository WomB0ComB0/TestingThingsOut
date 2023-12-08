/**
 * A driver class to demonstrate the usage of the LinkedBinaryTree class.
 */
public class LinkedBinaryTreeDriver {
    public static void main(String[] args) {
        // Create an instance of LinkedBinaryTree
        LinkedBinaryTree<String> binaryTree = new LinkedBinaryTree<>();

        // Add root
        Position<String> root = binaryTree.addRoot("A");

        // Add left and right children
        Position<String> leftChild = binaryTree.addLeft(root, "B");
        Position<String> rightChild = binaryTree.addRight(root, "C");

        // Add grandchildren
        Position<String> leftGrandchild = binaryTree.addLeft(leftChild, "D");
        Position<String> rightGrandchild = binaryTree.addRight(leftChild, "E");

        // Display tree structure
        System.out.println("Binary Tree Structure:");
        displayTree(binaryTree, root, 0);

        // Update element at a position
        binaryTree.set(rightChild, "F");

        // Display updated tree structure
        System.out.println("\nBinary Tree Structure After Update:");
        displayTree(binaryTree, root, 0);

        // Remove a node
        binaryTree.remove(leftChild);

        // Display tree structure after removal
        System.out.println("\nBinary Tree Structure After Removal:");
        displayTree(binaryTree, root, 0);
    }

    /**
     * Helper method to display tree structure recursively.
     *
     * @param tree    The LinkedBinaryTree instance.
     * @param position The current position in the tree.
     * @param depth    The depth of the current position.
     */
    private static void displayTree(LinkedBinaryTree<String> tree, Position<String> position, int depth) {
        for (int i = 0; i < depth; i++) {
            System.out.print("  "); // Indent based on depth
        }
        System.out.println(position.getElement()); // Print element at the current position

        // Display left subtree
        Position<String> leftChild = tree.left(position);
        if (leftChild != null) {
            displayTree(tree, leftChild, depth + 1);
        }

        // Display right subtree
        Position<String> rightChild = tree.right(position);
        if (rightChild != null) {
            displayTree(tree, rightChild, depth + 1);
        }
    }
}
