#include <stdio.h>

int main() {
    char *veeps[5] = {"Washington", "Adams", "Jefferson", "Burr", "Clinton"}; // Array of pointers to strings
    printf("Third veep: %s\n", veeps[2]); // Output: Third veep
    printf("First character of third veep: %c\n", *(*(veeps + 2))); // Output: First character of third veep
}