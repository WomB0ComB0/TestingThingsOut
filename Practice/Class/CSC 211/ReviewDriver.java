/**
* The ReviewDriver class will help students refresh their knowledge of programming
* @author Mike Odnis
* @since 06/01/2023
* @version 1.0.0
*/ 
public class ReviewDriver {
  public static void main(String[] args) {
    int numberOfPassengers = 4;
    double discountRate  = 0.0;
    char option = 'B';
    System.out.println("main(): entry point");
    
    /* if (numberOfPassengers == 1) {
      discountRate = 0.0;
    } else if (numberOfPassengers == 2) {
      discountRate = 0.1;
    } else if (numberOfPassengers == 3) {
      discountRate = 0.2;
    } else if (numberOfPassengers == 4) {
      discountRate = 0.25;
    } else {
      discountRate = 0.3;
    } */

    switch (option) {
      case 'a':
      case 'A':
        discountRate = 0.0;
        break;
      case 'B':
        discountRate = 0.1;
        break;
      case 'C':
        discountRate = 0.2;
        break;
      case 'D':
        discountRate = 0.25;
        break;
      default:
        discountRate = 0.3;
        break;
    }
    System.out.printf("main(): discount = %f\n", discountRate);
    System.out.println("main (): exit point");
  }

}