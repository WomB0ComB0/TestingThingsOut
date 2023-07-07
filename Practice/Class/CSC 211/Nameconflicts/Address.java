public class Address {
  String street;
  String zipCode;

  public Address(street, zipCode){
    this.street = street;
    this.zipCode = zipCode;
  }
  public String getStreet(){
    return this.street;
  }
  public String getZipCode(){
    return this.zipCode;
  }
    
}