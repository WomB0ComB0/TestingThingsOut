#include <stdio.h>

void doubler(int *ptr) {
	*ptr *= 2; // Double the value at the address stored in ptr
}

int main() {

    int a = 25;
    doubler(&a); // Pass the address of 'a' to the function
    printf("Doubled value: %d\n", a); // Output: Doubled value
}