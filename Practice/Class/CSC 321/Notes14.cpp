#include <iostream>
#include <string>
#include <time.h>
#include "Example.h"
#include "A.h"
#include "B.h"
using namespace std;

// In java static values don't need to be assigned outside the class
int Example::counter = 0;

// function declaration or prototype
int func1();

int main() {
  srand(time(nullptr));
  // IN java this would not actually create the objects
  Example example[4];

  Example* myExamples = new Example[4];

  // Calling static method
  Example::outputCounter();

  // enforces type checking
  double x { 5.6 };
}