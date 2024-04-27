#pragma once
#include <iostream>
#include <string>
using namespace std;

class A {
  private:
    int x;
  protected:
    int y;
  public:
    int z;
  
    A() { x = y = z = 1; }
    void changeValues() { x = y = z = rand(); }
    void printValues() { std::cout << x << " " << y << " " << z << std::endl; }

    friend class B;
}