import java.util.HashSet;

/**
 * Represents a singly linked list.
 *
 * @param <E> The type of elements in the list.
 */
public class SinglyLinkedList<E> {

    /**
     * Represents a node in the singly linked list.
     *
     * @param <E> The type of element stored in the node.
     */
    private static class Node<E> {
        private E element;
        private Node<E> next;

        /**
         * Constructs a new node with the given element and next node reference.
         *
         * @param e The element stored in the node.
         * @param n The next node reference.
         */
        public Node(E e, Node<E> n) {
            element = e;
            next = n;
        }

        /**
         * Retrieves the element stored in this node.
         *
         * @return The element of this node.
         */
        public E getElement() {
            return element;
        }

        /**
         * Retrieves the next node reference.
         *
         * @return The next node.
         */
        public Node<E> getNext() {
            return next;
        }

        /**
         * Sets the next node reference.
         *
         * @param n The next node to set.
         */
        public void setNext(Node<E> n) {
            next = n;
        }
    }

    private Node<E> head = null;
    private Node<E> tail = null;
    private int size = 0;

    /**
     * Constructs an empty singly linked list.
     */
    public SinglyLinkedList() {}

    /**
     * Retrieves the number of elements in the list.
     *
     * @return The size of the list.
     */
    public int size() {
        return size;
    }

    /**
     * Checks if the list is empty.
     *
     * @return true if the list is empty, false otherwise.
     */
    public boolean isEmpty() {
        return size == 0;
    }

    /**
     * Retrieves the first element in the list.
     *
     * @return The first element or null if the list is empty.
     */
    public E first() {
        if (isEmpty()) return null;
        return head.getElement();
    }

    /**
     * Retrieves the last element in the list.
     *
     * @return The last element or null if the list is empty.
     */
    public E last() {
        if (isEmpty()) return null;
        return tail.getElement();
    }

    /**
     * Adds an element to the beginning of the list.
     *
     * @param e The element to be added.
     */
    public void addFirst(E e) {
        head = new Node<>(e, head);
        if (size == 0) tail = head;
        size++;
    }

    /**
     * Adds an element to the end of the list.
     *
     * @param e The element to be added.
     */
    public void addLast(E e) {
        Node<E> newest = new Node<>(e, null);
        if (isEmpty()) head = newest;
        else tail.setNext(newest);
        tail = newest;
        size++;
    }

    /**
     * Removes and returns the first element of the list.
     *
     * @return The removed element or null if the list is empty.
     */
    public E removeFirst() {
        if (isEmpty()) return null;
        E answer = head.getElement();
        head = head.getNext();
        size--;
        if (size == 0) tail = null;
        return answer;
    }

    /**
     * Removes any duplicate elements in the list.
     */
    public void removeDuplicates() {
        if (head == null) return;
        HashSet<E> set = new HashSet<>();
        Node<E> prev = null;
        Node<E> curr = head;

        while (curr != null) {
            if (set.contains(curr.getElement())) {
                prev.setNext(curr.getNext());
            } else {
                set.add(curr.getElement());
                prev = curr;
            }
            curr = curr.getNext();
        }
    }

    /**
     * Finds the nth element from the end of the list.
     *
     * @param n The position from the end.
     * @return The nth element from the end or null if n is invalid.
     */
    public E findNthFromEnd(int n) {
        if (head == null || n <= 0 || n > size) return null;

        Node<E> pointer1 = head;
        Node<E> pointer2 = head;

        for (int i = 0; i < n; i++) {
            pointer1 = pointer1.getNext();
        }

        while (pointer1 != null) {
            pointer1 = pointer1.getNext();
            pointer2 = pointer2.getNext();
        }

        return pointer2.getElement();
    }

    /**
     * Reverses the order of the elements in the list.
     */
    public void reverseList() {
        if (head == null) return;
        Node<E> prev = null;
        Node<E> curr = head;
        Node<E> next = null;

        while (curr != null) {
            next = curr.getNext();
            curr.setNext(prev);
            prev = curr;
            curr = next;
        }
        head = prev;
    }

    /**
     * Prints the elements of the list in a single line.
     */
    public void printList() {
        Node<E> curr = head;
        while (curr != null) {
            System.out.print(curr.getElement() + " ");
            curr = curr.getNext();
        }
        System.out.println();
    }

    /**
     * Displays each element of the list on a new line.
     */
    public void displayList() {
        Node<E> tracker = head;
        if (isEmpty())
            System.out.println("The list is empty.");
        else
            while (tracker != null) {
                System.out.println("Element is: " + tracker.getElement() + " ");
                tracker = tracker.getNext();
            }
    }
}
