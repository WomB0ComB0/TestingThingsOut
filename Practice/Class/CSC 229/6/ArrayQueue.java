public class ArrayQueue<E> implements Queue<E> {
    private final E[] data;
    private int f = 0;
    private int sz = 0;
    public ArrayQueue() {
      this(30);
    }

    @SuppressWarnings("unchecked")
    public ArrayQueue(int capacity) {
      data = (E[]) new Object[capacity];
    }

    public int size() { return sz; }

    public boolean isEmpty() { return sz == 0; }

    public void enqueue(E e) throws IllegalStateException {
      if (sz == data.length) throw new IllegalStateException(" Queue is full");
      int avail = (f + sz) % data.length;
      data[avail] = e;
      sz++;
    }

    public E first() {
      if (isEmpty()) return null;
      return data[f];
    }

    public E dequeue() {
      if (isEmpty()) return null;
      E answer = data[f];
      data[f] = null;
      f = (f + 1) % data.length;
      sz--;
      return answer;
    }

    public String toString() {
      StringBuilder sb = new StringBuilder("(");
      int k = f;
      for (int j = 0; j < sz; j++) {
        if (j > 0) sb.append(", ");
        sb.append(data[k]);
        k = (k + 1) % data.length;
      }
      sb.append(")");
      return sb.toString();
    }

    public static void main(String[] args) {
      ArrayQueue<Integer> queue = new ArrayQueue<>(10);
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.enqueue(4);
      queue.enqueue(5);
      queue.enqueue(6);
      queue.enqueue(7);
      queue.enqueue(8);
      queue.enqueue(9);
      queue.enqueue(10);
      queue.first();
      System.out.println(queue);
    }
  }