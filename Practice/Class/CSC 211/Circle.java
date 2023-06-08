public class Circle {
  private double radius; 
  private double area;
  
  // No-arg  constructor
  public Circle(){
    radius = 1.0;
  }

  // Create a paramaterized constructor
  public Circle(double radius){
    this.radius = radius;
  }
  
  public double getRadius(){
    return radius;
  }
  public void setRadius(double radius){
    if (radius >= 0.0)
      this.radius = radius;
    else
      System.out.println("Radius must be positive");
  }
  public void calculateArea(){
    area = Math.PI * radius * radius;
  }
  public void setRadius(String radius){
    radius = Double.parseDouble(radius);
  }
  public double getArea(){
    return area;
  }
}
