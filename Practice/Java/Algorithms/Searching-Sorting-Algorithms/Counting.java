//  Counting sort is a sorting algorithm that sorts the elements of an array by counting the number of occurrences of each unique element in the array. The count is stored in an auxiliary array and the sorting is done by mapping the count as an index of the auxiliary array.
// Counting sort in Java programming

/**
 *  countingSort(array, size)
 *      max <- find largest element in array
 *      initialize count array with all zeros
 *      for j <- 0 to size
 *          find the total count of each unique element and 
 *          store the count at jth index in count array
 *      for i <- 1 to max
 *          find the cumulative sum and store it in count array itself
 *      for j <- size down to 1
 *          restore the elements to array
 *          decrease count of each element restored by 1
*/

/**
 *  for-loop  time of counting
 *  __________________________
 *  | 1st     |  O(max)      |
 *  |         |              |
 *  | 2nd     |  O(size)     |
 *  |         |              |
 *  | 3rd     |  O(max)      |
 *  |         |              |
 *  | 4th     |  O(size)     |
 *  
*/

/**
 *  Time complexity
 *  __________________________
 *  | Best      |  O(n + k)  |
 *  |           |            |
 *  | Worst     |  O(n + k)  |
 *  |           |            |
 *  | Average   |  O(n + k)  |
 *  |           |            |
 *  | Space     |  O(max)    |
 *  
*/

import java.util.Arrays;

class CountingSort {
    void countSort(int array[], int size) {
        int[] output = new int[size + 1];

        // Find the largest element of the array
        int max = array[0];
        for (int i = 1; i < size; i++) {
            if (array[i] > max)
                max = array[i];
        }
        int[] count = new int[max + 1];

        // Initialize count array with all zeros.
        for (int i = 0; i < max; ++i) {
            count[i] = 0;
        }

        // Store the count of each element
        for (int i = 0; i < size; i++) {
            count[array[i]]++;
        }

        // Store the cummulative count of each array
        for (int i = 1; i <= max; i++) {
            count[i] += count[i - 1];
        }

        // Find the index of each element of the original array in count array, and
        // place the elements in output array
        for (int i = size - 1; i >= 0; i--) {
            output[count[array[i]] - 1] = array[i];
            count[array[i]]--;
        }

        // Copy the sorted elements into original array
        for (int i = 0; i < size; i++) {
            array[i] = output[i];
        }
    }

    // Driver code
    public static void main(String args[]) {
        int[] data = { 4, 2, 2, 8, 3, 3, 1 };
        int size = data.length;
        CountingSort cs = new CountingSort();
        cs.countSort(data, size);
        System.out.println("Sorted Array in Ascending Order: ");
        System.out.println(Arrays.toString(data));
    }
}