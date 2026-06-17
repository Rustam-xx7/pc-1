import java.util.Scanner;

public class test1 {

    public static void printString(String str) {
        int n = str.length();
        for (int i = 0; i <= n - 1; i++) {
            System.out.println(str.charAt(i));
        }
    }

    public static String reverse(String str) {
        char [] arr = str.toCharArray();
        char [] arr1 = new char[arr.length];
        for(int i = 0; i <= arr.length -1 ; i++){
            arr1[i] = arr[arr.length - 1 - i];
        }
        return(new String(arr1));
    }

    public static boolean isPalindrome(String str){
        String org = str;
        String rev = reverse(str);
        if(org.equalsIgnoreCase(rev)){
            return true;
        }
        else{
            return false;
        }
    }  

    public static void main(String[] args) {
        String name = "nooooN";
        // printString(name);
        System.out.println(reverse(name));
        System.out.println(isPalindrome(name));
    }
}