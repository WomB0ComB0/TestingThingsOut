import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Arrays;
import java.util.stream.Collectors;
/**
 * Notes
 */
public class Notes {
  public static void main(String[] args) {
    
  }
  public class OuterClass {
    private int outerVariable = 10;
    public void outerMethod() {
      // Creating an instance of an anonymous inner class
      InnerClass innerClass = new InnerClass() {
        @Override
        public void innerMethod() {
          // Accessing the variable from the enclosing class
          System.out.println("Value of outerVariable from inner class: ");
        }
      };
      // Calling the method defined in the anonymous inner class
      innerClass.innerMethod();
    }
  }
  public interface InnerClass {
    public void innerMethod();
  }
}
public class Main {
  public static void main(String[] args) {
    // Creating an ArrayList of Strings
    ArrayList<String> list = new ArrayList<>();
    list.add("Java");
    list.add("Python");
    list.add("C++");
    list.add("Javascript");

    // Creating an iterator for the ArrayList
    Iterator<String> iterator = list.iterator();

    // Iterating over the element using the iterator
    while (iterator.hasNext()) {
      String element = iterator.next();
      System.out.println(element);
    }
  }
  public class MapExample {
    public static void main(String[] args) {
      List<Integer> numbers = Array.asList(1, 2, 3, 4, 5);
      // Using map to double each element in the list
      List<Integer> doubledNumbers = numbers.stream()
        .map(number -> number * 2)
        .collect(Collectors.toList());
      System.out.println("Doubled numbers: " + doubledNumbers);
    }
  }

  public class FilterExample {
    public static void main(String[] args) {
      List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
      // Using filter to get only even numbers from the list
      List<Integer> evenNumbers = numbers.stream()
        .filter(number -> number % 2 == 0)
        .collect(Collectors.toList());
      System.out.println("Even numbers: " + evenNumbers);
    }
  }

  public class ReduceExample {
    public static void main(String[] args) {
      List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
      // Using reduce to sum all the elements in the list
      int sum = numbers.stream()
        .reduce(0, (a, b) -> a + b);
      System.out.println("Sum of numbers: " + sum);
    }
  }
}

