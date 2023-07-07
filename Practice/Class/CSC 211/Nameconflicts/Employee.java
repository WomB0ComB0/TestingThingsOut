public class Employee {
  String name;
  Address address;

  public Employee(String name, String address, String zipCode){
    this.name = name;
    this.address =  new Address(address, zipCode);
  }
}