public class ShiftLeader extends Employee {
  private double salary, bonus;
  public  ShiftLeader(String name, String empNumber, double salary, double bonus) {
    super(name, empNumber);
    this.salary = salary;
    this.bonus = bonus;
  }
  public String toString(){
    return super.toString() + String.format("Shift Leader: \n\tSalary = %.2f Bonus = $%.2f",  salary, bonus);
  }
  public void setSalary(double salary) { this.salary = salary; }
  public void setBonus(double bonus){ this.bonus = bonus; }
  public double getSalary() { return salary; }
  public double getBonus() { return bonus; }
}