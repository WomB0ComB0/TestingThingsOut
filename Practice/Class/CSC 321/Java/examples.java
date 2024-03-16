import java.util.Arrays;
import java.util.Random;

public class examples {
  public static void main(String[] args) {
    Integer[] numbers = new Integer[50];
    Random rand = new Random();
    for (int i = 0; i < 50; i++) {
      numbers[i] = rand.nextInt(100);
    }
    
    System.out.println("Random array: \n" + Arrays.toString(numbers));
    
    Arrays.sort(numbers, (first, second) -> first.compareTo(second));
    System.out.println("Sorted array: \n" + Arrays.toString(numbers));
    
    System.out.println("Calculation: \n"+ calculate((first, second) -> first + second, 5, 10));
  }
    public static Integer calculate(Calculation operation, Integer first, Integer second) {
      return operation.apply(first, second);
    }
}

interface Calculation {
  Integer apply(Integer first, Integer second);
}