import java.util.LinkedList;

public class HWDeque {
  public static void main(String[] args) {
    LinkedList<Integer> deque = new LinkedList<>();
    deque.addFirst(3);
    deque.addLast(8);
    deque.addLast(9);
    deque.addFirst(1);
    System.out.println(deque.getLast());
    System.out.println(deque.isEmpty());
    deque.addFirst(2);
    deque.removeLast();
    deque.addLast(7);
    System.out.println(deque.getFirst());
    System.out.println(deque.getLast());
    deque.addLast(4);
    System.out.println(deque.size());
    deque.removeFirst();
    deque.removeFirst();
    System.out.println(deque);
  }  
}
