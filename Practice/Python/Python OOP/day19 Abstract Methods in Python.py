# Abstract Methods in Python are the methods that are declared in the base class but not implemented in the base class. The implementation of these methods is done in the derived class. Abstract methods are defined with the help of @abstractmethod decorator. Abstract methods are also known as pure virtual methods in other programming languages like C++.
from abc import ABC, abstractmethod
class DataLoader(ABC):
    @abstractmethod # decorator
    def load_data(self): # abstract method
        pass
    @abstractmethod 
    def process_data(self, data):
        pass
class CSVLoader(DataLoader): # derived class
    def load_data(self, filepath): # implementation of abstract method
        with open(filepath, 'r') as file: # open file in read mode
            data = [] 
            for line in file: # iterate over each line
                data.append(line.strip().split(','))  # split line and append data
        return data
    def process_data(self, data):
        data = [list(map(int, row)) for row in data] # convert each element to int
        return data