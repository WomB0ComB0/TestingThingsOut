/**
 * The BankAccount class represents a basic bank account with functionalities
 * to deposit, withdraw, calculate interest, and perform monthly processing.
 */
public class BankAccount {
  private double balance;
  private int numDeposits;
  private int numWithdrawals;
  private double interestRate;
  private double monthlyServiceCharges;
  /**
   * Constructs a BankAccount object with the given initial balance, interest rate,
   * and monthly service charge.
   *
   * @param bal      The initial balance of the account.
   * @param intRate  The annual interest rate of the account.
   * @param monthlyCharge The monthly service charge of the account.
   */
  public BankAccount(double bal, double intRate, double monthlyCharge) {
    this.balance = bal;
    this.interestRate = intRate;
    this.monthlyServiceCharges = monthlyCharge;
  }
  /**
   * Deposits the given amount into the account and increments the number of deposits.
   *
   * @param amount The amount to be deposited.
   */
  public void deposit(double amount) { // Check this
    this.balance += amount;
    this.numDeposits++;
  }
  /**
   * Withdraws the given amount from the account and increments the number of withdrawals.
   *
   * @param amount The amount to be withdrawn.
   */
  public void withdraw(double amount) { // Check this
    this.balance -= amount;
    this.numWithdrawals++;
  }
  /**
   * Calculates and adds monthly interest to the account balance.
   */
  private void calcInterest() {
    double monthlyInterestRate = this.interestRate / 12.00; // Change this 
    double monthlyInterest = this.balance * monthlyInterestRate;
    this.balance += monthlyInterest;
  }
  /**
   * Performs the monthly processing by deducting monthly service charges,
   * calculating and adding interest, and resetting transaction counts.
   */
  public void monthlyProcess() {
    this.balance -= this.monthlyServiceCharges;
    calcInterest();
    setMonthlyServiceCharges(0);
    this.numDeposits = 0;
    this.numWithdrawals = 0;
    // this.monthlyServiceCharges = 0;
  }
  public void setMonthlyServiceCharges(double monthlyServiceCharges) {
    this.monthlyServiceCharges = monthlyServiceCharges;
  }
  public double getBalance() {return this.balance;}
  public int getNumDeposits() {return this.numDeposits;}
  public int getNumWithdrawals() {return this.numWithdrawals;}
  public double getInterestRate() {return this.interestRate;}
  public double getMonthlyServiceCharges() {return this.monthlyServiceCharges;}
}