#include <iostream>
#include <cmath>
#include <iomanip>
using namespace std;

int main() {
  double gas;
  double gallons;
  cout << "Enter the price of gas (per gallon), two decimal places: ";
  cin >> gas;
  cout << "Enter the number of gallons of gas you are intending on getting: ";
  cin >> gallons;
  if (gas < 3.00) {
    cout << gas << "," << " wow, you got a great deal on gas!" << endl;
  } else if (gas >= 3.00 && gas < 6.00) {
    cout << gas << ", you are a paying a fair price for gas! " << endl;
  } else if (gas >= 6.00) {
    cout << "You should really look for another gas station!" << gas << endl;
  }
  cout << "You are going to spend $" << fixed  << setprecision(3) << gas * gallons << " on gas." << endl;
  return 0;
}