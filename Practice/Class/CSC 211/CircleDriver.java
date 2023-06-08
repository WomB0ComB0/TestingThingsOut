public class CircleDriver {
  public static void main(String[] args){
    System.out.println("Creating a circle with radius 5.0");

    double radius = 5.0;

    Circle circle1 = new Circle(radius);
    Circle circle2 = new Circle(radius);
    
    System.out.println("Circle 1 radius: " + circle1.getRadius());
    System.out.println("Circle 2 radius: " + circle2.getRadius());
    
  }
}
