import java.util.HashSet;
public class SinglyLinkedList<E> {
  private static class Node<E>{
    private E element;
    private Node<E> next;
    public Node(E e, Node<E> n){
      element = e;
      next = n;
    }
    public E getElement(){
      return element;
    }
    public Node<E> getNext(){
      return next;
    }
    public void setNext(Node<E> n){
      next = n;
    }
  }
  private Node<E> head = null;
  private Node<E> tail = null;
  private int size = 0;
  public SinglyLinkedList(){}
  public int size(){
    return size;
  }
  public boolean isEmpty(){
    return size == 0;
  }
  public E first(){
    if(isEmpty()) return null;
    return head.getElement();
  }
  public E last(){
    if(isEmpty()) return null;
    return tail.getElement();
  }
  public void addFirst(E e){
    head = new Node<>(e, head);
    if(size == 0) tail = head;
    size++;
  }
  public void addLast(E e){
    Node<E> newest = new Node<>(e, null);
    if(isEmpty()) head = newest;
    else tail.setNext(newest);
    tail = newest;
    size++;
  }
  public E removeFirst(){
    if(isEmpty()) return null;
    E answer = head.getElement();
    head = head.getNext();
    size--;
    if(size == 0) tail = null;
    return answer;
  }
  public void removeDuplicates() {
    if (head == null) return;
    HashSet<E> set = new HashSet<>();
    Node<E> prev = null;
    Node<E> curr = head;

    while (curr != null) {
      if (set.contains(curr.getElement())) {
        prev.setNext(curr.getNext());
      } else {
        set.add(curr.getElement());
        prev = curr;
      }
      curr = curr.getNext();
    }

  }
  public E findNthFromEnd(int n){
    if (head == null || n <= 0 || n > size) return null;

    Node<E> pointer1 = head;
    Node<E> pointer2 = head;

    for (int i = 0; i < n; i++) {
      pointer1 = pointer1.getNext();
    }

    while (pointer1 != null) {
      pointer1 = pointer1.getNext();
      pointer2 = pointer2.getNext();
    }

    return pointer2.getElement();
  }
  public void reverseList() {
    if (head == null) return;
    Node<E> prev = null;
    Node<E> curr = head;
    Node<E> next = null;

    while (curr != null) {
      next = curr.getNext();
      curr.setNext(prev);
      prev = curr;
      curr = next;
    }
    head = prev;
  }
  public void printList() {
    Node<E> curr = head;
    while (curr != null) {
      System.out.print(curr.getElement() + " ");
      curr = curr.getNext();
    }
    System.out.println();
  }

  public void displayList() {
    Node<E> tracker = head;
    if (isEmpty())
      System.out.println("The list is empty.");
    else
      while (tracker != null) {
        System.out.println("Element is: " + tracker.getElement() + " ");
        tracker = tracker.getNext();
      }
  }
}