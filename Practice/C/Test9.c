#include <stdio.h>

int main() {
    int a, b;
    int *p;
    
    a = 10;
    
    p = &a;
    printf("p is %p\n", p); // p is 0x7fffbf7f3f7c
}