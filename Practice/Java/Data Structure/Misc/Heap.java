
/**
 * Heap data structure is a complete binary tree that satisfies the heap property,
 * where any given node is
 * - always greater than its child node/s and the key of the root node is the largest among all other nodes.
 *   This property is also called max heap property.
 * - always smaller than the child node/s and the key of the root node is the smallest among all other nodes.
 *   This property is also called min heap property.
 */

/**
 * Heapify
 * The process of creating  a heap data structure from a binary tree. It is used to create a Min-Heap or a Max-Heap.
 * 
 * Insert Element into Heap
 * 
 * If there is no node --> create a newNode : a node is already present --> insert the newNode at the end (last node from left to right) ---> heapify the tree
 * 
 * Delete Element from Heap
 * 
 * if nodeToBeDeleted is the leafNode ? remove the node : swap nodeToBeDeleted with the last node (last node from left to right) => remove nodeToBeDeleted ---> heapify the tree 
*/
import java.util.ArrayList;

class Heap {
  /**
   * Maintains the heap property of the subtree rooted at index 'i'.
   *
   * @param hT The ArrayList representing the heap.
   * @param i  Index of the root of the subtree.
   */
  void heapify(ArrayList<Integer> hT, int i) {
    int size = hT.size();
    int largest = i;
    int l = 2 * i + 1;
    int r = 2 * i + 2;
    if (l < size && hT.get(l) > hT.get(largest))
      largest = l;
    if (r < size && hT.get(r) > hT.get(largest))
      largest = r;

    if (largest != i) {
      int temp = hT.get(largest);
      hT.set(largest, hT.get(i));
      hT.set(i, temp);

      heapify(hT, largest);
    }
  }

  /**
   * Inserts a new element into the heap.
   *
   * @param hT      The ArrayList representing the heap.
   * @param newNum  The element to be inserted.
   */
  void insert(ArrayList<Integer> hT, int newNum) {
    int size = hT.size();
    if (size == 0) {
      hT.add(newNum);
    } else {
      hT.add(newNum);
      for (int i = size / 2 - 1; i >= 0; i--) {
        heapify(hT, i);
      }
    }
  }

  /**
   * Deletes a specified element from the heap.
   *
   * @param hT   The ArrayList representing the heap.
   * @param num  The element to be deleted.
   */
  void deleteNode(ArrayList<Integer> hT, int num) {
    int size = hT.size();
    int i;
    for (i = 0; i < size; i++) {
      if (num == hT.get(i))
        break;
    }

    int temp = hT.get(i);
    hT.set(i, hT.get(size - 1));
    hT.set(size - 1, temp);

    hT.remove(size - 1);
    for (int j = size / 2 - 1; j >= 0; j--) {
      heapify(hT, j);
    }
  }

  /**
   * Prints the elements of the ArrayList representing the heap.
   *
   * @param array The ArrayList representing the heap.
   * @param size  The size of the heap.
   */
  void printArray(ArrayList<Integer> array, int size) {
    for (Integer i : array) {
      System.out.print(i + " ");
    }
    System.out.println();
  }

  /**
   * Main method to demonstrate the Heap class.
   *
   * @param args Command-line arguments (not used in this example).
   */
  public static void main(String args[]) {

    ArrayList<Integer> array = new ArrayList<Integer>();
    int size = array.size();

    Heap h = new Heap();
    h.insert(array, 3);
    h.insert(array, 4);
    h.insert(array, 9);
    h.insert(array, 5);
    h.insert(array, 2);

    System.out.println("Max-Heap array: ");
    h.printArray(array, size);

    h.deleteNode(array, 4);
    System.out.println("After deleting an element: ");
    h.printArray(array, size);
  }
}
