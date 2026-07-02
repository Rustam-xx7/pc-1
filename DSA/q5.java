// OLD abstract class model

// abstract class Bird {  // this is an abstract class
//     abstract void fly(); // abstract method , i have to implement this later . 
//     abstract void eat();

// concrete method 
// public void sleep(){
//     System.out.println(" Bird can sleep ");
// }
// }

// class Sparrow extends Bird {
//     void fly() {  // implimentation of abstract method
//         System.out.println(" Sparrow can fly ");
//     }
//     void eat() {
//         System.out.println(" Sparrow can eat ");
//     }
// }

// class Crow extends Bird {
//     void fly() {  // implimentation of abstract method
//         System.out.println(" Crow can fly ");
//     }
//     void eat() {
//         System.out.println(" Crow can eat ");
//     }
// }

// public class q5 {
//     public static void main(String[] args) {

//         Bird b = new Sparrow(); // we can create object of abstract class using child class
//         b.fly();
//         b.eat();

//         b = new Crow();
//         b.fly();
//         b.eat();
//     }
// }

// NEW interface model

interface Bird { // this is an interface
    void fly(); // by default public abstract

    void eat();

    default void sleep() { // default method
        System.out.println(" Bird can sleep ");
    }
}

interface Animal {
    int legs = 2; // by default public static final
    void walk();
}

class Sparrow implements Bird , Animal {

    @Override
    public void fly() { // implementation of abstract method
        System.out.println(" Sparrow can fly ");
    }

    @Override
    public void walk() {
        int a = Animal.legs ;
        System.out.println(" Sparrow can walk with " + a + " legs ");
        System.out.println(" Sparrow can walk ");
    }

    @Override
    public void eat() {
        System.out.println(" Sparrow can eat ");
    }
}

class Crow implements Bird {
    @Override
    public void fly() { // implementation of abstract method
        System.out.println(" Crow can fly ");
    }

    @Override
    public void eat() {
        System.out.println(" Crow can eat ");
    }
}

public class q5 {

    public static void doBirdStuff(Bird b) { // we can pass any bird object here / Polymorphism
        b.fly();
        b.eat();
        b.sleep();
    }

    public static void main(String[] args) {

        doBirdStuff(new Sparrow());
        doBirdStuff(new Crow());
        Sparrow b = new Sparrow();
        b.walk();
    }
}