// Binary Search is a searching algorithm for finding an element's position in a sorted array.

// Iterative method

// Binary Search in Java

class BinarySearchIterative {
    int IterativeBinarySearch(int array[], int x, int low, int high) {

        // Repeat until the pointers low and high meet each other
        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (array[mid] == x)
                return mid;

            if (array[mid] < x)
                low = mid + 1;

            else
                high = mid - 1;
        }

        return -1;
    }

    public static void main(String args[]) {
        BinarySearchIterative ob = new BinarySearchIterative();
        int array[] = { 3, 4, 5, 6, 7, 8, 9 };
        int n = array.length;
        int x = 4;
        int result = ob.IterativeBinarySearch(array, x, 0, n - 1);
        if (result == -1)
            System.out.println("Not found");
        else
            System.out.println("Element found at index " + result);
    }
}

// Recursive method

class BinarySearchRecursive {
    int RecursiveBinarySearch(int array[], int x, int low, int high) {

        if (high >= low) {
            int mid = low + (high - low) / 2;

            // If found at mid, then return it
            if (array[mid] == x)
                return mid;

            // Search the left half
            if (array[mid] > x)
                return RecursiveBinarySearch(array, x, low, mid - 1);

            // Search the right half
            return RecursiveBinarySearch(array, x, mid + 1, high);
        }

        return -1;
    }

    public static void main(String args[]) {
        BinarySearchRecursive ob = new BinarySearchRecursive();
        int array[] = { 3, 4, 5, 6, 7, 8, 9 };
        int n = array.length;
        int x = 4;
        int result = ob.RecursiveBinarySearch(array, x, 0, n - 1);
        if (result == -1)
            System.out.println("Not found");
        else
            System.out.println("Element found at index " + result);
    }
}