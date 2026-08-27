
// SORTING ALGORITHMS 

public class q012 {

    // Bubble sort
    static void bubbleSort(int arr[]) {
        int n = arr.length;

        for(int i = 0; i < n-1 ; i++) {
            for(int j = 0; j < n - 1 - i ; j++) {
                if(arr[j] > arr[j + 1]){
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    // Selection Sort

    static void selectionSort(int arr[]) {
        int n = arr.length;
        //outer loop for rounds
        for(int i = 0; i < n - 1; i++) {
            int minIndex = i ;
            // inner loop for comparisation
            for(int j = i + 1 ; j < n ; j++) {
                if(arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            // Swap the minimum element with the first element
            int temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    //Insertion Sort

    static void insertionSort(int arr[]) {
        int n = arr.length;
        for(int i = 1; i < n; i++) {
            int curr = i;
            int prev = i - 1;
            int currValue = arr[curr];

            // shifting of the prev
            while (prev >= 0 && currValue < arr[prev]) {
                arr[prev + 1] = arr[prev];
                prev--;
            }

            // place the current value
            arr[prev + 1] = currValue;
        }
    }

    //Print the array
    static void printArray(int arr[]) {
        for(int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }

    public static void main(String[] args) {

        int arr[] = { 2, 1, 3, 5, 4 };
        // bubbleSort(arr);
        // selectionSort(arr);
        insertionSort(arr);
        printArray(arr);
        
    }
}
