public class MainDriver {
  public static void main(String[] args) {
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
    System.out.println("Original list:");
    s1.displayList();

    s1.removeDuplicates();
    System.out.println("\nList after removing duplicates:");
    s1.displayList();

    int nthFromEnd = 3;
    Integer nthElement = s1.findNthFromEnd(nthFromEnd);
    System.out.println("\n" + nthFromEnd + "th element from the end is: " + nthElement);

    s1.reverseList();
    System.out.println("\nList after reversing:");
    s1.displayList();

  }
}
