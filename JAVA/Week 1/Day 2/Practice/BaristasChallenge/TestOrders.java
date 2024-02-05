import java.util.ArrayList;
public class TestOrders {
    public static void main(String[] args) {
//? Menu items ====================================
    Item item1 = new Item ("mocha", 6.5);
    Item item2 = new Item ("latte", 4.5);
    Item item3 = new Item ("drip coffee", 7.5);
    Item item4 = new Item ("cappuccino", 6.5);

//? orders =============
        Order order1 = new Order();  
        Order order2 = new Order();
        Order order3 = new Order("Noah");
        Order order4 = new Order("Sam");
        Order order5 = new Order("khal");

// ? Order 2 =======================================
order2.addItem(item1);
order2.addItem(item1);
order1.addItem(item2);
order1.addItem(item2);
order3.addItem(item4);
order3.addItem(item2);
order4.addItem(item1);
order4.addItem(item2);
order5.addItem(item3);
order5.addItem(item4);

 System.out.println(order5.getStatusMessage());
        order5.setReady(true);
        System.out.println(order5.getStatusMessage());

        // Test order total
        System.out.println(order5.getOrderTotal());
        order5.display();
    }
}
