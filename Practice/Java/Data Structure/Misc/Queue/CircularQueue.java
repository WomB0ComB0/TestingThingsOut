// A circular queue is a linear data structure that follows the First In First Out (FIFO) principle with the addition of a new feature in which the last position is connected to the first position to make a circle. It is also called ‘Ring Buffer’. It is useful in many situations where you want the data to be cyclic.

/**
 * The circular queue work as follows:
 * 
 * two pointers FRONT and REAR
 * FRONT track the first element of the queue
 * REAR track the last elements of the queue
 * initially, set value of FRONT and REAR to -1
 * 
 * Enqueue Operation
 * 
 * check if the queue is full
 * for the first element, set value of FRONT to 0
 * circularly increase the REAR index by 1 (i.e. if the rear reaches the end,
 * next it would be at the start of the queue)
 * add the new element in the position pointed to by REAR
 * 
 * Dequeue Operation
 * 
 * check if the queue is empty
 * return the value pointed by FRONT
 * circularly increase the FRONT index by 1
 * for the last element, reset the values of FRONT and REAR to -1
 * 
 */

public class CircularQueue {
    int SIZE = 5; // Size of Circular Queue
    int front, rear;
    int items[] = new int[SIZE];

    CircularQueue() {
        front = -1;
        rear = -1;
    }

    // Check if the queue is full
    boolean isFull() {
        if (front == 0 && rear == SIZE - 1) {
            return true;
        }
        if (front == rear + 1) {
            return true;
        }
        return false;
    }

    // Check if the queue is empty
    boolean isEmpty() {
        if (front == -1)
            return true;
        else
            return false;
    }

    // Adding an element
    void enQueue(int element) {
        if (isFull()) {
            System.out.println("Queue is full");
        } else {
            if (front == -1)
                front = 0;
            rear = (rear + 1) % SIZE;
            items[rear] = element;
            System.out.println("Inserted " + element);
        }
    }

    // Removing an element
    int deQueue() {
        int element;
        if (isEmpty()) {
            System.out.println("Queue is empty");
            return (-1);
        } else {
            element = items[front];
            if (front == rear) {
                front = -1;
                rear = -1;
            } /* Q has only one element, so we reset the queue after deleting it. */
            else {
                front = (front + 1) % SIZE;
            }
            return (element);
        }
    }

    void display() {
        /* Function to display status of Circular Queue */
        int i;
        if (isEmpty()) {
            System.out.println("Empty Queue");
        } else {
            System.out.println("Front -> " + front);
            System.out.println("Items -> ");
            for (i = front; i != rear; i = (i + 1) % SIZE)
                System.out.print(items[i] + " ");
            System.out.println(items[i]);
            System.out.println("Rear -> " + rear);
        }
    }

    public static void main(String[] args) {

        CircularQueue q = new CircularQueue();

        // Fails because front = -1
        q.deQueue();

        q.enQueue(1);
        q.enQueue(2);
        q.enQueue(3);
        q.enQueue(4);
        q.enQueue(5);

        // Fails to enqueue because front == 0 && rear == SIZE - 1
        q.enQueue(6);

        q.display();

        int elem = q.deQueue();

        if (elem != -1) {
            System.out.println("Deleted Element is " + elem);
        }
        q.display();

        q.enQueue(7);

        q.display();

        // Fails to enqueue because front == rear + 1
        q.enQueue(8);
    }

}