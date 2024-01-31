abstract class  Vehicle implements ShowRoom{
    private String brand;

    // Constructor

    public  Vehicle(String brand){
        this.brand =brand;
    }
    public void displayinfo(){
        System.out.println("brand : "+ brand);
    }
}