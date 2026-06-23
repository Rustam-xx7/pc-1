// Count the number of digits in an integer
// n%10 gives the last digit of the number
// n/10 removes the last digit of the number

public class q1 {

    static int countDigits(int n) {
        // by /10 we can remove the last digit .
        int count = 0;
        while (n != 0) {
            n = n / 10;
            count++;
        }
        return count;

    }

    static int sumOfDigits(int n) {
        int sum = 0;
        while (n != 0) {
            sum += n % 10;
            n = n / 10;
        }
        return sum;
    }

    static int reverceNumber(int n) {
        int rev = 0;
        while (n != 0) {
            rev = rev * 10 + n % 10;
            n = n / 10;
        }
        return rev;
    }

    static boolean isPalindrome(int n) {
        return n == reverceNumber(n);
    }

    static boolean isPrime(int n) {
        if (n <= 1) {
            return false;
        }
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        int n = 13;
        System.out.println(n + " Number of digits: " + countDigits(n));
        System.out.println(n + " Sum of digits: " + sumOfDigits(n));
        System.out.println(n + " Reversed: " + reverceNumber(n));
        System.out.println(n + " Is a palindrome: " + isPalindrome(n));
        System.out.println(n + " Is a prime number: " + isPrime(n));

    }
}
