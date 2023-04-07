# Super() function in Python is used to call methods of the parent class from the child class. It returns a temporary object of the parent class that allows access to all of its methods.
class DataSource: # base class
    def __init__(self, file_path): # constructor
        self.file_path = file_path
    def read_data(self):
        with open(self.file_path, 'r') as f: # open file in read mode
            data = f.read()
            return data
class CsvDataSource(DataSource): # derived class
    def __init__(self, file_path, delimiter=','):
        super().__init__(file_path)
        self.delimiter = delimiter
    def read_data(self): # override read_data() method
        with open(self.file_path, 'r') as f: 
            data = f.read().split('\n') # split data by new line
            data = [line.split(self.delimiter) for line in data] # split each line by delimiter