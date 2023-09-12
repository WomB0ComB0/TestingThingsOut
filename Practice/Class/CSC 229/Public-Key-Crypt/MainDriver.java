import java.util.Scanner;
/**
 * @author Mike Odnis
 * @since 2023-09-12 (September 12, 2023)
 * This class encrypts user input using a simple Caesar cipher and generates a crypto-quote.
 * It preserves character case, handles non-alphabetical characters, and spaces.
 */
public class MainDriver {
    /**
     * The main method of the program.
     *
     * @param args Command-line arguments (not used).
     */
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a message to encrypt: ");
        String userInput = scanner.nextLine();
        // Encrypt the user input
        String cryptoQuote = encryptMessage(userInput);
        // Display the original user input and the crypto-quote
        System.out.println("\nOriginal Message: " + userInput);
        System.out.println("Crypto-Quote: " + cryptoQuote);
        scanner.close();
    }
    /**
     * Encrypts a given message using a Caesar cipher with a shift of 3 positions.
     *
     * @param message The message to be encrypted.
     * @return The encrypted message (crypto-quote).
     */
    private static String encryptMessage(String message) {
        char[] messageChars = message.toCharArray();
        char[] encryptedChars = new char[messageChars.length];
        for (int i = 0; i < messageChars.length; i++) {
            char currentChar = messageChars[i];
            if (Character.isLetter(currentChar)) {
                char base = Character.isUpperCase(currentChar) ? 'A' : 'a';
                int shifted = (currentChar - base + 3) % 26; // Shift by 3 positions
                encryptedChars[i] = (char) (base + shifted);
            } else {
                // Non-alphabetical characters and spaces are preserved as is
                encryptedChars[i] = currentChar;
            }
        }
        return new String(encryptedChars);
    }
}
