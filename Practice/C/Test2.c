#include <stdio.h>

int main(){
  typedef float radius;
  
  radius a;

  a = 27.5;

  printf("A circle with radius %.2f has an area of %.2f\n", a, 3.14159 * a * a);

  return 0;
}