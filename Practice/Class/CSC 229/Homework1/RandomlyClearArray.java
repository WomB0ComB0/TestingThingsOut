import java.util.Scanner;

/**
 * This class demonstrates how to randomly clear elements from an array and create a new array
 * containing the remaining non-zero elements.
 * @author Mike Odnis
 * @version 1.0
 * @since 10/02/2023
 */
public class RandomlyClearArray {
    /**
     * The main method for running the program.
     *
     * @param args The command-line arguments (not used).
     */
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.println("Enter the size of the array: ");
            int size = scanner.nextInt();
            int[] arr = new int[size];

            // Initialize the array with consecutive numbers from 1 to size
            for (int i = 0; i < arr.length; i++) {
                arr[i] = i + 1;
            }

            System.out.println("Enter the number of elements to clear: ");
            int num = scanner.nextInt();

            // Check if num is greater than or equal to the size of the array
            if (num >= arr.length) {
                // Clear all elements by setting them to 0
                for (int i = 0; i < arr.length; i++) {
                    arr[i] = 0;
                }
            } else {
                // Clear a specified number of random elements
                for (int i = 0; i < num; i++) {
                    int index = (int) (Math.random() * arr.length);
                    arr[index] = 0;
                }
            }

            // Create a new array to store the remaining non-zero elements
            int[] newArray = new int[arr.length - num];
            int newIndex = 0;

            // Copy all non-zero elements to the new array
            for (int i = 0; i < arr.length; i++) {
                if (arr[i] != 0) {
                    newArray[newIndex] = arr[i];
                    newIndex++;
                }
            }

            // Print the new array
            for (int i = 0; i < newArray.length; i++) {
                System.out.print(newArray[i] + " ");
            }
        }
    }
}
