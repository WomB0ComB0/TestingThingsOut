#include <stdio.h>

struct Person {
	char *name; // Pointer member
	int age;
};

int main() {
    struct Person *you = malloc(sizeof(struct Person)); // Allocate memory for a struct Person pointer
    you->name = "John"; // Accessing member using pointer notation
    printf("Name: %s, Age: %d\n", you->name, you->age); // Output: Name and Age
}