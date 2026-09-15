// BINARY SEARCH

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

    // find the preak of a mountain array

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
                // go left including mid .

                // we found a potential peak, so we store it
                ans = mid;

                e = mid - 1;
            }
        }

        return ans;
    }

    // Find the pivot index of a rotated sorted array

    static int findPivot(int[] arr) {
        if (arr == null || arr.length == 0) {
            return -1;
        }

        if (arr[0] <= arr[arr.length - 1]) {
            // The array is not rotated, so the pivot index is the last index
            return arr.length - 1;
        }

        int s = 0;
        int e = arr.length - 1;
        int ans = -1;

        while (s <= e) {
            int mid = s + (e - s) / 2;

            if (arr[mid] < arr[arr.length - 1]) {
                // go left
                e = mid - 1;
            } else {
                // go right
                s = mid + 1;
                ans = mid; // store the potential pivot index
            }
        }
        return ans;
    }

    // search in a rotated sorted array
    static int searchInRoatedSortedArray(int[] arr, int target) {
        if (arr == null || arr.length == 0) {
            return -1;
        }

        int pivot = findPivot(arr);
        int start = 0;
        int end = arr.length - 1;

        // if pivot is -1,

        if (pivot == -1) {
            // the array is not rotated, perform a regular binary search
            return binarySearch(arr, target);
        } else {

            if (target >= arr[0] && target <= arr[pivot]) {
                // binary search in the left part
                end = pivot;

                while (start <= end) {
                    int mid = start + (end - start) / 2;

                    if (arr[mid] == target) {
                        return mid;
                    } else if (arr[mid] < target) {
                        start = mid + 1;
                    } else {
                        end = mid - 1;
                    }
                }

            } else if (target >= arr[pivot + 1] && target <= arr[arr.length - 1]) {
                // binary search in the right part
                start = pivot + 1;

                while (start <= end) {
                    int mid = start + (end - start) / 2;

                    if (arr[mid] == target) {
                        return mid;
                    } else if (arr[mid] < target) {
                        start = mid + 1;
                    } else {
                        end = mid - 1;
                    }
                }
            } else {
                // target is not in the array
                return -1;
            }

        }
        return -1;
    }

    // Binaryy search for find the squeare root of a number

    static int squareRoot(int m) {
        if (m < 0) {
            throw new IllegalArgumentException("Input must be a non-negative integer.");
        }

        if (m == 0 || m == 1) {
            return m;
        }

        int start = 1;
        int end = m;
        int ans = 0;

        while (start <= end) {
            int mid = start + (end - start) / 2;

            // agar mid*mid == m, then ans = mid
            if (mid == m / mid) {
                return mid;
            } else if (mid < m / mid) {
                // agar mid*mid < m , then go right , and mid is potential ans
                ans = mid; // potential answer
                start = mid + 1; // go right
            } else {
                // agar mid*mid > m , then go left
                end = mid - 1; // go left
            }
        }
        return ans;
    }

    // get the perfect squeare root of a number with three decimal places

    static double perfectSquareRoot(double m) {
        double ans = squareRoot((int) m);

        double factor = 1;
        int totalDecimalPlaces = 3;

        // ek ek round mein ek ek karke factor 0.1, 0.01, 0.001 hoga . menas factor bar bar change hoga.
        for( int round = 1 ; round <= totalDecimalPlaces ; round++ ) {
            factor = factor / 10;

            for (int i = 1; i <= 9; i++) {
                // bar bar factot ko add karke check kiya jayega for possible ans. 9 bar add kiya ja raha hai for 0.1 to 0.9 ,
                double newAns = ans + factor ;

                if (newAns * newAns <= m) {
                    ans = newAns;
                } else {
                    break;
                }
            }

            System.out.println("ans after round " + round + " is : " + ans);
        }

        return ans;
    }

    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4, 4, 4, 4, 5, 6, 7, 8, 9 };
        int[] arr2 = { 0, 2, 5, 3, 1 };
        int[] arr3 = { 4, 6, 7, 0, 1, 2, 3 };
        System.out.println("the index of target is : " + binarySearch(arr, 2));
        System.out.println("the lower bound of target is : " + lowerBound(arr, 4));
        System.out.println("the upper bound of target is : " + upperBound(arr, 4));

        // find the total number of occurrences of target
        System.out.println(
                "the total number of occurrences of target is : " + (upperBound(arr, 10) - lowerBound(arr, 10)));

        System.out
                .println("the total number of occurrences of target is : " + (upperBound(arr, 4) - lowerBound(arr, 4)));

        // find the peak of a mountain array
        System.out.println("the peak of the mountain array is : " + findPeak(arr2));

        // find the pivot index of a rotated sorted array
        System.out.println("the pivot index of the rotated sorted array is : " + findPivot(arr3));

        // search in a rotated sorted array
        System.out
                .println("the index of target in the rotated sorted array is : " + searchInRoatedSortedArray(arr3, 0));

        // find the square root of a number
        System.out.println("the square root of the number is : " + squareRoot(56));
        // find the perfect square root of a number with three decimal places
        System.out.println("the perfect square root of the number is : " + perfectSquareRoot(56.0));
    }

}