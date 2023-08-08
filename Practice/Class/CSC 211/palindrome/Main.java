public class Main {
  public static void main(String[] args) {
    System.out.println(isPalindrome("racecar")); // true 
  }
  public static boolean isPalindrome(String s) { // recursive method
    if (s.length() == 0 || s.length() == 1) { // base case
      return true;
    }
    if (s.charAt(0) == s.charAt(s.length() - 1)) { // recursive case
      return isPalindrome(s.substring(1, s.length() - 1)); // recursive call
    }
    return false;
  }
}