#include <iostream>
#include <string>
#include <iomanip>
using namespace std;
string getName(){
  string Name;
  cout << "What is your Name?\n"; cin >> Name;
  return Name;
}
void getAge (int& age){
  cout << "What is your age?\n";
  cin >> age;
  if ((age >= 0) && (age <= 100)){ cout << "Age is valid\n"; }
  else{ cout << "This cannot be, please enter age again"; cin >> age;}
}
void printTicket(int age, string Name){
  double ticket_price = 0;
  if (age <= 13){ ticket_price = 9.99; } 
  else if ((age >= 14) && (age <= 64)){ ticket_price = 19.99; } 
  else if (age >= 65){ ticket_price = 12.99; }
  cout << "Name: " << Name << endl; cout << "Age: " << age << endl; cout << "Ticket Price: " << fixed << setprecision(2) << ticket_price << endl;
}
int main(){
  int age;
  string Name;
  getAge(age);
  Name = getName();
  printTicket(age, Name);
  return 0;
}