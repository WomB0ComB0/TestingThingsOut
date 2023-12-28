// Heap Sort in Java

/**
 *  Heap Sort is a popular and efficient sorting algorithm in computer programming. Learning how to write the heap sort algorithm requires knowledge of two types of data structures - arrays and trees.
 *  
 *  The initial set of numbers that we want to sort is stored in an array e.g. [10, 3, 76, 34, 23, 32] and after sorting, we get a sorted array [3,10,23,32,34,76].
 *  
 *  Heap sort works by visualizing the elements of the array as a special kind of complete binary tree called a heap.
*/

/**
 *  1. Since the tree satisfies Max-Heap property, then the largest item is stored at the root node.
 *  2. Swap: Remove the root element and put at the end of the array (nth position) Put the last item of the tree (heap) at the vacant place.
 *  3. Remove: Reduce the size of the heap by 1.
 *  4. Heapify: Heapify the root element again so that we have the highest element at root.
 *  5. The process is repeated until all the items of the list are sorted.
*/

/**
 *  Time complexity
 *  _______________________
 *  | Best    | O(n log n)|
 *  |         |           |
 *  | Worst   | O(n log n)|
 *  |         |           |
 *  | Average | O(n log n)|
 *  |         |           |
 *  | Space   | O(1)      |
*/

public class Heap {

    public void sort(int arr[]) {
        int n = arr.length;

        // Build max heap
        for (int i = n / 2 - 1; i >= 0; i--) {
            heapify(arr, n, i);
        }

        // Heap sort
        for (int i = n - 1; i >= 0; i--) {
            int temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;

            // Heapify root element
            heapify(arr, i, 0);
        }
    }

    void heapify(int arr[], int n, int i) {
        // Find largest among root, left child and right child
        int largest = i;
        int l = 2 * i + 1;
        int r = 2 * i + 2;

        if (l < n && arr[l] > arr[largest])
            largest = l;

        if (r < n && arr[r] > arr[largest])
            largest = r;

        // Swap and continue heapifying if root is not largest
        if (largest != i) {
            int swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;

            heapify(arr, n, largest);
        }
    }

    // Function to print an array
    static void printArray(int arr[]) {
        int n = arr.length;
        for (int i = 0; i < n; ++i)
            System.out.print(arr[i] + " ");
        System.out.println();
    }

    // Driver code
    public static void main(String args[]) {
        int arr[] = { 1, 12, 9, 5, 6, 10 };

        Heap hs = new Heap();
        hs.sort(arr);

        System.out.println("Sorted array is");
        printArray(arr);
    }
}