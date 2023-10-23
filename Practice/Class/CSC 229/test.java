import java.util.Random;

public class test {
  public static void main(String[] args) {
    int[] sizes = { 100, 500, 1000, 5000, 10000, 50000 }; // You can add more sizes as needed

    for (int size : sizes) {
      double[] testData = generateRandomArray(size);

      long time1 = measureTimeForPrefixAverage1(testData);
      long time2 = measureTimeForPrefixAverage2(testData);

      System.out.println(size + "\t" + time1 + "\t" + time2);
    }
  }

  public static long measureTimeForPrefixAverage1(double[] x) {
    long startTime = System.nanoTime();
    prefixAverage1(x);
    long endTime = System.nanoTime();
    return endTime - startTime;
  }

  public static long measureTimeForPrefixAverage2(double[] x) {
    long startTime = System.nanoTime();
    prefixAverage2(x);
    long endTime = System.nanoTime();
    return endTime - startTime;
  }

  public static double[] generateRandomArray(int n) {
    Random rand = new Random();
    double[] array = new double[n];
    for (int i = 0; i < n; i++) {
      array[i] = rand.nextDouble() * 100; // Random number between 0 and 100
    }
    return array;
  }

  public static double[] prefixAverage1(double[] x) {
    int n = x.length;
    double[] a = new double[n];
    for (int j = 0; j < n; j++) {
      double total = 0;
      for (int i = 0; i <= j; i++) {
        total += x[i];
      }
      a[j] = total / (j + 1);
    }
    return a;
  }

  public static double[] prefixAverage2(double[] x) {
    int n = x.length;
    double[] a = new double[n];
    double total = 0;
    for (int j = 0; j < n; j++) {
      total += x[j];
      a[j] = total / (j + 1);
    }
    return a;
  }
}
