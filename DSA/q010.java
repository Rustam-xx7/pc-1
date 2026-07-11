import java.util.HashMap;

public class q010 {

    public static void getReverse(int[] arr){ // O(n)
        int i =0;
        int j = arr.length - 1 ;
        
        while(i <= j){
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

    public static void rightShift(int[] arr){
        int last = arr[arr.length - 1];
        for(int i = arr.length - 1; i > 0; i--){
            arr[i] = arr[i - 1];
        }
        arr[0] = last;
        for (int k : arr) {
            System.out.print(k + " ");
        }
    }

    public static void rightShiftByK(int[] arr, int k){
        k = k % arr.length; // In case k is greater than array length
        int[] temp = new int[k];
        
        // store last k elements in temp
        for(int i=0; i < k; i++){
            temp[i] = arr[arr.length - k + i];
        }
        // shift remaining elements to the right
        for(int i = arr.length - k - 1; i >= 0; i--){
            arr[i + k] = arr[i];
        }
        // place the elements from temp at the beginning
        for(int i=0; i < k; i++){
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

    public static void main(String[] args) {
        int[] arr = { 1, 4, 3, 2, 5, 2, 3 , 4, 2 ,2 };
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
    }
}