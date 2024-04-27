constexpr int square(int x) {
  return x * x;
}

int main() {
  constexpr int result = square(5);
  return 0;
}