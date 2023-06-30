public class Triangle extends Shape{
  private double side1;
  private double side2;
  private double side3;

  public Triangle(double s1, double s2, String c, double x, double y, double s3){
    super(x,y,c);
    this.side1 = s1;
    this.side2 = s2;
    this.side3 = s3;
  }
  @Override
  public String toString(){
    String result = String.format("Triangle side1 = %.1f, side2 = %.1f, side3 = %.1f\n", this.side1, this.side2, this.side3);
    return result;
  }
}