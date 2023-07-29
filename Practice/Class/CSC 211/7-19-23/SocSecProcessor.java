import javax.swing.JOptionPane;
public interface SocSecProcessor {
    public static void main(String[] args) {
        boolean continueInput = true;
        while(continueInput) {
            try {
                String name = JOptionPane.showInputDialog("Enter a name:");
                String ssn = JOptionPane.showInputDialog("Enter a social security number (xxx-xx-xxxx):");
                if (isValid(ssn)) {
                    System.out.println(name + " " + ssn + " is valid");
                }
            } catch (SosSecException e) {
                System.out.println(e.getMessage());
            }
            String continueChoice = JOptionPane.showInputDialog("Continue? (y/n):");
            continueInput = continueChoice.equalsIgnoreCase("y");
        }
    }


    private static boolean isValid(String ssn) throws SosSecException {

        if (ssn.length() != 11) {
            JOptionPane.showMessageDialog(null,
                    "Invalid social security number, wrong number of characters",
                    "Warning",
                    JOptionPane.WARNING_MESSAGE);
            throw new SosSecException("Invalid social security number, wrong number of characters");
        }
        if (ssn.charAt(3) != '-' || ssn.charAt(6) != '-') {
            JOptionPane.showMessageDialog(null,
                    "Invalid social security number, dashes at wrong positions",
                    "Warning",
                    JOptionPane.WARNING_MESSAGE);
            throw new SosSecException("Invalid social security number, dashes at wrong positions");
        }
        for (char c : ssn.toCharArray()) {
            if (!Character.isDigit(c) && c != '-') {
                JOptionPane.showMessageDialog(null,
                        "Invalid social security number, contains a character that is not a digit",
                        "Warning",
                        JOptionPane.WARNING_MESSAGE);
                throw new SosSecException("Invalid social security number, contains a character that is not a digit");
            }
        }
        return true;
    }

}