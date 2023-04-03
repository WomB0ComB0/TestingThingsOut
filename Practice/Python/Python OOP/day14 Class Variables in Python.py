# Class Variables in Python are variables that are shared among all instances of a class. Class variables are defined within the class construction. Class variables are accessed using the class name and not the object name. Class variables are shared among all instances of a class. Class variables are defined within the class construction. Class variables are accessed using the class name and not the object name.
class Car:
    num_wheels = 4
    def __init__(self, make, model, color):
        self.make = make
        self.model = model
        self.color = color
car1 = Car("Toyota", "Corolla", "White")
car2 = Car("Honda", "Accord", "Black")
print(car1.num_wheels)
print(car2.num_wheels)