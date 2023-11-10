import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

/**e
 * The {@code StacksAndQueues} class demonstrates operations with queues and stacks.
 */
public class StacksAndQueues {

    /**
     * The main method serves as the entry point of the program.
     *
     * @param args The command-line arguments (not used in this example).
     */
    public static void main(String[] args) {
        // Populate a queue with integers
        Queue<Integer> originalQueue = new LinkedList<>();
        originalQueue.offer(50);
        originalQueue.offer(120);
        originalQueue.offer(80);
        originalQueue.offer(90);
        originalQueue.offer(110);

        // Copy the queue into a stack
        Stack<Integer> stackFromQueue = copyQueueToStack(originalQueue);

        // Print the stack after eliminating values greater than 100
        System.out.println("Stack from Queue with values <= 100: " + stackFromQueue);

        // Populate a stack with integers
        Stack<Integer> originalStack = new Stack<>();
        originalStack.push(70);
        originalStack.push(130);
        originalStack.push(40);
        originalStack.push(110);

        // Remove values greater than 100 from the stack
        removeValuesGreaterThan100(originalStack);

        // Print the modified stack
        System.out.println("Modified Stack with values <= 100: " + originalStack);
    }

    /**
     * Copies the elements from a queue to a stack, eliminating values greater than 100.
     *
     * @param originalQueue The original queue to copy from.
     * @return A stack containing elements from the queue <= 100.
     */
    private static Stack<Integer> copyQueueToStack(Queue<Integer> originalQueue) {
        Stack<Integer> stackFromQueue = new Stack<>();

        while (!originalQueue.isEmpty()) {
            int current = originalQueue.poll();
            if (current <= 100) {
                stackFromQueue.push(current);
            }
        }

        return stackFromQueue;
    }

    /**
     * Removes values greater than 100 from the provided stack.
     *
     * @param originalStack The original stack to modify.
     */
    private static void removeValuesGreaterThan100(Stack<Integer> originalStack) {
        Stack<Integer> tempStack = new Stack<>();

        while (!originalStack.isEmpty()) {
            int current = originalStack.pop();
            if (current <= 100) {
                tempStack.push(current);
            }
        }

        // Restore the original order to the original stack
        while (!tempStack.isEmpty()) {
            originalStack.push(tempStack.pop());
        }
    }
}
