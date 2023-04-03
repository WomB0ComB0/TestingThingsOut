# Method Overriding in Python is the process of redefining a method in the child class that was already defined in the parent class. Method overriding is useful when you want to change the behavior of a method in a child class.
class Data:
    def __init__(self, data):
        self.data = data
    def summary(self):
        print("Summary of data")
class DataFrame(Data):
    def __init__(self, data):
        super().__init__(data)
    def summary(self):
        print("Summary of DataFrame")
        super().summary()