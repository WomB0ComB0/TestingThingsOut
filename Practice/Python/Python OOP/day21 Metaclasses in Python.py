# MetaClasses in Python are used to create classes. Just like classes are used to create objects, metaclasses are used to create classes. A class is an instance of a metaclass.
# Metaclasses are sometimes referred to as class factories.
class DynamicClass(type): # metaclass
    def __new__(cls, name, bases, attrs): # __new__ is called before __init__
        # attrs[ 'say_hello' ] = lambda self: f'Hello {self.name}!'
        attrs['dynamic_attribute']= 'Hello, world!' # dynamic attribute
        return super().__new__(cls, name, bases, attrs)
class BaseClass(metaclass= DynamicClass): # BaseClass is an instance of DynamicClass
    pass
class SubClass(BaseClass): # SubClass is an instance of DynamicClass
    pass
print(SubClass.dynamic_attribute) # Hello, world!