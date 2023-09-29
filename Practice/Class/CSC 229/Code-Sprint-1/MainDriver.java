// Write a method that accepts 2 arguments both of which are 3x3 2d arrays of integers. The method should create another 3x3 integer that will contain the product of the corresponding elements of the two arguments 
public class MainDriver {
  public static void main(String[] args) {
    int[][] a = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };
    int[][] b = { { 9, 8, 7 }, { 6, 5, 4 }, { 3, 2, 1 } };
    int[][] product = multiply(a, b);
    for (int i = 0; i < product.length; i++) {
      for (int j = 0; j < product[i].length; j++) {
        System.out.print(product[i][j] + " ");
      }
      System.out.println();
    }
  }
  public static int[][] multiply(int[][] a, int[][] b) {
    int[][] product = new int[3][3];
    for (int i = 0; i < a.length; i++) {
      for (int j = 0; j < a[i].length; j++) {
        product[i][j] = a[i][j] * b[i][j];
      }
    }
    return product;
  }
}
