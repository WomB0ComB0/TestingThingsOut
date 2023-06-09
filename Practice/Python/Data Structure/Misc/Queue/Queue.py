# Queue implementation in Python
# Queue is a linear data structure that stores items in First In First Out (FIFO) manner.
class Queue: # Creating a queue
    def __init__(self):
        self.queue = []
    def enqueue(self, item): # Add an element
        self.queue.append(item)
    def dequeue(self): # Remove an element
        if len(self.queue) < 1:
            return None
        return self.queue.pop(0)
    def display(self): # Display  the queue
        print(self.queue)
    def size(self):
        return len(self.queue)
q = Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
q.display()
q.dequeue()
print("After removing an element")
q.display()