public class Student implements Comparable<Student> {
    public String name;
    public int age;
    public int weight;

    public int compareTo(Student other) { // this method is to describe the comparison logic
        // current object(this) and other object(other) are compared based on age

        if (this.age == other.age) {
            return this.name.compareTo(other.name); // if age is same then compare based on name
        }
        return this.age - other.age; // ascending order based on age
                                     // this.age > other.age = +ve value
                                     // this.age < other.age = -ve value
                                     // this.age == other.age = 0
                                     // value kmm priority jiyada .
    }

    public String toString() {
        return "Student{name='" + name + "', age=" + age + ", weight=" + weight + "}" + "\n";
    }

    public Student(String name, int age, int weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public int getWeight() {
        return weight;
    }

    public void setname(String name) {
        this.name = name;
    }

    public void setage(int age) {
        this.age = age;
    }

    public void setweight(int weight) {
        this.weight = weight;
    }
}
