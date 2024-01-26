import java.util.ArrayList;
public class CafeUtil {

    public int getStreakGoal(){
        int sum =0;
        int [] myArray ={1,2,3,4,5,6,7,8,9,10};
        for(int i = 0; i<myArray.length; i++){
        sum += myArray[i];

    }
    return sum;
}
    public double getOrderTotal(double[] prices){
        double total = 0.0;
        for(int i = 0; i<prices.length; i++){
        total += prices[i];
    }
    return total;
    }
    public void displayMenu(ArrayList<String> menuItems){
        for(int i = 0; i<menuItems.size(); i++){
    System.out.println(i +" "+ menuItems.get(i));
    }
    }
    public void addCustomer(ArrayList<String> customers){
    System.out.println("Please enter your name:");
    String username = System.console().readLine();
    System.out.println("Hello,"+ username + "!");
    System.out.println("There are "+ customers.size() +" people in front of you "+ username + " !");
    customers.add(username); // to add an item to an ArrayList
}
}

