// {
//   // destructuring
//   // in array
//   {
//     let [x, y, ...rest] = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10];
//     console.log(x, y, rest);
//   }
//   // in oobject
//   {
//     let obj = {
//       a: 1,
//       b: 3,
//     };

//     const { a, b } = obj;
//     console.log(a, b);
//   }
// }

{
  let sum = (a, b, c) => {
    return a + b + c;
  };

  let arr = [1, 2, 4];
  console.log(sum(arr[0], arr[1], arr[2]));
  console.log(sum(...arr)); // this is spread operator , means open the arr and take one by one value ,
}

// HOSTING :- if we use function or var at the end but console.log it or call it before , then in js it doesent through error , js will consider it at before of calling it , buts its dosnt work for function that stored as const or let , and also doesent work for const and let. 
