/**
 *  Radix sort is a sorting algorithm that sorts the elements by first grouping the individual digits of the same place value. Then, sort the elements according to their increasing/decreasing order.
*/

// Radix Sort in Java Programming

/**
 *  radixSort(array)
 *      d <- maximum number of digits in the largest element
 *      create d buckets of size 0-9
 *      for i <- 0 to d
 *          sort the elements according to ith place digits using countingSort
 *  countingSort(array, d)
 *      max <- find largest element among dth place elements
 *      initialize count array with all zeros
 *      for j <- 0 to size
 *          find the total count of each unique digit in dth place of elements and
 *          store the count at jth index in count array
 *      for i <- 1 to max
 *          find the cumulative sum and store it in count array itself
 *      for j <- size down to 1
 *          restore the elements to array
 *          decrease count of each element restored by 1
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

/**
 * Since radix sort is a non-comparative algorithm, it has advantages over comparative sorting algorithms. 
 * 
 * For the radix sort that uses counting sort as an intermediate stable sort, the time complexity is O(d(n + k))
 * 
 * Here, d is the number cycle and O(n + k) is the time complexity of counting sort.
 * 
 * Thus, radix sort has linear time complexity which is better than O(n log n) of comparative sorting algorithms.
 * 
 * If we take every large digit numbers or the number of other bases like 32-bit and 64-bit numbers then it can perform in linear time however the intermediate sort takes large space.
 * 
 * This makes radix sort space inefficient. This is the reason why this sort is not used in software libraries.
*/

import java.util.Arrays;

class RadixSort {

    // Using counting sort to sort the elements in the basis of significant places
    void countingSort(int array[], int size, int place) {
        int[] output = new int[size + 1];
        int max = array[0];
        for (int i = 1; i < size; i++) {
            if (array[i] > max)
                max = array[i];
        }
        int[] count = new int[max + 1];

        for (int i = 0; i < max; ++i)
            count[i] = 0;

        // Calculate count of elements
        for (int i = 0; i < size; i++)
            count[(array[i] / place) % 10]++;

        // Calculate cumulative count
        for (int i = 1; i < 10; i++)
            count[i] += count[i - 1];

        // Place the elements in sorted order
        for (int i = size - 1; i >= 0; i--) {
            output[count[(array[i] / place) % 10] - 1] = array[i];
            count[(array[i] / place) % 10]--;
        }

        for (int i = 0; i < size; i++)
            array[i] = output[i];
    }

    // Function to get the largest element from an array
    int getMax(int array[], int n) {
        int max = array[0];
        for (int i = 1; i < n; i++)
            if (array[i] > max)
                max = array[i];
        return max;
    }

    // Main function to implement radix sort
    void radixSort(int array[], int size) {
        // Get maximum element
        int max = getMax(array, size);

        // Apply counting sort to sort elements based on place value.
        for (int place = 1; max / place > 0; place *= 10)
            countingSort(array, size, place);
    }

    // Driver code
    public static void main(String args[]) {
        int[] data = { 121, 432, 564, 23, 1, 45, 788 };
        int size = data.length;
        RadixSort rs = new RadixSort();
        rs.radixSort(data, size);
        System.out.println("Sorted Array in Ascending Order: ");
        System.out.println(Arrays.toString(data));
    }
}