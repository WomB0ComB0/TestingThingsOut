#include <stdio.h>

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    int *ptr = arr;
    printf("First element: %d\n", *ptr); // Output: First element
    printf("Second element: %d\n", *(ptr + 1)); // Output: Second element
}