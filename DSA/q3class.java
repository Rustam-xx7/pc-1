public class q3class {
    public String name;
    public String model;
    public int noOfTyers;


    // parameterized constructor
    public q3class(String name, String model, int noOfTyers) {
        this.name = name;
        this.model = model;
        this.noOfTyers = noOfTyers;
    }

    public void startEng(){
        System.out.println("Engine started of" + name + " : " + model + " !");
    }

    public void stopEng(){
        System.out.println("Engine stopped of " + name + " : " + model + " !");
    }
}
