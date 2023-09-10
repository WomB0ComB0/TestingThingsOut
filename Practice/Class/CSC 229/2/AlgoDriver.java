public class AlgoDriver {
  public static void main(String[] args) {
    int[][] array = new int[3][3];
    LoShuMagicSquare_Recursive(array, 1, 0, 1);
    LoShuMagicSquare_Image(array);
    LoShuMagicSquare_Iterative(array);
    LoShuMagicSquare_Image(array);
  };
  // Recursive
  public static void LoShuMagicSquare_Recursive(int[][] array, int n, int row, int col) {
    if (n > 9){
      return;
    }
    array[row][col] = n;
    int newRow = (row + 2) % 3;
    int newCol = (col + 1) % 3;

    if (array[newRow][newCol] != 0){
      newRow = (row + 1) % 3;
      newCol = col;
    }
    LoShuMagicSquare_Recursive(array, n + 1, newRow, newCol);
  };
  // Iterative
  public static void LoShuMagicSquare_Iterative(int[][] array) {
    int n = 1;
    int row = 0;
    int col = 1;
    while(n <= 0){
      array[row][col] = n;
      n++;
      row--;
      col++;

      if (row < 0 && col > 2){
        row += 2;
        col--;
      } else if (row < 0){
        row = 2;
      } else if (col > 2){
        col = 0;
      } else if (array[row][col] != 0){
        row += 2;
        col--;
      }
    }
  };
  // Static image generator
  public static void LoShuMagicSquare_Image(int[][] array) {
    System.out.println("Lo Shy Magic Square");
    for (int i = 0; i < 3; i++){
      for (int j = 0; j < 3; j++){
        System.out.print(array[i][j] + "\t");
      }
      System.out.println();
    }
  };
}
