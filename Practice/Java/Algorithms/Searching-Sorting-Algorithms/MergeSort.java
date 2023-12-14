/**
 * Merge Sort is one of the most popular sorting algorithms that is based on the principle of Divide and Conquer Algorithm.
*/
/**
 * Divide and Conquer Strategy
 * 
 * Divide
 * If q is the half-way point between p and r, then we can split the sub-0array A[p..r] into two arrays A[p..q] and A[q+1..r].
 * 
 * Conquer
 * In the conquer step, we try to sort both the sub-arrays A[p..q] and A[q+1..r]. If we haven't yet reached the base case, we again divide both these sub-arrays and try to sort them recursively.
 * 
 * Combine
 * When the conquer step reaches the base step and we get two sorted sub-arrays A[p..q] and A[q+1..r] for array A[p..r], we combine the results by creating a sorted array A[p..r] from two sorted sub-arrays A[p..q] and A[q+1..r].
*/

/**
 *  Code for Merge Algorithm
 * 
 *  The merge function works as follows:
 *  1. Create copies of the sub-arrays L <- A[p..q] and M <- A[q+1..r].
 *  2. Create three pointers i, j, and k
 *      a. i maintains current index of L, starting at 1
 *      b. j maintains current index of M, starting at 1
 *      c. k maintains the current index of A[p..r], starting at p
 *  3. Until we reach the end of either L or M, pick larger among elements L[i] and M[j] and place them in the correct position at A[p..r].
 *  4. When we run out of elements in either L or M, pick up the remaining elements and put in A[p..r].
*/

/**
 * The merge Step of Merge Sort
 * 
 * The algorithm maintains three pointers, one for each of the two arrays and one for maintaining the current index of the final sorted array.
 * 
 * Have we reached the end of any of the arrays? || NO --> Compare current elements of both arrays \n Copy smaller element into sorted array \n Move pointer of element containing smaller element || Yes --> Copy all remaining elements of non-empty array.
*/

// Merge sort in Java

class MergeSort {

    // Merge two subarrays L and M into arr
    void merge(int arr[], int p, int q, int r) {

        // Create L ← A[p..q] and M ← A[q+1..r]
        int n1 = q - p + 1;
        int n2 = r - q;

        int L[] = new int[n1];
        int M[] = new int[n2];

        for (int i = 0; i < n1; i++)
            L[i] = arr[p + i];
        for (int j = 0; j < n2; j++)
            M[j] = arr[q + 1 + j];

        // Maintain current index of sub-arrays and main array
        int i, j, k;
        i = 0;
        j = 0;
        k = p;

        // Until we reach either end of either L or M, pick larger among
        // elements L and M and place them in the correct position at A[p..r]
        while (i < n1 && j < n2) {
            if (L[i] <= M[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = M[j];
                j++;
            }
            k++;
        }

        // When we run out of elements in either L or M,
        // pick up the remaining elements and put in A[p..r]
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        while (j < n2) {
            arr[k] = M[j];
            j++;
            k++;
        }
    }

    // Divide the array into two subarrays, sort them and merge them
    void mergeSort(int arr[], int l, int r) {
        if (l < r) {

            // m is the point where the array is divided into two subarrays
            int m = (l + r) / 2;

            mergeSort(arr, l, m);
            mergeSort(arr, m + 1, r);

            // Merge the sorted subarrays
            merge(arr, l, m, r);
        }
    }

    // Print the array
    static void printArray(int arr[]) {
        int n = arr.length;
        for (int i = 0; i < n; ++i)
            System.out.print(arr[i] + " ");
        System.out.println();
    }

    // Driver program
    public static void main(String args[]) {
        int arr[] = { 6, 5, 12, 10, 9, 1 };

        MergeSort ob = new MergeSort();
        ob.mergeSort(arr, 0, arr.length - 1);

        System.out.println("Sorted array:");
        printArray(arr);
    }
}