//RECURSION

package Recursn;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

public class q001 {

    // find the power of 2

    static int powerOf2(int n) {
        if (n == 0) {
            return 1;
        }

        return 2 * powerOf2(n - 1);
    }

    // FIBONACCI SERIES
    // f(n) = f(n-1) + f(n-2)
    static int fib(int n) {
        if (n == 0) {
            return 0;
        }
        if (n == 1) {
            return 1;
        }
        // recursion

        int ans = fib(n - 1) + fib(n - 2);

        return ans;
    }

    // climbing stairs problem,
    // their are two ways to climb the stairs , either 1 step or 2 step at a time
    // if i am on Nth step , then hoy (n-1)th step theke esechi oderwise (n-2)th
    // step theke esechi
    // means f(n) = f(n-1) + f(n-2)

    static int climbStairs(int n) {
        if (n == 1) {
            return 1;
        }
        if (n == 2) {
            return 2;
        }

        int ans = climbStairs(n - 1) + climbStairs(n - 2);
        return ans;
    }

    static void print(int arr[], int i) {
        if (i >= arr.length) {
            return;
        }
        print(arr, (i + 1));
        System.out.println(arr[i] + " ");
    }

    // find the max eliment in an array with recurstion
    static void findMax(int arr[], int i, int max) {
        // base case
        if (i >= arr.length) {
            System.out.println("The max eliment is : " + max);
            return;
        }

        // processing
        if (arr[i] > max) {
            max = arr[i];
        }

        // rc
        findMax(arr, i + 1, max);
    }

    // linear search on a array by recursion
    static void linearSearch(int[] arr, int i, int target) {
        // Base case
        if (i >= arr.length) {
            System.out.println("Ther target is not present in the array.");
            return;
        }

        // Process
        if (arr[i] == target) {
            System.out.println("Ther integer of the " + target + " is : " + i);
            return;
        }

        // rc
        linearSearch(arr, i + 1, target);
    }

    // Print the digits with the help of recursion
    static void printDigits(int n) {
        // base case
        if (n == 0) {
            System.out.println("");
            return;
        }

        // RC for n

        // devide by 10 korle last digit remove hoye jabe
        printDigits(n / 10);

        // Process

        // %10 korle last digit return pabo,
        int digit = n % 10;
        System.out.println(digit + " ");
    }

    // Binary search using recursion
    static int binarySearch(int[] arr, int s, int e, int target) {
        // Base case
        if (s > e) {
            return -1;
        }

        // process
        int mid = s + (e - s) / 2;

        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] > target) {
            // move left
            e = mid - 1;
        } else {
            s = mid + 1;
        }

        // RC
        int ans = binarySearch(arr, s, e, target);

        return ans;
    }

    // subsequence of the string

    static void getAllSubsequences(String s, int index, StringBuilder output, List<String> ans) {
        if (index >= s.length()) {
            ans.add(output.toString());
            return;
        }

        char ch = s.charAt(index);

        // Include current character
        output.append(ch);
        getAllSubsequences(s, index + 1, output, ans);

        // Backtrack
        output.deleteCharAt(output.length() - 1);

        // Exclude current character
        getAllSubsequences(s, index + 1, output, ans);
    }

    static List<String> powerSet(String s) {
        List<String> ans = new ArrayList<>();
        StringBuilder output = new StringBuilder();
        int index = 0;

        getAllSubsequences(s, index, output, ans);
        Collections.sort(ans);
        return ans;
    }

    //Hourse robber problem : if you rob a house you cant rob the adjacent house
    // [2,7,9,3,1] ,, let say this are the house and the values are the cash stored in the house 
    // main idea plot the hole secanrio using recursion
    // we have to options 1: include the house in robbed, 2: exclude the house in robbed

    static int robbed(int[] nums, int index){
        //Basecase
        // if the index go out the array
        if(index >= nums.length){
            return 0;
        }

        //Process
        // im on the current index house , 

        // if i include the hosue then , add the value and again go for the next house (index+2) and add that next psoibility too
        int included = nums[index] + robbed(nums, index+2);
        
        // if esclude the house then add 0 from that hosue and also add the furthur outcomes from the index+1
        int excluded = 0 + robbed(nums, index+1);

        // now return the max value from these 
        int finalAns = Math.max(included, excluded);
        
        return finalAns;
    }

    static int rob(int[] nums) {
        int index = 0;
        int ans = robbed(nums, index);
        return ans;
    }

    // Coin change problem 2. 

    static int ways(int amount, int[] coins, int index){
        // base case
        if(amount == 0){
            return 1;
        }

        if(amount < 0){
            return 0;
        }

        if(index >= coins.length){
            return 0;
        }

        // let say the coin is 5 and the amount is 40 then
        // 5 ke coin ko include kiya to amount 35 ho jayega and coin vapas same use ho sakta hai
        
        int includeAns = ways(amount - coins[index], coins, index);

        // agar currenct coin ko use nahi kiya then , amount change nahi hoga but coin next coin pe chala jayega

        int excludeAns = ways(amount, coins, index + 1);

        int finalAns = includeAns + excludeAns;
        return finalAns;

    }

    static int change(int amount, int[] coins) {
        int index = 0;
        int ans = ways(amount, coins, index);
        return ans;
    }

    // Coin Change problem 1.

    static int numofCoin(int[] coins, int amount){
        //basecase
        if(amount == 0) {
            return 0;
        }
        if(amount < 0){
            // if the amount is invalid then return the coin number max value so that it cant be change after adding 1 too
            return Integer.MAX_VALUE;
        }

        int mini = Integer.MAX_VALUE;

        // ek amoun ayega , uspe ek ek karke sare coins use karke dekhunga and then jo amoun milega uspe firse recurcive call marunga ,
        // recurcive call se jo bhi ans ayega ,uske pehle ek coin already use kiya hai so ans mein +1 karke return karunga , 
        // harbar mini ke sath compare karunga ans milne ke baad
        for(int coin: coins){
            // mere pass ek coin mil gaya , ab usko use karna hai pehle
            int recursionAns = numofCoin(coins, amount - coin);
            // agar amount - karne ke baad invalid hua then max vlaue return hoga , if not then add 1 and compare with mini
            if(recursionAns != Integer.MAX_VALUE){
                int totalCoinUsed = recursionAns + 1;
                mini = Math.min(mini, totalCoinUsed);
            }
        }

        return mini;
    }

    static int change2(int[] coins, int amount){
        int ans = numofCoin(coins, amount);
        if(ans == Integer.MAX_VALUE){
            return -1;
        }
        return ans;
    }

    //MINIMIZE THE DIFFERNECE BETWEEN TAREGT AND CHOSEN ELEMENTS
    // 2D array , select one element from each row , do sum , find the absolute min diff with the target

    static int findAbsDiffRec(int[][] mat,  int sum , int row, int target ){
        // Basecase  : when the row >= mat.length , then return | target - sum | ,
        if( row >= mat.length){
            // row is invalid , we got the every element sum from the every row
            return Math.abs(target - sum); 
        }

        // ek row ke har ek element pe check karenge , har eliment ke regards ans ayega usko mini ke sath compare karke store karlenge min ko
        int mini = Integer.MAX_VALUE;

        for(int val: mat[row]){
            int recAns = findAbsDiffRec(mat, sum + val, row + 1, target);
            mini = Math.min(recAns, mini);
        }

        // ek row ke har element ke ragrding check hoke min diff agaya mini pe
        return mini;

    }

    static int findAbsDiff(int[][] mat, int target){
        int sum = 0;
        int row = 0;
        int ans = findAbsDiffRec(mat, sum , row , target );
        return ans;
    }

    //Devide a array in two parts , if the sum of the elements of each part is equal then return true otherwise return false.

    static boolean solveDivideInTwo(int[] nums, int sum , int totalSum ,int index){
        // Basecase:
        if(sum == totalSum){

            return true;
        }
        // agar invalid index tk pohoch gaya and sum and totalsum same nahi hua then false
        if(index >= nums.length){
            return false;
        }

        boolean includeAns = solveDivideInTwo(nums, sum + nums[index], totalSum - nums[index], index + 1);
        boolean excludeAns = solveDivideInTwo(nums, sum, totalSum, index + 1);

        if(includeAns || excludeAns){
            return true;
        } else {
            return false;
        }
    }

    static boolean divideInTwo(int[] nums){
        int sum = 0;
        int totalSum = 0;
        for(int num : nums){
            totalSum = totalSum + num;
        }
        int index = 0;

        boolean ans = solveDivideInTwo(nums, sum , totalSum, index);

        return ans;
    }

    public static void main(String[] args) {
        // power of 2
        System.out.println(powerOf2(5));

        // find the fibonacci number of 4th term
        System.out.println("fibonacci number of 4th term: " + fib(4));

        // find how many possible way to climb 5th step ,
        System.out.println("the number of possible ways to climb 5th step is : " + climbStairs(5));

        // Print an array with the help of recursion
        int[] arr = { 1, 2, 3, 4, 5, 6, 7 };
        // print(arr, 0);

        // find max eliment with recursion
        int[] arr2 = { 1, 4, 2, 5, 8, 3, 6, 7 };
        int maxi = Integer.MIN_VALUE;
        findMax(arr2, 0, maxi);

        // Linear Search by Recursion
        linearSearch(arr2, 0, 9);

        // Print the digits using recursion
        printDigits(420);

        // Binary Search using recursion
        int[] arr3 = { 10, 20, 30, 40, 50, 6, 70, 80, 90 };

        System.out.println("The index of the 40 is : " + binarySearch(arr3, 0, (arr3.length - 1), 40));

        //coin change problem

        // problem 2
        int[] coins = {1,2,5};
        System.out.println("The possible ways to get the amount 5 with the coins are : " + change(5, coins));

        //problem 1
        System.out.println("Minimum number of coin required to achive the amount 11 is : " + change2(coins, 11) );

        // MINIMIZE THE DIFFERENCE BETWEEN TARGET AND THE SUM OF CHOSEN ELEMENT FROM EACH ROW
        int[][] mat = {{1,2,3}, {4,5,6},{7,8,9}};
        System.out.println("The min difference between 13 and elements from each row of mat is : " + findAbsDiff(mat, 13));

        // Divide the array in two parts , sum of elements of each part same then return true other wise return false
        int[] nums = {1,5,11,5};
        System.out.println("The array nums can be divide into same two parts : " + divideInTwo(nums));
    }
}