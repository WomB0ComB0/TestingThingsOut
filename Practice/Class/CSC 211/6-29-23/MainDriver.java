public class MainDriver {
  public static void main(String[] args){
    System.out.println("main(): entry point");
    Shape shape1 = new Shape(5.0, 5.0, "red");
    Shape shape2 = new Shape(10.0, 10.0, "blue");
    System.out.println(shape1.toString());
    System.out.println(shape2.toString());

    Shape[] shapeArray  = new Shape[2];

    Triangle triangle1 = new Triangle(12.0, 15.0, "BLACK", 5.0, 5.0, 5.0);
    shapeArray[0] = triangle1;
    System.out.println(triangle1.toString());
    System.out.println(shapeArray[0].toString());

    Circle circle1 = new Circle(56.3, 18.1, "YELLOW", 6.3);
    System.out.println(circle1.toString());
    printShape(circle1);

    System.out.println("main(): exit point");
  }
  public static void printShape(Shape s){
    System.out.println(s.toString());
  }
}