public class SavingsAccount extends BankAccount {
  private boolean status;
  /**
   * Constructs a SavingsAccount object with the given initial balance, interest rate,
   * and monthly service charge.
   *
   * @param bal          The initial balance of the account.
   * @param intRate      The annual interest rate of the account.
   * @param monthlyCharge The monthly service charge of the account.
   */
  public SavingsAccount(double bal, double intRate, double monthlyCharge) {
    super(bal, intRate, monthlyCharge);
    this.status = true;
  }
  /**
   * Overrides the withdraw method to update the account status based on the balance
   * after the withdrawal.
   *
   * @param amount The amount to be withdrawn.
   */
  @Override
  public void withdraw(double amount) {
    if (this.status) {
      super.withdraw(amount);
      if (super.getBalance() < 25) {
        this.status = false;
      }
    }
  }
  /**
   * Overrides the deposit method to update the account status based on the balance
   * after the deposit.
   *
   * @param amount The amount to be deposited.
   */
  @Override
  public void deposit(double amount) {
    if ((this.status)) {
      // System.out.println("Account is inactive. Cannot deposit.");
      super.deposit(amount); // Look into this, only the withdrawal method works
      if (super.getBalance() >= 25) {
        this.status = true;
      }
    }
  }
  /**
   * Overrides the monthlyProcess method to adjust the monthly service charges based
   * on the number of withdrawals made and update the account status if the balance
   * goes below the minimum required amount.
   */
  @Override
  public void monthlyProcess() {
    if (super.getNumWithdrawals() > 4) {
      super.setMonthlyServiceCharges(super.getMonthlyServiceCharges() + (super.getNumWithdrawals() - 4));
    }
    super.monthlyProcess();
    if (super.getBalance() < 25) {
      this.status = false;
    }
  }
}