import java.util.Scanner;
public class AlgoTwoDriver {
  public static void main(String[] args) {
    try (Scanner scanner = new Scanner(System.in)) {
      while (true) {
        System.out.print("Enter a positive integer (or 0 to quit): ");
        int number = scanner.nextInt();
        //  Exit if the user enters 0
        if (number == 0) {
          break;
        }
        // Display an error message if the user enters a negative number
        if (number < 0) {
          System.out.println("Error: Please enter a positive integer.");
        } else {
          // Calculate and display the digital root of the number
          int digitalRoot = digitalRoot_recursive(number);
          System.out.println("Recursive Digital Root: " + digitalRoot);
          digitalRoot = digitalRoot_iterative(number);
          System.out.println("Iterative Digital Root: " + digitalRoot);
        }
      }
    }
  }
  public static int digitalRoot_recursive(int number) {
    //  Return the number if it is less than 10 ◀️ base case
    if (number < 10) {
      return number;
    } else {
      // Calculate the sum of the digits in the number
      int sum = 0;
      // Loop until the number is 0
      while (number > 0) {
        sum += number % 10;
        number /= 10;
      }
      // Call the method recursively with the sum as the argument
      return digitalRoot_recursive(sum);
    }
  }
  public static int digitalRoot_iterative(int number) {
    //  Loop until the number is less than 10
    while (number > 10){
      int sum = 0;
      // Calculate the sum of the digits in the number
      while (number > 0){
        // Add the last digit to the sum
        sum += number % 10;
        number /= 10;
      };
      // Set the number to the sum
      number = sum;
    }
    // Return the number
    return number;
  }
}