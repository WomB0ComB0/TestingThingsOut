package Algorithms;

public class Homework {
  public static void main(String[] args) {
    System.out.println("main(): Entry point\n");
    long startTime = System.currentTimeMillis();

    double[] x = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    double[] y = prefixAverage2(x);
    for (int i = 0; i < y.length; i++){
      System.out.println(y[i]);
    }
    long endTime = System.currentTimeMillis();
      
    long elapsed = endTime - startTime;
  
    System.out.println("main(): elapsed time = " + elapsed + " milliseconds");
    System.out.println("main(): exit point\n");
  }

  public static double[] prefixAverage1(double[] x){
    int n = x.length;
    double[] a = new double[n];
    for (int j = 0; j < n; j++){
      double total = 0;
      for (int i = 0; i <= j; i++){
        total += x[i];
      }
      a[j] = total / (j + 1);
    }
    return a;
  }
  
  public static double[] prefixAverage2(double[] x){
    int n = x.length;
    double[] a = new double[n];
    double total = 0;
    for (int j = 0; j < n; j++){
      total += x[j];
      a[j] = total / (j + 1);
    }
    return a;
  }
}
