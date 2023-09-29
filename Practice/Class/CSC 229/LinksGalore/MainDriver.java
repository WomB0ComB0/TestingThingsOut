public class MainDriver {
  public static void main(String[] args) {
    System.out.println("main(): entry point");

    SinglyLinkedList<Integer> s1 = new SinglyLinkedList<>();
    s1.addFirst(1);
    s1.addLast(2);
    s1.addLast(3);
    s1.addLast(4);
    s1.addLast(5);
    s1.addLast(6);
    s1.addLast(7);
    s1.addLast(8);
    s1.addLast(9);
    s1.addLast(10);
    s1.displayList();
    s1.size();
    System.out.println("main(): exit point");
  }
}
