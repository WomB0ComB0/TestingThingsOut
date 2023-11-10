import java.util.LinkedList;

/**
 * The {@code Deques} class demonstrates the use of a deque (double-ended queue) with the LinkedList implementation.
 */
public class Deques {

    /**
     * The main method serves as the entry point of the program.
     *
     * @param args The command-line arguments (not used in this example).
     */
    public static void main(String[] args) {
        // Create a deque using LinkedList
        LinkedList<Integer> deque = new LinkedList<>();

        // Add elements to the deque
        deque.addLast(5);
        deque.addFirst(3);
        deque.addFirst(7);

        // Print the first element in the deque
        System.out.println(deque.getFirst()); // 7

        // Remove and print the last element in the deque
        System.out.println(deque.removeLast()); // 5

        // Print the size of the deque
        System.out.println(deque.size()); // 2

        // Remove and print the last element in the deque
        System.out.println(deque.removeLast()); // 3

        // Remove and print the first element in the deque
        System.out.println(deque.removeFirst()); // 7

        // Add elements to the deque
        deque.addFirst(6);
        deque.addFirst(8);

        // Print the last element in the deque
        System.out.println(deque.getLast()); // 6

        // Add an element to the deque
        deque.addFirst(8);

        // Check if the deque is empty and print the last element
        System.out.println(deque.isEmpty()); // False
        System.out.println(deque.getLast()); // 6
    }
}


// public static void main(String[] args){
// LinkedList<String> deque = new LinkedList<>();
// System.out.println("Welcome to the Deque Demonstrator Program");

// deque.addFirst("Vijay");
// deque.addFirst("Hamid");
// deque.addLast("Sandra");
// deque.addLast("Paula");

// System.out.println("Removing the last value gives us" + deque.removeLast());
// System.out.println("The size of the list is:" + deque.size());
// System.out.println("Removing the first value gives us:" +
// deque.removeFirst());
// System.out.println("Is the list empty:" + deque.isEmpty());
// System.out.println("The first element is:" + deque.getFirst());
// }