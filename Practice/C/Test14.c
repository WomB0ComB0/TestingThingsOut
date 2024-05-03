#include <stdio.h>

int main() {
    int alpha = 27;
    int *pa = &alpha;
    printf("Address of alpha: %p\n", pa);
    printf("Address after increment: %p\n", pa + 1); // Output: Address after increment
}