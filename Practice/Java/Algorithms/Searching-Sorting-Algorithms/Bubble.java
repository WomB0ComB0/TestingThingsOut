/**
 * 1. First iteration (Compare and Swap)
 *  1. Starting from the first index, compare the first and the second elements.
 *  2. If the first element is greater than the second element, they are swapped.
 *  3. Now, compare teh second and third element, they are swapped.
 *  4. The above process goes on until the last element. 
*/

// Bubble sort is a sorting algorithm that is used to sort items of a list. It is named as bubble sort because, same as like bubbles the smaller or lighter elements comes up (at start) and bigger or heavier elements goes down (at end).
// Optimized Bubble sort in Java

import java.util.Arrays;

class Main {

  // perform the bubble sort
  static void bubbleSort(int array[]) {
    int size = array.length;
    
    // loop to access each array element
    for (int i = 0; i < (size-1); i++) {
    
      // check if swapping occurs
      boolean swapped = false;
      
      // loop to compare adjacent elements
      for (int j = 0; j < (size-i-1); j++) {

        // compare two array elements
        // change > to < to sort in descending order
        if (array[j] > array[j + 1]) {

          // swapping occurs if elements
          // are not in the intended order
          int temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          
          swapped = true;
        }
      }
      // no swapping means the array is already sorted
      // so no need for further comparison
      if (!swapped)
        break;

    }
  }

  public static void main(String args[]) {
      
    int[] data = { -2, 45, 0, 11, -9 };
    
    // call method using the class name
    Main.bubbleSort(data);
    
    System.out.println("Sorted Array in Ascending Order:");
    System.out.println(Arrays.toString(data));
  }
}