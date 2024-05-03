#include <stdio.h>

int main() {
    int a, b;
    int *p;

    a = 10;
    p = &a;
    b = *p;

    printf("a is %d, b is %d\n", a, b);
}