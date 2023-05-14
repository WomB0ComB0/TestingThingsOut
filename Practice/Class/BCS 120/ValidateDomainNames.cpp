#include <iostream>
#include <string>
using namespace std;

int main() {
   string coreGtld1 = ".com", coreGtld2 = ".net", coreGtld3 = ".org", coreGtld4 = ".info";
   string inputName, searchName, theTld = "";
   bool isCoreGtld = false;
   int periodCounter, periodPosition = 0;
   unsigned int j, i;
      
   cout << endl << "Enter the next domain name (<Enter> to exit): " << endl;
   cin >> inputName;

   while (inputName.size() > 0) {
      searchName = inputName;
      for (j = 0; j < inputName.size(); ++j) {
         searchName.at(j) = tolower(inputName.at(j));
      }
      isCoreGtld = false;
      periodCounter = 0;
      for (i = 0; i < searchName.size(); ++i) {
         if (searchName.at(i) == '.') {
            periodCounter++;
            periodPosition = i;
         }
      }
      if ((periodCounter == 1) && (searchName.at(0) != '.')) {
         theTld = searchName.substr(periodPosition);
         isCoreGtld = (theTld == coreGtld1) ? true : false;
         isCoreGtld = (theTld == coreGtld2) ? true : false;
         isCoreGtld = (theTld == coreGtld3) ? true : false;
         isCoreGtld = (theTld == coreGtld4) ? true : false;
         // if (theTld == coreGtld1) { isCoreGtld = true; }
         // else if (theTld == coreGtld2) { isCoreGtld = true; }
         // else if (theTld == coreGtld3) { isCoreGtld = true; }
         // else if (theTld == coreGtld4) { isCoreGtld = true; }
         // else { isCoreGtld = false; }
      }
      cout << "\"" << inputName << "\" ";
      if (isCoreGtld) { cout << "is a second-level domain followed by a core gTLD of \"" << theTld << "\"." << endl; }
      else { cout << "is not a second-level domain followed by a core gTLD." << endl; }
      cout << endl << "Enter the next domain name (or <Enter> to exit): " << endl;
      inputName = "";
      cin >> inputName;
   }
   return 0;
}