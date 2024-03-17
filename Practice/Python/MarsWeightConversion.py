class MarsWeightConversion:
    # __init__ is a reserved method in Python classes. It is known as a constructor in object oriented concepts. This method called when an object is created from the class and it allows the class to initialize the attributes of the class.
    def __init__(self, weight: str) -> None:
        self.weight = weight
        self.MARS_MULTIPLE = 0.38 # Mars' gravity is 0.38 times that of Earth's

    def convert_to_mars_weight(self) -> float:
        # The __round__() method returns a floating point number that is a rounded version of the specified number, with the specified number of decimals.
        return (float(self.weight) * self.MARS_MULTIPLE).__round__(2)

    def convert_to_earth_weight(self) -> float:
        return (float(self.weight) / self.MARS_MULTIPLE).__round__(2)

    # Magic methods in Python are special methods that start and end with double underscores. They are also called dunder methods.
    # A method is called when it is bound to a class or an instance of the class. Magic methods are not called directly, but they are called when certain operations are performed on the object.
    def __str__(self):
        return f"Weight on Mars: {self.convert_to_mars_weight()}"

class Sanitization:
    def __init__(self, user_input: str) -> None:
        self.user_input = user_input
        self.cleaned_input = self.clean_input()
        self.weight = self.includes_science_notation()

    def clean_input(self) -> str:
        # Regular expressions are a powerful tool for various kinds of string manipulation. They are a domain specific language (DSL) that is present as a library in most modern programming languages, not just Python.
        invalid_characters = re.findall(r"[!@#$%^&*()_+=,<>?/;:|\\]", self.user_input)
        
        cleansed = re.sub(r"[^\d.]", "", self.user_input)

        if invalid_characters:
            for char in invalid_characters:
                cleansed = cleansed.replace(
                    char, ""
                )

        if cleansed:
            return cleansed
        else:
            # raise an exception if the input is invalid, i.e. if the input is empty
            # ValueError is a built-in exception in Python that is raised when the built-in functions for a data type have the valid type of arguments, but the arguments have invalid values specified.
            # Raise is a keyword in Python that is used to raise an exception. It is used to raise an exception explicitly.
            raise ValueError(
                f"Invalid input. Please enter a valid weight and remove the invalid characters from {self.user_input}"
            )

    def includes_science_notation(self) -> float:
        def pure_float() -> bool:
            return "." in self.cleaned_input and "e" not in self.cleaned_input

        def is_integer() -> bool:
            return "." not in self.cleaned_input and "e" not in self.cleaned_input

        if "k" in self.user_input.lower():
            return self.convert_weight_to_metric()
        elif "l" in self.user_input.lower():
            return self.clean_input()
        elif pure_float() or is_integer():
            return float(self.cleaned_input)
        else:
            raise ValueError("Invalid input. Please enter a valid notation.")

    def convert_weight_to_metric(self) -> float:
        return float(self.cleaned_input) * 0.453592

    # optional, but included for completeness. Used for converting pounds to kilograms
    def convert_weight_to_imperial(self) -> float:
        return float(self.cleaned_input) / 0.453592


# ⚠️ Tests ⚠️
import re
class TestMarsWeightConversion:
    def __init__(self, weight: str) -> None:
        self.weight = weight
        self.test_results = []

    def test_mars_weight_conversion(self) -> list:
        weights = [38.0, 38.0, 38.0]
        earth_weights = [100.0, 100.0, 100.0]

        for i in range(3):
            weight = MarsWeightConversion(self.weight)
            mars_weight = weight.convert_to_mars_weight()
            earth_weight = weight.convert_to_earth_weight()

            mars_weight == weights[i]
            earth_weight == earth_weights[i]

            self.test_results.append(
                {
                    "test": i + 1,
                    "mars_weight": mars_weight,
                    "earth_weight": earth_weight,
                    "expected_mars_weight": weights[i],
                    "expected_earth_weight": earth_weights[i],
                    "mars_weight_test_passed": mars_weight == weights[i],
                    "earth_weight_test_passed": earth_weight == earth_weights[i],
                }
            )
        return self.test_results
    def format_test_results(self) -> None:
        results = self.test_mars_weight_conversion()
        for result in results:
            for key, value in result.items():
                if key == "test":
                    print(f"Test {value}:")
                elif (
                    key == "mars_weight_test_passed"
                    or key == "earth_weight_test_passed"
                ):
                    print(f"{key.replace('_', ' ').title()}: {value}")
                else:
                    print(f"{key.replace('_', ' ').title()}: {value}\n")
            print("\n")

def main():
    # If you're worried about the the return type of the input() function, you can use the following code to check the type of the input:
    # user_input = input("Enter your weight on Earth: ")
    # print(type(user_input))
    user_input = input("Enter your weight on Earth: ")
    # You call the Sanitization class and pass the user_input as an argument to the class. The class then returns the weight attribute.
    weight_conversion = Sanitization(user_input)
    print(MarsWeightConversion(weight_conversion.weight).__str__())

    # test = TestMarsWeightConversion("100")
    # print(test.test_mars_weight_conversion())
    # print(test.format_test_results())

if __name__ == "__main__":
    main()
