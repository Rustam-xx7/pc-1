import java.util.HashMap;

public class q010 {

    public static void getReverse(int[] arr) { // O(n)
        int i = 0;
        int j = arr.length - 1;

        while (i <= j) {
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
        for (int k : arr) {
            System.out.print(k + " ");
        }
    }

    public static void rightShift(int[] arr) {
        int last = arr[arr.length - 1];
        for (int i = arr.length - 1; i > 0; i--) {
            arr[i] = arr[i - 1];
        }
        arr[0] = last;
        for (int k : arr) {
            System.out.print(k + " ");
        }
    }

    public static void rightShiftByK(int[] arr, int k) {
        k = k % arr.length; // In case k is greater than array length
        int[] temp = new int[k];

        // store last k elements in temp
        for (int i = 0; i < k; i++) {
            temp[i] = arr[arr.length - k + i];
        }
        // shift remaining elements to the right
        for (int i = arr.length - k - 1; i >= 0; i--) {
            arr[i + k] = arr[i];
        }
        // place the elements from temp at the beginning
        for (int i = 0; i < k; i++) {
            arr[i] = temp[i];
        }
        for (int l : arr) {
            System.out.print(l + " ");
        }
    }

    static int[] getMod(int[] arr) {
        HashMap<Integer, Integer> freq = new HashMap<>();

        for (int num : arr) {
            freq.put(num, freq.getOrDefault(num, 0) + 1);
        }

        int maxFreq = -1;
        int mod = -1;

        for (int key : freq.keySet()) {
            int currentFreq = freq.get(key);
            if (currentFreq > maxFreq) {
                maxFreq = currentFreq;
                mod = key;
            }
        }

        int lowestFreq = maxFreq;
        for (int key : freq.keySet()) {
            int currentFreq = freq.get(key);
            if (currentFreq < lowestFreq) {
                lowestFreq = currentFreq;
            }
        }

        return new int[] { mod, lowestFreq, maxFreq };
    }

    static int[] getSorted(int[] arr) { // O(n^2)
        int n = arr.length - 1;
        for (int i = n; i > 0; i--) {
            for (int j = 0; j <= i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }

    static int[] getSorted01(int[] arr) { // O(n) // this approach is better for 0 1 array sorting .
        int i = 0;
        int j = arr.length - 1;
        while (i <= j) {
            if (arr[i] > arr[j]) {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            if (arr[i] == 0) {
                i++;
            }
            if (arr[j] == 1) {
                j--;
            }
        }
        return arr;
    }

    static int getMissing(int[] arr) {
        int xorSum = 0;
        // xor with all the array elements, so that the duplicate elements cancel each
        // other out
        for (int num : arr) {
            xorSum ^= num;
        }
        // xor with all the numbers from 0 to n, where n is the length of the array
        for (int i = 0; i <= arr.length; i++) {
            xorSum ^= i;
        }
        return xorSum;
    }

    static int getUnique(int[] arr) {
        int xorSum = 0;
        for (int num : arr) {
            xorSum = xorSum ^ num;
        }
        return xorSum;
    }

    public static void main(String[] args) {
        int[] arr = { 1, 4, 3, 2, 5, 2, 3, 4, 2, 2, 5, 6, 9, 8, 0 };
        int[] arr2 = { 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0 };
        getReverse(arr);
        System.out.println();
        rightShift(arr);
        System.out.println();
        rightShiftByK(arr, 3);
        System.out.println();
        int[] result = getMod(arr);
        System.out.println("Mode: " + result[0]);
        System.out.println("Lowest Freq: " + result[1]);
        System.out.println("Max Freq: " + result[2]);
        System.out.println("Sorted Array: ");
        int[] sorted = getSorted(arr);
        for (int num : sorted) {
            System.out.print(num + " ");
        }
        System.out.println();
        int[] sorted01 = getSorted01(arr2);
        System.out.println("Sorted 01 Array: ");
        for (int num : sorted01) {
            System.out.print(num + " ");
        }

        System.out.println();
        int[] arr3 = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 10 };
        System.out.println("Missing Number: " + getMissing(arr3));

        int[] arr4 = { 1, 2, 3, 4, 6, 7, 8, 9, 9, 1, 3, 2, 4, 5, 6, 7, 8 };
        System.out.println("Unique Number: " + getUnique(arr4));
    }
}