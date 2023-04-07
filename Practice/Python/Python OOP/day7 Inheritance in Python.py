# Inheritance in Python is the process by which one class takes on the attributes and methods of another. Newly formed classes are called child classes, and the classes that child classes are derived from are called parent classes. Child classes override or extend the functionality (e.g., attributes and behaviors) of parent classes. Inheritance allows us to define a class that inherits all the methods and properties from another class. Parent class is the class being inherited from, also called base class. Child class is the class that inherits from another class, also called derived class.
from typing import List
class Data:
    def __init__(self, name: str, age: int) -> None:
        self.name = name
        self.age = age
        self.data: List[int]= []
    def add_data(self, data: int) -> None:
        self.data.append(data)
    def describe(self) -> str:
        return f"{self.name} is {self.age} years old."
class SalesData(Data):
    def __init__(self, name: str, age: int) -> None:
        super().__init__(name, age)
    def get_average_sales_data(self) -> float:
        return sum(self.data) / len(self.data)
sales_data = SalesData("Mike", 25)
sales_data.add_data(100)
sales_data.add_data(200)
sales_data.add_data(300)
sales_data.add_data(400)
sales_data.add_data(500)
sales_data.add_data(600)
sales_data.describe()
print(sales_data.get_average_sales_data())