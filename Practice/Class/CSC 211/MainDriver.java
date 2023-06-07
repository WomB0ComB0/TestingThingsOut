import java.util.Scanner;
/**
 * The MainDriver program will test out the Employee class and its subclasses
 * 
 */
public interface MainDriver {
  public static void main(String[] args){
    System.out.println("main(): entry point");
    
    double anualSalary = 160000;
    String firstName = "Mike";
    String lastName = "Odnis";
    int employeeNumber = 123456;
    
    // Instantiate an object
    Scanner keyb = new Scanner(System.in);
    System.out.println("main(): exit point");

    Employee e1 = new Employee();
    
    e1.setFirstName(firstName);
    e1.setLastName(lastName);
    e1.setEmployeeNumber(employeeNumber);
    e1.setSalary(anualSalary);

    System.out.printf("main(): %s %s %d %f\n", e1.getFirstName(), e1.getLastName(), e1.getEmployeeNumber(), e1.getSalary());
  } 
}
