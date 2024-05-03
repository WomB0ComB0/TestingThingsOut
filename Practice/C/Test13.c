#include <stdio.h>

int main() {
    int alpha = 27;
    int *ptr = &alpha;
    printf("Value before manipulation: %d\n", alpha); // Output: Value before manipulation
    *ptr = 66; // Manipulating data using pointer
    printf("Value after manipulation: %d\n", alpha); // Output: Value after manipulation
}