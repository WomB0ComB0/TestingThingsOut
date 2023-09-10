/**
 * @author Mike Odnis
 * @since 2023-08-31 (August 31, 2023)
 * The Payroll class represents an employee's payroll information including name, ID number,
 * hours worked, and hourly rate.
 */
public class Payroll {
    private String name;       // Employee's name
    private int idNum;         // Employee's ID number
    private double hoursWorked; // Number of hours worked by the employee
    private double rate;       // Hourly rate of the employee

    /**
     * Constructs a Payroll object with the given name and ID number.
     *
     * @param name  the name of the employee
     * @param idNum the ID number of the employee
     */
    public Payroll(String name, int idNum) {
        this.name = name;
        this.idNum = idNum;
    }

    /**
     * Sets the number of hours worked by the employee.
     *
     * @param hoursWorked the number of hours worked
     */
    public void setHoursWorked(double hoursWorked) {
        this.hoursWorked = hoursWorked;
    }

    /**
     * Sets the hourly rate of the employee.
     *
     * @param rate the hourly rate
     */
    public void setRate(double rate) {
        this.rate = rate;
    }

    /**
     * Retrieves the name of the employee.
     *
     * @return the name of the employee
     */
    public String getName() {
        return name;
    }

    /**
     * Retrieves the ID number of the employee.
     *
     * @return the ID number of the employee
     */
    public int getIdNum() {
        return idNum;
    }

    /**
     * Retrieves the number of hours worked by the employee.
     *
     * @return the number of hours worked
     */
    public double getHoursWorked() {
        return hoursWorked;
    }

    /**
     * Retrieves the hourly rate of the employee.
     *
     * @return the hourly rate
     */
    public double getRate() {
        return rate;
    }

    /**
     * Calculates and retrieves the gross pay of the employee.
     *
     * @return the gross pay of the employee
     */
    public double getGrossPay() {
        return hoursWorked * rate;
    }
}
