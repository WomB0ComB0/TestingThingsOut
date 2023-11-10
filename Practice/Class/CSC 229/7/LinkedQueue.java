import java.util.NoSuchElementException;

public class LinkedQueue<E> {
    private class Node {
        E data;
        Node next;

        Node(E data) {
            this.data = data;
        }
    }

    private Node front;
    private Node rear;
    private int size;

    public LinkedQueue() {
        front = null;
        rear = null;
        size = 0;
    }

    public void enqueue(E item) {
        Node newNode = new Node(item);
        if (isEmpty()) {
            front = newNode;
            rear = newNode;
        } else {
            rear.next = newNode;
            rear = newNode;
        }
        size++;
    }

    public E dequeue() {
        if (isEmpty()) {
            throw new NoSuchElementException("Queue is empty");
        }
        E data = front.data;
        front = front.next;
        size--;
        if (isEmpty()) {
            rear = null;
        }
        return data;
    }

    public E front() {
        if (isEmpty()) {
            throw new NoSuchElementException("Queue is empty");
        }
        return front.data;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public int size() {
        return size;
    }

    public void concatenate(LinkedQueue<E> Q2) {
        if (Q2.isEmpty()) {
            return;
        }
        
        if (isEmpty()) {
            front = Q2.front;
            rear = Q2.rear;
        } else {
            rear.next = Q2.front;
            rear = Q2.rear;
        }
        
        size += Q2.size;
        
        Q2.front = null;
        Q2.rear = null;
        Q2.size = 0;
    }
}
