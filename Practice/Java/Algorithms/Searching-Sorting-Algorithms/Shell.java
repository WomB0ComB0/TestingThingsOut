// A Shell is a sequence of integers h1, h2, …., hk, such that hi > h(i+1) and hk = 1. A Shell sort improves on the insertion sort by breaking the original list into a number of smaller sublists, each of which is sorted using an insertion sort. The unique way that these sublists are chosen is the key to the shell sort. Instead of breaking the list into sublists of contiguous items, the shell sort uses an increment i, sometimes called the gap, to create a sublist by choosing all items that are i items apart.

/**
 *  • Shell's original sequence: N/2 , N/4 , …, 1
 *  • Knuth's increments: 1, 4, 13, …, (3k – 1) / 2
 *  • Sedgewick's increments: 1, 8, 23, 77, 281, 1073, 4193, 16577...4j+1+ 3·2j+ 1
 *  • Hibbard's increments: 1, 3, 7, 15, 31, 63, 127, 255, 511…
 *  • Papernov & Stasevich increment: 1, 3, 5, 9, 17, 33, 65,...
 *  • Pratt: 1, 2, 3, 4, 6, 9, 8, 12, 18, 27, 16, 24, 36, 54, 81....
*/

/**
 *  shellSort(array, size)
        for interval i <- size/2n down to 1
            for each interval "i" in array
                sort all the elements at interval "i"
    end shellSort
*/

/**
 *  Time complexity
 *  _______________________
 *  | Best    | O(n log n)|
 *  |         |           |
 *  | Worst   | O(n^2)    |
 *  |         |           |
 *  | Average | O(n log n)|
 *  |         |           |
 *  | Space   | O(1)      |
*/

/**
 *  Worst Case Complexity [Big-O] less than or equal to O(n^2)
 *  Worst case complexity for shell sort is always less than or equal to O(n^2)
 *  
 *  According to the Poonen Theorem, worst case complexity for shell sort is O((n log n)^2 / (log  log n)^2) or O((n log n)^2 / (log log N)) or O((N(log n)^2)) or something in between
*/

/**
 *  Best Case Complexity [Big-omega] O(n log n)
 *  When the array is already sorted, the total number of comparisons for each interval (or increment) is equal to the size of the array.
*/

/**
 *  Average Case Complexity [Big-theta] O(n log n)
 *  It is around O(n ^ 1.25)
*/

// Shell sort in Java programming

import java.util.Arrays;

class ShellSort {

    // Rearrange elements at each n/2, n/4, n/8, ... intervals
    void shellSort(int array[], int n) {
        for (int interval = n / 2; interval > 0; interval /= 2) {
            for (int i = interval; i < n; i += 1) {
                int temp = array[i];
                int j;
                for (j = i; j >= interval && array[j - interval] > temp; j -= interval) {
                    array[j] = array[j - interval];
                }
                array[j] = temp;
            }
        }
    }

    // Driver code
    public static void main(String args[]) {
        int[] data = { 9, 8, 3, 7, 5, 6, 4, 1 };
        int size = data.length;
        ShellSort ss = new ShellSort();
        ss.shellSort(data, size);
        System.out.println("Sorted Array in Ascending Order: ");
        System.out.println(Arrays.toString(data));
    }
}