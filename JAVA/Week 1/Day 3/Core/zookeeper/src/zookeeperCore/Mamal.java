package zookeeperCore;

public class Mamal {
	// MEMBER VARIABLES

	private String name;
	private int energy;
	
	// CONSTRUCTOR (zero-args)

	public Mamal() {
	
	}
	
	// CONSTRUCTOR (All-args)
	public Mamal(String name, int energy) {
		super();
		this.name = name;
		this.energy = 100;
	}
	
	// ==== METHODS ====

public void displayEnergy () {
	System.out.println(String.format("the %s Energy is %s ",this.getName(), this.getEnergy()));
}


	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getEnergy() {
		return energy;
	}
	public void setEnergy(int energy) {
		this.energy = energy;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
