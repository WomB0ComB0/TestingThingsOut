# Attributes are the characteristics of an object. Attributes are defined in the __init__ method of a class. Attributes are accessed using the dot operator.
class BankAccount: # Class
    def __init__(self, account_number: int, balance: float) -> None: # Constructor
        self.account_number = account_number # Public attribute
        self.balance = balance # Private attribute
    def deposit(self, amount: float) -> None:
        self.balance += amount #Method to modify private attribute
    def withdraw(self, amount: float) -> None:
        if self.balance >= amount: 
            self.balance -= amount #Method to modify private attribute
        else:
            print("Insufficient balance.")