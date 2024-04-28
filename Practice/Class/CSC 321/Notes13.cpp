#pragma once
#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

class Example {
  private:
    int var1;
    int size;
    int* myArr;
    static int counter;

  public:
    // creating a constructor with defaults
    // Using constructor initializer notation
    Example(int var1 = 1, int size = 1): var1(var1), size(size) {
      (*this).size = size;
      this->size = size;
      myArr = new int[size];
      for (size_t i = 0; i < size; i++) { *(myArr + i) = rand()%10l }
      for_each(myArr, myArr + size, [](int x) { std::cout << x << " "; });
      std::cout << std::endl;
      counter++;
    }
    static void outputCounter() {
      std::cout << "The number of Example objects is: " << counter << std::endl;
    }
}