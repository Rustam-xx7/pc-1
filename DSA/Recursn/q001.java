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

    public static void main(String[] args) {
        // power of 2
        System.out.println(powerOf2(5));

        // find the fibonacci number of 4th term
        System.out.println("fibonacci number of 4th term: " + fib(4));
    }
}