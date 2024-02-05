import java.util.ArrayList;
import java.util.Random;

public class PuzzleJava {

    public ArrayList<Integer> getTenRolls() {
        ArrayList<Integer> random10 = new ArrayList<Integer>();
        Random rand = new Random();
        for (int x = 1; x <= 10; x++) {
            random10.add(rand.nextInt(20) + 1);
        }
        return random10;
    }

    public String getRandomLetterWithArray() {
        Random rand = new Random();

        String alphabet = "abcdefghijklmnopqrsutvwxyz";
        String[] letters = new String[26];
        for (int j = 0; j < 26; j++) {
            letters[j] = String.valueOf(alphabet.charAt(j));
        }
        return letters[rand.nextInt(26)];
    }

    public String getRandomLetter() {
        Random rand = new Random();
        String alphabetString = "abcdefghijklmnopqrsutvwxyz";
        char randomChar = alphabetString.charAt(rand.nextInt(26));
        return String.valueOf(randomChar);
    }

    public String generatePassword() {
        String password = "";
        for (int i = 0; i < 8; i++) {
            password = password + getRandomLetter();
        }
        return password;
    }

    public ArrayList<String> getNewPasswordSet(int length) {
        ArrayList<String> pass = new ArrayList<String>();
        for (int i = 0; i < length; i++) {
            pass.add(generatePassword());
        }
        return pass;
    }
}
