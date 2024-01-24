
public class CafeJava {
    public static void main (String[] args){
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = " Your total is $";

        // Menu variables (add yours below)
        // Following the same camelcase naming convention, create drink price variables for drip coffee, latte, and cappuccino.
        double mochaPrice = 6.5;
        double dripCofee = 7.5;
        double latte = 4.5;
        double cappuccino = 5.5;
        // Customer name variables (add yours below)
        // Create customer variables for Sam, Jimmy, and Noah.
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";
        // Order completions (add yours below)
        // Create the order status flag (true/false) for each customer.

        boolean isReadyorder1 = true;
        boolean isReadyorder2 = false;
        boolean isReadyorder3 = true;
        boolean isReadyorder4 = true;

        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        System.out.println(generalGreeting + customer1); // Displays "Welcome to Cafe Java, Cindhuri"

        // Cindhuri ordered a coffee. Based on her order status, print the correct status message to the console.
        System.out.println(customer1 + pendingMessage); 
        // Noah ordered a cappuccino. Use an if statement to check the status of his order and print the correct status message. 
        // If it is ready, also print the message to display the total. Note: Outcomes may be different depending on what you assigned as the status.
            if(isReadyorder4) {
                System.out.println(customer4 + pendingMessage );
            }
            else {System.out.println(customer4 + readyMessage + displayTotalMessage + cappuccino );
            }
        // Sam just ordered 2 lattes, print the message to display their total. Next, use an if statement to print the appropriate order status message. 
        // Change the isReady flag value from true to false or vice versa in order to test your control logic (if-statement).
        System.out.println(customer2 + displayTotalMessage + latte*2);
            if(isReadyorder2) {
                System.out.println(customer2 + pendingMessage );
            }
            else {System.out.println(customer2 + readyMessage + displayTotalMessage + latte*2);
            }
        // Jimmy just realized he was charged for a coffee but had ordered a latte. Print the total message with the new calculated total (what he owes) 
        // to make up the difference.
        System.out.println(displayTotalMessage +(dripCofee-latte));

        // Try changing the price values for each drink and isReady flags (booleans), to test if all of your logic works, even when prices and statuses are changed.
        
        // Welcome to cafe Java, Cindhuri
        // Cindhuri, your order will be ready shortly
        // Noah, your order will be ready shortly
        // Sam Your total is $9.0
        // Sam, your order is ready Your total is $9.0
        //  Your total is $3.0



    }
}

