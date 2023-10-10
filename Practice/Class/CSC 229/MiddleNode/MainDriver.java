/**
 * This class contains the main method to demonstrate the usage of a DoublyLinkedList.
 * It creates an instance of DoublyLinkedList, adds elements to it, and displays the list.
 */
public class MainDriver {
    /**
     * The entry point of the program.
     *
     * @param args The command-line arguments (not used).
     */
    public static void main(String[] args) {
        System.out.println("main(): entry point");

        // Create an instance of DoublyLinkedList
        DoublyLinkedList<Integer> d1 = new DoublyLinkedList<>();

        // Add elements to the list
        d1.addFirst(1);
        d1.addLast(2);
        d1.addLast(3);
        d1.addLast(4);
        d1.addLast(5);
        d1.addLast(6);
        d1.addLast(7);
        d1.addLast(8);
        d1.addLast(9);
        d1.addLast(10);
        d1.addLast(11);

        // Display the contents of the list
        d1.displayList();

        System.out.println("main(): exit point");
    }
}
