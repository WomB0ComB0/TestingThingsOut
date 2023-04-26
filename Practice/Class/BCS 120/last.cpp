/*
Date: May 10th 2022
Name: Anne Galante
Desc: example of pass by reference and adding functions
      to a program 
*/
#include <iostream>
#include <string>
using namespace std;
int& get_age() {
    int Age; char Endpgm = 'N';
    while (Endpgm != 'y') { cout << "Enter your age: "; cin >> Age;
    // validate age cant be negative or cant be over 100 yrs
      if (Age <= 0 || (Age >= 100)) cout << '\n' << "Not a valid age!" << endl;
      else Endpgm = 'y'; }
    return Age; }
void print_age(int& userAge, string Name) { int insurancePrice = 0;
    if (userAge < 16) { cout << "Too young." << endl; insurancePrice = 0; } // Age 15 and under
    else if (userAge < 25) { insurancePrice = 4800; } // Age 16 - 24
    else if (userAge < 40) { insurancePrice = 2350; } // Age 25 - 39
    else { insurancePrice = 2100; } // Age 40 and up
    cout <<Name <<" Annual price: $" << insurancePrice << endl;   
}
int main() {
    int userAge, insurancePrice;
    string Name;
    userAge = get_age(); // calls the function and receives the age back
    // get user name
    cout << "Enter your Name: "; cin >> Name;
    // calls the function and passes one paremeter/argument
    // and gets nothing back
    print_age(userAge, Name);
    return 0;
}