import java.util.Set;
import java.util.HashMap;

public class Songs {
public static void main(String[] args){
HashMap<String, String> band = new HashMap<String, String>();
band.put("Smooth Criminal","As he came into the window");
band.put("Thriller","It's close to midnight And something evil's lurking in the dark Michael");
band.put("Human Nature","Looking out across the nighttime The city winks a sleepless eye");
band.put("Black or White","I took my baby on a Saturday bang Boy, is that girl with you?");
Set<String> keys = band.keySet();
String oneSong = band.get("Human Nature");
System.out.println(oneSong);
for(String key : keys){
    System.out.println(key + " : " + band.get(key));

}
}

}