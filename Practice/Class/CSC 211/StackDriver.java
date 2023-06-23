public class StackDriver {
  public static void main(String[]  args){
    System.out.println("main(): entry point");
    int x = 5;
    String name = "Mike";  
    
    deep(8);
    System.out.println("main(): exit point");
  }
  public static void deep(int w)
  {
    System.out.printf("deep(): entry point w = %d", w);
    int y = 9;
    int a;
    String word = "Deep()";

    a = deeper();
    System.out.printf("Leaving %s\n", word);
  }
  public static int deeper(){
    System.out.println("deeper(): entry point");
    int z = 7;
    System.out.println("deeper(): exit point");
    return z;
  }
}