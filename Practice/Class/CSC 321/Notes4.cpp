struct Person {
  std::string name;
  int age;

  // Constructor to initialize name and age
  Person(std::string n, int a): name(n), age(a) {};
};

int main() {
  // Declare and initialize a Person struct using constructor
  Person person("John", 30);

  // Accessing member variables
  std::cout << "Name: " << person.name << ",  Age: " << person.age << std::endl;
}