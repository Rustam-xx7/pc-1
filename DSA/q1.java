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

    static int getGCD(int a, int b){
        //gcd(a,b) = gcd(b, a%b)
        while ( b != 0 ) {
            int temp = b;
            b = a%b ;
            a = temp;
        }
        return a;
    }

    static int getLCM(int a, int b){
        //lcm(a,b) = (a*b)/gcd(a,b)
        return (a*b)/getGCD(a,b);
    }

    static boolean isArmstrong(int n ){
        int sum =0;
        int temp = n ;
        while ( temp !=0){
            int digit = temp%10;
            temp = temp/10;
            sum += digit*digit*digit;
        }
        if ( sum == n){
            return true;
        }
        return false;
    }

    static boolean isPerfectNumber(int n){
        // num = sum of divisor
        int sum = 1; // direct 1 se start hua to 1 * n se n cancle ho gaya 
        for ( int i = 2 ; i*i <=n ; i++ ){
            if( n % i == 0){ // i want factors only , means divisor by i 
                // first Factor is i
                // second factor is num/i
                sum = sum + i + n/i ;

            }
        }
        if ( sum == n){
            return true;
        } else {
            return false ;
        }
    }

    public static void main(String[] args) {
        int n = 6;
        int m = 18;
        System.out.println(n + " Number of digits: " + countDigits(n));
        System.out.println(n + " Sum of digits: " + sumOfDigits(n));
        System.out.println(n + " Reversed: " + reverceNumber(n));
        System.out.println(n + " Is a palindrome: " + isPalindrome(n));
        System.out.println(n + " Is a prime number: " + isPrime(n));
        System.out.println(n + " Is an Armstrong number: " + isArmstrong(n));
        System.out.println(n + " Is an Perfect number: " + isPerfectNumber(n));
        System.out.println(n + " and " + m + " GCD: " + getGCD(n, m));
        System.out.println(n + " and " + m + " LCM: " + getLCM(n, m));
        for ( int i =1 ; i <= 10 ; i++){
            if(isPrime(i)){
                System.out.print(i + " ");
            }
        }
    }
}
