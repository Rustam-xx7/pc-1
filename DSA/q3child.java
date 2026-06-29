public class q3child extends q3class { // child class
    public int noOfDoors;
    public String color;

    // parameterized constructor
    q3child(String name, String model, int noOfTyers, int noOfDoors, String color) {
        super(name, model, noOfTyers);
        this.noOfDoors = noOfDoors;
        this.color = color;
    }

    public void startAc() {
        System.out.println("AC started of " + name + " : " + model + " !");
    }
    
}
