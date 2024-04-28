class Shape {
  public:
    virtual double calculateArea() {
      std::cout << "Calculating area of shape..." << std::endl;
      return 0.0;
    }
};

// Derived class Rectangle 
class Rectangle : public Shape {
  private:
    double length;
    double width;
  public:
    Rectangle(double length, double width) : length(length), width(width) {}
    // Override the calculateArea function
    double calculateArea() {
      std::cout << "Calculating area of rectangle..." << std::endl;
      return length * width;
    }
};