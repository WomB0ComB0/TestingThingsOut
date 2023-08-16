/**
 * Represents a savings account that extends the {@link BankAccount} class.
 */
public class SavingsAccount extends BankAccount {
    private double rate = 0.025;
    private int savingsNumber = 0;
    private String accountNumber;

    /**
     * Constructs a new SavingsAccount object with the specified owner's name and initial balance.
     *
     * @param name   The name of the account owner.
     * @param amount The initial balance of the account.
     */
    public SavingsAccount(String name, double amount) {
        super(name, amount);
        accountNumber = super.getAccountNumber();
        savingsNumber = ++numberOfAccounts;
    }

    /**
     * Constructs a new SavingsAccount object by copying the information from an existing account.
     *
     * @param oldAccount The existing savings account to copy from.
     * @param amount     The initial balance of the new account.
     */
    public SavingsAccount(SavingsAccount oldAccount, double amount) {
        super(oldAccount, amount);
        accountNumber = super.getAccountNumber();
        rate = oldAccount.rate;
        savingsNumber = ++numberOfAccounts;
    }

    /**
     * Posts monthly interest to the account balance.
     */
    public void postInterest() {
        double interest = getBalance() * rate / 12;
        deposit(interest);
    }

    /**
     * Returns the formatted account number, including the savings number.
     *
     * @return The formatted account number.
     */
    @Override
    public String getAccountNumber() {
        return accountNumber + "-" + savingsNumber;
    }
}
