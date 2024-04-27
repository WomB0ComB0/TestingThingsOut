#include <iostream>
using namespace std;

int main() {
  int userinput;
  for (size_t i = 0; i <  10; i++) {
    int variableLevel0 = 1;
    for (size_t j = 0; j < 10; j++) {
      int variableLevel1 = 1;
      for (size_t k = 0; k <  10; k++) {
        int variableLevel2 = 1;
        if (userinput == 5) { goto Bob; }
        else if (userinput == 6) { goto Alice; }
        else goto Eve;
      }
    }
  }
}