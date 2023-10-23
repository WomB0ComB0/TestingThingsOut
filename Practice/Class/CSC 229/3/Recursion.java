public class Recursion {
  public static void main(String[] args) {
    // int n = 3;
    // System.out.printf("Calling message(%d)\n", n);
    // message(n);
    // System.out.printf("Finished calling message(%d)\n", n);  
  
    // int msgCount = 20;
    // System.out.printf("Calling factorial(%d)\n", msgCount, factorial(msgCount));
    // System.out.println(factorial(msgCount));

    // int[] array = { 1, 2, 3, 4, 5 }; 
    // int start = 0;
    // int end = array.length - 1;
    // System.out.printf("Calling rangeSum(%d, %d)\n", start, end);
    // System.out.println(rangeSum(array, start, end));

    // int n = 10;
    // System.out.printf("Calling fibonacci(%d)\n", n);
    // System.out.println(fibonacci(n));

    int x = 12;
    int y = 8;
    System.out.printf("Calling gdc(%d, %d)\n", x, y);
    System.out.println(gdc(x, y));
  } 
  public static long factorial(long n){
    if (n == 0) {
      return 1;
    } else{
      return n * factorial(n - 1);
    }
  }
  public static void message(int n){
    if (n > 0) {
      System.out.printf("This is a recursive method n = %d\n", n);
      message(n -1);
    }
    System.out.printf("Returning from message n = %d\n", n);
  }
  public static int rangeSum(int[] array, int start, int end){
    if (start >   end) {
      return 0;
    } else {
      return array[start] + rangeSum(array, start + 1, end);
    }
  }
  public static int  fibonacci(int n){
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  public static int gdc(int x, int y){
    if ( x % y == 0) {
      return y;
    } else {
      return gdc(y, x % y);
    }
  }
}
