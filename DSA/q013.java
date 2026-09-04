public class q013 {

    // Binary Search

    static int binarySearch(int[] arr, int target) {
        int start = 0;
        int end = arr.length - 1;

        // loop for starting
        while (start <= end) {
            int mid = (start + end) / 2;
            if (arr[mid] == target) {
                return mid;
            } else {
                if (target > arr[mid]) {
                    start = mid + 1;
                } else {
                    end = mid - 1;
                }
            }
        }

        return -1;

    }

    // Lower bound

    static int lowerBound(int[] arr, int target) {
        int s = 0;
        int e = arr.length - 1;
        int ans = arr.length;

        while (s <= e) {
            int mid = (e - s) / 2 + s;

            if (arr[mid] >= target) {
                e = mid - 1;
                ans = mid;
            } else {
                s = mid + 1;
            }
        }
        return ans;
    }

    // Upp erBound

    static int upperBound(int[] arr, int target) {
        int s = 0;
        int e = arr.length - 1;
        int ans = arr.length;

        while (s <= e) {
            int mid = (e - s) / 2 + s;

            if (arr[mid] <= target) {
                // move to right;
                s = mid + 1;
            } else {
                // move to left;
                e = mid - 1;
                ans = mid;
            }
        }
        return ans;
    }

    //find the preak of a mountain array

    static int findPeak(int[] arr) {
        if (arr == null || arr.length == 0) {
            return -1;
        }

        int s = 0;
        int e = arr.length - 1;
        int ans = -1;

        while (s < e) {
            int mid = s + (e - s) / 2;

            if (arr[mid] < arr[mid + 1]) {
                // go right
                s = mid + 1; // peak is on the right
            } else {
                // go left including mid  .

                // we found a potential peak, so we store it
                ans = mid;

                e = mid - 1 ;
            }
        }

        return ans;
    }

    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4, 4, 4, 4, 5, 6, 7, 8, 9 };
        int[] arr2 = {0, 2, 5, 3, 1};
        System.out.println("the index of target is : " + binarySearch(arr, 2));
        System.out.println("the lower bound of target is : " + lowerBound(arr, 4));
        System.out.println("the upper bound of target is : " + upperBound(arr, 4));
        
        // find the total number of occurrences of target
        System.out.println("the total number of occurrences of target is : " + (upperBound(arr, 10) - lowerBound(arr, 10)));

        System.out.println("the total number of occurrences of target is : " + (upperBound(arr, 4) - lowerBound(arr, 4)));

        // find the peak of a mountain array
        System.out.println("the peak of the mountain array is : " + findPeak(arr2));
    } 

}