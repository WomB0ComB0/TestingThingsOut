import java.util.*;
import java.io.*;
public class TestIterator {
    public static void main(String[] args) {
        String fileName;
        String input;
        int number;
        ArrayList<Integer> arr = new ArrayList<Integer>();
        Scanner kybd = new Scanner(System.in);
        System.out.println("Hello World!");
        System.out.println("Please enter a file name");
        fileName = kybd.nextLine();
        try {
            File file = new File("C:\\Users\\airwo\\Documents\\GitHub\\TestingThingsOut\\Practice\\Class\\CSC 229\\11\\" + fileName);
            Scanner inputFile = new Scanner(file);
            // Is there another line in the file?
            while (inputFile.hasNextLine()) {
                input = inputFile.nextLine();
                try {
                    number = Integer.parseInt(input);
                    System.out.printf("The number is equal to %d\n", number);
                    arr.add(number * number);
                } catch (NumberFormatException e) {
                    System.out.println("Invalid input: " + input);
                }
            }
            for (int num: arr) {
                System.out.printf("arrayList item = %d\n ", num);
            }
            Iterator<Integer> iter = arr.iterator();
            // Is there another element in the list?
            while (iter.hasNext()) {
                int value  = iter.next();
                System.out.printf("iterator item = %d\n ", value);
            }
            inputFile.close();
        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + fileName);
        } finally {
            System.out.println("Goodbye World!");
            kybd.close();
        }
    }
}
