# Abstract Classes in Python are classes that cannot be instantiated and are designed to be inherited by subclasses.
from abc import ABC, abstractmethod

class DataProcessor(ABC):
    @abstractmethod
    def load_data(self):
        pass
    @abstractmethod
    def process_data(self, data):
        pass