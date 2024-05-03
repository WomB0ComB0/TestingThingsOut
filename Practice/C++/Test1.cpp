#include <tuple>
#include <iostream>

using namespace std;

int main() {
    std::tuple<int, double, const char*> x {42, 73.2, "hello, earthlings!"};
    const auto [a, b, c] = x;
    cout << "a: " << a << " b: " << b << " c: " << c << endl;

    cout << "Type of b: " << typeid(b).name() << endl;    
    return 0;
}