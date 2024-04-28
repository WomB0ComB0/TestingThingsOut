#pragma once
#include <iostream>
#include <string>
using namespace std;

class ConstructorChaining {
  private:
    int val1;
    string val2;
  public:
    ConstructorChaining(int val1 = 2, string val2 = "Bob") {
      this->val1 = val1;
      this->val2 = val2;
    }

    ConstructorChaining(int val1) {
      ConstructorChaining(val1, "Alice");
    }
}