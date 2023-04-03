# Method Resolution Order (MRO) in Python is the order in which methods are inherited in the presence of multiple inheritance. MRO is also known as Linearization of a class. MRO is the order in which Python looks for a method in a hierarchy of classes.
class A:
    def greet(self):
        print("Hello from A")
class B(A):
    def greet(self):
        print("Hello from B")
        super().greet()
class C(A):
    def greet(self):
        print("Hello from C")
        super().greet()
class D(B, C):
    pass
d = D()
d.greet()