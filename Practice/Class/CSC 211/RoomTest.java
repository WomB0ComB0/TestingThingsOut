public class RoomTest {
  public static void main(String args[]) {
    System.out.println("main(): entry point");
    RoomDimension dim = new RoomDimension(10, 12);
    RoomCarpet carpet = new RoomCarpet(dim, 8);
    System.out.println(carpet);
    System.out.println("main(): exit point"); 
  }
}