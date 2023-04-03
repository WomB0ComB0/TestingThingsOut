# Composition in Python is the process of combining simple objects or data types into more complex ones. It is a way to combine objects or data types into more complex ones. It is a way
class DataLoader:
    def __init__(self, file_path):
        self.file_path = file_path
    def load_data(self):
        pass  # Code to load data from file_path
class DataProcessor:
    def preprocess(self, data):
        pass  # Code to preprocess data
class DataPipeline:
    def __init__(self, loader, processor):
        self.loader = loader
        self.processor = processor
    def run_pipeline(self):
        data = self.loader.load_data()
        processed_data = self.processor.preprocess(data)

loader = DataLoader("data.csv")
processor = DataProcessor()
pipeline = DataPipeline(loader, processor)
pipeline.run_pipeline()