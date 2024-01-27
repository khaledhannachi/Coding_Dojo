
public class Phone extends Device {

	public Phone() {
	}

	public Phone(int battery) {
		super(battery);
	}
	
public void call() {
	this.setBattery(this.getBattery()-5);	
}	
public void game() {
	this.setBattery(this.getBattery()-20);	
}	
public void charging() {
	this.setBattery(this.getBattery()+50);	
}	

}
