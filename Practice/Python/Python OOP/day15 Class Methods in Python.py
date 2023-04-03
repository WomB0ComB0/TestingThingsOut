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