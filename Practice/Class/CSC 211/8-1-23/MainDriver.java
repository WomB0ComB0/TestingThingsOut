import java.util.Scanner;
public class MainDriver {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.println("Enter a number: ");
    int num1 = input.nextInt();
    System.out.println("Enter a number you want to multiply by: ");
    int num2 = input.nextInt();
    System.out.println(multiply(num1, num2));
  }
  public static int multiply(int num1, int num2){
    return num1 * num2;
  }
}