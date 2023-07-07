public class SavingsAccount extends BankAccount {
  private boolean status;
  public  SavingsAccount(double bal, double intRate, double mon) {
    super(bal, intRate, mon);
    this.status = true;
  }
  @Override
  public void withdraw(double amount) {
    if (this.status) {
      super.withdraw(amount);
      if (super.getBalance() < 25) {
        this.status = false;
      }
    }
  }
  @Override
  public void deposit(double amount) {
    if (!this.status) {
      super.deposit(amount);
      if (super.getBalance() > 25) {
        this.status = true;
      }
    }
  }
  @Override
  public void monthlyProcess(){
    if (super.getNumWithdrawals() > 4) {
      super.setMonthlyServiceCharges(super.getMonthlyServiceCharges() + (super.getNumWithdrawals() - 4));
    }
    super.monthlyProcess();
    if (super.getBalance() < 25) {
      this.status = false;
    }
  }
}