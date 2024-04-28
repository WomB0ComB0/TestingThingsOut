template <typename T> 
class Container {
  private:
    T value;
  public:
    Container(T value) : value(value) {}
    T getValue() { return value; }
};

int main() {
  Container<int> intContainer(5);
  Container<double> doubleContainer(3.14);

  std::cout << "Value in intContainer: " << intContainer.getValue() << std::endl;
  std::cout << "Value in doubleContainer: " << doubleContainer.getValue() << std::endl;
  return 0;
}

