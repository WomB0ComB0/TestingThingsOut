public class FactoryDriver {
  public static void main(String[] args){
    Employee employee01 = new Employee("Mike Odnis", "EMP-01");
    Employee employee02 = new Employee("John Doe", "EMP-02");
    System.out.println(employee02.toString());
    ShiftLeader shiftLeader01 = new ShiftLeader("Jane Doe", "EMP-03", 50000.00, 1000.00);
    System.out.println(shiftLeader01.getName());
  }
}
