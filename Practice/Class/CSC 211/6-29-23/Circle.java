public class Circle extends Shape implements ShapeMethods{
  double radius;

  public Circle(double x,  double y, String c, double r){
    super(x,y,c);
    this.radius = r;
  }

  public void incrementX(double x){
    this.setXCoord(this.getXCoord() + x);
  }
  public void decrementX(){
    this.setXCoord(this.getXCoord() - 1.0);
  }
  public void incrementY(double y){
    this.setYCoord(this.getYCoord() + y);
  }
  public void decrementY(){
    this.setYCoord(this.getYCoord() - 1.0);
  }
  @Override
  public String toString(){
    String result = String.format("Circle radius = %.1f\n", this.radius, super.toString());
    return result;
  }
}