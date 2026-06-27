public class q2Class {
    // Attributes
    public int id;
    public String name;
    public int nos;
    private int age;
    private String gf;

    public int getAge(){
        return this.age;
    }

    public void setAge(int n){
        this.age = n ;
    }

    // Default Constructor
    public q2Class() {
        System.out.println("Default Constructor called.");
    }

    // Parameterized Constructor
    public q2Class(int id, String name, int age, int nos ,String gf ) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.nos = nos;
        this.gf = gf;
        System.out.println("Parameterized Constructor called.");
    }

    // Copy Constructor
    public q2Class(q2Class otherObj) {
        this.id = otherObj.id;
        this.name = otherObj.name;
        this.age = otherObj.age;
        this.nos = otherObj.nos;
        this.gf = otherObj.gf;
        System.out.println("Copy Constructor called.");
    }

    // Methods
    public void study() {
        System.out.println(name + " Student is studying.");
    }

    public void sleep() {  
        System.out.println(name + " Student is sleeping.");
    }

    private void gfChating(){
        System.out.println(name + " is chatting with " + gf);
    }
}
