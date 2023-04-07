# These define the behavior of objects in Python. They are also called dunder methods. Dunder means double underscore.
# The __str__ method is used to return a string representation of the object. This method is called when print() or str() function is invoked on an object. The __str__ method must return a string object.
#__init__ method is called when an object is created. 
#__eq__ method is used to compare two objects.
#__repr__ method is used to return a string representation of the object. This method is called when repr() function is invoked on an object. The __repr__ method must return a string object.
class Person: # class
    def __init__(self, name, age): # constructor
        self.name = name
        self.age = age
    def __str__(self):
        return f"{self.name}, {self.age} years old"
    def __repr__(self):
        return f"{self.name}, {self.age}"
person = Person("John", 78)
print(person) #John, 78 years old