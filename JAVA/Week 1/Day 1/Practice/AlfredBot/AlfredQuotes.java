import java.util.Date;

public class AlfredQuotes {

    public String basicGreeting() {
        return "Hello, lovely to see you. How are you?";
    }

    public String guestGreeting(String name) {
        String greeting = String.format("Hello %s. Lovely to see you.", name);
        return greeting;
    }

    public String dateAnnouncement() {
        Date nowDate = new Date();
        return "It is currently " + nowDate;
    }

    public String respondBeforeAlexis(String conversation) {
        boolean isAlexis = conversation.contains("Alexis");
        boolean isAlfred = conversation.contains("Alfred");

        if (isAlexis) {
            return "Right away, sir. She certainly isn't sophisticated enough for that.";
        } else if (isAlfred) {
            return "At your service. As you wish, naturally.";
        } else {
            return "Right. And with that, I shall retire.";
        }
    }

    // NINJA BONUS
    // See the specs to overload the guestGreeting method
    public String guestGreeting(String name, String welcome) {
        String greeting = String.format("Hello %s, %s", name, welcome);
        return greeting;
    }

    // SENSEI BONUS
    // Write your own AlfredQuote method using any of the String methods you have learned!

    public String respondBeforeBatMan(String conversation) {
        boolean isBatman = conversation.contains("BatMan");

        if (isBatman) {
            return "Alexie and Alfred are taking a holiday. I will help you.";
        } else {
            return "We are not here.";
        }
    }
}
