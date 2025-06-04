string

{
let str = "rustam.";
console.log(str);
console.log("str 2nd position value is= ",str[2]);
console.log("string length is " ,str.length);

// Template Literals , it is a special type of string ,
// er modhhei expration add kora jabe .
let obj = {
    item :"pen" ,
    price : 10,
} ;
console.log(`The price of ${obj.item} is ${obj.price} rupees.`);
console.log(`1 + 2 + 3 = ${1 + 2 + 3}`);

// string methods
let str1 = "  rustam \t Chakraborty     ";
console.log(str1);
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.trim());
console.log(str1.trimRight());
let str2= "Dipayan ";
let str3 = "Chakraborty ";
console.log( str2 + str3 );
console.log( str2.concat(str3) );
console.log( str2.slice(1,5) );// ending position is optional, and exclusive .
let str4 = "hello lo";
console.log(str4.replace("lo", "p"));
console.log(str4.charAt(1).toUpperCase());

// genate a user name .
{
    let userinput = prompt("Enter ypur name without space : ");
    console.log (`Your user name is @${userinput.toLowerCase() + userinput.length} .`);
}
}

// Arrays .

{
    let arr = ["rustam", "bla","bla2","bla3","bla4"];
    console.log(arr);
    console.log("type of arr is = ", typeof arr);
    arr[2] = "hello"; // array can change .
    console.log(arr);  
    // for loop 
    for (let i =0 ; i < arr.length ; i++ ){
        console.log(arr[i]);
    }
    // for of loop
    for(let element of arr){
        console.log(element.toUpperCase());
    }

    // calculate a average marks from and array .
    {
        let marks = [ 85,97,44,37,76,60];
        let sum =0;
        for(let mark of marks){
            console.log(mark);
            sum += mark;
        }
        console.log(` The average is = ${sum/marks.length}`);
    }

    // apply 10% off and restore in array. 
    {
        let price = [250,645,300,900.50];
        for (let i=0; i< price.length;i++){
            console.log(`before offer price is : ${price[i]}`);
            price[i] -= price[i] * 0.1;
            console.log(`After 10% discount : ${price[i]}`);
        }
    }

    // array methods .
    {
        let arr = ["rustam", "bla","bla2","bla3","bla4"];
        console.log(arr);
        arr.push("Dipayan","guddu","laddu");// to add at the end .
        console.log(arr);
        let deleted = arr.pop();// to remove from the end .
        console.log(arr);
        console.log("deleted item is", deleted);
        console.log(arr.toString()); // to convert the array to a string. it doesn't change the original array.
        let arr1 = ["iron man","thor","hulk","thanos","lokey"];
        let arr2 = ["super man","bat man "];
        let arr3 = ["wong","doc strange"]
        let heros = arr1.concat(arr2, arr3);
        console.log(heros);
        arr1.unshift("ant man"); // to add somethings to the first.
        console.log(arr1);
        console.log("Dleted by using shift is =",arr1.shift()); // to remove something from the first.
        console.log(arr1.slice(1,3)); // to get a part of the array. ending is exclusive.
        console.log(arr1.splice(2,2,"captain america","black widow")); // to remove and add something in the array.(starting position, how many to remove, what to add).
        console.log(arr1); // new array.
    }                                                          
}


