import java.lang.reflect.Constructor;

public class Employee1 {
  private String name;
  private String empNumber;
  public Employee(String name, String empNumber) {
    this.name = name;
    this.empNumber = empNumber;
  }
  public String toString() {
    return String.format("Employee: \n\tName = %s \n\tEmployee Number = %s", name, empNumber);
  }
  public void setName(String name) {
    this.name = name;
  }
  public void setEmpNumber(String empNumber) {
    this.empNumber = empNumber;
  }
  public String getName() {
    return name;
  }
  public String getEmpNumber() {
    return empNumber;
  }
}