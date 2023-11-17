public interface Queue<T> {
  public int size();
  public boolean isEmpty();
  public void enqueue(T e) throws IllegalStateException;
  public T first();
  public T dequeue();  
}
