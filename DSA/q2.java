public class q2 {
    public static void main(String[] args) {
        q2Class S1 = new q2Class();
        S1.id = 1;
        S1.setAge(22);
        S1.name = "John";
        S1.nos = 5;
        

        // Parameterized Constructor
        q2Class S2 = new q2Class(2, "Alice", 20, 6 , " lucy ");
        System.out.println("Student ID: " + S2.id);
        System.out.println("Student Age: " + S2.getAge());
        System.out.println("Student Name: " + S2.name);
        System.out.println("Number of Subjects: " + S2.nos);
        S2.study();
        S2.sleep(); 

        // Copy Constructor
        // q2Class S3 = new q2Class(S2);
        // System.out.println("Student ID: " + S3.id);
        // System.out.println("Student Age: " + S3.age);
        // System.out.println("Student Name: " + S3.name);
        // System.out.println("Number of Subjects: " + S3.nos);
        // S3.study();
        // S3.sleep();
    }
}