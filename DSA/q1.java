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

    public static void main(String[] args) {
        int n = 12345;
        System.out.println(countDigits(n));
        System.out.println(sumOfDigits(n));
        System.out.println(reverceNumber(n));

    }
}
