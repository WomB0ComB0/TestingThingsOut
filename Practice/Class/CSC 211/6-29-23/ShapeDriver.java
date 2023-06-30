public class ShapeDriver {
    public static void main(String[] args) {
        Shape[] shapes = new Shape[3];
        shapes[0] = new Circle(5);
        shapes[1] = new Rectangle(5, 10);
        shapes[2] = new Triangle(5, 10);

        for (Shape shape : shapes) {
            System.out.println(shape);
        }
    }
}