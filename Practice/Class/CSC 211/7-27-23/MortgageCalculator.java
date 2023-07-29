import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import javax.swing.JFrame;
import javax.swing.JTextField;
import javax.swing.JLabel;
import javax.swing.JButton;
public class MortgageCalculator {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Mortgage Calculator");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 200);
        frame.setLayout(null);

        JLabel loanAmountLabel = new JLabel("Loan Amount:");
        loanAmountLabel.setBounds(20, 20, 100, 25);
        JLabel interestRateLabel = new JLabel("Interest Rate:");
        interestRateLabel.setBounds(20, 50, 100, 25);
        JLabel durationLabel = new JLabel("Duration (years):");
        durationLabel.setBounds(20, 80, 100, 25);
        JLabel resultLabel = new JLabel("Monthly Payment:");
        resultLabel.setBounds(20, 110, 150, 25);

        JTextField loanAmountField = new JTextField();
        loanAmountField.setBounds(150, 20, 200, 25);
        JTextField interestRateField = new JTextField();
        interestRateField.setBounds(150, 50, 200, 25);
        JTextField durationField = new JTextField();
        durationField.setBounds(150, 80, 200, 25);
        JTextField resultField = new JTextField();
        resultField.setBounds(150, 110, 200, 25);
        resultField.setEditable(false);

        JButton calculateButton = new JButton("Calculate");
        calculateButton.setBounds(150, 140, 100, 25);

        frame.add(loanAmountLabel);
        frame.add(interestRateLabel);
        frame.add(durationLabel);
        frame.add(resultLabel);
        frame.add(loanAmountField);
        frame.add(interestRateField);
        frame.add(durationField);
        frame.add(resultField);
        frame.add(calculateButton);

        calculateButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                double principal = Double.parseDouble(loanAmountField.getText());
                double rate = Double.parseDouble(interestRateField.getText()) / 100.0 / 12.0; // Monthly interest rate
                int years = Integer.parseInt(durationField.getText());
                int months = years * 12; // Total number of months
                double monthlyPayment = principal * (rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
                resultField.setText(String.format("%.2f", monthlyPayment));
            }
        });

        frame.setVisible(true);
    }
}
