#include <string.h>
#include <stdio.h>
#include <stdlib.h>

int main() {
  char *str = "Hello, World!";
  char *str2 = (char *)malloc(strlen(str) + 1);
  strcpy(str2, str);
  printf("%s\n", str2);
  free(str2);
  return 0;
}