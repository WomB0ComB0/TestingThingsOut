/**
* TTTDriver.java 
* @author Mike Odnis
* @since 06/01/2023
* @version 1.0 
*/
public class TTTDriver {
  public static void main(String[] args) {
    // char[][] gameBoard = new char[3][3];
    char[][] gameBoard = { { 'X', 'O', 'X' }, { 'O', 'X', 'O' }, { 'O', 'X', 'X' } };
    for (int row = 0; row < gameBoard.length; row++) {
      for (int col = 0; col < gameBoard[row].length; col++)
        System.out.printf("%c ", gameBoard[row][col]);
      System.out.println();
    }
    boolean winner = checkForWinner(gameBoard);
    System.out.printf("main(): winner = %b\n", winner);
  } 
  public static boolean checkForWinner(char[][] gb){
    boolean result = false;
    if (gb[0][0] == gb[0][1] && gb[0][1] == gb[0][2]) {
      result = true;
    } else if (gb[1][0] == gb[1][1] && gb[1][1] == gb[1][2]) {
      result = true;
    } else if (gb[2][0] == gb[2][1] && gb[2][1] == gb[2][2]) {
      result = true;
    } else if (gb[0][0] == gb[1][0] && gb[1][0] == gb[2][0]) {
      result = true;
    } else if (gb[0][1] == gb[1][1] && gb[1][1] == gb[2][1]) {
      result = true;
    } else if (gb[0][2] == gb[1][2] && gb[1][2] == gb[2][2]) {
      result = true;
    } else if (gb[0][0] == gb[1][1] && gb[1][1] == gb[2][2]) {
      result = true;
    } else if (gb[0][2] == gb[1][1] && gb[1][1] == gb[2][0]) {
      result = true;
    }
    return result;
  }
}
