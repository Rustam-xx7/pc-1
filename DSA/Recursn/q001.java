//RECURSION

package Recursn;

public class q001 {

    // find the power of 2

    static int powerOf2(int n) {
        if (n == 0) {
            return 1;
        }

        return 2 * powerOf2(n - 1);
    }

    // FIBONACCI SERIES
    // f(n) = f(n-1) + f(n-2)
    static int fib(int n) {
        if (n == 0) {
            return 0;
        }
        if (n == 1) {
            return 1;
        }
        // recursion

        int ans = fib(n - 1) + fib(n - 2);

        return ans;
    }

    // climbing stairs problem,
    // their are two ways to climb the stairs , either 1 step or 2 step at a time
    // if i am on Nth step , then hoy (n-1)th step theke esechi oderwise (n-2)th
    // step theke esechi
    // means f(n) = f(n-1) + f(n-2)

    static int climbStairs(int n) {
        if (n == 1) {
            return 1;
        }
        if (n == 2) {
            return 2;
        }

        int ans = climbStairs(n - 1) + climbStairs(n - 2);
        return ans;
    }

    static void print(int arr[], int i) {
        if (i >= arr.length) {
            return;
        }
        print(arr, (i + 1));
        System.out.println(arr[i] + " ");
    }

    // find the max eliment in an array with recurstion
    static void findMax(int arr[], int i, int max) {
        // base case
        if (i >= arr.length) {
            System.out.println("The max eliment is : " + max);
            return;
        }

        // processing
        if (arr[i] > max) {
            max = arr[i];
        }

        // rc
        findMax(arr, i + 1, max);
    }

    // linear search on a array by recursion
    static void linearSearch(int[] arr, int i, int target) {
        // Base case
        if (i >= arr.length) {
            System.out.println("Ther target is not present in the array.");
            return;
        }

        // Process
        if (arr[i] == target) {
            System.out.println("Ther integer of the " + target + " is : " + i);
            return;
        }

        // rc
        linearSearch(arr, i + 1, target);
    }

    // Print the digits with the help of recursion
    static void printDigits(int n) {
        // base case
        if (n == 0) {
            System.out.println("");
            return;
        }

        // RC for n

        // devide by 10 korle last digit remove hoye jabe
        printDigits(n / 10);

        // Process

        // %10 korle last digit return pabo,
        int digit = n % 10;
        System.out.println(digit  + " ");
    }

    // Binary search using recursion
    static int binarySearch(int[] arr, int s, int e, int target) {
        // Base case
        if (s > e) {
            return -1 ;
        }

        // process
        int mid = s + (e - s) / 2;

        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] > target) {
            // move left
            e = mid - 1;
        } else {
            s = mid + 1;
        }

        // RC
        int ans = binarySearch(arr, s, e, target);

        return ans;
    }

    public static void main(String[] args) {
        // power of 2
        System.out.println(powerOf2(5));

        // find the fibonacci number of 4th term
        System.out.println("fibonacci number of 4th term: " + fib(4));

        // find how many possible way to climb 5th step ,
        System.out.println("the number of possible ways to climb 5th step is : " + climbStairs(5));

        // Print an array with the help of recursion
        int[] arr = { 1, 2, 3, 4, 5, 6, 7 };
        // print(arr, 0);

        // find max eliment with recursion
        int[] arr2 = { 1, 4, 2, 5, 8, 3, 6, 7 };
        int maxi = Integer.MIN_VALUE;
        findMax(arr2, 0, maxi);

        // Linear Search by Recursion
        linearSearch(arr2, 0, 9);

        // Print the digits using recursion
        printDigits(420);

        // Binary Search using recursion
        int[] arr3 = { 10, 20, 30, 40, 50, 6, 70, 80, 90 };

        System.out.println("The index of the 40 is : " + binarySearch(arr3, 0, (arr3.length - 1), 40));
    }
}