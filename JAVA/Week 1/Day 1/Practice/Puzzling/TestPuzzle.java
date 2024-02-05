import java.util.ArrayList;
import java.util.Random;
public class TestPuzzle {
    
	public static void main(String[] args) {
		PuzzleJava generator = new PuzzleJava();
		ArrayList<Integer> randomRolls = generator.getTenRolls();
		System.out.println(randomRolls);
		String randomLetterWithArray = generator.getRandomLetterWithArray();
		System.out.println(randomLetterWithArray);
		String randomLetter = generator.getRandomLetter();
		System.out.println(randomLetter);
		String randomPassword = generator.generatePassword();
		System.out.println(randomPassword);
		ArrayList<String> randomPasswordSet = generator.getNewPasswordSet(2);
		System.out.println(randomPasswordSet);
		
    	
	}
}
