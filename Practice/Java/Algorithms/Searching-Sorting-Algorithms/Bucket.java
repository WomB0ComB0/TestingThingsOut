// Bucket sort is a comparison sort algorithm that operates on elements by dividing them into different buckets and then sorting these buckets individually. Each bucket is sorted individually using a separate sorting algorithm or by applying the bucket sort algorithm recursively. Bucket sort is mainly useful when the input is uniformly distributed over a range.
// Bucket sort in Java

/**
 *  bucketSort()
        create N buckets each of which can hold a range of values
        for all the buckets
            initialize each bucket with 0 values
        for all the buckets
            put elements into buckets matching the range
        for all the buckets 
            sort elements in each bucket
        gather elements from each bucket
    end bucketSort
*/

/**
 *  Time complexity
 *  __________________________
 *  | Best      |  O(n + k)  |
 *  |           |            |
 *  | Worst     |  O(n^2)    |
 *  |           |            |
 *  | Average   |  O(n)      |
 *  |           |            |
 *  | Space     |  O(n + k)  |
 *  
*/

/**
 *  Worst Case Complexity [Big-O] O(n^2)
 *  When there are elements of close range in the array, they are likely to be place in the same bucket. This may result in some buckets having more number of elements than others.
 *  It makes the complexity depends on the sorting algorithm used to sort the elements of the bucket.
 *  The complexity becomes even worse when the elements are in reverse order. If insertion is used to sort elements of the bucket, then the time complexity becomes O(n^2).
 */

/** 
 *  Base Case Complexity [Big-omega] O(n +k)
 *  It occurs when the elements are uniformly distributed in the buckets with a equal number of elements in each bucket. The complexity becomes even better if the elements inside the buckets are already sorted.
 *  If insertion sort is used to sort elements of a bucket then the overall complexity in the best case will be linear ie. O(n + k). O(n) is the complexity for making the buckets and O(k) is the complexity for sorting the elements of the bucket using algorithms having linear time complexity at the best case.
*/

/**
 *  Average Case Complexity [Big-theta] O(n)
 *  It occurs when the elements are distributed randomly in the array. Even if the elements are not distributed uniformly, bucket sort runs in linear time. It holds true until the sum of the squares of the bucket sizes is linear in the total number of elements.
*/

import java.util.ArrayList;
import java.util.Collections;

public class Bucket {
    public void bucketSort(float[] arr, int n) {
        if (n <= 0)
            return;
        @SuppressWarnings("unchecked")
        ArrayList<Float>[] bucket = new ArrayList[n];

        // Create empty buckets
        for (int i = 0; i < n; i++)
            bucket[i] = new ArrayList<Float>();

        // Add elements into the buckets
        for (int i = 0; i < n; i++) {
            int bucketIndex = (int) arr[i] * n;
            bucket[bucketIndex].add(arr[i]);
        }

        // Sort the elements of each bucket
        for (int i = 0; i < n; i++) {
            Collections.sort((bucket[i]));
        }

        // Get the sorted array
        int index = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0, size = bucket[i].size(); j < size; j++) {
                arr[index++] = bucket[i].get(j);
            }
        }
    }

    // Driver code
    public static void main(String[] args) {
        Bucket b = new Bucket();
        float[] arr = { (float) 0.42, (float) 0.32, (float) 0.33, (float) 0.52, (float) 0.37, (float) 0.47,
                (float) 0.51 };
        b.bucketSort(arr, 7);

        for (float i : arr)
            System.out.print(i + "  ");
    }
}