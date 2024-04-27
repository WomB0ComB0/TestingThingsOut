template <typename T>
T maxx(T a, T b) {
  return (a > b) ? a : b;
}

int main() {
  int intMax = max(5, 10);
  double doubleMax = max(3.14, 6.28);
  
  std::cout << "Max of integers: " << intMax << std::endl;
  std::cout << "Max of doubles: " << doubleMax << std::endl;
  return 0;
}