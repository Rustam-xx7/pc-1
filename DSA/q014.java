// Binary search
public class q014 {

    // Find SIngle non-duplicate element

    static int singleNonDuplicate(int[] nums) {
        int n = nums.length;
        // binary search lagabo puro array te
        // [0,1,2,3,4,5,6,7,8,9,10]
        // [2,2,3,3,4,4,5,6,6,7,7] ,

        int s = 0;
        int e = n - 1;

        while (s <= e) {
            int mid = s + (e - s) / 2;

            // if there is a single element then that only number is the ans

            if (s == e) {
                return nums[s];
            }

            // jei number ta single tar ager sob pair gulor s= even , e= odd.
            // then move right
            // single number tar por theke sob pair gulor s = odd , e = even.
            // then move left

            int currentValue = nums[mid];

            int previousValue = -1;
            if (mid - 1 >= 0) {
                previousValue = nums[mid - 1];

            }

            int nextValue = -1;
            if (mid + 1 < n) {
                nextValue = nums[mid + 1];
            }

            // check if mid is an ans
            if (currentValue != previousValue && currentValue != nextValue) {
                return currentValue;
            } else {

                if (currentValue != previousValue && currentValue == nextValue) {
                    // pair ka first index is mid.
                    if ((mid & 1) == 1) {
                        // mid is odd , first element index is odd
                        // move left
                        e = mid - 1;
                    } else {
                        // mid is even , first element index is even
                        // move right
                        s = mid + 1;
                    }
                }

                if (currentValue == previousValue && currentValue != nextValue) {
                    // now the mid is the ending index of the pair.
                    if ((mid & 1) == 1) {
                        // ending index of the pair is odd
                        // move to right
                        s = mid + 1;
                    } else {
                        // ending index of the pair is even
                        // move to left
                        e = mid - 1;
                    }
                }
            }
        }

        return -1;
    }

    // binary search in a 2D array
    // conditions are every rows and every colums are shorted , but not the first
    // element of each row is greater than the last element of the previous rowa

    static boolean searchMatrix(int[][] matrix, int target) {
        int totalRows = matrix.length;
        int totalColms = matrix[0].length;

        // brooteforce process use korte hobe , 
        // to get lower move to left , and to get higher value move down
        // start from the top right corner 

        int sRow = 0;
        int sCol = totalColms - 1;
        while(sRow < totalRows && sCol >= 0 ){
            int s = matrix[sRow][sCol];

            if(s == target){
                return true;
            } else if (s > target) {
                // i want lower value
                // move left
                sCol--;
            } else {
                //i want heigher value
                // move down
                sRow++;
            }
        }

        return false;

    }

    // row with max 1's
    static int findMax1row (int[][] matrix) {
        int totalRow = matrix.length;
        int totalCol = matrix[0].length;

        int minCol = totalCol - 1;
        int ansRow = -1;

        // travarce through row
        for(int i = 0; i < totalRow ; i++){
            int s = 0;
            int e = totalCol - 1;

            // binary search for 1's
            while(s <= e) {
                int mid = s + (e - s) / 2;
                // if the mid = 1 then move to left
                if(matrix[i][mid] == 1) {
                    // check if the mid is less than minCol
                    if(mid < minCol) { 
                        // store that min col and also the row
                        minCol = mid;
                        ansRow = i;
                    }
                    // move left
                    e = mid - 1;
                } else {
                    // if that number on mid is 0
                    // move right
                    s = mid + 1;
                }
            }
        }

        return ansRow;
    }

    public static void main(String[] args) {
        int[] nums = { 10, 10, 20, 20, 30, 40, 40, 50, 50, 60, 60 };

        System.out.println("The single element in the array is : " + singleNonDuplicate(nums));

        // search in a 2D array
        int[][] matrix = {{1,4,7,11,15}, {2,5,8,12,19}, {3,6,9,16,22}, {10,13,14,17,24}, {18,21,23,26,30}};

        System.out.println("search the element 17 , return true or false : " + searchMatrix(matrix, 50));

        // find the row have max number of 1's
        int[][] matrix2 = {{0,0,0,1}, {0,0,1,1}, {0,1,1,1}, {1,1,1,1}};

        System.out.println("Find the row which have max 1's : " + findMax1row(matrix2));

    }
}
