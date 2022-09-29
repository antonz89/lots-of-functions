/* sayHi
Write a function called sayHi that takes in a name string 
and adds "Hi, " before the name. Return the newly modified string.
*/

function sayHi(name){
    let newStr = `Hi, ${name}`
    return newStr;
}

console.log(sayHi("Anton"));

////---------------------------------------------------------------

/* bigString
Write a function called bigString that takes in 2 strings and returns which one is bigger. 
If the strings are equal in size, tell the user and prints both. */



// let str1 = "qqqq"
// let str2 = "zzzz"
//    or

// function bigString(str,str){
    
//     if(str1.length>str2.length){
//         return str1;
//     } else if (str2.length>str1.length){
//         return str2;
//     } else {
//         return("String1 is equal in length to String2");
//     }

// }

// console.log(bigString(str1,str2));
// or
// console.log(bigString("qqq","zzz"));

////---------------------------------------------------------------

/* bigNumber
Write a function called bigNumber that takes in 2 numbers and returns which one is greater. 
If the numbers are equal tell the user.
*/


// function bigNumber(num1,num2){
//     if(num1>num2){
//         return num1;
//     } else if (num2>num1){
//         return num2;
//     } else {
//         return("Number1 is equal to Number2");
//     }
// }
// console.log(bigNumber(6,5));


////---------------------------------------------------------------
/* Write a function called fiveMore that takes in an array of numbers and adds 5 to each odd number 
then returns the updated array.*/

// function fiveMore(array){
//     let newArray = [];

//     for (let i = 0; i<array.length; i++){
        
//         if (array[i]%2!==0){
//             newArray[i] = array[i] + 5;
//          } else {
//             newArray[i]= array[i];
//          }   
//     }
//         return newArray;
// }


// console.log(fiveMore([1,2,3,4,5,6,7,8]));

////---------------------------------------------------------------
/* Write a function called arraySummer that takes in an array of numbers and adds each number in 
   the array together. Return the total.*/

//    function arraySummer(array){
//         let sum = 0;
//         let total = 0;
//     for (let i = 0; i<array.length; i++){
//         sum = array[i];
//         total = total + sum;   
//     }
//         return total;
//    }
    
// let x = [1,1,1,1,1];
// console.log(arraySummer(x));


////---------------------------------------------------------------
/* Write a function called everyDivisible that takes in a number n that is less than 10 and 
   then prints every number less than or equal to 100 that is divisible that number n.*/

//    function everyDivisible(n){
//     for (i = 1; i<=100; i++){
//         if(i%n===0){
//         console.log((i));
//         }
//     }
//     }

//    console.log(everyDivisible(8))












