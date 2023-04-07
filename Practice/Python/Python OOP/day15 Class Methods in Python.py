# Class Methods in Python are methods that are bound to a class rather than its object. They do not require the creation of a class instance. They are shared among all instances of a class. They are defined using the @classmethod decorator.
import datetime
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    @classmethod
    def from_birth_year(cls, name, birth_year):
        current_year = datetime.date.today().year
        age = current_year - birth_year
        return cls(name, age)
    @staticmethod
    def is_adult(age):
        if ( age > 18 ):
            return True
        else:
            return False
person = Person.from_birth_year("John", 78)
print(f'{person.name}, {person.age}, adult: {person.is_adult(person.age)}')