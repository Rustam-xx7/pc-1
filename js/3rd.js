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

// forEach method , works for array , use funtion on each value in each index .

{
    let arr = [1 ,2 ,3 ,4 ,5 ,"burdwan", " kolkata"] ;
    arr.forEach((val, idx , arr) => { // using arrow function , val is parameter taking each value from index. this function is called call back funtion .
        console.log(val*val, idx , arr);
    });

    // Higher order function or Higher order methods => the function which either take another func as a param or return another func as a output. eg > arr.forEach(callBackFunction)
}

// map method , same like forEach , but it gives a new array . 
{
    let arr = [ 22,33 ,44 ,55];
    let newArr = arr.map((val) =>{
       return val * 2;
    });
    console.log(newArr);
}

// filter method 
{
    let arr =[ 1,2,3,4,5,6,7,8];
    let evenArr = arr.filter((val) => {
        return val % 2 === 0 ;
    });
    console.log(evenArr); // 2,4,6,8
}

// reduce method. uses first two valus from arr as result and current value , dutor modhe kaj hoye result a asbe and then current value tar porer tay jabe , then same ... uses when output aktai value hoy .

// let calculate some .
{
    let arr = [ 1,2,3,4,5];
    
    let output = arr.reduce((result , current) => {
        return result + current ;
    });

    console.log(output);
}
// take a n value from user , creat a array from 1 to n , calculate sum, and product of all numbers .
{
    let n = prompt("Enter a number :");
    let arr = [];
    for( let i = 1; i<=n ; i++){
        arr[i-1] = i;
    }
    console.log(arr);
    let sum = arr.reduce((res, curr) =>{
        return res + curr ; 
    });
    console.log(`The sum of all numbers is ${sum}.`);
    let product = arr.reduce((res, curr) => {
        return res * curr ;
    });
    console.log(`The sum of all numbers is ${product}.`);
}