public class q8 {
    public static void main(String[] args) {

        // Bitwise operators , always in binary form .

        int a = 5;
        int b = 6;
        System.out.println(a & b);
        System.out.println(a | b);
        System.out.println(a ^ b);
        System.out.println(~a);
        System.out.println(a << 1);

        // to check even or odd .
        int n = 5; // [0101]
        if ((n & 1) == 0) {
            System.out.println("Even");
        } else {
            System.out.println("Odd");
        }

        // Power of 2 check 
        // i have to calculate number of 1 in binery , if no of 1 is
        // 1 then its power of 2 else not .

        // n & (n-1) == 0 also can be used to check power of 2
        int n1 = 18; // [10010]
        int count = 0;
        while (n1 != 0) {
            if ((n1 & 1) == 1) {
                count++;

            }
            n1 = n1 >> 1;
        }
        System.out.println(count);
        if (count == 1) {
            System.out.println("Power of 2");
        } else {
            System.out.println("Not a power of 2");
        }

        // Swap two numbers without using third variable
        int x = 5;
        int y = 6;
        x = x ^ y;
        y = x ^ y;
        x = x ^ y;
        System.out.println(x + " " + y);


        // to remove last set bit of a number
        int n2 = 12; // [1100]
        int ans = n2 & (n2 - 1);
        System.out.println(ans);

        // for last set bit of a number
        int n3 = 12; // [1100]
        int ans2 = n3 & (-n3);
        System.out.println(ans2);
    }
}