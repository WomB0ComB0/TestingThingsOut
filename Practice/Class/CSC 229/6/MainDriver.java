public class MainDriver {
  public static void main(String[] args) {
    // queue
    ArrayQueue<Integer> queue = new ArrayQueue<>();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    System.out.println(queue.dequeue());
    System.out.println(queue.dequeue());
    System.out.println(queue.dequeue());
  }
}
