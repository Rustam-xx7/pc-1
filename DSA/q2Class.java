public class q2Class {
    // Attributes
    public int id;
    public String name;
    public int age;
    public int nos;

    // Default Constructor
    public q2Class() {
        System.out.println("Default Constructor called.");
    }

    // Parameterized Constructor
    public q2Class(int id, String name, int age, int nos) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.nos = nos;
        System.out.println("Parameterized Constructor called.");
    }

    // Copy Constructor
    public q2Class(q2Class otherObj) {
        this.id = otherObj.id;
        this.name = otherObj.name;
        this.age = otherObj.age;
        this.nos = otherObj.nos;
        System.out.println("Copy Constructor called.");
    }

    // Methods
    public void study() {
        System.out.println(name + " Student is studying.");
    }

    public void sleep() {  
        System.out.println(name + " Student is sleeping.");
    }
}
