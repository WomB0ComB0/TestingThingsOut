public class FrogDriver {
  public static void main(String[] args){
    Frog frog1 = new Frog("Bullfrog", 25.5);
    System.out.printf("Population: %d\n", Frog.getPopulation());
  }
}