public class Frog {
  private String breed;
  private double weight;
  private static int population = 0;
  public Frog(String breed, double weight){
    this.breed = breed;
    this.weight = weight;
    population++;
  }
  public static int getPopulation(){
    return population;
  }
}
