#"self" is a reference to the current instance of the class. It is used to access variables that belongs to the class. It is used to access methods that belongs to the class. 
from typing import List
class Student: # Class
    def __init__(self, name: str, grades: List[int]) -> None: # Constructor
        self.name = name
        self.grades = grades
    def get_average_grade(self) -> float: # Method
        total_sum = 0
        for grade in self.grades:
            total_sum += grade
        return total_sum / len(self.grades)
    def __str__(self) -> str:
        return f"{self.name}, {self.get_average_grade()}" # Refer to own attributes using self
    def __repr__(self) -> str:
        return f"{self.name}, {self.get_average_grade()}" 
    def mean(self) -> float:
        # Refer to own attributes using self
        return sum(self.grades) / len(self.grades)
data = [Student("John", [70, 80, 90]),Student("Jane", [75, 85, 95]),Student("Jack", [60, 80, 100])]
dataset = []
for student in data:
    dataset.append(student)
print(sorted(dataset, key=lambda student: student.get_average_grade(), reverse=True))
# sorted() is a built-in function that takes an iterable and returns a sorted list. The iterable could be a list, dictionary, set, tuple, etc. The sorted() function takes three arguments: iterable, key, and reverse. The key argument is used to specify a function to be called on each list element prior to making comparisons. The reverse argument is used to sort the list in descending order.

# The lambda keyword is used to create anonymous functions. The lambda function takes a student object as an argument and returns the average grade of the student. The sorted() function uses the average grade of the student to sort the list of students in descending order.