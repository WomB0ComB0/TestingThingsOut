/**
 * The employee class is uesd to represent an employee object 
 * @author Mike Odnis
 * @version 1.0
 */ 
public class Employee {
  private String firstName;
  private String lastName;
  private int employeeNumber;
  private double salary;

  // Behavior
  /**
   * The Employee constructor is used to create an Employee object
   * @param fn the employee's first name
   */
  public void setFirstName(String fn){
    firstName = fn; // this is a mutator or setter method
  }
  public void setLastName(String ln){
    lastName = ln; // this is a mutator or setter method
  }
  public void setEmployeeNumber(int en){
    employeeNumber = en; // this is a mutator or setter method
  }
  public void setSalary(double s){
    salary = s; // this is a mutator or setter method
  }
  /**
  * 
  * @param fn the employee's first name
  */ 
  // Accessors or getter methods
  public String getFirstName(){
    return firstName;
  }
  public String getLastName(){
    return lastName;
  }
  public int getEmployeeNumber(){
    return employeeNumber;
  }
  public double getSalary(){
    return salary;
  }
}