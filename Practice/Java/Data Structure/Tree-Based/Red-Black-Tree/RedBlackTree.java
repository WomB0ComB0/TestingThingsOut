/**
 * 1. Red/Black Property: Every node is colored, either red or black
 * 2. Root Property: The root is black.
 * 3. Leaf Property: Every leaf (NIL) is black.
 * 4. Red Property: If a red node has children then, both children are black.
 * 5. Depth Property: For each node, any simple path from this node to any of its descendant leaf has the same number of black nodes.
*/

/**
 * Each node of the tree has the following attributes:
 * 1. Color: Either red or black
 * 2. Key: The value of the node
 * 3. Left: The left child of the node
 * 4. Right: The right child of the node
 * 5. Parent: The parent of the node
*/

/**
 * Rotating the subtrees in a Red-Black Tree
 * In rotation operation, the positions of the nodes of a subtree are interchanged.
 * Rotation operation is used for maintaining the properties of a red-black tree when they are violated by other operations such as an insertion and deletion.
 * 
 * There are two types of rotations:
 * 
 * 1. Left Rotation
 * in left rotation, the arrangement of the nodes on the right is transformed into the arrangement on the left node
 * 
 * 2. Right Rotation
 * In right-rotation, the arrangement of the nodes on the left is transformed into the arrangements on the right node.
 * 
 * 3. Left-Right Rotation
 * In left-right rotation, the arrangement of the nodes on the left is transformed into the arrangement on the right node and then the arrangement of the nodes on the right is transformed into the arrangement on the left node.
*/

/**
 * Inserting an element into a Red-Black Tree
 * While inserting a new node, the new node is always inserted as a RED node. After insertion of a new node, if the tree is violating the properties of the red-black tree then, we do the following operations.
 * 
 * 1. Recolor
 * 2. Rotation
*/

/**
 * Algorithm to insert a node
 * 
 * 1. Let y be the leaf (i.e. NIL) and x be the root of the tree.
 * 2. Check if the tree is empty (ie. whether x is NIL). If yes, insert newNode as a root node and color it black.
 * 3. Else, repeat the following steps until leaf (NIL) is reached.
 * a. Compare newKey with rootKey
 * b. If newKey is greater than rootKey, traverse through the right subtree.
 * c. Else traverse through the left subtree.
 * 4. Assign the parent of the leaf as a parent of newNode.
 * 5. If leafKey is greater than newKey, make newNode as rightChild.
 * 6. Else, make newNode as leftChild.
 * 7. Assign NULL to the left and rightChild of newNode.
 * 8. Assign RED color to newNode.
 * 9. Call InsertFix-algorithm to maintain the property of red-black tree if violated
*/

/**
 * Algorithm to maintain red-black property after insertion
 * 
 * This algorithm is used for maintaining the property of a red-black tree if the insertion of a newNode violates this property.
 * 
 * 1. Do the following while the parent of newNode p is RED.
 * 2. If p is the left child of grandParent gP of z, do the following.
 * 
 * Case-I:
 * a. If the color of the right child of gP of z is RED, set the color of both the children of gP as BLACK and the color of gP as RED.
 * b. Assign  gP to newNode.
 * 
 * Case-II:
 * c. Else if newNode is the right child of p then, assign p to newNode.
 * d. Left-rotate newNode.
 * 
 * Case-III:
 * e. Set color of p as BLACK and color of gP as RED.
 * f. Right-rotate gP.
 * 
 * 3. Else, do the following.
 * a. If the color of the left child of gP of z is RED, set the color of both the children of gP as BLACK and teh color of gP as RED.
 * b. Assign gP to newNode.
 * c. Else if newNode is the left child of p then, assign p to newNode and Right-Rotate newNode.
 * d. Set color of p as BLACK and color of gP as RED.
 * e. Left-Rotate gP
 * 
 * 4.  Set teh root of the tree as BLACK.
*/

/**
 * Deleting an element from a Red-Black Tree
 * This operation removes a node from the tree. After deleting a node, the red-black property is maintained again.
*/

/**
 * Algorithm to delete a node
 * 
 * 1. Save the color of nodeToBeDeleted in originalColor;
 * 
 * 2. If the left child of nodeToBeDeleted is NULL.
 * a. Assign the right child of nodeToBeDeleted to x.
 * b. Transplant nodeToBeDeleted with x.
 * 
 * 3. Else if the right child of nodeToBeDeleted is NULL.
 * a. Assign teh left child of nodeToBeDeleted into x.
 * b. Transplant nodeToBeDeleted with x.
 * 
 * 4. Else
 * a. Assign the minimum of right subtree of nodeToBeDeleted into y.
 * b. Save teh color of y in originalColor.
 * c. Assign the rightChild of y into x.
 * d. If y is a child of nodeToBeDeleted, then set the parent of x as y.
 * e. Else, transplant y with rightChild of y .
 * f. Transplant nodeToBeDeleted with y.
 * g. Set the color of y with originalColor.
 * 
 * 5. If the originalColor is BLACK, call DeleteFix(x)
*/

/**
 * Algorithm to maintain Red-Black property after deletion
 * 
 * This algorithm is implemented when a black node is deleted because it violates the black depth property of the red-black tree.
 * 
 * This violation is corrected by assuming that node x (which is occupying y's original position) has an extra black. This makes node x neither red nor black. It is either doubly black or black-and-red. This violates the red-black properties.
 * 
 * However, the color attribute of x is not changed rather the extra black is represented in x's pointing to the node.
 * 
 * The extra black can be removed if
 * 
 * 1. It reaches the root node.
 * 
 * 2. If x points to a red-black node. In this case, x is colored black.
 * 
 * 3. Suitable rotations and recoloring are performed.
 * 
 * The following algorithm retains the properties of a red-black tree.
 * 
 *  1. Do the following until the x is not the root of the tree and the color of x is BLACK
 *  
 *  2. If x is the left child of its parent then,
 *      a. Assign w to the sibling of x.
 *      b. If the right child of parent of x is RED,
 *          Case-I:
                a. Set the color of the right child of the parent of x as BLACK.
                b. Set the color of the parent of x as RED.
                c. Left-Rotate the parent of x.
                d. Assign the rightChild of the parent of x to w.
        c. If the color of both the right and the leftChild of w is BLACK,
            Case-II:
                a. Set the color of w as RED
                b. Assign the parent of x to x.
        d. Else if the color of the rightChild of w is BLACK
            Case-III:
                a. Set the color of the leftChild of w as BLACK
                b. Set the color of w as RED
                c. Right-Rotate w.
                d. Assign the rightChild of the parent of x to w.
        e. If any of the above cases do not occur, then do the following.
            Case-IV:
                a. Set the color of w as the color of the parent of x.
                b. Set the color of the parent of x as BLACK.
                c. Set the color of the right child of w as BLACK.
                d. Left-Rotate the parent of x.
                e. Set x as the root of the tree.
    3. Else the same as above with right changed to left and vice versa.
    4. Set the color of x as BLACK.

*/

// Implementing Red-Black Tree in Java

class Node {
    int data;
    Node parent;
    Node left;
    Node right;
    int color;
}

public class RedBlackTree {
    private Node root;
    private Node TNULL;

    // Preorder
    private void preOrderHelper(Node node) {
        if (node != TNULL) {
            System.out.print(node.data + " ");
            preOrderHelper(node.left);
            preOrderHelper(node.right);
        }
    }

    // Inorder
    private void inOrderHelper(Node node) {
        if (node != TNULL) {
            inOrderHelper(node.left);
            System.out.print(node.data + " ");
            inOrderHelper(node.right);
        }
    }

    // Post order
    private void postOrderHelper(Node node) {
        if (node != TNULL) {
            postOrderHelper(node.left);
            postOrderHelper(node.right);
            System.out.print(node.data + " ");
        }
    }

    // Search the tree
    private Node searchTreeHelper(Node node, int key) {
        if (node == TNULL || key == node.data) {
            return node;
        }

        if (key < node.data) {
            return searchTreeHelper(node.left, key);
        }
        return searchTreeHelper(node.right, key);
    }

    // Balance the tree after deletion of a node
    private void fixDelete(Node x) {
        Node s;
        while (x != root && x.color == 0) {
            if (x == x.parent.left) {
                s = x.parent.right;
                if (s.color == 1) {
                    s.color = 0;
                    x.parent.color = 1;
                    leftRotate(x.parent);
                    s = x.parent.right;
                }

                if (s.left.color == 0 && s.right.color == 0) {
                    s.color = 1;
                    x = x.parent;
                } else {
                    if (s.right.color == 0) {
                        s.left.color = 0;
                        s.color = 1;
                        rightRotate(s);
                        s = x.parent.right;
                    }

                    s.color = x.parent.color;
                    x.parent.color = 0;
                    s.right.color = 0;
                    leftRotate(x.parent);
                    x = root;
                }
            } else {
                s = x.parent.left;
                if (s.color == 1) {
                    s.color = 0;
                    x.parent.color = 1;
                    rightRotate(x.parent);
                    s = x.parent.left;
                }

                if (s.right.color == 0 && s.right.color == 0) {
                    s.color = 1;
                    x = x.parent;
                } else {
                    if (s.left.color == 0) {
                        s.right.color = 0;
                        s.color = 1;
                        leftRotate(s);
                        s = x.parent.left;
                    }

                    s.color = x.parent.color;
                    x.parent.color = 0;
                    s.left.color = 0;
                    rightRotate(x.parent);
                    x = root;
                }
            }
        }
        x.color = 0;
    }

    private void rbTransplant(Node u, Node v) {
        if (u.parent == null) {
            root = v;
        } else if (u == u.parent.left) {
            u.parent.left = v;
        } else {
            u.parent.right = v;
        }
        v.parent = u.parent;
    }

    private void deleteNodeHelper(Node node, int key) {
        Node z = TNULL;
        Node x, y;
        while (node != TNULL) {
            if (node.data == key) {
                z = node;
            }

            if (node.data <= key) {
                node = node.right;
            } else {
                node = node.left;
            }
        }

        if (z == TNULL) {
            System.out.println("Couldn't find key in the tree");
            return;
        }

        y = z;
        int yOriginalColor = y.color;
        if (z.left == TNULL) {
            x = z.right;
            rbTransplant(z, z.right);
        } else if (z.right == TNULL) {
            x = z.left;
            rbTransplant(z, z.left);
        } else {
            y = minimum(z.right);
            yOriginalColor = y.color;
            x = y.right;
            if (y.parent == z) {
                x.parent = y;
            } else {
                rbTransplant(y, y.right);
                y.right = z.right;
                y.right.parent = y;
            }

            rbTransplant(z, y);
            y.left = z.left;
            y.left.parent = y;
            y.color = z.color;
        }
        if (yOriginalColor == 0) {
            fixDelete(x);
        }
    }

    // Balance the node after insertion
    private void fixInsert(Node k) {
        Node u;
        while (k.parent.color == 1) {
            if (k.parent == k.parent.parent.right) {
                u = k.parent.parent.left;
                if (u.color == 1) {
                    u.color = 0;
                    k.parent.color = 0;
                    k.parent.parent.color = 1;
                    k = k.parent.parent;
                } else {
                    if (k == k.parent.left) {
                        k = k.parent;
                        rightRotate(k);
                    }
                    k.parent.color = 0;
                    k.parent.parent.color = 1;
                    leftRotate(k.parent.parent);
                }
            } else {
                u = k.parent.parent.right;

                if (u.color == 1) {
                    u.color = 0;
                    k.parent.color = 0;
                    k.parent.parent.color = 1;
                    k = k.parent.parent;
                } else {
                    if (k == k.parent.right) {
                        k = k.parent;
                        leftRotate(k);
                    }
                    k.parent.color = 0;
                    k.parent.parent.color = 1;
                    rightRotate(k.parent.parent);
                }
            }
            if (k == root) {
                break;
            }
        }
        root.color = 0;
    }

    private void printHelper(Node root, String indent, boolean last) {
        if (root != TNULL) {
            System.out.print(indent);
            if (last) {
                System.out.print("R----");
                indent += "   ";
            } else {
                System.out.print("L----");
                indent += "|  ";
            }

            String sColor = root.color == 1 ? "RED" : "BLACK";
            System.out.println(root.data + "(" + sColor + ")");
            printHelper(root.left, indent, false);
            printHelper(root.right, indent, true);
        }
    }

    public RedBlackTree() {
        TNULL = new Node();
        TNULL.color = 0;
        TNULL.left = null;
        TNULL.right = null;
        root = TNULL;
    }

    public void preorder() {
        preOrderHelper(this.root);
    }

    public void inorder() {
        inOrderHelper(this.root);
    }

    public void postorder() {
        postOrderHelper(this.root);
    }

    public Node searchTree(int k) {
        return searchTreeHelper(this.root, k);
    }

    public Node minimum(Node node) {
        while (node.left != TNULL) {
            node = node.left;
        }
        return node;
    }

    public Node maximum(Node node) {
        while (node.right != TNULL) {
            node = node.right;
        }
        return node;
    }

    public Node successor(Node x) {
        if (x.right != TNULL) {
            return minimum(x.right);
        }

        Node y = x.parent;
        while (y != TNULL && x == y.right) {
            x = y;
            y = y.parent;
        }
        return y;
    }

    public Node predecessor(Node x) {
        if (x.left != TNULL) {
            return maximum(x.left);
        }

        Node y = x.parent;
        while (y != TNULL && x == y.left) {
            x = y;
            y = y.parent;
        }

        return y;
    }

    public void leftRotate(Node x) {
        Node y = x.right;
        x.right = y.left;
        if (y.left != TNULL) {
            y.left.parent = x;
        }
        y.parent = x.parent;
        if (x.parent == null) {
            this.root = y;
        } else if (x == x.parent.left) {
            x.parent.left = y;
        } else {
            x.parent.right = y;
        }
        y.left = x;
        x.parent = y;
    }

    public void rightRotate(Node x) {
        Node y = x.left;
        x.left = y.right;
        if (y.right != TNULL) {
            y.right.parent = x;
        }
        y.parent = x.parent;
        if (x.parent == null) {
            this.root = y;
        } else if (x == x.parent.right) {
            x.parent.right = y;
        } else {
            x.parent.left = y;
        }
        y.right = x;
        x.parent = y;
    }

    public void insert(int key) {
        Node node = new Node();
        node.parent = null;
        node.data = key;
        node.left = TNULL;
        node.right = TNULL;
        node.color = 1;

        Node y = null;
        Node x = this.root;

        while (x != TNULL) {
            y = x;
            if (node.data < x.data) {
                x = x.left;
            } else {
                x = x.right;
            }
        }

        node.parent = y;
        if (y == null) {
            root = node;
        } else if (node.data < y.data) {
            y.left = node;
        } else {
            y.right = node;
        }

        if (node.parent == null) {
            node.color = 0;
            return;
        }

        if (node.parent.parent == null) {
            return;
        }

        fixInsert(node);
    }

    public Node getRoot() {
        return this.root;
    }

    public void deleteNode(int data) {
        deleteNodeHelper(this.root, data);
    }

    public void printTree() {
        printHelper(this.root, "", true);
    }

    public static void main(String[] args) {
        RedBlackTree bst = new RedBlackTree();
        bst.insert(55);
        bst.insert(40);
        bst.insert(65);
        bst.insert(60);
        bst.insert(75);
        bst.insert(57);
        bst.printTree();

        System.out.println("\nAfter deleting:");
        bst.deleteNode(40);
        bst.printTree();
    }
}