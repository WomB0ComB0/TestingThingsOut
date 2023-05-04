#include<iostream>
using namespace std;
int main(){
  double PRICE_1 = 39.00, PRICE_2 = 69.00, PRICE_3 = 99.00, PRICE_4 = 199.00, PER_TREE_DELIVERY = 20.00, MAX_TREE_DELIVERY = 100.00;
  double treeCost, totalTreeCost, deliveryCost = 0, plantingCost = 0, totalCharges;
  int numTrees, height;
  char delivered = "Are trees to be delivered? (y/n): ", planted = "Are trees to be planted? (y/n): ";
  cout << "Enter the number of trees: ";
  cin >> numTrees;
  cout << "Enter the height of the trees: ";
  cin >> height;
  cout << planted << endl;
  cin >> planted;
  if (planted == 'N') {
    cout << delivered << endl;
    cin >> deliveryCost;
  }
  if (height < 3){
    treeCost = PRICE_1;
  }
  else if (height <= 5){
    treeCost = PRICE_2;
  }
  else if (height <= 8){
    treeCost = PRICE_3;
  }
  else {
    treeCost = PRICE_4;
  }
  totalTreeCost = numTrees * treeCost;
  if (planted == 'Y'){
    plantingCost = totalTreeCost * 0.5;
  } else if (delivered == 'Y'){
    if (numTrees <= 5){
      deliveryCost = PER_TREE_DELIVERY * numTrees;
    } else {
      deliveryCost = MAX_TREE_DELIVERY;
    }
  }
  totalCharges = totalTreeCost + deliveryCost + plantingCost;
  cout << "Green Fields Landscaping" << endl;
  cout << "Number of trees purchased: " << numTrees << endl;
  cout << "Tree height: " << height << endl;
  cout << "Will Green Fields do the planting? " << planted << endl;
  cout << "Green Fields Landscaping" << endl;
  cout << "Evergreen Tree Purchase" << endl;
}