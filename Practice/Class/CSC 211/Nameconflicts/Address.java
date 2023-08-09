/**
 * @author Mike Odnis
 * @since 8/8/2023
 * @version 1.0
*/
public class Address {
    private String street;   // The street name of the address
    private String zipCode; // The zip code of the address
    /**
     * Constructs an Address object with the provided street and zip code.
     *
     * @param street The street name of the address.
     * @param zipCode The zip code of the address.
     */
    public Address(String street, String zipCode) {
        this.street = street;
        this.zipCode = zipCode;
    }
    /**
     * Returns the street name of the address.
     *
     * @return The street name of the address.
     */
    public String getStreet() {
        return street;
    }
    /**
     * Returns the zip code of the address.
     *
     * @return The zip code of the address.
     */
    public String getZipCode() {
        return zipCode;
    }
    /**
     * Sets the street name of the address.
     *
     * @param street The new street name to set.
     */
    public void setStreet(String street) {
        this.street = street;
    }
    /**
     * Sets the zip code of the address.
     *
     * @param zipCode The new zip code to set.
     */
    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }
    /**
     * Returns a string representation of the address in the format: "street, zipCode".
     *
     * @return A string representation of the address.
     */
    @Override
    public String toString() {
        return street + ", " + zipCode;
    }
}