# Multiple Inheritance in Python is the process of a class inheriting from more than one parent class. In multiple inheritance, the features of all the base classes are inherited into the derived class. The syntax for multiple inheritance is similar to single inheritance.
class DataProcessor:
    def process_data(self) -> None:
        print("Processing data")
class DataAnalyzer:
    def analyze_data(self) -> None:
        print("Analyzing data")
class DataPipeline(DataProcessor, DataAnalyzer):
    def run_pipeline(self) -> None:
        self.process_data()
        self.analyze_data()
        print("Running pipeline")
data_pipeline = DataPipeline()
data_pipeline.run_pipeline()
data_pipeline.process_data()
data_pipeline.analyze_data()
