public class SavingsAccount extends BankAccount {
    private double rate;
    private int savingsNumber;
    
    public SavingsAccount(String name, double amount) {
        super(name, amount); // Call the constructor of the parent class
        accountNumber = "SAV" + accountNumber;
        rate = 0.02; // Default interest rate (2%)
        savingsNumber = numberOfAccounts;
    }

    public SavingsAccount(SavingsAccount oldAccount, double amount) {
        super(oldAccount, amount); // Call the constructor of the parent class
        accountNumber = "SAV" + accountNumber;
        rate = oldAccount.rate;
        savingsNumber = oldAccount.savingsNumber;
    }

    public void postInterest() {
        double interest = getBalance() * rate;
        deposit(interest);
    }

    @Override
    public String getAccountNumber() {
        return accountNumber + "-" + savingsNumber;
    }
}

