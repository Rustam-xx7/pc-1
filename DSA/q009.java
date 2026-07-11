import java.util.Arrays;

public class q009 {

    static double getAvg(int[] arr) { // O(n)
        double sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return (double) sum / arr.length;
    }

    static int[] getmultiply(int[] arr) { // O(n)
        int size = arr.length;
        int newArr[] = new int[size];
        for (int i = 0; i < arr.length; i++) {
            newArr[i] = arr[i] * 10;
        }

        return newArr;
    }

    // Linear Search
    static boolean getElement(int[] arr, int target) { // O(n)
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return true;
            }
        }
        return false;
    }

    static int getMax(int[] arr) { // O(n)
        int max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }

    static int[] getpnSum(int[] arr) { // O(n)
        int posSum = 0;
        int negSum = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                posSum += arr[i];
            } else {
                negSum += arr[i];
            }
        }
        int[] ans = { posSum, negSum };
        return ans;
    }

    static int getUnsortedElement(int[] arr) {
        for (int i = 0; i + 1 < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                return arr[i + 1];
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4, 5, 2, 21, 23 };
        System.out.println(getAvg(arr));
        System.out.println(Arrays.toString(getmultiply(arr)));
        System.out.println(getElement(arr, 3));
        System.out.println(getMax(arr));
        System.out.println(Arrays.toString(getpnSum(arr)));
        System.out.println(getUnsortedElement(arr));
    }
}
