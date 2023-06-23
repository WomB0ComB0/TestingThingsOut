public class StackTest {
  public static void main(String[] args){
    IntegerStack stack01  = new IntegerStack(25);

    stack01.push(35);
    stack01.push(17);
    stack01.push(56);

    System.out.println(stack01.toString());
  }
}