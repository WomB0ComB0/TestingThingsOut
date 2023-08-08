public class Main {
  public static void main(String[] args) {
    System.out.println(power(10, 3));
  }
  public static double power(double exponent, double base){
    if (base > 0) {
      return base * power(base, exponent - 1);
    } else {
      return 1;
    }
  }
}