#include <iostream>
#include <string>
using namespace std;
string getName(){
  string Name;
  cout << "What is your Name?\n"; cin >> Name;
  return Name;
}
void getAge (int& age){
  int age;
  cout << "What is your age?\n";
  cin >> age;
  while(cin >> age){
    if (age >= 0 && age <= 100){ return age; }
    else{ cout << "This cannot be, please enter age again"; cin >> age;}
  }
}
void printTicket(getAge(), getName()){
  double ticket_price = 0;
  if (age <= 13){ ticket_price = 9.99; } 
  else if ((age >= 14) && (age <= 64)){ ticket_price = 19.99; } 
  else if (age >= 65){ ticket_price = 12.99; }
  cout << "Name: " << Name + "\nAge: " << age + "\nTicket Price: " << fixed << setprecision(2) << ticket_price << endl;
}
int main(){
  int age;
  string Name;
  cin >> age, Name;
  // getAge(age);
  // getName(Name);
  printTicket(age, Name);
  return 0;
}