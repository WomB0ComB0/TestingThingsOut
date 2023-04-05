# Static Methods in Python are methods that are bound to a class rather than its object.
import re
class DataValidator:
    @staticmethod
    def validate_email(email):
        if re.match(r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$", email):
            return True
        else:
            return False
email = "mikeodnis3242004@gmail.com"
print(DataValidator.validate_email(email))