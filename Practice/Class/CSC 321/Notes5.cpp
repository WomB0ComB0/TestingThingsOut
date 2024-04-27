struct Point {
  int x, y;
};

int main() {
  // Declare and initialize a Point struct
  Point p1 = {3, 4};
  
  // Accessing members of the struct
  std::cout << "Coordinates of point: (" << p1.x << ", " << p1.y << ")" << std::endl;
  return 0;
}