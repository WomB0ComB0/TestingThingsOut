# Linked list implementation in Python
# A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations.

class Node: # Creating a node
    def __init__(self, item):
        self.item = item
        self.next = None
class LinkedList: # Creating a linked list
    def __init__(self):
        self.head = None
if __name__ == '__main__': # Main function
    linked_list = LinkedList()
    # Assign item values
    linked_list.head = Node(1)
    second = Node(2)
    third = Node(3)
    # Connect nodes
    linked_list.head.next = second
    second.next = third
    # Print the linked list item
    while linked_list.head != None:
        print(linked_list.head.item, end=" ")
        linked_list.head = linked_list.head.next