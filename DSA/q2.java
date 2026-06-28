public class q2 {
    public static void main(String[] args) {
        Student s = new Student("John", 20, "Computer Science");
        s.showDetails();
        s.study();
    }
}

class Person {
    String name;
    int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void showDetails() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}

class Student extends Person {
    String course;

    Student(String name, int age, String course) {
        super(name, age);
        this.course = course;
    }

    void study() {
        System.out.println(name + " is studying " + course);
    }

    @Override
    void showDetails() {
        super.showDetails();
        System.out.println("Course: " + course);
    }
}