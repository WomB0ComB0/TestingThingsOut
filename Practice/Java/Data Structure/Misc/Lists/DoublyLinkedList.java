
/**
 * This class represents a doubly linked list data structure.
 * It contains a nested Node class that represents a node in the list.
 * The instance variables of the DoublyLinkedList are header and trailer sentinels, and the size of the list.
 * The class provides methods to add and remove elements from the list, and to get the first and last elements.
 * It also provides a method to find the middle node of the list.
 * The private methods addBetween and remove are used to add and remove nodes from the list.
 */
/**
 * This class represents a doubly linked list data structure.
 * It contains a nested Node class that represents a node in the list.
 * The instance variables of the DoublyLinkedList are header and trailer
 * sentinels, and the size of the list.
 * The class provides methods to add and remove elements from the list, and to
 * get the first and last elements.
 * It also provides a method to find the middle node of the list.
 * The private methods addBetween and remove are used to add and remove nodes
 * from the list.
 */
public class DoublyLinkedList<E> {
    // ---------------- nested Node class ----------------
    private static class Node<E> {
        private E element; // reference to the element stored at this node
        private Node<E> prev; // reference to the previous node in the list
        private Node<E> next; // reference to the subsequent node in the list

        public Node(E e, Node<E> p, Node<E> n) {
            element = e;
            prev = p;
            next = n;
        }

        public E getElement() {
            return element;
        }

        public Node<E> getPrev() {
            return prev;
        }

        public Node<E> getNext() {
            return next;
        }

        public void setPrev(Node<E> p) {
            prev = p;
        }

        public void setNext(Node<E> n) {
            next = n;
        }
    } // ----------- end of nested Node class -----------

    // instance variables of the DoublyLinkedList
    private Node<E> header; // header sentinel
    private Node<E> trailer; // trailer sentinel
    private int size = 0; // number of elements in the list

    public DoublyLinkedList() {
        header = new Node<>(null, null, null); // create header
        trailer = new Node<>(null, header, null); // trailer is preceded by header
        header.setNext(trailer); // header is followed by trailer
    }

    public int size() {
        return size;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public E first() {
        if (isEmpty())
            return null;
        return header.getNext().getElement(); // first element is beyond header
    }

    public E last() {
        if (isEmpty())
            return null;
        return trailer.getPrev().getElement(); // last element is before trailer
    }

    // public update methods

    public void addFirst(E e) {
        addBetween(e, header, header.getNext()); // place just after the header
    }

    public void addLast(E e) {
        addBetween(e, trailer.getPrev(), trailer); // place just before the trailer
    }

    public E removeFirst() {
        if (isEmpty())
            return null; // nothing to remove
        return remove(header.getNext()); // first element is beyond header
    }

    public E removeLast() {
        if (isEmpty())
            return null; // nothing to remove
        return remove(trailer.getPrev()); // last element is before trailer
    }

    /**
     * @author Mike Odnis
     * @since 9/28/2023
     * @param middleNode
     * @return the middle node of the list
     */
    public void middleNode() {
        // Two pointer approach
        Node<E> tracker = header;
        Node<E> middle = header;
        // Initialize an integer counter outside of loop
        int count = 0;
        while (tracker != null) {
            // this sets the tracker to the next node
            tracker = tracker.getNext();
            // this increments the counter if the count is even
            if (count % 2 == 1) {
                // this sets the middle node to the next node
                middle = middle.getNext();
            }
            // this increments the counter
            count++;
        }
        // Print statement
        System.out.println("Middle node is: " + middle.getElement());
    }

    public void displayList() {
        Node<E> tracker = header;
        if (isEmpty())
            System.out.println("The list is empty.");
        else
            while (tracker != null) {
                System.out.println("Element is: " + tracker.getElement() + " ");
                tracker = tracker.getNext();
            }
    }
    // private update methods

    private void addBetween(E e, Node<E> predecessor, Node<E> successor) {
        // create and link a new node
        Node<E> newest = new Node<>(e, predecessor, successor);
        predecessor.setNext(newest);
        successor.setPrev(newest);
        size++;
    }

    private E remove(Node<E> node) {
        Node<E> predecessor = node.getPrev();
        Node<E> successor = node.getNext();
        predecessor.setNext(successor);
        successor.setPrev(predecessor);
        size--;
        return node.getElement();
    }
} // ----------- end of DoublyLinkedList class -----------
