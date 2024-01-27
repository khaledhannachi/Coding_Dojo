
public class Device {

private int battery;

	
	public Device() {
	}
	
	public Device(int battery) {
	
		this.battery = battery;

	}

	public int getBattery() {
		return battery;
	}

	public void setBattery(int battery) {
		this.battery = battery;
	}
	
public String display () {
	return String.format("the battery ramaining is %s" , this.getBattery());
}
	
}
