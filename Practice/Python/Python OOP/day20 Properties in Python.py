# Properties in Python are special kind of attributes that have getter, setter, deleter and doc methods.
# Properties in Python are used to control access to instance variables.
# Properties in Python are implemented using descriptors.
# Properties in Python are defined using the property() function and @property decorator.
class TemperatureSensor: # class
    def __init__(self, temperature):
        self.temperature = temperature
    @property # getter
    def temperature(self):
        return self.__temperature
    @temperature.setter # setter
    def temperature(self, temperature):
        if temperature < -273.15:
            raise ValueError("Temperature below -273.15 is not possible") # raise an exception
        self.__temperature = temperature
sensor = TemperatureSensor(10)
print(sensor.temperature)
sensor.temperature = 20
print(sensor.temperature)
sensor.temperature = -300
print(sensor.temperature)