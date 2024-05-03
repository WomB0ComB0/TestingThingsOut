#include <stdio.h>

int main() {
    int *buffer = (int *)malloc(20 * sizeof(int)); // Dynamically allocate memory for 20 integers
    buffer[0] = 10; // Assign 10 to the first element of the buffer
    buffer[1] = 20; // Assign 20 to the second element of the buffer
    buffer[2] = 30; // Assign 30 to the third element of the buffer
    printf("First element: %d\n", buffer[0]); // Output: First element
    printf("Second element: %d\n", buffer[1]); // Output: Second element
    printf("Third element: %d\n", buffer[2]); // Output: Third element
    free(buffer); // Free allocated memory

}