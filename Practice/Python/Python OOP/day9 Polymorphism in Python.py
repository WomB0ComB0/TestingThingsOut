# Polymorphism in Python is the ability to present the same interface for different data types. It is a pretty abstract concept, so let's look at a simple example. Let's say we have a class called DataReader that reads data from a file. We can have different implementations of this class that read data from different file formats. We can have a CsvReader class that reads data from a CSV file and a JsonReader class that reads data from a JSON file. Both these classes inherit from the DataReader class and implement the read_data method. The read_data method in the CsvReader class will read data from a CSV file and return it as a list of lists. The read_data method in the JsonReader class will read data from a JSON file and return it as a dictionary. The DataReader class does not know what type of file it is reading data from. It just knows that it has to call the read_data method and get the data. This is polymorphism in action.
import json

class DataReader:
    def __init__(self, filename):
        self.filename = filename
    def read_data(self):
        pass
class CsvReader(DataReader):
    def read_data(self):
        with open(self.filename) as file:
            data = []
            for line in file:
                data.append(line.strip().split(","))
            return data
class JsonReader(DataReader):
    def read_data(self):
        with open(self.filename) as file:
            return json.load(file) # json.load() method is used to convert JSON data to a Python dictionary.
class Processor:
    def __init__(self, data_reader):
        self.data_reader = data_reader
    def process(self):
        data = self.data_reader.read_data()
        # Code to process data
        return data
    
csv_reader = CsvReader("data.csv")
json_reader = JsonReader("data.json")
Processor(csv_reader).process()
Processor(json_reader).process()
# Hopefully cause 🧎‍♂️🏌️‍♂️