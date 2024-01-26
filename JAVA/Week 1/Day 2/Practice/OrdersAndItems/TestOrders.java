import java.util.ArrayList;
public class TestOrders {
    public static void main(String[] args) {
//? Menu items ====================================
    Item item1 = new Item ("mocha", 6.5);
    Item item2 = new Item ("latte", 4.5);
    Item item3 = new Item ("drip coffee", 7.5);
    Item item4 = new Item ("cappuccino", 6.5);
//? Menu items ====================================
    item1.setName("mocha");
    item2.setName("latte");
    item3.setName("drip coffee");
    item4.setName("cappuccino");
    item1.setPrice(6.5);
    item2.setPrice(4.5);
    item3.setPrice(7.5);
    item4.setPrice(6.5);
//? Order variables -- order1, order2 =============
        Order order1 = new Order("Cindhuri", 0.0, false, new ArrayList<>());  
        Order order2 = new Order("Jimmy", 0.0, true, new ArrayList<>());
        Order order3 = new Order("Noah", 0.0, false, new ArrayList<>());
        Order order4 = new Order("Sam", 0.0, true, new ArrayList<>());

// ? Order 2 =======================================
       order2.setItems(item1);
       order2.setTotal(item1.getPrice());

// ? Order 3 ======================================
        order3.setItems(item4);
        order3.setTotal(item4.getPrice());
// ? Order 4 ======================================
        order4.setItems(item4);
        order4.setTotal(item4.getPrice());
// ? Order 4 ======================================
        order4.setItems(item4);
        order4.setItems(item4);
        order4.setTotal(item4.getPrice()*2);
// ? Order 1 ======================================
        order1.setReady(true);
// ? Order 2 ======================================
        order2.setReady(true);

//? Test order 1 ==================================
        System.out.printf("Name: %s\n", order1.getName());
        System.out.printf("Total: %s\n", order1.getTotal());
        System.out.printf("Ready: %s\n", order1.getReady());
        System.out.printf("Items: %s\n", order1.getItems());
//? Test order 2 ==================================
        System.out.printf("Name: %s\n", order2.getName());
        System.out.printf("Total: %s\n", order2.getTotal());
        System.out.printf("Ready: %s\n", order2.getReady());
        System.out.printf("Items: %s\n", order2.getItems());
//? Test order 3 ==================================
        System.out.printf("Name: %s\n", order3.getName());
        System.out.printf("Total: %s\n", order3.getTotal());
        System.out.printf("Ready: %s\n", order3.getReady());
        System.out.printf("Items: %s\n", order3.getItems());
//? Test order 4 ==================================
        System.out.printf("Name: %s\n", order4.getName());
        System.out.printf("Total: %s\n", order4.getTotal());
        System.out.printf("Ready: %s\n", order4.getReady());
        System.out.printf("Items: %s\n", order4.getItems());
    }
}
