//polymorphism

public class q004 {
    public static void main(String[] args) {
        q004class2 c = new q004class2();
        c.draw();
        doDrawing(c); // Up casting . 
    }

    public static void doDrawing(q004class s) { // dynamic Method Dispatch , because we are passing the object of child class to the parent class reference variable.
        s.draw(); // polymorphic call . / UP casting
    }

}
