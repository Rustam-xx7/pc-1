# Java Syntax Reference — JS Developer Edition
> Crisp, complete, basic → intermediate → advanced. Built for quick revision.

---

## 1. Hello World & Program Structure

```java

import java.util.* 

public class Main {                   // filename MUST match class name: Main.java
    public static void main(String[] args) {   // entry point (like index.js)
        System.out.println("Hello World");     // print + newline
        System.out.print("No newline");        // print, no newline
        System.out.printf("Hi %s, age %d%n", "Ravi", 21); // formatted print

        // for taking something as input 
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter a name : ");
        String name = scan.nextLine();
        System.out.println("Hello, " + name + "!");
    }
}
```

> **JS vs Java:** No `console.log` — use `System.out.println`. Every program needs a `main` method inside a class.

---

## 2. Variables & Data Types

Java is **statically typed** — you declare the type explicitly.

```java
// Primitive types
int age = 25;
long bigNum = 10000000000L;      // L suffix for long
double price = 9.99;
float temp = 36.6f;              // f suffix for float
char grade = 'A';                // single quotes only
boolean isActive = true;
byte small = 100;
short medium = 30000;

// Reference types
String name = "Ravi";            // String is a class, not primitive
int[] nums = {1, 2, 3};          // array

// var (type inference — Java 10+)
var city = "Kanpur";             // like JS let, but still statically typed
```

### Type Casting
```java
int x = (int) 9.99;        // explicit cast: x = 9  (like Math.trunc)
double d = (double) 5 / 2; // d = 2.5  (widening is automatic)
String s = String.valueOf(42);   // int → String
int n = Integer.parseInt("42");  // String → int
```

---

## 3. Operators

```java
// Arithmetic — same as JS
+  -  *  /  %  ++  --

// Integer division (no decimals!)
int result = 7 / 2;   // = 3, NOT 3.5

// Comparison — same as JS (but no === in Java)
==  !=  >  <  >=  <=

// Logical
&&  ||  !

// String comparison — use .equals(), NOT ==
"abc".equals("abc")          // true ✅
"abc" == "abc"               // unreliable ❌

// Ternary
int max = (a > b) ? a : b;
```

---

## 4. Strings

```java
String s = "Hello";

s.length()                   // 5
s.charAt(0)                  // 'H'
s.toUpperCase()              // "HELLO"
s.toLowerCase()              // "hello"
s.trim()                     // remove leading/trailing spaces
s.contains("ell")            // true
s.startsWith("He")           // true
s.endsWith("lo")             // true
s.replace("l", "r")          // "Herro"
s.substring(1, 4)            // "ell"  (start inclusive, end exclusive)
s.indexOf("l")               // 2
s.split(", ")                // returns String[]
s.isEmpty()                  // false
s.equals("Hello")            // true

// String concatenation
String full = "Hi " + name;

// StringBuilder — for heavy string building (like array.join in JS)
StringBuilder sb = new StringBuilder();
sb.append("Hello");
sb.append(" World");
String result = sb.toString();   // "Hello World"

// String formatting
String msg = String.format("Name: %s, Age: %d", name, age);
```

---

## 5. Arrays

```java
// Declaration & initialization
int[] nums = new int[5];         // [0,0,0,0,0] — default 0
int[] nums = {10, 20, 30};

// Access
nums[0] = 100;
int len = nums.length;           // .length (NOT .length())

// 2D array
int[][] matrix = new int[3][3];
int[][] grid = {{1,2},{3,4}};

// Loop through
for (int n : nums) {             // enhanced for (like for...of)
    System.out.println(n);
}

// Useful Arrays utility
import java.util.Arrays;
Arrays.sort(nums);
Arrays.fill(nums, 0);
System.out.println(Arrays.toString(nums));   // print array nicely
```

---

## 6. Control Flow

### if / else if / else
```java
if (score >= 90) {
    System.out.println("A");
} else if (score >= 75) {
    System.out.println("B");
} else {
    System.out.println("C");
}
```

### switch
```java
switch (day) {
    case "Mon":
        System.out.println("Monday");
        break;
    case "Tue":
        System.out.println("Tuesday");
        break;
    default:
        System.out.println("Other");
}

// Switch Expression (Java 14+) — cleaner
String result = switch (day) {
    case "Mon" -> "Monday";
    case "Tue" -> "Tuesday";
    default    -> "Other";
};
```

---

## 7. Loops

```java
// for
for (int i = 0; i < 5; i++) { }

// while
while (i < 5) { i++; }

// do-while (runs at least once)
do {
    i++;
} while (i < 5);

// enhanced for (for-each)
for (String item : list) { }

// break & continue — same as JS
```

---

## 8. Methods (Functions)

```java
// Basic method
public static int add(int a, int b) {
    return a + b;
}

// void = no return value
public static void greet(String name) {
    System.out.println("Hi " + name);
}

// Call it
int sum = add(3, 4);
greet("Ravi");

// Overloading — same name, different params
public static int add(int a, int b) { return a + b; }
public static double add(double a, double b) { return a + b; }

// Varargs (like JS rest params)
public static int sum(int... nums) {
    int total = 0;
    for (int n : nums) total += n;
    return total;
}
sum(1, 2, 3, 4);   // works with any number of args
```

---

## 9. OOP — Classes & Objects

```java
// Define a class
public class Person {
    // Fields (instance variables)
    String name;
    int age;

    // Constructor
    public Person(String name, int age) {
        this.name = name;     // 'this' = current object (like JS)
        this.age = age;
    }

    // Method
    public void greet() {
        System.out.println("Hi, I'm " + name);
    }

    // Getter / Setter
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}

// Create object
Person p = new Person("Ravi", 21);
p.greet();
System.out.println(p.getName());
```

---

## 10. Access Modifiers

| Modifier | Same Class | Same Package | Subclass | Everywhere |
|---|---|---|---|---|
| `public` | ✅ | ✅ | ✅ | ✅ |
| `protected` | ✅ | ✅ | ✅ | ❌ |
| (default) | ✅ | ✅ | ❌ | ❌ |
| `private` | ✅ | ❌ | ❌ | ❌ |

```java
private String password;     // only inside this class
public String username;      // accessible everywhere
protected int id;            // accessible in subclasses
```

---

## 11. Static vs Instance

```java
public class Counter {
    static int count = 0;     // shared across ALL objects
    int id;                   // unique per object

    public Counter() {
        count++;
        this.id = count;
    }

    public static int getCount() {   // call via class: Counter.getCount()
        return count;
    }
}
```

> **Rule:** `static` = belongs to the class. Instance = belongs to the object.

---

## 12. Inheritance

```java
// Parent class
public class Animal {
    String name;

    public Animal(String name) { this.name = name; }

    public void speak() { System.out.println("..."); }
}

// Child class
public class Dog extends Animal {     // extends = like JS 'extends'

    public Dog(String name) {
        super(name);                  // call parent constructor
    }

    @Override                         // annotation — overriding parent method
    public void speak() {
        System.out.println(name + " says Woof!");
    }
}

Dog d = new Dog("Bruno");
d.speak();    // "Bruno says Woof!"
```

---

## 13. Abstract Classes & Interfaces

```java
// Abstract class — can't be instantiated directly
abstract class Shape {
    abstract double area();          // must be implemented by child

    public void print() {            // can have concrete methods too
        System.out.println("Area: " + area());
    }
}

class Circle extends Shape {
    double r;
    Circle(double r) { this.r = r; }

    @Override
    double area() { return Math.PI * r * r; }
}

// Interface — like a contract (like TS interface but stricter)
interface Flyable {
    void fly();                      // abstract by default
    default void land() {            // default method (Java 8+)
        System.out.println("Landing...");
    }
}

class Bird extends Animal implements Flyable {
    Bird(String name) { super(name); }

    @Override
    public void fly() { System.out.println(name + " is flying!"); }
}
```

> **Key difference:** A class can `extend` only ONE class, but can `implement` MULTIPLE interfaces.

---

## 14. Collections (like JS Arrays/Maps/Sets)

### ArrayList
```java
import java.util.ArrayList;

ArrayList<String> list = new ArrayList<>();
list.add("Apple");
list.add("Banana");
list.get(0);               // "Apple"
list.set(0, "Mango");      // update
list.remove(0);            // remove by index
list.remove("Banana");     // remove by value
list.size();               // length
list.contains("Mango");    // true
list.isEmpty();

// Loop
for (String item : list) { System.out.println(item); }
```

### HashMap
```java
import java.util.HashMap;

HashMap<String, Integer> map = new HashMap<>();
map.put("age", 21);
map.get("age");             // 21
map.getOrDefault("x", 0);  // 0 if not found
map.containsKey("age");     // true
map.remove("age");
map.size();

// Loop over entries
for (var entry : map.entrySet()) {
    System.out.println(entry.getKey() + " = " + entry.getValue());
}
```

### HashSet
```java
import java.util.HashSet;

HashSet<String> set = new HashSet<>();
set.add("A");
set.add("A");     // duplicate ignored
set.contains("A");   // true
set.remove("A");
set.size();
```

---

## 15. Exception Handling

```java
// try-catch-finally
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Error: " + e.getMessage());
} catch (Exception e) {
    System.out.println("General error");
} finally {
    System.out.println("Always runs");    // like JS finally
}

// Throwing exceptions
public static void checkAge(int age) {
    if (age < 0) throw new IllegalArgumentException("Age can't be negative");
}

// Custom exception
class MyException extends Exception {
    public MyException(String msg) { super(msg); }
}

// throws declaration
public static void riskyMethod() throws MyException {
    throw new MyException("Something went wrong");
}
```

---

## 16. Generics

```java
// Generic method
public static <T> void print(T value) {
    System.out.println(value);
}
print("Hello");
print(42);

// Generic class
public class Box<T> {
    T value;
    Box(T value) { this.value = value; }
    T get() { return value; }
}

Box<String> sBox = new Box<>("Java");
Box<Integer> iBox = new Box<>(100);
```

---

## 17. Lambda & Functional Interfaces (Java 8+)

```java
import java.util.*;

// Lambda = anonymous function (like JS arrow functions)
// Syntax: (params) -> expression  or  (params) -> { body }

List<Integer> nums = Arrays.asList(3, 1, 4, 1, 5, 9);

// Sort with lambda
nums.sort((a, b) -> a - b);

// forEach with lambda
nums.forEach(n -> System.out.println(n));
nums.forEach(System.out::println);    // method reference shorthand

// Runnable interface
Runnable r = () -> System.out.println("Running!");
r.run();

// Comparator
Comparator<String> comp = (a, b) -> a.compareTo(b);
```

---

## 18. Streams (Java 8+)

Streams let you process collections in a functional style (like JS array methods).

```java
import java.util.stream.*;

List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5, 6);

// filter → map → collect  (like JS .filter().map())
List<Integer> result = nums.stream()
    .filter(n -> n % 2 == 0)        // keep even
    .map(n -> n * n)                 // square them
    .collect(Collectors.toList());   // [4, 16, 36]

// reduce (like JS .reduce())
int sum = nums.stream().reduce(0, Integer::sum);

// forEach
nums.stream().forEach(System.out::println);

// count
long count = nums.stream().filter(n -> n > 3).count();

// sorted
List<Integer> sorted = nums.stream().sorted().collect(Collectors.toList());

// anyMatch / allMatch / noneMatch
boolean anyEven = nums.stream().anyMatch(n -> n % 2 == 0);  // true
```

---

## 19. Enums

```java
public enum Day {
    MON, TUE, WED, THU, FRI, SAT, SUN
}

Day today = Day.MON;

// Enum with switch
switch (today) {
    case MON -> System.out.println("Monday");
    case SAT, SUN -> System.out.println("Weekend!");
    default -> System.out.println("Weekday");
}

// Enum with fields
public enum Planet {
    EARTH(5.97e+24, 6.371e6),
    MARS(6.39e+23, 3.389e6);

    double mass, radius;
    Planet(double mass, double radius) {
        this.mass = mass;
        this.radius = radius;
    }
}
```

---

## 20. File I/O (Basics)

```java
import java.io.*;
import java.nio.file.*;

// Write to file
Files.writeString(Path.of("output.txt"), "Hello File!");

// Read from file
String content = Files.readString(Path.of("output.txt"));

// Read all lines
List<String> lines = Files.readAllLines(Path.of("data.txt"));

// Traditional BufferedWriter
try (BufferedWriter bw = new BufferedWriter(new FileWriter("out.txt"))) {
    bw.write("Line 1");
    bw.newLine();
}   // auto-closes (try-with-resources)
```

---

## 21. Record (Java 16+)

Records are immutable data classes — like a TS interface with auto-generated constructor, getters, `equals`, `hashCode`, `toString`.

```java
public record Point(int x, int y) {}

Point p = new Point(3, 4);
p.x();        // 3 (auto-generated getter)
p.y();        // 4
System.out.println(p);   // Point[x=3, y=4]
```

---

## 22. Optional (avoid null checks)

```java
import java.util.Optional;

Optional<String> name = Optional.of("Ravi");
Optional<String> empty = Optional.empty();

name.isPresent();          // true
name.get();                // "Ravi"
empty.orElse("default");   // "default"
name.ifPresent(n -> System.out.println(n));
```

---

## 23. Key Java Conventions (vs JS)

| Feature | JavaScript | Java |
|---|---|---|
| Entry point | Any file | `main()` method |
| Type | Dynamic | Static (declared) |
| `null` check | `=== null` | `== null` or `Objects.isNull()` |
| Print | `console.log()` | `System.out.println()` |
| Array length | `.length` | `.length` (arrays), `.size()` (collections) |
| String compare | `===` | `.equals()` |
| Class file | Optional | Mandatory |
| Semicolons | Optional | **Required** |
| Callbacks | Functions | Lambdas / Functional Interfaces |

---

## 24. Common Imports Cheat Sheet

```java
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Arrays;
import java.util.Collections;
import java.util.Optional;
import java.util.stream.*;

import java.io.*;
import java.nio.file.*;

import java.math.BigDecimal;       // precise decimal math
import java.math.BigInteger;       // huge integers
```

---

## 25. Quick Reference — Math & Utility

```java
Math.abs(-5)           // 5
Math.max(3, 7)         // 7
Math.min(3, 7)         // 3
Math.pow(2, 10)        // 1024.0
Math.sqrt(16)          // 4.0
Math.floor(3.9)        // 3.0
Math.ceil(3.1)         // 4.0
Math.round(3.5)        // 4
Math.random()          // 0.0 to 1.0

// Random int between 0 and 99
int rand = (int)(Math.random() * 100);
```

---

*Save this file. Come back whenever you need a syntax refresher. Happy coding! ☕*
