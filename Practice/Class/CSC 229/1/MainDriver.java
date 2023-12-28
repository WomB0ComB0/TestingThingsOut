/**
 * @author Mike Odnis
 * @since 2023-08-31 (August 31, 2023)
 *        The MainDriver class contains the main method to demonstrate the usage
 *        of the Payroll class.
 */
public class MainDriver {
    /**
     * The main method creates a Payroll object for an employee, sets their hours
     * worked and hourly rate,
     * and then displays the employee's gross pay.
     *
     * @param args the command line arguments (not used in this example)
     */
    public static void main(String[] args) {
        // Create a Payroll object for an employee named John Doe with ID number 12345
        Payroll employee = new Payroll("John Doe", 12345);

        // Set the number of hours worked by the employee to 40
        employee.setHoursWorked(40);

        // Set the hourly rate of the employee to $15.50
        employee.setRate(15.50);

        // Calculate and display the employee's gross pay
        System.out.println("Gross pay for " + employee.getName() + " is $" + employee.getGrossPay());
    }
}
