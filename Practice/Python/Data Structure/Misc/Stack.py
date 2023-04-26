# Stack implementation in python
# A Stack is a linear structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).

def create_stack(): # Creating a stack
    stack = []
    return stack
def check_empty(stack): # Creating an empty stack
    return len(stack) == 0
def push(stack, item): # Adding items into the stack
    stack.append(item)
    print("pushed item: " + item)
def pop(stack): # Removing an element from the stack
    if (check_empty(stack)):
        return "stack is empty"
    return stack.pop()

stack = create_stack()
push(stack, str(1))
push(stack, str(2))
push(stack, str(3))
push(stack, str(4))
print("popped item: " + pop(stack))
print("stack after popping an element: " + str(stack))