public class MainDriver {
  public static void main(String[] args) {
    System.out.println("main(): entry point");

    DoublyLinkedList<Integer> d1 = new DoublyLinkedList<>();
    d1.addFirst(1);
    d1.addLast(2);
    d1.addLast(3);
    d1.addLast(4);
    d1.addLast(5);
    d1.addLast(6);
    d1.addLast(7);
    d1.addLast(8);
    d1.addLast(9);
    d1.addLast(10);
    d1.addLast(11);
    d1.middleNode();
    d1.displayList();
    System.out.println("main(): exit point");
  }  
}
