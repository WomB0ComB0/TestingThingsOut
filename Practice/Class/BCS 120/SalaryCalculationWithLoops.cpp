#include <iostream>
#include <string>
using namespace std;

int main() {
   const string PROMPT_SALARY = "\nEnter annual salary (0 to exit): ";
   const string PROMPT_DEDUCTION = "Enter deduction (0 to stop): ";
   int annualSalary = 0,adjustedSalary, oneDeduction, deduction, totalDeductions, taxToPay, startingAnnualSalary = 0, endingAnnualSalary = 0, incomeIncrement;
  //  Obviously you want to change annualSalary, startingAnnualSalary, endingAnnualSalary, and incomeIncrement to double
   double taxRate;
  
   std::cout <<"Calculate adjusted annual salary and tax deductions" << endl;

   cout << PROMPT_SALARY << endl;
   cin >> annualSalary;

   while (annualSalary > 0){
      totalDeductions = 0;
      cout << oneDeduction;
      while (oneDeduction > 0){
        totalDeductions += oneDeduction;
        cout << PROMPT_DEDUCTION << endl;
        cin >> oneDeduction;
      }
      adjustedSalary = annualSalary - totalDeductions;
      if (adjustedSalary <= 0){ adjustedSalary = 0; taxRate = 0.0;} 
      else if (adjustedSalary <= 20000){ taxRate = 0.10;} 
      else if (adjustedSalary <= 50000){ taxRate = 0.20;} 
      else if (adjustedSalary <= 100000){ taxRate = 0.30;} 
      else { taxRate = 0.40; }
      taxToPay = static_cast<int>(adjustedSalary * taxRate);
      cout << "Annual salary: " << annualSalary << endl << "\nDeductions: "<< totalDeductions << endl << "Adjusted salary after deductions: "<< adjustedSalary  << "Tax rate: " << taxRate << endl << "Tax to pay: " << taxToPay << endl;
      
      cout << PROMPT_SALARY << endl;
      cin >> annualSalary;
    }

   std::cout << "For loop to calculate the tax for each entry in the table" << endl;

    cout << "Enter first annual salary for the table: " << endl;
    cin >> startingAnnualSalary;
    cout << "Enter last annual salary for the table: " << endl;
    cin >> endingAnnualSalary;
    cout << "Enter the increment for the table: " << endl;
    for (int annualSalary = startingAnnualSalary; annualSalary <= endingAnnualSalary; annualSalary += incomeIncrement) {
        if (annualSalary <= 0) {  taxRate = 0.0;}
        else if (annualSalary <= 20000) { taxRate = 0.10; }
        else if (annualSalary <= 50000) { taxRate = 0.20; }
        else if (annualSalary <= 100000) { taxRate = 0.30; }
        else { taxRate = 0.40; }
        taxToPay = static_cast<int>(annualSalary * taxRate);   // Truncate tax to an integer amount
        cout << "Annual salary: " << annualSalary << endl << "Tax rate: " << taxRate << endl << "Tax to pay: " << taxToPay << endl;
    }
   return 0;
}