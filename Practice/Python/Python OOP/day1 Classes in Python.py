# A class is a blueprint for creating objects. Objects have properties and methods(functions) associated with them. Almost everything in Python is an object, with its properties and methods. A Class is like an object constructor, or a "blueprint" for creating objects.
class DataPipeline: # class
    def __init__(self, input_path: str, output_path: str) -> None:
        self.input_path = input_path
        self.output_path = output_path
    def extract_data(self) -> dict: # Code to extract data from input_path
        with open(self.input_path, 'r') as f:
            data = f.read()
            return data
    def transform_dat(self, data: dict) -> dict: # Code to transform data
        return data
    def save_data(self, data: dict) -> None: # Code to save data to output_path
        with open(self.output_path, 'w') as f:
            f.write(data)
data_pipeline = DataPipeline('data/input', 'data/output')
raw_data = data_pipeline.extract_data() 
transformed_data = data_pipeline.transform_dat(raw_data)
data_pipeline.save_data(transformed_data)