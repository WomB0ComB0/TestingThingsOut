# Encapsulation in Python is the process of restricting access to methods and variables in a class in order to prevent direct data modification so that the user cannot change data which is accidental or intentional.
class Customer: 
    def __init__(self, name: str, email:str) -> None:
        self.name = name
        self.email = email
    @property
    def email(self) -> str:
        return self.__email
    @email.setter
    def email(self, email: str) -> None:
        if "@" not in email:
            raise ValueError("Invalid email address")
        self.__email = email