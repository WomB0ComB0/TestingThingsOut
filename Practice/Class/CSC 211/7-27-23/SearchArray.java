public class SearchArray {
  public static void main(String[] args) {
    int[] array = {1, 2, 3, 4, 5};
    int target = 3;
    int index = -1;
    for (int i = 0; i < array.length; i++) {
      if (array[i] == target) {
        index = i;
        break;
      }
    }
    System.out.printf("Target %d found at index %d\n", target, index);
  }  
}
