public class RaggedArray {
  public static void main(String[] args){
    int rowx, row, colx, col;
    int [][] arr = {{7, 11, 99, 87}, {4,8}, {2,5,9}, {1,3,6,10}};
    for (row = arr.length - 1; row > 0; row--)
      for (colx = 0, rowx = row; !(rowx > arr.length-1) && !(colx > arr[rowx].length-1); colx++, rowx++)
        System.out.printf("%d ", arr[rowx][colx]);
    for (col = 0; col < arr[0].length; col++)
      for (rowx = 0, colx = col; !(rowx > arr.length-1) && !(colx > arr[rowx].length-1); rowx++, colx++)
        System.out.printf("%d ", arr[rowx][colx]);     
  }
}