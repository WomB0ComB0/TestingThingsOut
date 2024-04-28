#pragma once
#include <iostream>
#include <string>
#include "A.h"
using namespace std;

class B {
  private:
    int b_value;
  public:
    B() { b_value = 1; }
    void setB() { b_value = rand(); }
    void printB() { std::cout << b_value << std::endl }
    void showFriends(A a) {
      a.x = 1010101;
      std::cout << a.x << std::endl;
    }
}

