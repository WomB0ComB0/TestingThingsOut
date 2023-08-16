/**
 * Represents a checking account that extends the {@link BankAccount} class.
 */
public class CheckingAccount extends BankAccount {
    private final double FEE = 0.15;

    /**
     * Constructs a new CheckingAccount object with the specified owner's name and initial balance.
     *
     * @param name   The name of the account owner.
     * @param amount The initial balance of the account.
     */
    public CheckingAccount(String name, double amount) {
        super(name, amount);
        setAccountNumber(getAccountNumber() + "-10");
    }

    /**
     * Withdraws money from the account, including a withdrawal fee.
     *
     * @param amount The amount to withdraw.
     * @return true if the withdrawal was successful, false otherwise.
     */
    @Override
    public boolean withdraw(double amount) {
        if (amount > 0) {
            double totalAmount = amount + FEE;
            if (getBalance() >= totalAmount && super.withdraw(totalAmount)) {
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
