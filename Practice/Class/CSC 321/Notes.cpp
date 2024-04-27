#include <iostream>
using namespace std;

namespace MyNamespace {
  int nameSpaceVar = 30;
}

class MyClass {
  public:
    static int staticVar;
};


// Global variable
int globalVar = 10;

int main() {
  // Accessing globalVar using scope resolution operator
  std::cout << "Global variable: " << globalVar << std::endl;
  // Accessing namespaceVar using scope resolution operator
  std::cout << "Namespace variable: " << MyNamespace::nameSpaceVar << std::endl;
  // Accessing staticVar using scope resolution operator
  std::cout << "Static variable: " << MyClass::staticVar << std::endl;
  return 0;
}

