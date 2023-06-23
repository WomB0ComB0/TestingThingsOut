public class RoomCarpet {
  private RoomDimension size;
  private double carpetCost;
  public RoomCarpet(RoomDimension dim, double cost) {
    this.size = dim;
    this.carpetCost = cost;
  }
  public double getTotalCost() {
    return size.getArea() * carpetCost;
  }
  public String toString() {
    return "Room dimension: " + size + "\nCarpet cost: " + carpetCost + "\nTotal cost: $" + getTotalCost() +  " (" + size.getArea() + " x " + carpetCost + ")" ;
  } 
}