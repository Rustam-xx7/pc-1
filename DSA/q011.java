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

    // Find the subarray with the largest sum and return its sum. (Kadane's
    // algorithm)

    static int maxSubArray(int[] nums) {
        int sum = 0;
        int max = Integer.MIN_VALUE;

        for (int i = 0; i < nums.length; i++) {
            sum += nums[i];
            if (sum > max) {
                max = sum;
            }
            if (sum < 0) {
                sum = 0;
            }
        }
        return max;
    }

    // transpose of a 2D matrix

    static int[][] transpose(int[][] matrix) {

        if (matrix.length == 0 || matrix == null) {
            return new int[0][0];
        }

        // original matrix
        int m = matrix.length;
        int n = matrix[0].length;

        // for new matrix
        int[][] transposedMatrix = new int[n][m];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                transposedMatrix[j][i] = matrix[i][j];
            }
        }
        return transposedMatrix;
    }

    // Rotate a 2D matrix by 90 degrees clockwise

    static int[][] rotate(int[][] matrix) {

        if (matrix.length == 0 || matrix == null) {
            return new int[0][0];
        }

        int i = matrix.length;
        int j = matrix[0].length;

        int[][] rotatedMatrix = new int[j][i];

        for (int y = 0; y < j; y++) {
            for (int x = 0; x < i; x++) {
                rotatedMatrix[y][i - x - 1] = matrix[x][y];
            }
        }

        return rotatedMatrix;

    }

    // spiral print of a 2D matrix

    static List<Integer> spiralPrint(int[][] matrix) {

        List<Integer> result = new ArrayList<>();

        int m = matrix.length;
        int n = matrix[0].length;

        int startingRow = 0;
        int startingCol = 0;
        int endingRow = m - 1;
        int endingCol = n - 1;

        while (startingRow <= endingRow && startingCol <= endingCol) {
            // starting row , left to right
            for (int j = startingCol; j <= endingCol; j++) {
                result.add(matrix[startingRow][j]);
            }
            startingRow++;

            // ending col , top to bottom
            for (int i = startingRow; i <= endingRow; i++) {
                result.add(matrix[i][endingCol]);
            }
            endingCol--;

            // ending row , right to left
            if (startingRow <= endingRow) {
                for (int j = endingCol; j >= startingCol; j--) {
                    result.add(matrix[endingRow][j]);
                }
            }

            endingRow--;

            // starting col , bottom to top
            if (startingCol <= endingCol) {

                for (int i = endingRow; i >= startingRow; i--) {
                    result.add(matrix[i][startingCol]);
                }
                startingCol++;
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
        int nums6[] = { -2, 1, -3, 4, -1, 2, 1, -5, 4 };

        int[][] matrix = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };
        int[][] transposedMatrix = transpose(matrix);

        int[] result = findIndex(arr, 6);
        System.out.println("Indices: " + result[0] + ", " + result[1]);

        List<List<Integer>> result3sum = threeSum(nums, 15);
        System.out.println("Indices: " + result3sum.get(0).get(0) + ", " + result3sum.get(0).get(1) + ", "
                + result3sum.get(0).get(2));

        System.out.println("Length of the unique value array : " + removeDup(nums2));

        System.out.println("First repeated number in the array nums3 is : " + findFirstRepeat(nums3));

        System.out.println("the pivot index for the num4 is : " + pivotIndex(nums4));

        System.out.println("Missing numbers in the array nums5 are : " + findDisappearedNumbers(nums5));

        System.out.println("Maximum sum of subarray in nums6 is : " + maxSubArray(nums6));

        System.out.println("Transposed matrix: ");
        for (int i = 0; i < transposedMatrix.length; i++) {
            for (int j = 0; j < transposedMatrix[0].length; j++) {
                System.out.print(transposedMatrix[i][j] + " ");
            }
            System.out.println();
        }

        System.out.println("Rotated matrix: ");
        int[][] rotatedMatrix = rotate(matrix);
        for (int i = 0; i < rotatedMatrix.length; i++) {
            for (int j = 0; j < rotatedMatrix[0].length; j++) {
                System.out.print(rotatedMatrix[i][j] + " ");
            }
            System.out.println();
        }

        System.out.println("Spiral print of the matrix: " + spiralPrint(matrix));
    }
}