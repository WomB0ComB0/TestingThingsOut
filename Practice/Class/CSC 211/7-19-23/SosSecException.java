public class SosSecException extends Exception {
    public SosSecException(String error) {
        super("Invalid social security number: " + error);
    }
}