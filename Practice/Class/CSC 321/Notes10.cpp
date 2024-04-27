class MyClass {
  public:
    // Non-inline function defined outside class definition
    void printMessage();
};

void MyClass:printMessage() {
  std::cout << "This is a non-inline function." << std::endl;
}