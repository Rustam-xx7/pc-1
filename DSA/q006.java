// JAVA COLLECTIONS FRAMEWORK


import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.PriorityQueue;
import java.util.Queue;
import java.util.Set;
import java.util.Stack;
import java.util.Collection;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.Collections;
import java.util.Deque;
import java.util.HashSet;
import java.util.HashMap;

public class q006 {
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
        System.out.println("Stack searching 10: " + st.search(10)); // stack search from top . and give counting from 1
                                                                    // from top .

        System.out.println("");
        System.out.println("");

        // Queue

        Queue<Integer> queue = new LinkedList<>();
        queue.add(1);
        queue.add(12);
        queue.offer(23); // for better error handling we will use offer instead of add method .
        System.out.println("Queue: " + queue);

        System.out.println("Removed element: " + queue.poll());
        System.out.println("Queue after removing: " + queue);
        System.out.println("Head of the queue: " + queue.peek());

        // Deque

        Deque<Integer> q2 = new ArrayDeque<>();
        q2.offer(2);
        q2.offerFirst(11);
        q2.offerLast(40);
        System.out.println("Deque: " + q2);
        System.out.println("Removed first element: " + q2.pollFirst());
        System.out.println("Size of Deque: " + q2.size());

        // PriorityQueue
        PriorityQueue<Integer> pq = new PriorityQueue<>();

        // Default priority behaviour -> Integers -> less value higher priority -> min
        // heap
        pq.offer(40);
        pq.offer(10);
        pq.offer(30);
        pq.offer(20);
        System.out.println("Priority Queue: " + pq);

        System.out.println("Removed element: " + pq.poll());
        System.out.println("Removed element: " + pq.poll());
        System.out.println("Priority Queue after removing: " + pq);
        System.out.println("Head of the Priority Queue: " + pq.peek());

        // HashSet

        // HashSet -> O(1)
        // LinkedHashSet -> O(n)
        // TreeSet -> BST ->  O(log n)

        Set<Integer> set = new HashSet<>();
        set.add(10);
        set.add(10);
        set.add(20);
        set.add(20);
        set.add(30);
        set.add(30);

        Set<Integer> set2 = new HashSet<>(); // to preserve the order use Linkedhashset . for sorted order use Treeset.
        set2.add(100);
        set2.add(20);
        set2.add(30);
        set2.add(200);

        System.out.println("HashSet: " + set);
        System.out.println("HashSet2: " + set2);
        set.retainAll(set2); // intersection of two sets
        System.out.println("Intersection of HashSet and HashSet2: " + set);
        System.out.println(set.containsAll(set2));


        System.out.println("");
        System.out.println("");

        // Map -> key value pair

        Map<String, String> map = new HashMap<>();// hashmap -> O(1) , linkedhashmap -> O(n) , treemap -> O(log n)

        // Insertion
        map.put("in", "India");
        map.put("us", "United States");
        map.put("uk", "United Kingdom");

        System.out.println("Map: " + map);

        Map<String, String> map2 = new HashMap<>();
        map2.put("br", "Brazil");
        System.out.println("Map2: " + map2);
        map.putAll(map2);
        System.out.println("Map after putAll: " + map);
        // deletion
        map.remove("us");
        System.out.println("Map after removal: " + map);

        Set<String> keys = map.keySet();
        System.out.println("Keys in the map: " + keys);

        Collection<String> values = map.values();
        System.out.println("Values in the map: " + values);

        Set<Map.Entry<String, String>> entries = map.entrySet();
        System.out.println("Entries in the map: " + entries);

        // For iteration
        for (Map.Entry<String, String> entry : map.entrySet()) {
            System.out.println("Key: " + entry.getKey() + ", Value: " + entry.getValue());
        }
    }
}