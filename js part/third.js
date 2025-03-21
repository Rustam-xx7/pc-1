// Function. 

{
    // sum funtion
    function sum( a ,b ) {
        return a + b;
    }
    console.log(sum(5, 6)); // 11 normaly function and calling of function.

    //function of Mordan Javascript.
    const newSum = (a , b) =>{ //arrow method for fntion.
        console.log(a + b);
    }
    // so newSum is the fnction now.
    newSum(5, 6); // 11 arrow method and calling of function.
    // arrow func for multiplication
    const arrowmult = (a, b) =>{ // arrowmult is a variable in which a function is stored.
        return a * b;
    }
    console.log(arrowmult(5,6)); // 30

}
// function to count voules.
{
    function countVowels(str){
        let count = 0;
        for(const letter of str.toLowerCase()){
            if( letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
                count++;
            }
        }
        console.log(count);
    }
    countVowels("abcdeoi"); // 4
}