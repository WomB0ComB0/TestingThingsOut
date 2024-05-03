#include <stdio.h>

char *allocate(int size) {
	char *buffer = (char *)malloc(size * sizeof(char)); // Dynamically allocate memory
	return buffer; // Return pointer to allocated memory
}
int main() {
    char *str = allocate(128); // Allocate memory for a string
    strcpy(str, "Hello, World!"); // Copy string to allocated memory
    printf("%s\n", str); // Output: Hello, World!
    free(str); // Free allocated memory
}