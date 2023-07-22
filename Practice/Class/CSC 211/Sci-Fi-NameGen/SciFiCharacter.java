import javax.swing.JOptionPane;
public class SciFiCharacter {
  public static void main(String[] args) {
    String firstName = JOptionPane.showInputDialog("Enter your first name:");
    String lastName = JOptionPane.showInputDialog("Enter your last name:");
    String placeOfBirth = JOptionPane.showInputDialog("Enter your place of birth:");
    String elementarySchool = JOptionPane.showInputDialog("Enter the name of your elementary school:");
    String bestFriendName = JOptionPane.showInputDialog("Enter the name of your best friend:");
    String petName = JOptionPane.showInputDialog("Enter the name of your pet (or another friend):");

    String sciFiFirstName = firstName.substring(0, 3) + lastName.substring(0, 2);
    String sciFiSecondName = placeOfBirth.substring(0, 2) + elementarySchool.substring(0, 3);
    String sciFiPlanetName = bestFriendName.substring(0, 3) + petName.substring(0, 2);

    String message = "Your sci-fi character name is: " + sciFiFirstName + " " + sciFiSecondName + "\n";
    message += "Your sci-fi character's home planet is: " + sciFiPlanetName;
    JOptionPane.showMessageDialog(null, message);
  }
}