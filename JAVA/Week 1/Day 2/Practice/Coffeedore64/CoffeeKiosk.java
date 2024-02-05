import java.util.ArrayList;
class CoffeeKiosk {

private ArrayList<Item> menu;
private ArrayList<Order> orders;

// 0 args Constructor
    public CoffeeKiosk() {
        this.menu = new ArrayList<Item>();
        this.orders = new ArrayList<Order>();
        }

    public void addMenuItem(String name, double price){
        Item newItem = new Item(name, price);
        menu.add(newItem);
        newItem.setIndex(menu.indexOf(newItem));
    }

    public void displayMenu(){
        for(Item item : menu){
            System.out.println(item.getIndex()+" "+item.getName()+" -- $"+item.getPrice());
        }
    }
    public void newOrder() {
        
        System.out.println("Please enter customer name for new order:");
        String name = System.console().readLine();
        Order order = new Order(name);
        displayMenu();
        System.out.println("Please enter a menu item index or q to quit:");
        String userInput = System.console().readLine();
        
        while(!userInput.equals("q")) {
            
            try{
                order.addItem(menu.get(Integer.parseInt(userInput)));
            }catch(IndexOutOfBoundsException index){
                System.out.println("Invalid selection");
            }catch(NumberFormatException number){
                System.out.println("Invalid selection");
            }
            System.out.println("Please enter a menu item index or q to quit:");
            userInput = System.console().readLine();
        }
         System.out.println("Thank you for your order" + name);
        order.display();
        
    }
        
      

    }





