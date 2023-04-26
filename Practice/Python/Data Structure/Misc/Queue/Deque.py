# Deque implementaion in python
# A deque is a double-ended queue. It can be used to add or remove elements from both ends.
class Deque: # Creating deque class
    def __init__(self): # Initializing deque
        self.items = []
    def isEmpty(self): # Check deque is empty
        return self.items == []
    def addRear(self, item): # Add an element from rear
        self.items.append(item)
    def addFront(self, item): # Add an element from front
        self.items.insert(0, item)
    def removeFront(self): # Remove an element from front
        return self.items.pop(0)
    def removeRear(self): # Remove an element from rear
        return self.items.pop()
    def size(self): # Get the size of deque
        return len(self.items)

d = Deque()
print(d.isEmpty())
d.addRear(8)
d.addRear(5)
d.addFront(7)
d.addFront(10)
print(d.size())
print(d.isEmpty())
d.addRear(11)
print(d.removeRear())
print(d.removeFront())
d.addFront(55)
d.addRear(45)
print(d.items)