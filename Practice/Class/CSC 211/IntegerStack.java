public class IntegerStack {
    private int[] data;
    private int  stackTop;

    public IntegerStack(){
      data = new int[7];
      stackTop = 0;
    }
    public IntegerStack(int size){
      this.data = new int[size];
      this.stackTop = 0;
    }
    public void push(int num){
      if (stackTop == data.length) {
        System.out.println("IntegerStack: Push(): Stack's full");
      } else {
        data[stackTop++] = num;
      }
    }
    public int pop(){
      if (stackTop == 0){
        System.out.println("IntegerStack: Pop(): Stack's empty");
        return -1;
      } else {
        return data[--stackTop];
      }
    }
    public int peek(){
      if (stackTop == 0){
        System.out.println("IntegerStack: Peek(): Stack's empty");
        return -1;
      } else {
        return data[stackTop-1];
      }
    }
    public String toString(){
      String result = "Stack contents:";
      for(int i = 0; i <  stackTop; i++)
        result += data[i] + " ";
      result += "\n";
      return result;
    }
}