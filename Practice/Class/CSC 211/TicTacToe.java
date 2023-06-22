import java.util.Scanner;
public class TicTacToe {
    private char[][] board;
    private char currentPlayer;
    public TicTacToe() {
        board = new char[3][3];
        currentPlayer = 'X';
        for (int i = 0; i < 3; i++) // Initialize board w/ empty spaces 
            for (int j = 0; j < 3; j++) 
                board[i][j] = ' ';
    }
    public void play() {
        boolean gameFinished = false;
        int moves = 0;
        Scanner scanner = new Scanner(System.in);
        while (!gameFinished) {
            displayBoard();
            System.out.print("Player " + currentPlayer + ", enter your move (row [0-2] and column [0-2]): ");
            int row = scanner.nextInt();
            int col = scanner.nextInt();
            if (isValidMove(row, col)) {
                board[row][col] = currentPlayer;
                moves++;
                if (checkWin(row, col)) {
                    displayBoard();
                    System.out.println("Player " + currentPlayer + " wins!");
                    gameFinished = true;
                } else if (moves == 9) {
                    displayBoard();
                    System.out.println("It's a draw!");
                    gameFinished = true;
                } else {
                    currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
                }
            } else {
                System.out.println("Invalid move! Try again.");
            }
        }
        scanner.close();
    }
    public boolean isValidMove(int row, int col) {
        if (row < 0 || row >= 3 || col < 0 || col >= 3)
            return false;
        return board[row][col] == ' ';
    }
    public boolean checkWin(int lastRow, int lastCol) {
        if (board[lastRow][0] == board[lastRow][1] && board[lastRow][1] == board[lastRow][2]) // Check row
            return true;
        if (board[0][lastCol] == board[1][lastCol] && board[1][lastCol] == board[2][lastCol]) // Check column
            return true;
        if ((lastRow == lastCol || lastRow + lastCol == 2) &&
                ((board[0][0] == board[1][1] && board[1][1] == board[2][2]) ||
                        (board[0][2] == board[1][1] && board[1][1] == board[2][0]))) {
            return true;
        }
        return false;
    }
    public void displayBoard() {
        System.out.println("-------------");
        for (int i = 0; i < 3; i++) {
            System.out.print("| ");
            for (int j = 0; j < 3; j++) {
                System.out.print(board[i][j] + " | ");
            }
            System.out.println();
            System.out.println("-------------");
        }
    }
    public static void main(String[] args) {
        TicTacToe game = new TicTacToe();
        game.play();
    }
}