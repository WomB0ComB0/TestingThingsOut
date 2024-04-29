#include <string.h>
#include <stdio.h>
#include <stdlib.h>

int main() {
  FILE *fh; // Declare the variable "fh"
  fh = fopen("file.bin", "wb"); // Open the file in binary write mode
  int a = 128; // Declare and initialize the variable "a"
  fwrite(&a, sizeof(int), 1, fh); // Write the variable "a" to the file
  fclose(fh); // Close the file
}