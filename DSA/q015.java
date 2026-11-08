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

    // there is two string s1 and s2 , we have to check if s2 has any permutation of s1 or not. return true or false.

    // to compare thre freq tables
    static boolean compareFreq(int[] count1, int[] count2) {
        for( int i = 0; i < 26; i++){
            if(count1[i] != count2[i]){
                return false;
            }
        }

        return true;
    }

    static boolean checkInclusion(String s1, String s2) {
        // basic check for that s2 contains all the char of s1
        if(s1.length() > s2.length()) {
            return false;
        }

        // s1 er freq table ready korte hobe
        int count1[] = new int[26];
        for(int i = 0; i < s1.length(); i++){
            char ch = s1.charAt(i);
            int index = ch - 'a';
            count1[index]++; 
        }

        // start the window index
        int iw = 0;
        int windowLength = s1.length();
        int count2[] = new int[26];

        //first window freq table
        for(iw = 0; iw < windowLength; iw++) {
            char ch = s2.charAt(iw);
            int index = ch - 'a';
            count2[index]++;
        }

        if(compareFreq(count1, count2) == true) {
            return true;
        } else {
            // both the freq tables are diff
            // process for the remaining windows
            while(iw < s2.length()){
                // iw is already on the new char just after the window ,
                // add the new char
                char ch = s2.charAt(iw);
                int newIndex = ch - 'a';
                count2[newIndex]++;
                // remove the old char
                int oldCharIndex = iw - windowLength;
                char oldCh = s2.charAt(oldCharIndex);
                int oldIndex = oldCh - 'a';
                count2[oldIndex]--;
                // again compare the count1 and count2
                if(compareFreq(count1, count2)){
                    return true;
                } else {
                    iw++;
                }
            }
        }

        return false;
    }

    public static void main(String[] args) {
        // reverse the string word by word
        String s = "the sky is blue  ";
        System.out.println(" the word wise reverse of the string s is : " + reverseWords(s));

        //remove the part string from the main string
        String s2m = "abxabyabzababw"; // main string
        String s2p = "ab"; // part string 
        System.out.println(removePartString(s2m, s2p));

        // check for any permutation fo s1 present in s2 or not
        String s1 = "ab";
        String s2 = "eidbaooo";
        System.out.println("any permutation of s1 is present in s2 : " + checkInclusion(s1, s2));

    }
}
