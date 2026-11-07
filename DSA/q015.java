// STRINGS

public class q015 {

    // we have a string as input , we have to reverse that word wise.

    static String reverseWords(String s) {
        StringBuilder ans = new StringBuilder();
        int i = s.length() - 1;

        // algo
        while (i >= 0) {
            // remove all the trailing spaces
            while (i >= 0 && s.charAt(i) == ' ') {
                i--;
            }
            // now i will stop on a alphabate from the last

            // check the value of i so that it should be on the string
            if (i < 0) {
                break;
            }

            int j = i;
            // now i and j both are on the end index of the word , move the j to the start
            // index of the word ,
            // move the j left till its on a alphabate

            while (j >= 0 && s.charAt(j) != ' ') {
                j--;
            }
            // now j is on the left space of the word
            // add the word whose index are from j+1 to i+1
            ans.append(s.substring(j + 1, i + 1)); // end index will be excluded

            // move the j to the next word's last index
            while (j >= 0 && s.charAt(j) == ' ') {
                j--;
            }

            // j < 0 ,, that means we was on first word ,
            if (j >= 0) {
                // now the j is on the next char last index , add a space in the ans
                ans.append(' ');
            }
            // if the j is < 0 then bring i on that ,<0 and the loop will be break
            i = j;

        }

        return ans.toString();
    }

    // retrun the highest repeating alphabate from a string

    static char getMaxOccuringChar ( String s) {
        int [] freq = new int[26]; // take a 26 length array which represent all the alphabates

        // traverce over the string and update the freq of that char by +1
        for(int i = 0; i < s.length() ; i++) {
            char currentChar = s.charAt(i);
            freq[currentChar - 'a']++;
        }

        int maxFrq = -1;
        char ans = 'a';

        // traverce over the alphabate array and find the max occr character
        for (int i = 0; i < freq.length; i++){
            if(freq[i] > maxFrq) {
                maxFrq = freq[i];
                ans = (char)(i + 'a');
            }
        }

        return ans;
    }

    // we have a main string and a part string , remove the all occurance of the part string from the main string

    static String removePartString (String s, String p){
        // jb tk part exist karta hai do the same 
         while(s.contains(p)){
            // serch for the part in side s
            int index = s.indexOf(p);
            // create a new string by merging the left and right part of the string 
            s = s.substring(0, index) + s.substring(index + p.length());
         }

         return s;
    }

    public static void main(String[] args) {
        // reverse the string word by word
        String s = "the sky is blue  ";
        System.out.println(" the word wise reverse of the string s is : " + reverseWords(s));

        //remove the part string from the main string
        String s2 = "abxabyabzababw"; // main string
        String s2p = "ab"; // part string 
        System.out.println(removePartString(s2, s2p));

    }
}
