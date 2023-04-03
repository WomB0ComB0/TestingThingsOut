# Methods are functions that are defined within a class operate on the attributes of the class. Methods are defined in the body of a class. Methods are accessed using the dot operator.
from dataclasses import dataclass
from typing import List

@dataclass
class Student:
    name: str
    grades: List[int]
class StudentDataSet:
    def __init__(self, students: List[Student]) -> None:
        self.students = students
    def get_average_grade(self) -> float:
        total_sum = 0
        for student in self.students:
            total_sum += sum(student.grades)
        return total_sum / len(self.students)
    def get_total_students(self) -> int:
        return len(self.students)
    def get_total_grades(self) -> int:
        total_sum = 0
        for student in self.students:
            total_sum += len(student.grades)
        return total_sum
students = [
    Student("John", [70, 80, 90]),
    Student("Jane", [75, 85, 95]),
    Student("Jack", [60, 80, 100]),
]
student_data_set = StudentDataSet(students)
print(student_data_set.get_average_grade())
print(student_data_set.get_total_students())
print(student_data_set.get_total_grades())