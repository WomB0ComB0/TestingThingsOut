public class Shape {
  private double xCoord;
  private double yCoord;
  private String color;
  public Shape(double x, double y, String color){
    this.xCoord = x;
    this.yCoord = y;
    this.color = color;
  }
  public double getXCoord(){
    return this.xCoord;
  }
  public double getYCoord(){
    return this.yCoord;
  }
  public String getColor(){
    return this.color;
  }
  public void setXCoord(double x){
    this.xCoord = x;
  }
  public void setYCoord(double y){
    this.yCoord = y;
  }
  public void setColor(String color){
    this.color = color;
  }
  public String toString(){
    String result = String.format("x = %.1f, y = %.1f, color = %s\n", this.xCoord, this.yCoord, this.color);
    return result;
  }
}
