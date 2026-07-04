import java.util.ArrayList;
import java.util.List;
import java.util.Stack;
import java.util.Collection;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.Collections;

public class q6 {
    public static void main(String[] args) {

        // List or Collection -> interface , we cant create object.
        // but arraylist is a class of that interface.

        List<Integer> list = new ArrayList<>();
        ArrayList<Integer> arr = new ArrayList<>();
        // this have some common methods add , remove , addAll , removeAll , clear ,
        // size , isEmpty , contains , containsAll , equals , toArray
        list.add(14);
        list.add(12);
        list.add(13);
        System.out.println(list);
        list.add(40);
        System.out.println(list);
        list.remove(3);
        System.out.println(list);

        List<Integer> list2 = new ArrayList<>();
        list2.add(200);
        list2.add(100);
        System.out.println(list2);
        list.addAll(list2);
        System.out.println(list);

        // to iterate use Itrator
        Iterator<Integer> it = list.iterator();
        while (it.hasNext()) { // to check next element is present or not
            System.out.println(it.next());
        }

        // sorting
        list.add(5);
        System.out.println(list);
        Collections.sort(list);
        System.out.println("Sorted list: " + list);

        ArrayList<Integer> arr2 = (ArrayList<Integer>) ((ArrayList<Integer>) list).clone(); // List can not be cloned ,
                                                                                            // only arralist can , so
                                                                                            // typecast list to
                                                                                            // arraylist then again
                                                                                            // typecast to arraylist to
                                                                                            // clone it.
        System.out.println("Cloned list: " + arr2);

        ArrayList<Integer> marks = new ArrayList<>();
        marks.ensureCapacity(100);

        // LinkedList
        LinkedList<Integer> linkedList = new LinkedList<>();
        linkedList.add(1);
        linkedList.add(2);
        linkedList.add(3);
        System.out.println("Linked List: " + linkedList); // all methods of ArrayList are also present in LinkedList
                                                          // ,except ensureCapacity and clone method.
        linkedList.add(20);
        linkedList.add(30);
        linkedList.add(20);
        linkedList.add(20);
        System.out.println("Linked List after adding elements: " + linkedList);
        linkedList.remove(2);
        linkedList.remove(2);
        linkedList.remove(2);
        linkedList.remove(2);
        System.out.println("First occurrence of 20: " + linkedList.lastIndexOf(20));
        linkedList.addFirst(22);
        linkedList.addLast(23);
        System.out.println("Linked List after adding first and last elements: " + linkedList);

        System.out.println("");
        System.out.println("");

        Stack<Integer> st = new Stack<>();
        st.push(10);
        st.push(20);
        st.push(30);
        System.out.println("Stack: " + st);
        System.out.println("Popped element: " + st.pop());
        System.out.println("Stack after popping: " + st);
        System.out.println("Top element: " + st.peek());
        System.out.println("Stack searching 12: " + st.search(12));
        System.out.println("Stack searching 10: " + st.search(10)); // stack search from top . and give counting from 1 from top .

    }
}