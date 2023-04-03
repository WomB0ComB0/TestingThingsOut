# Super() function in Python is used to call methods of the parent class from the child class. It returns a temporary object of the parent class that allows access to all of its methods.
class DataSource:
    def __init__(self, file_path):
        self.file_path = file_path
    def read_data(self):
        with open(self.file_path, 'r') as f:
            data = f.read()
            return data
class CsvDataSource(DataSource):
    def __init__(self, file_path, delimiter=','):
        super().__init__(file_path)
        self.delimiter = delimiter
    def read_data(self):
        with open(self.file_path, 'r') as f:
            data = f.read().split('\n')
            data = [line.split(self.delimiter) for line in data]