import java.util.ArrayList;
import java.util.List;
import java.util.Collections;

public class q7 {
    public static void main(String[] args) {
        List<Student> students = new ArrayList<>();
        students.add(new Student("Alice", 20, 60));
        students.add(new Student("Bob", 22, 70));
        students.add(new Student("Bobi", 12, 50));
        students.add(new Student("Boba", 8, 70));
        students.add(new Student("Charlie", 21, 65));

        System.out.println("Students List:" + students);

        Collections.sort(students , (s1, s2) -> { // comparator function .
            if (s1.age == s2.age) {
                return s1.name.compareTo(s2.name);
            }
            return s1.weight - s2.weight;
        });

        System.out.println("Students List (Sorted by Weight):" + students);
    }
}
