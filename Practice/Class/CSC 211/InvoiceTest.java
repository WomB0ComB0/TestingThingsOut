public class InvoiceTest {
  public static void main(String[] args){
    Invoice invoice1 = new Invoice("12345", "Hammer", 2, 14.95);
    Invoice invoice2 = new Invoice("54321", "Paint Brush", -5, -9.99);
    
    System.out.printf("invoice1: %s %s %d %.2f%n", invoice1.getPartNumber(), invoice1.getPartDescription(), invoice1.getQuantity(), invoice1.getPricePerItem());
    System.out.printf("invoice2: %s %s %d %.2f%n", invoice2.getPartNumber(), invoice2.getPartDescription(), invoice2.getQuantity(), invoice2.getPricePerItem());
    
    invoice1.setQuantity(3);
    invoice1.setPricePerItem(19.99);
    
    invoice2.setQuantity(5);
    invoice2.setPricePerItem(29.95);
    
    System.out.printf("invoice1: %s %s %d %.2f%n", invoice1.getPartNumber(), invoice1.getPartDescription(), invoice1.getQuantity(), invoice1.getPricePerItem());
    System.out.printf("invoice2: %s %s %d %.2f%n", invoice2.getPartNumber(), invoice2.getPartDescription(), invoice2.getQuantity(), invoice2.getPricePerItem());
    
    System.out.printf("invoice1: $%.2f%n", invoice1.getInvoiceAmount());
    System.out.printf("invoice2: $%.2f%n", invoice2.getInvoiceAmount());

  }
}
