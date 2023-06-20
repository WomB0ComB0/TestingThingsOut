public class RectangleTest {
  public static void main(String[] args){
    Rectangle rectangle1 = new Rectangle(4.0, 40.0);
    Rectangle rectangle2 = new Rectangle(3.5, 35.9);
    
    System.out.printf("rectangle1: %.2f %.2f %.2f %.2f%n", rectangle1.getLength(), rectangle1.getWidth(), rectangle1.getArea(), rectangle1.getPerimeter());
    System.out.printf("rectangle2: %.2f %.2f %.2f %.2f%n", rectangle2.getLength(), rectangle2.getWidth(), rectangle2.getArea(), rectangle2.getPerimeter());
    
    rectangle1.setLength(5.0);
    rectangle1.setWidth(50.0);
    
    rectangle2.setLength(4.5);
    rectangle2.setWidth(45.9);
    
    System.out.printf("rectangle1: %.2f %.2f %.2f %.2f%n", rectangle1.getLength(), rectangle1.getWidth(), rectangle1.getArea(), rectangle1.getPerimeter());
    System.out.printf("rectangle2: %.2f %.2f %.2f %.2f%n", rectangle2.getLength(), rectangle2.getWidth(), rectangle2.getArea(), rectangle2.getPerimeter());
  }
}
