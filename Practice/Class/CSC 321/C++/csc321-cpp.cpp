#include "MoveIt.h"
#include <iostream>
#include <string>
#include <utility>
using namespace std;
template <typename T>
constexpr bool is_lvalue(T& obj) {
	return true;
}
template <typename T>
constexpr bool is_lvalue(T&& obj) {
	return false;
}
int main()
{
	MoveIt m(10, "test", 2);
	m.testMe();
	cout << endl;
	MoveIt l(m);
	cout << endl;
	MoveIt j(move(m));
	j.testMe();
	cout << endl;
	MoveIt k(move(MoveIt(0, "I am", 3)));
	k.testMe();
	cout << endl;
	cout << is_lvalue(m) << endl << endl;
}