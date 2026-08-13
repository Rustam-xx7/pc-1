import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class q011 {

    // two sum problem

    static int[] findIndex(int arr[], int n) {
        int i = 0;
        while (i < arr.length - 1) {
            int j = i + 1;
            while (j < arr.length) {
                if (arr[i] + arr[j] == n) {
                    return new int[] { i, j };
                }
                j++;
            }
            i++;
        }
        return new int[] { -1, -1 };
    }

    // three sum problem

    static List<List<Integer>> threeSum(int arr[], int n) {
        Set<List<Integer>> result = new HashSet<>();
        for (int i = 0; i < arr.length - 2; i++) {
            for (int j = i + 1; j < arr.length - 1; j++) {
                for (int k = j + 1; k < arr.length; k++) {
                    if (arr[i] + arr[j] + arr[k] == n) {
                        List<Integer> temp = new ArrayList<>();
                        temp.add(i);
                        temp.add(j);
                        temp.add(k);
                        Collections.sort(temp);
                        result.add(temp);
                    }
                }
            }
        }
        return new ArrayList<>(result);
    }

    // Remove the duplicates from a sorted array

    static int removeDup(int[] nums) {
        int i = 0;
        int j = 1;
        int n = nums.length;

        while (j < n) {
            if (nums[i] == nums[j]) {
                j++;
            } else {
                i++;
                nums[i] = nums[j];
            }
        }

        return i + 1;
    }

    // First repeating number

    static int findFirstRepeat(int[] arr) {
        HashMap<Integer, Integer> freq = new HashMap<>();

        // freq store
        for (int num : arr) {
            freq.put(num, freq.getOrDefault(num, 0) + 1);
        }

        for (int i : arr) {
            if (freq.get(i) > 1) {
                return i;
            }
        }

        return -1;
    }

    // Find the pivot index in a array .

    static int pivotIndex(int[] arr) {
        int n = arr.length;
        int leftSum[] = new int[n];
        int rightSum[] = new int[n];
        leftSum[0] = arr[0];
        rightSum[n - 1] = arr[n - 1];

        for (int i = 1; i < n; i++) {
            leftSum[i] = leftSum[i - 1] + arr[i];
            rightSum[n - i - 1] = rightSum[n - i] + arr[n - 1 - i];
        }

        for (int i = 0; i < n; i++) {
            if (leftSum[i] == rightSum[i]) {
                return i;
            }
        }

        return -1;
    }

    // Find the missing element in an array . 1-n number

    static List<Integer> findDisappearedNumbers(int[] nums) {
        // marking

        int n = nums.length;
        for (int i = 0; i < n; i++) {
            int index = Math.abs(nums[i]) - 1;
            if (nums[index] > 0) {
                nums[index] = -nums[index];
            }
        }

        // travel array, and find for the positive value .
        List<Integer> result = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            if (nums[i] > 0) {
                result.add(i + 1);
            }
        }
        return result;
    }

    public static void main(String[] args) {
        int arr[] = { 2, 1, 3, 4, 5 };
        int nums[] = { 2, 1, 3, 5, 4, 7, 6, 8, 9 };
        int nums2[] = { 1, 1, 1, 2, 2, 4, 4, 4, 6, 6, 7, 8, 8, 9 };
        int nums3[] = { 1, 5, 2, 7, 9, 3, 5, 3, 4, 6 };
        int nums4[] = { 1, 7, 3, 6, 5, 6 };
        int nums5[] = { 1, 4, 4, 5, 2, 2 };

        int[] result = findIndex(arr, 6);
        System.out.println("Indices: " + result[0] + ", " + result[1]);

        List<List<Integer>> result3sum = threeSum(nums, 15);
        System.out.println("Indices: " + result3sum.get(0).get(0) + ", " + result3sum.get(0).get(1) + ", "
                + result3sum.get(0).get(2));

        System.out.println("Length of the unique value array : " + removeDup(nums2));

        System.out.println("First repeated number in the array nums3 is : " + findFirstRepeat(nums3));

        System.out.println("the pivot index for the num4 is : " + pivotIndex(nums4));

        System.out.println("Missing numbers in the array nums5 are : " + findDisappearedNumbers(nums5));
    }
}