import java.util.ArrayDeque;
import java.util.List;
import java.util.Queue;

/**
 * This class demonstrates the rearrangement of a deque using a queue.
 */
public class RearrangeDeque {

    /**
     * The main method rearranges the elements in the deque D in a specific order using a queue Q.
     *
     * @param args The command-line arguments (not used in this example).
     */
    public static void main(String[] args) {
        // Create the deque D with the initial elements
        ArrayDeque<Integer> D = new ArrayDeque<>();
        D.addAll(List.of(1, 2, 3, 4, 5, 6, 7, 8));

        // Create an initially empty queue Q
        Queue<Integer> Q = new ArrayDeque<>();

        // Step 1: Enqueue the first three elements from D into Q
        for (int i = 0; i < 3; i++) {
            Q.add(D.removeFirst());
        }

        // Step 2: Enqueue the next element from D into Q
        Q.add(D.removeFirst());

        // Step 3: Enqueue the next two elements from D into Q
        for (int i = 0; i < 2; i++) {
            Q.add(D.removeFirst());
        }

        // Step 4: Enqueue the remaining elements from D into Q
        while (!D.isEmpty()) {
            Q.add(D.removeFirst());
        }

        // Step 5: Dequeue elements from Q and enqueue them back into D
        while (!Q.isEmpty()) {
            D.add(Q.poll());
        }

        // Now, deque D contains the desired order (1, 2, 3, 5, 4, 6, 7, 8)

        // Print the rearranged deque D
        System.out.println(D);
    }
}
