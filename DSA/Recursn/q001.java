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
    static int fib(int n){
        if( n == 0){
            return 0;
        }
        if(n == 1){
            return 1;
        }
        //recursion

        int ans = fib(n-1) + fib(n-2);

        return ans;
    }

    // climbing stairs problem,
    // their are two ways to climb the stairs , either 1 step or 2 step at a time 
    // if i am on Nth step , then hoy (n-1)th step theke esechi oderwise (n-2)th step theke esechi
    // means f(n) = f(n-1) + f(n-2)

    static int climbStairs(int n){
        if(n == 1){
            return 1;
        }
        if(n == 2){
            return 2;
        }

        int ans = climbStairs(n - 1) + climbStairs(n - 2);
        return ans;
    }

    public static void main(String[] args) {
        // power of 2
        System.out.println(powerOf2(5));

        // find the fibonacci number of 4th term
        System.out.println("fibonacci number of 4th term: " + fib(4));

        // find how many possible way to climb 5th step , 
        System.out.println("the number of possible ways to climb 5th step is : " + climbStairs(5));
    }
}