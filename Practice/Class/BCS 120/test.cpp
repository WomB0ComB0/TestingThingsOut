#include <iostream>
using namespace std;

int main() {
  int x;
  int z = 0;
  cout << "Enter a number: ";
  cin >> x;
  if (x > 9) {
    z = 3;
  }
  z += 1;
  cout << z << endl;
}