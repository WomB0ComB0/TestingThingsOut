public abstract class BankAccount {
    private double balance;
    private String owner;
    private String accountNumber;
    protected static int numberOfAccounts = 0; // Initialize to 0
    // Constructors
    public BankAccount() {
        numberOfAccounts++;
    }
    public BankAccount(String owner, double balance) {
        this.owner = owner;
        this.balance = balance;
        this.accountNumber = generateAccountNumber();
        numberOfAccounts++;
    }
    public BankAccount(BankAccount oldAccount, double balance) {
        this.owner = oldAccount.owner;
        this.balance = balance;
        this.accountNumber = oldAccount.accountNumber;
        numberOfAccounts++;
    }
    // Methods
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
        }
    }
    public boolean withdraw(double amount) {
        if (amount > 0 && balance >= amount) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
            return true;
        } else {
            System.out.println("Insufficient balance or invalid amount.");
            return false;
        }
    }
    public double getBalance() {
        return balance;
    }
    public String getOwner() {
        return owner;
    }
    public String getAccountNumber() {
        return accountNumber;
    }
    public void setBalance(double balance) {
        this.balance = balance;
    }
    public void setAccountNumber(String newAccountNumber) {
        accountNumber = newAccountNumber;
    }
    // Generate a unique account number
    private String generateAccountNumber() {
        String randomNumber = String.valueOf((int) (Math.random() * 10000));
        return "ACCT-" + randomNumber;
    }
}
