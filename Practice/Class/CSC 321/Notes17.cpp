#include <iostream>
#include <string>
using namespace std;

template <typename T>  
T sum(T one, T two) {
  return one + two;
}

int main() {
  int x = 5;
  int y{5};
  int z(5);
  
  int* myptr1 = &x;
  int** myptr2 = &myptr1;

  const int SIZE = 3;
  int myCompileArr[size];
  
  int* myRunTimeArray = new int[4];
  delete[] myRunTimeArray;

  cout << sum(3,4) << endl;
  cout << sum(2.5, 2.5) << endl;
  cout << sum('a', 'M') << endl;
}