import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

class Pangram{
    public static void main(String arg[]){
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the Pangram String");
        String pan=sc.nextLine();
        pan=pan.replaceAll("[^a-zA-Z]", "");
        Boolean bool=isPangram(pan.toLowerCase());
        if(bool){
            System.out.println("String is Pangram");
        }
        else{
            System.out.println("String is not a Pangram");
        }
        sc.close();
    }
   static boolean isPangram(String str) {
        if (str.length() < 26) {
            return false;
        } else {
            Set<Character> letters = new HashSet<>();
            for (char ch : str.toCharArray()) {
                if (Character.isLetter(ch)) {
                    letters.add(ch);
                }
            }
            return letters.size() == 26;
        }
    }
}
