class MarsWeightConversion:
    def __init__(self, weight: str) -> None:
        self.weight = weight
        self.MARS_MULTIPLE = 0.38 # Constant, cannot be changed

    def convert_to_mars_weight(self) -> float:
        return (float(self.weight) * self.MARS_MULTIPLE).__round__(2)

    def convert_to_earth_weight(self) -> float:
        return (float(self.weight) / self.MARS_MULTIPLE).__round__(2)

    def __str__(self):
        return f"Weight on Mars: {self.convert_to_mars_weight()}"

class Sanitization:
    def __init__(self, user_input: str) -> None:
        self.user_input = user_input
        self.cleaned_input = self.clean_input()
        self.weight = self.includes_science_notation()

    def clean_input(self) -> str:
        return re.sub(r"[^\d.]", "", self.user_input)
    
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
            raise ValueError("Invalid input. Please enter a valid weight.")

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
    user_input = input("Enter your weight on Earth: ")
    weight_conversion = Sanitization(user_input)
    print(MarsWeightConversion(weight_conversion.weight).convert_to_mars_weight())

    # test = TestMarsWeightConversion("100")
    # print(test.test_mars_weight_conversion())
    # print(test.format_test_results())
if __name__ == "__main__":
    main()
