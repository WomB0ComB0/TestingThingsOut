public class BankAccount {
  private double balance;
  private int numDeposits;
  private int numWithdrawals;
  private double interestRate;
  private double monthlyServiceCharges;
  public BankAccount(double bal, double intRate, double mon) {
    this.balance = bal;
    this.interestRate = intRate;
    this.monthlyServiceCharges = mon;
  }
  public void deposit(double amount) {
    this.balance += amount;
    this.numDeposits++;
  }
  public void withdraw(double amount) {
    this.balance -= amount;
    this.numWithdrawals++;
  }
  private void calcInterest() {
    double monthlyInterestRate = this.interestRate / 12;
    double monthlyInterest = this.balance * monthlyInterestRate;
    this.balance += monthlyInterest;
  }
  public void monthlyProcess(){
    this.balance -= this.monthlyServiceCharges;
    this.calcInterest();
    this.numDeposits = 0;
    this.numWithdrawals = 0;
    this.monthlyServiceCharges = 0;
  }
  public void setMonthlyServiceCharges(double amount) {
    this.monthlyServiceCharges = amount;
  }
  public double getBalance() {
    return this.balance;
  }
  public int getNumDeposits() {
    return this.numDeposits;
  }
  public int getNumWithdrawals() {
    return this.numWithdrawals;
  }
  public double getInterestRate() {
    return this.interestRate;
  }
  public double getMonthlyServiceCharges() {
    return this.monthlyServiceCharges;
  }
}