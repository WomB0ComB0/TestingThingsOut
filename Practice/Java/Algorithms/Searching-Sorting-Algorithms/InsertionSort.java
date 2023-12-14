/**
 * Insertion sort is a sorting  algorithm that places an unsorted element at its suitable place in each iteration.
*/

/**
 * Worst Case Complexity O(n^2)
 * Suppose an array is in ascending order, and you want to sort it in descending order. In this case, worst case complexity occurs.
 * 
 * Each element has to be compared with each of the other elements so, for every nth element, (n-1) number of comparisons are made.
 * 
 * Thus, the total number of comparisons = n*(n-1) ~ n^2
*/

/**
 * Best Case Complexity O(n)
 * When the array is already sorted, the outer loop runs for n number of times whereas the inner loop does not run at all. So, there are only n number of comparisons. Thus, complexity is linear.
*/

/**
 * Average Case Complexity O(n^2)
 * It occurs when the elements of an array are in jumbled order (neither ascending nor descending).
*/

/**
 * An Insertion sort is a sorting algorithm that is used to sort items of a list.
 * The array has a small number of elements
 * There re only a few elements left to be sorted
 * */
// Insertion sort in Java

import java.util.Arrays;

class InsertionSort {

    void insertionSort(int array[]) {
        int size = array.length;

        for (int step = 1; step < size; step++) {
            int key = array[step];
            int j = step - 1;

            // Compare key with each element on the left of it until an element smaller than
            // it is found.
            // For descending order, change key<array[j] to key>array[j].
            while (j >= 0 && key < array[j]) {
                array[j + 1] = array[j];
                --j;
            }

            // Place key at after the element just smaller than it.
            array[j + 1] = key;
        }
    }

    // Driver code
    public static void main(String args[]) {
        int[] data = { 9, 5, 1, 4, 3 };
        InsertionSort is = new InsertionSort();
        is.insertionSort(data);
        System.out.println("Sorted Array in Ascending Order: ");
        System.out.println(Arrays.toString(data));
    }
}