public class CheckingAccount extends BankAccount {
    private final double FEE = 0.15; // Default withdrawal fee
    
    @Override
    public CheckingAccount(String name, double amount) {
        super(name, amount); // Call the constructor of the parent class
        accountNumber = "CHK" + accountNumber;
    }

    public boolean withdraw(double amount) {
        if (amount > 0) {
            double totalAmount = amount + FEE; // Apply the withdrawal fee
            if (getBalance() >= totalAmount) {
                setBalance(getBalance() - totalAmount);
                System.out.println("Withdrawn: $" + amount);
                System.out.println("Fee: $" + FEE);
                return true;
            } else {
                System.out.println("Insufficient balance or invalid amount.");
                return false;
            }
        } else {
            System.out.println("Invalid withdrawal amount.");
            return false;
        }
    }
}
