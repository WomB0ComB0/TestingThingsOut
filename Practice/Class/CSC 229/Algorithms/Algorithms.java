package Algorithms;

public class Algorithms {
  public static void main(String[] args) {
    char c = 'X';
    int n = 1000;
    String result;
    System.out.println("main(): Entry point\n");
    
    long startTime = System.currentTimeMillis();
    
    result = repeat1(c, n);
    
    System.out.println("main(): result = " + result);
    
    long endTime = System.currentTimeMillis();
    
    long elapsed = endTime - startTime;

    System.out.println("main(): elapsed time = " + elapsed + " milliseconds");

    startTime = System.currentTimeMillis();

    result = repeat2(c, n);

    System.out.println("main(): result = " + result);

    endTime = System.currentTimeMillis();

    elapsed = endTime - startTime;

    System.out.println("main(): elapsed time = " + elapsed + " milliseconds");
    System.out.println("main(): exit point\n");
  }  
  public static String repeat1(char c, int n){
    String answer = "";
    for (int j = 0; j  <  n;  j++){
      answer += c;
    }
    return answer;
  }
  public static String repeat2(char c, int n){
    StringBuilder sb = new StringBuilder();
    for (int j = 0; j  <  n;  j++){
      sb.append(c);
    }
    return sb.toString();
  }
}
